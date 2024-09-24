import * as React from 'react';
import NodeCheckerAlert from '@kubevirt-utils/components/NodeSelectorModal/components/NodeCheckerAlert';
import { VirtualizedTable } from '@openshift-console/dynamic-plugin-sdk';
import { Stack, StackItem } from '@patternfly/react-core';
import { AffinityType } from '../../utils/types';
import AddAffinityRuleButton from '../AddAffinityRuleButton';
import AffinityDescriptionText from '../AffinityDescriptionText';
import AffinityRow from './components/AffinityRow';
import useAffinityColumns from './hooks/useAffinityColumns';
var AffinityList = function (_a) {
    var affinities = _a.affinities, nodesLoaded = _a.nodesLoaded, onAffinityClickAdd = _a.onAffinityClickAdd, onDelete = _a.onDelete, onEdit = _a.onEdit, prefferedQualifiedNodes = _a.prefferedQualifiedNodes, qualifiedNodes = _a.qualifiedNodes;
    var columns = useAffinityColumns();
    return (React.createElement(Stack, { hasGutter: true },
        React.createElement(StackItem, null,
            React.createElement(AffinityDescriptionText, null)),
        React.createElement(StackItem, null,
            React.createElement(VirtualizedTable, { columns: columns, data: affinities || [], loaded: true, loadError: false, Row: AffinityRow, rowData: { onDelete: onDelete, onEdit: onEdit }, unfilteredData: affinities || [] })),
        React.createElement(StackItem, null,
            React.createElement(AddAffinityRuleButton, { isLinkButton: true, onAffinityClickAdd: onAffinityClickAdd })),
        React.createElement(StackItem, null, (affinities === null || affinities === void 0 ? void 0 : affinities.some(function (affinity) { return (affinity === null || affinity === void 0 ? void 0 : affinity.type) === AffinityType.node; })) && nodesLoaded && (React.createElement(NodeCheckerAlert, { nodesLoaded: nodesLoaded, prefferedQualifiedNodes: prefferedQualifiedNodes, qualifiedNodes: qualifiedNodes })))));
};
export default AffinityList;
//# sourceMappingURL=AffinityList.js.map