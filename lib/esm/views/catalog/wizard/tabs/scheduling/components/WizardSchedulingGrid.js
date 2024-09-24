import React from 'react';
import { modelToGroupVersionKind, NodeModel } from '@kubevirt-ui/kubevirt-api/console';
import AffinityModal from '@kubevirt-utils/components/AffinityModal/AffinityModal';
import DedicatedResourcesModal from '@kubevirt-utils/components/DedicatedResourcesModal/DedicatedResourcesModal';
import EvictionStrategyModal from '@kubevirt-utils/components/EvictionStrategy/EvictionStrategyModal';
import ShowEvictionStrategy from '@kubevirt-utils/components/EvictionStrategy/ShowEvictionStrategy';
import { useModal } from '@kubevirt-utils/components/ModalProvider/ModalProvider';
import NodeSelectorDetailItem from '@kubevirt-utils/components/NodeSelectorDetailItem/NodeSelectorDetailItem';
import NodeSelectorModal from '@kubevirt-utils/components/NodeSelectorModal/NodeSelectorModal';
import TolerationsModal from '@kubevirt-utils/components/TolerationsModal/TolerationsModal';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getEvictionStrategy } from '@kubevirt-utils/resources/vm';
import { useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';
import { DescriptionList, Grid, GridItem } from '@patternfly/react-core';
import { WizardDescriptionItem } from '../../../components/WizardDescriptionItem';
import Affinity from './Affinity';
import DedicatedResources from './DedicatedResources';
import Descheduler from './Descheduler';
import DeschedulerPopover from './DeschedulerPopover';
import Tolerations from './Tolerations';
var WizardSchedulingGrid = function (_a) {
    var _b, _c, _d;
    var updateVM = _a.updateVM, vm = _a.vm;
    var t = useKubevirtTranslation().t;
    var createModal = useModal().createModal;
    var _e = useK8sWatchResource({
        groupVersionKind: modelToGroupVersionKind(NodeModel),
        isList: true,
    }), nodes = _e[0], nodesLoaded = _e[1];
    return (React.createElement(Grid, { className: "wizard-scheduling-tab__grid", hasGutter: true },
        React.createElement(GridItem, { rowSpan: 4, span: 6 },
            React.createElement(DescriptionList, { className: "pf-c-description-list" },
                React.createElement(WizardDescriptionItem, { description: React.createElement(NodeSelectorDetailItem, { nodeSelector: (_d = (_c = (_b = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _b === void 0 ? void 0 : _b.template) === null || _c === void 0 ? void 0 : _c.spec) === null || _d === void 0 ? void 0 : _d.nodeSelector }), onEditClick: function () {
                        return createModal(function (_a) {
                            var isOpen = _a.isOpen, onClose = _a.onClose;
                            return (React.createElement(NodeSelectorModal, { isOpen: isOpen, nodes: nodes, nodesLoaded: nodesLoaded, onClose: onClose, onSubmit: updateVM, vm: vm }));
                        });
                    }, isEdit: true, testId: "node-selector", title: t('Node selector') }),
                React.createElement(WizardDescriptionItem, { onEditClick: function () {
                        return createModal(function (_a) {
                            var isOpen = _a.isOpen, onClose = _a.onClose;
                            return (React.createElement(TolerationsModal, { isOpen: isOpen, nodes: nodes, nodesLoaded: nodesLoaded, onClose: onClose, onSubmit: updateVM, vm: vm }));
                        });
                    }, description: React.createElement(Tolerations, { vm: vm }), isEdit: true, testId: "tolerations", title: t('Tolerations') }),
                React.createElement(WizardDescriptionItem, { onEditClick: function () {
                        return createModal(function (_a) {
                            var isOpen = _a.isOpen, onClose = _a.onClose;
                            return (React.createElement(AffinityModal, { isOpen: isOpen, nodes: nodes, nodesLoaded: nodesLoaded, onClose: onClose, onSubmit: updateVM, vm: vm }));
                        });
                    }, description: React.createElement(Affinity, { vm: vm }), isEdit: true, testId: "affinity-rules", title: t('Affinity rules') }),
                React.createElement(WizardDescriptionItem, { helperPopover: {
                        content: React.createElement(DeschedulerPopover, null),
                        header: t('Descheduler'),
                    }, description: React.createElement(Descheduler, { vm: vm }), testId: "descheduler", title: t('Descheduler') }))),
        React.createElement(GridItem, { rowSpan: 4, span: 6 },
            React.createElement(DescriptionList, { className: "pf-c-description-list" },
                React.createElement(WizardDescriptionItem, { onEditClick: function () {
                        return createModal(function (_a) {
                            var isOpen = _a.isOpen, onClose = _a.onClose;
                            return (React.createElement(DedicatedResourcesModal, { headerText: t('Dedicated resources'), isOpen: isOpen, onClose: onClose, onSubmit: updateVM, vm: vm }));
                        });
                    }, description: React.createElement(DedicatedResources, { vm: vm }), isEdit: true, testId: "dedicated-resources", title: t('Dedicated resources') }),
                React.createElement(WizardDescriptionItem, { onEditClick: function () {
                        return createModal(function (_a) {
                            var isOpen = _a.isOpen, onClose = _a.onClose;
                            return (React.createElement(EvictionStrategyModal, { headerText: t('Eviction strategy'), isOpen: isOpen, onClose: onClose, onSubmit: updateVM, vm: vm }));
                        });
                    }, description: React.createElement(ShowEvictionStrategy, { evictionStrategy: getEvictionStrategy(vm) }), isEdit: true, testId: "eviction-strategy", title: t('Eviction strategy') })))));
};
export default WizardSchedulingGrid;
//# sourceMappingURL=WizardSchedulingGrid.js.map