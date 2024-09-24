var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React, { useMemo } from 'react';
import produce from 'immer';
import ConfirmActionMessage from '@kubevirt-utils/components/ConfirmActionMessage/ConfirmActionMessage';
import TabModal from '@kubevirt-utils/components/TabModal/TabModal';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getVolumes } from '@kubevirt-utils/resources/vm';
import { Stack, StackItem } from '@patternfly/react-core';
import { updateVolumes } from '../../../details/utils/utils';
var MakePersistentModal = function (_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose, vm = _a.vm, volume = _a.volume;
    var t = useKubevirtTranslation().t;
    var updatedVirtualMachine = useMemo(function () {
        return produce(vm, function (draftVM) {
            var volumes = __spreadArray([], getVolumes(draftVM), true).map(function (machineVolume) {
                var _a, _b, _c, _d;
                if ((machineVolume === null || machineVolume === void 0 ? void 0 : machineVolume.name) === (volume === null || volume === void 0 ? void 0 : volume.name)) {
                    if ((_a = machineVolume === null || machineVolume === void 0 ? void 0 : machineVolume.dataVolume) === null || _a === void 0 ? void 0 : _a.hotpluggable)
                        (_b = machineVolume === null || machineVolume === void 0 ? void 0 : machineVolume.dataVolume) === null || _b === void 0 ? true : delete _b.hotpluggable;
                    if ((_c = volume === null || volume === void 0 ? void 0 : volume.persistentVolumeClaim) === null || _c === void 0 ? void 0 : _c.hotpluggable)
                        (_d = machineVolume === null || machineVolume === void 0 ? void 0 : machineVolume.dataVolume) === null || _d === void 0 ? true : delete _d.hotpluggable;
                }
                return machineVolume;
            });
            draftVM.spec.template.spec.volumes = volumes;
            return draftVM;
        });
    }, [vm, volume]);
    return (React.createElement(TabModal, { headerText: t('Make persistent?'), isOpen: isOpen, obj: updatedVirtualMachine, onClose: onClose, onSubmit: updateVolumes },
        React.createElement(Stack, { hasGutter: true },
            React.createElement(StackItem, null,
                React.createElement(ConfirmActionMessage, { obj: {
                        metadata: { name: volume === null || volume === void 0 ? void 0 : volume.name },
                    }, action: "make persistent" })))));
};
export default MakePersistentModal;
//# sourceMappingURL=MakePersistentModal.js.map