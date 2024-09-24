import React, { useCallback } from 'react';
import Descheduler from '@catalog/wizard/tabs/scheduling/components/Descheduler';
import DeschedulerPopover from '@catalog/wizard/tabs/scheduling/components/DeschedulerPopover';
import VirtualMachineModel from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineModel';
import AffinityModal from '@kubevirt-utils/components/AffinityModal/AffinityModal';
import { useModal } from '@kubevirt-utils/components/ModalProvider/ModalProvider';
import NodeSelectorDetailItem from '@kubevirt-utils/components/NodeSelectorDetailItem/NodeSelectorDetailItem';
import NodeSelectorModal from '@kubevirt-utils/components/NodeSelectorModal/NodeSelectorModal';
import SearchItem from '@kubevirt-utils/components/SearchItem/SearchItem';
import Tolerations from '@kubevirt-utils/components/Tolerations/Tolerations';
import TolerationsModal from '@kubevirt-utils/components/TolerationsModal/TolerationsModal';
import VirtualMachineDescriptionItem from '@kubevirt-utils/components/VirtualMachineDescriptionItem/VirtualMachineDescriptionItem';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { k8sUpdate } from '@openshift-console/dynamic-plugin-sdk';
import { DescriptionList, GridItem } from '@patternfly/react-core';
import Affinity from './Affinity';
var SchedulingSectionLeftGrid = function (_a) {
    var _b, _c, _d;
    var canUpdateVM = _a.canUpdateVM, nodes = _a.nodes, nodesLoaded = _a.nodesLoaded, onUpdateVM = _a.onUpdateVM, vm = _a.vm, vmi = _a.vmi;
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
            React.createElement(VirtualMachineDescriptionItem, { descriptionData: React.createElement(NodeSelectorDetailItem, { nodeSelector: (_d = (_c = (_b = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _b === void 0 ? void 0 : _b.template) === null || _c === void 0 ? void 0 : _c.spec) === null || _d === void 0 ? void 0 : _d.nodeSelector }), onEditClick: function () {
                    return createModal(function (_a) {
                        var isOpen = _a.isOpen, onClose = _a.onClose;
                        return (React.createElement(NodeSelectorModal, { isOpen: isOpen, nodes: nodes, nodesLoaded: nodesLoaded, onClose: onClose, onSubmit: onSubmit, vm: vm }));
                    });
                }, "data-test-id": "node-selector", descriptionHeader: React.createElement(SearchItem, { id: "node-selector" }, t('Node selector')), isEdit: canUpdateVM }),
            React.createElement(VirtualMachineDescriptionItem, { onEditClick: function () {
                    return createModal(function (_a) {
                        var isOpen = _a.isOpen, onClose = _a.onClose;
                        return (React.createElement(TolerationsModal, { isOpen: isOpen, nodes: nodes, nodesLoaded: nodesLoaded, onClose: onClose, onSubmit: onSubmit, vm: vm, vmi: vmi }));
                    });
                }, "data-test-id": "tolerations", descriptionData: React.createElement(Tolerations, { vm: vm }), descriptionHeader: React.createElement(SearchItem, { id: "tolerations" }, t('Tolerations')), isEdit: canUpdateVM }),
            React.createElement(VirtualMachineDescriptionItem, { onEditClick: function () {
                    return createModal(function (_a) {
                        var isOpen = _a.isOpen, onClose = _a.onClose;
                        return (React.createElement(AffinityModal, { isOpen: isOpen, nodes: nodes, nodesLoaded: nodesLoaded, onClose: onClose, onSubmit: onSubmit, vm: vm }));
                    });
                }, "data-test-id": "affinity-rules", descriptionData: React.createElement(Affinity, { vm: vm }), descriptionHeader: React.createElement(SearchItem, { id: "affinity" }, t('Affinity rules')), isEdit: canUpdateVM }),
            React.createElement(VirtualMachineDescriptionItem, { bodyContent: React.createElement(DeschedulerPopover, null), "data-test-id": "descheduler", descriptionData: React.createElement(Descheduler, { vm: vm }), descriptionHeader: React.createElement(SearchItem, { id: "descheduler" }, t('Descheduler')), isPopover: true }))));
};
export default SchedulingSectionLeftGrid;
//# sourceMappingURL=SchedulingSectionLeftGrid.js.map