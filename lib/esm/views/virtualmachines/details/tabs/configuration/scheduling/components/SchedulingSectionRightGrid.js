import React, { useCallback } from 'react';
import VirtualMachineModel from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineModel';
import DedicatedResourcesModal from '@kubevirt-utils/components/DedicatedResourcesModal/DedicatedResourcesModal';
import EvictionStrategyModal from '@kubevirt-utils/components/EvictionStrategy/EvictionStrategyModal';
import ShowEvictionStrategy from '@kubevirt-utils/components/EvictionStrategy/ShowEvictionStrategy';
import { useModal } from '@kubevirt-utils/components/ModalProvider/ModalProvider';
import SearchItem from '@kubevirt-utils/components/SearchItem/SearchItem';
import VirtualMachineDescriptionItem from '@kubevirt-utils/components/VirtualMachineDescriptionItem/VirtualMachineDescriptionItem';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getEvictionStrategy } from '@kubevirt-utils/resources/vm';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { k8sUpdate } from '@openshift-console/dynamic-plugin-sdk';
import { DescriptionList, GridItem } from '@patternfly/react-core';
import DedicatedResources from './DedicatedResources';
var SchedulingSectionRightGrid = function (_a) {
    var _b;
    var canUpdateVM = _a.canUpdateVM, onUpdateVM = _a.onUpdateVM, vm = _a.vm, vmi = _a.vmi;
    var t = useKubevirtTranslation().t;
    var createModal = useModal().createModal;
    var onSubmit = useCallback(function (updatedVM) {
        var _a, _b;
        return onUpdateVM
            ? onUpdateVM(updatedVM)
            : k8sUpdate({
                data: updatedVM,
                model: VirtualMachineModel,
                name: (_a = updatedVM === null || updatedVM === void 0 ? void 0 : updatedVM.metadata) === null || _a === void 0 ? void 0 : _a.name,
                ns: (_b = updatedVM === null || updatedVM === void 0 ? void 0 : updatedVM.metadata) === null || _b === void 0 ? void 0 : _b.namespace,
            });
    }, [onUpdateVM]);
    return (React.createElement(GridItem, { span: 5 },
        React.createElement(DescriptionList, { className: "pf-c-description-list" },
            React.createElement(VirtualMachineDescriptionItem, { descriptionHeader: React.createElement(SearchItem, { id: "dedicated-resources" }, t('Dedicated resources')), messageOnDisabled: t('Can not configure dedicated resources if the VirtualMachine is created from InstanceType'), onEditClick: function () {
                    return createModal(function (_a) {
                        var isOpen = _a.isOpen, onClose = _a.onClose;
                        return (React.createElement(DedicatedResourcesModal, { headerText: t('Dedicated resources'), isOpen: isOpen, onClose: onClose, onSubmit: onSubmit, vm: vm, vmi: vmi }));
                    });
                }, "data-test-id": "dedicated-resources", descriptionData: React.createElement(DedicatedResources, { vm: vm }), isDisabled: !isEmpty((_b = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _b === void 0 ? void 0 : _b.instancetype), isEdit: canUpdateVM }),
            React.createElement(VirtualMachineDescriptionItem, { descriptionHeader: React.createElement(SearchItem, { id: "eviction-strategy" }, t('Eviction strategy')), onEditClick: function () {
                    return createModal(function (_a) {
                        var isOpen = _a.isOpen, onClose = _a.onClose;
                        return (React.createElement(EvictionStrategyModal, { headerText: t('Eviction strategy'), isOpen: isOpen, onClose: onClose, onSubmit: onSubmit, vm: vm, vmi: vmi }));
                    });
                }, "data-test-id": "eviction-strategy", descriptionData: React.createElement(ShowEvictionStrategy, { evictionStrategy: getEvictionStrategy(vm) }), isEdit: canUpdateVM }))));
};
export default SchedulingSectionRightGrid;
//# sourceMappingURL=SchedulingSectionRightGrid.js.map