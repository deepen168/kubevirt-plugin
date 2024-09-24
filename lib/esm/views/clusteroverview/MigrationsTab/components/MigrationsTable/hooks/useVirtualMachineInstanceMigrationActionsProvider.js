import { useCallback, useMemo } from 'react';
import VirtualMachineInstanceMigrationModel from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineInstanceMigrationModel';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { VirtualMachineModelRef } from '@kubevirt-utils/models';
import { asAccessReview } from '@kubevirt-utils/resources/shared';
import { vmimStatuses } from '@kubevirt-utils/resources/vmim/statuses';
import { useK8sModel } from '@openshift-console/dynamic-plugin-sdk';
import { cancelMigration } from '@virtualmachines/actions/actions';
var useVirtualMachineInstanceMigrationActionsProvider = function (vmim) {
    var _a;
    var t = useKubevirtTranslation().t;
    var _b = useK8sModel(VirtualMachineModelRef), inFlight = _b[1];
    var cancelMigrationDescription = useCallback(function () {
        var _a, _b;
        if ([vmimStatuses.Failed, vmimStatuses.Succeeded].includes((_a = vmim === null || vmim === void 0 ? void 0 : vmim.status) === null || _a === void 0 ? void 0 : _a.phase))
            return t('Cannot cancel migration for "{{ status }}" status', {
                status: (_b = vmim === null || vmim === void 0 ? void 0 : vmim.status) === null || _b === void 0 ? void 0 : _b.phase,
            });
        return null;
    }, [t, (_a = vmim === null || vmim === void 0 ? void 0 : vmim.status) === null || _a === void 0 ? void 0 : _a.phase]);
    var actions = useMemo(function () {
        var _a;
        return [
            {
                accessReview: asAccessReview(VirtualMachineInstanceMigrationModel, vmim, 'delete'),
                cta: function () { return cancelMigration(vmim); },
                description: cancelMigrationDescription(),
                disabled: !vmim || [vmimStatuses.Failed, vmimStatuses.Succeeded].includes((_a = vmim === null || vmim === void 0 ? void 0 : vmim.status) === null || _a === void 0 ? void 0 : _a.phase),
                id: 'vmim-action-cancel-migrate',
                label: t('Cancel migration'),
            },
        ];
    }, [vmim, t, cancelMigrationDescription]);
    return useMemo(function () { return [actions, !inFlight, undefined]; }, [actions, inFlight]);
};
export default useVirtualMachineInstanceMigrationActionsProvider;
//# sourceMappingURL=useVirtualMachineInstanceMigrationActionsProvider.js.map