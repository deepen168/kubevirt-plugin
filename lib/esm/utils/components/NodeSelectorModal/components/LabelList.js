import * as React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Button, Grid, Split, SplitItem } from '@patternfly/react-core';
import { ExternalLinkAltIcon, PlusCircleIcon } from '@patternfly/react-icons';
var LabelsList = function (_a) {
    var _b = _a.addRowText, addRowText = _b === void 0 ? null : _b, children = _a.children, _c = _a.emptyStateAddRowText, emptyStateAddRowText = _c === void 0 ? null : _c, isEmpty = _a.isEmpty, model = _a.model, onLabelAdd = _a.onLabelAdd;
    var t = useKubevirtTranslation().t;
    var addRowTxt = addRowText || t('Add Label');
    var emptyStateAddRowTxt = emptyStateAddRowText || t('Add Label to specify qualifying nodes');
    return (React.createElement(React.Fragment, null,
        React.createElement(Grid, { hasGutter: true }, children),
        React.createElement(Split, null,
            React.createElement(SplitItem, null,
                React.createElement(Button, { className: "pf-m-link--align-left", icon: React.createElement(PlusCircleIcon, null), id: "vm-labels-list-add-btn", onClick: function () { return onLabelAdd(); }, variant: "link" }, isEmpty ? emptyStateAddRowTxt : addRowTxt)),
            React.createElement(SplitItem, { isFilled: true }),
            React.createElement(SplitItem, null, model && (React.createElement(Button, { className: "pf-m-link--align-right", component: "a", href: "/k8s/cluster/".concat(model.plural), icon: React.createElement(ExternalLinkAltIcon, null), iconPosition: "right", id: "explore-nodes-btn", target: "_blank", variant: "link" }, t('Explore {{kind}} list', { kind: model.kind })))))));
};
export default LabelsList;
//# sourceMappingURL=LabelList.js.map