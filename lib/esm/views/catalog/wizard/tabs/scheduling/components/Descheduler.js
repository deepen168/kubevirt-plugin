import React, { useState } from 'react';
import produce from 'immer';
import VirtualMachineModel from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineModel';
import { useDeschedulerInstalled } from '@kubevirt-utils/hooks/useDeschedulerInstalled';
import { useIsAdmin } from '@kubevirt-utils/hooks/useIsAdmin';
import useSingleNodeCluster from '@kubevirt-utils/hooks/useSingleNodeCluster';
import { DESCHEDULER_EVICT_LABEL } from '@kubevirt-utils/resources/vmi';
import { ensurePath } from '@kubevirt-utils/utils/utils';
import { k8sUpdate } from '@openshift-console/dynamic-plugin-sdk';
import { Switch } from '@patternfly/react-core';
import { isLiveMigratable } from '@virtualmachines/utils';
var Descheduler = function (_a) {
    var _b, _c, _d, _e;
    var vm = _a.vm;
    var deschedulerLabel = ((_e = (_d = (_c = (_b = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _b === void 0 ? void 0 : _b.template) === null || _c === void 0 ? void 0 : _c.metadata) === null || _d === void 0 ? void 0 : _d.annotations) === null || _e === void 0 ? void 0 : _e[DESCHEDULER_EVICT_LABEL]) === 'true';
    var _f = useState(deschedulerLabel), isChecked = _f[0], setChecked = _f[1];
    var isSingleNodeCluster = useSingleNodeCluster()[0];
    var isMigratable = isLiveMigratable(vm, isSingleNodeCluster);
    var isDeschedulerInstalled = useDeschedulerInstalled();
    var isAdmin = useIsAdmin();
    var isDeschedulerEnabled = isAdmin && isDeschedulerInstalled && isMigratable;
    var updatedDescheduler = function (checked) {
        var _a, _b;
        var updatedVM = produce(vm, function (vmDraft) {
            ensurePath(vmDraft, 'spec.template.metadata.annotations');
            if (!vmDraft.spec.template.metadata.annotations)
                vmDraft.spec.template.metadata.annotations = {};
            if (checked) {
                vmDraft.spec.template.metadata.annotations[DESCHEDULER_EVICT_LABEL] = 'true';
            }
            else {
                delete vmDraft.spec.template.metadata.annotations[DESCHEDULER_EVICT_LABEL];
            }
        });
        return k8sUpdate({
            data: updatedVM,
            model: VirtualMachineModel,
            name: (_a = updatedVM === null || updatedVM === void 0 ? void 0 : updatedVM.metadata) === null || _a === void 0 ? void 0 : _a.name,
            ns: (_b = updatedVM === null || updatedVM === void 0 ? void 0 : updatedVM.metadata) === null || _b === void 0 ? void 0 : _b.namespace,
        });
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Switch, { onChange: function (_event, checked) {
                setChecked(checked);
                updatedDescheduler(checked);
            }, id: "descheduler-switch", isChecked: isChecked, isDisabled: !isDeschedulerEnabled })));
};
export default Descheduler;
//# sourceMappingURL=Descheduler.js.map