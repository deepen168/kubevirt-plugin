import * as React from 'react';
import LabelsList from '@kubevirt-utils/components/NodeSelectorModal/components/LabelList';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { GridItem, Text, TextVariants } from '@patternfly/react-core';
import AffinityEditRow from './AffinityEditRow';
var AffinityEditList = function (_a) {
    var addRowText = _a.addRowText, expressions = _a.expressions, onAdd = _a.onAdd, onChange = _a.onChange, onDelete = _a.onDelete, rowID = _a.rowID;
    var t = useKubevirtTranslation().t;
    return (React.createElement(LabelsList, { addRowText: addRowText, emptyStateAddRowText: addRowText, isEmpty: (expressions === null || expressions === void 0 ? void 0 : expressions.length) === 0, onLabelAdd: onAdd }, expressions.length > 0 && (React.createElement(React.Fragment, null,
        React.createElement(GridItem, { span: 4 },
            React.createElement(Text, { component: TextVariants.h6 }, t('Key'))),
        React.createElement(GridItem, { span: 2 },
            React.createElement(Text, { component: TextVariants.h6 }, t('Operator'))),
        React.createElement(GridItem, { span: 6 },
            React.createElement(Text, { component: TextVariants.h6 }, t('Values'))),
        expressions.map(function (expression) { return (React.createElement(AffinityEditRow, { expression: expression, key: expression.id, onChange: onChange, onDelete: onDelete, rowID: rowID })); })))));
};
export default AffinityEditList;
//# sourceMappingURL=AffinityEditList.js.map