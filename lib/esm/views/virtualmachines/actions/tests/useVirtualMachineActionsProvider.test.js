var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { cleanup } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import useVirtualMachineActionsProvider from '../hooks/useVirtualMachineActionsProvider';
import { exampleRunningVirtualMachine } from './mocks';
jest.mock('@openshift-console/dynamic-plugin-sdk', function () { return ({
    useK8sModel: jest.fn(function () { return [[], true]; }),
    useK8sWatchResource: jest.fn(function () { return [[], true]; }),
}); });
afterEach(cleanup);
describe('useVirtualMachineActionsProvider tests', function () {
    it('Test running VM actions', function () {
        var result = renderHook(function () {
            return useVirtualMachineActionsProvider(exampleRunningVirtualMachine);
        }).result;
        // expect(result.current).toMatchSnapshot();
        var actions = result.current[0];
        var runningVMActions = actions.map(function (action) { return action.id; });
        // Running vm should have stop, restart, pause, migrate and delete actions
        expect(runningVMActions).toEqual([
            'vm-action-stop',
            'vm-action-restart',
            'vm-action-pause',
            'vm-action-clone',
            'vm-action-snapshot',
            'vm-action-migrate',
            'vm-action-copy-ssh',
            'vm-action-edit-labels',
            'vm-action-edit-annotations',
            'vm-action-delete',
        ]);
    });
    it('Test stopped VM actions', function () {
        var stoppedVM = __assign(__assign({}, exampleRunningVirtualMachine), { status: { printableStatus: 'Stopped' } });
        var result = renderHook(function () { return useVirtualMachineActionsProvider(stoppedVM); }).result;
        var actions = result.current[0];
        var stoppedVMActions = actions.map(function (action) { return action.id; });
        // Stopped vm should have start, restart, pause, migrate and delete actions
        expect(stoppedVMActions).toEqual([
            'vm-action-start',
            'vm-action-restart',
            'vm-action-pause',
            'vm-action-clone',
            'vm-action-snapshot',
            'vm-action-migrate',
            'vm-action-copy-ssh',
            'vm-action-edit-labels',
            'vm-action-edit-annotations',
            'vm-action-delete',
        ]);
    });
    it('Test paused VM actions', function () {
        var pausedVM = __assign(__assign({}, exampleRunningVirtualMachine), { status: { printableStatus: 'Paused' } });
        var result = renderHook(function () { return useVirtualMachineActionsProvider(pausedVM); }).result;
        var actions = result.current[0];
        var pausedVMActions = actions.map(function (action) { return action.id; });
        // Paused vm should have stop, restart, unpause, migrate and delete actions
        expect(pausedVMActions).toEqual([
            'vm-action-stop',
            'vm-action-restart',
            'vm-action-unpause',
            'vm-action-clone',
            'vm-action-snapshot',
            'vm-action-migrate',
            'vm-action-copy-ssh',
            'vm-action-edit-labels',
            'vm-action-edit-annotations',
            'vm-action-delete',
        ]);
    });
    it('Test migrating VM actions', function () {
        var migratingVM = __assign(__assign({}, exampleRunningVirtualMachine), { status: { printableStatus: 'Migrating' } });
        var result = renderHook(function () { return useVirtualMachineActionsProvider(migratingVM); }).result;
        var actions = result.current[0];
        var migratingVMActions = actions.map(function (action) { return action.id; });
        // Migrating vm should have stop, restart, pause, migrate and delete actions
        expect(migratingVMActions).toEqual([
            'vm-action-stop',
            'vm-action-restart',
            'vm-action-pause',
            'vm-action-clone',
            'vm-action-snapshot',
            'vm-action-cancel-migrate',
            'vm-action-copy-ssh',
            'vm-action-edit-labels',
            'vm-action-edit-annotations',
            'vm-action-delete',
        ]);
    });
});
//# sourceMappingURL=useVirtualMachineActionsProvider.test.js.map