import React, { useMemo } from 'react';
import { modelToGroupVersionKind, NodeModel } from '@kubevirt-ui/kubevirt-api/console';
import InlineFilterSelect from '@kubevirt-utils/components/FilterSelect/InlineFilterSelect';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getName } from '@kubevirt-utils/resources/shared';
import { useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';
import { Button, ButtonVariant, Checkbox, Flex, FormGroup, Popover, PopoverPosition, Stack, StackItem, } from '@patternfly/react-core';
import { HelpIcon } from '@patternfly/react-icons';
var CheckupsNetworkFormNodes = function (_a) {
    var isNodesChecked = _a.isNodesChecked, nodeSource = _a.nodeSource, nodeTarget = _a.nodeTarget, setIsNodesChecked = _a.setIsNodesChecked, setNodeSource = _a.setNodeSource, setNodeTarget = _a.setNodeTarget;
    var t = useKubevirtTranslation().t;
    var nodes = useK8sWatchResource({
        groupVersionKind: modelToGroupVersionKind(NodeModel),
        isList: true,
    })[0];
    var options = useMemo(function () {
        return nodes === null || nodes === void 0 ? void 0 : nodes.map(function (node) {
            var name = getName(node);
            return { children: name, value: name };
        });
    }, [nodes]);
    return (React.createElement(React.Fragment, null,
        React.createElement(Flex, null,
            React.createElement(Checkbox, { id: "nodes", isChecked: isNodesChecked, label: t('Select nodes'), name: "nodes", onChange: function (_event, checked) { return setIsNodesChecked(checked); } }),
            React.createElement(Popover, { bodyContent: t('If no nodes are specified, random nodes are selected.'), position: PopoverPosition.right },
                React.createElement(Button, { style: { paddingLeft: 0 }, variant: ButtonVariant.plain },
                    React.createElement(HelpIcon, null)))),
        isNodesChecked && (React.createElement(Stack, { hasGutter: true },
            React.createElement(StackItem, null,
                React.createElement(FormGroup, { fieldId: "source-nodes", isRequired: true, label: t('Source node') },
                    React.createElement(InlineFilterSelect, { options: options, selected: nodeSource, setSelected: setNodeSource, toggleProps: { placeholder: t('Select source node') } }))),
            React.createElement(StackItem, null,
                React.createElement(FormGroup, { fieldId: "target-nodes", isRequired: true, label: t('Target node') },
                    React.createElement(InlineFilterSelect, { options: options, selected: nodeTarget, setSelected: setNodeTarget, toggleProps: { placeholder: t('Select target node') } })))))));
};
export default CheckupsNetworkFormNodes;
//# sourceMappingURL=CheckupsNetworkFormNodes.js.map