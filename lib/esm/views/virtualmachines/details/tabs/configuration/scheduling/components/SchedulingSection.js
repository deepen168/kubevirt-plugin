import React from 'react';
import { modelToGroupVersionKind, NodeModel } from '@kubevirt-ui/kubevirt-api/console';
import VirtualMachineModel from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineModel';
import SearchItem from '@kubevirt-utils/components/SearchItem/SearchItem';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { asAccessReview } from '@kubevirt-utils/resources/shared';
import { useAccessReview, useK8sWatchResource, } from '@openshift-console/dynamic-plugin-sdk';
import { Grid, GridItem, Title } from '@patternfly/react-core';
import SchedulingSectionLeftGrid from './SchedulingSectionLeftGrid';
import SchedulingSectionRightGrid from './SchedulingSectionRightGrid';
var SchedulingSection = function (_a) {
    var onSubmit = _a.onSubmit, vm = _a.vm, vmi = _a.vmi;
    var t = useKubevirtTranslation().t;
    var _b = useK8sWatchResource({
        groupVersionKind: modelToGroupVersionKind(NodeModel),
        isList: true,
    }), nodes = _b[0], nodesLoaded = _b[1];
    var accessReview = asAccessReview(VirtualMachineModel, vm, 'update');
    var canUpdateVM = useAccessReview(accessReview || {})[0];
    return (React.createElement(React.Fragment, null,
        React.createElement(Title, { headingLevel: "h2" },
            React.createElement(SearchItem, { id: "scheduling" }, t('Scheduling and resource requirements'))),
        React.createElement(Grid, { hasGutter: true },
            React.createElement(SchedulingSectionLeftGrid, { canUpdateVM: canUpdateVM, nodes: nodes, nodesLoaded: nodesLoaded, onUpdateVM: onSubmit, vm: vm, vmi: vmi }),
            React.createElement(GridItem, { span: 1 }),
            React.createElement(SchedulingSectionRightGrid, { canUpdateVM: canUpdateVM, onUpdateVM: onSubmit, vm: vm, vmi: vmi }))));
};
export default SchedulingSection;
//# sourceMappingURL=SchedulingSection.js.map