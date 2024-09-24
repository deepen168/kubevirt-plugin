import * as React from 'react';
import produce from 'immer';
import { useImmer } from 'use-immer';
import VirtualMachineModel from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineModel';
import { k8sCreate } from '@openshift-console/dynamic-plugin-sdk';
export var useValidatedVM = function (initialVM) {
    var _a = useImmer(initialVM), vm = _a[0], setVM = _a[1];
    var _b = React.useState(true), loaded = _b[0], setLoaded = _b[1];
    var _c = React.useState(), error = _c[0], setError = _c[1];
    var updateVM = function (updatedVM) {
        setLoaded(false);
        setError(undefined);
        // validate the updated vm with the backend (dry run)
        return k8sCreate({
            data: typeof updatedVM === 'function' ? produce(vm, updatedVM) : updatedVM,
            model: VirtualMachineModel,
            queryParams: {
                dryRun: 'All',
                fieldManager: 'kubectl-create',
            },
        })
            .then(setVM)
            .catch(function (err) {
            setError(err);
            return Promise.reject(err);
        })
            .finally(function () { return setLoaded(true); });
    };
    return {
        error: error,
        loaded: loaded,
        updateVM: updateVM,
        vm: vm,
    };
};
//# sourceMappingURL=useValidatedVm.js.map