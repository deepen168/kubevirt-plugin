import * as React from 'react';
import { modelToGroupVersionKind, NodeModel } from '@kubevirt-ui/kubevirt-api/console';
import Loading from '@kubevirt-utils/components/Loading/Loading';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { GreenCheckCircleIcon, ResourceLink } from '@openshift-console/dynamic-plugin-sdk';
import { Alert, AlertVariant, Button, Flex, FlexItem, pluralize, Popover, } from '@patternfly/react-core';
var NodeCheckerAlert = function (_a) {
    var _b;
    var nodesLoaded = _a.nodesLoaded, prefferedQualifiedNodes = _a.prefferedQualifiedNodes, qualifiedNodes = _a.qualifiedNodes;
    var t = useKubevirtTranslation().t;
    if (!nodesLoaded) {
        return React.createElement(Loading, null);
    }
    var qualifiedNodesSize = (qualifiedNodes === null || qualifiedNodes === void 0 ? void 0 : qualifiedNodes.length) || 0;
    var prefferedQualifiedNodesSize = (_b = prefferedQualifiedNodes === null || prefferedQualifiedNodes === void 0 ? void 0 : prefferedQualifiedNodes.length) !== null && _b !== void 0 ? _b : 0;
    var prefferedQualifiedNodesNames = prefferedQualifiedNodes === null || prefferedQualifiedNodes === void 0 ? void 0 : prefferedQualifiedNodes.map(function (node) { var _a; return (_a = node === null || node === void 0 ? void 0 : node.metadata) === null || _a === void 0 ? void 0 : _a.name; });
    var matchingNodeText = pluralize(qualifiedNodesSize ? qualifiedNodesSize : prefferedQualifiedNodesSize, 'Node');
    var nodes = [];
    if (qualifiedNodesSize) {
        nodes = qualifiedNodes;
    }
    else if (prefferedQualifiedNodesSize) {
        nodes = prefferedQualifiedNodes;
    }
    return (React.createElement(Alert, { title: React.createElement(React.Fragment, null, !!qualifiedNodesSize || !!prefferedQualifiedNodesSize ? (React.createElement(React.Fragment, null,
            t('{{matchingNodeText}} matching', {
                matchingNodeText: matchingNodeText,
            }),
            !!qualifiedNodesSize &&
                !!prefferedQualifiedNodesSize &&
                t(', {{prefferedQualifiedNodesSize}} matching preferred Nodes found', {
                    prefferedQualifiedNodesSize: qualifiedNodesSize < prefferedQualifiedNodesSize
                        ? qualifiedNodesSize
                        : prefferedQualifiedNodesSize,
                }))) : (t('No matching Nodes found for the labels'))), variant: qualifiedNodesSize || prefferedQualifiedNodesSize
            ? AlertVariant.success
            : AlertVariant.warning, isInline: true }, qualifiedNodesSize || prefferedQualifiedNodesSize ? (React.createElement(Popover, { bodyContent: React.createElement(React.Fragment, null, nodes === null || nodes === void 0 ? void 0 : nodes.map(function (node) {
            var isPreffered = prefferedQualifiedNodesNames === null || prefferedQualifiedNodesNames === void 0 ? void 0 : prefferedQualifiedNodesNames.includes(node.metadata.name);
            return (React.createElement(Flex, { key: node.metadata.uid },
                React.createElement(FlexItem, { spacer: { default: 'spacerXs' } },
                    React.createElement(ResourceLink, { groupVersionKind: modelToGroupVersionKind(NodeModel), name: node.metadata.name })),
                isPreffered && (React.createElement(FlexItem, { spacer: { default: 'spacerXs' } },
                    React.createElement(GreenCheckCircleIcon, null),
                    " ",
                    t('Preffered')))));
        })), headerContent: React.createElement(React.Fragment, null, t('{{qualifiedNodesCount}} matching Nodes found', {
            qualifiedNodesCount: qualifiedNodesSize || prefferedQualifiedNodesSize,
        })) },
        React.createElement(Button, { isInline: true, variant: "link" }, t('View matching {{matchingNodeText}}', {
            matchingNodeText: matchingNodeText,
        })))) : (t('Scheduling will not be possible at this state'))));
};
export default NodeCheckerAlert;
//# sourceMappingURL=NodeCheckerAlert.js.map