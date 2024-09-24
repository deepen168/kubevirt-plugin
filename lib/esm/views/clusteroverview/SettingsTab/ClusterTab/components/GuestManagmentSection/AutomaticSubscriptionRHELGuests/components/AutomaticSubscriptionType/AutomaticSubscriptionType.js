import React from 'react';
import FormPFSelect from '@kubevirt-utils/components/FormPFSelect/FormPFSelect';
import { SelectList, SelectOption } from '@patternfly/react-core';
import { getSubscriptionItem, selectItems } from './utils/utils';
import './automatic-subscription-type.scss';
var AutomaticSubscriptionType = function (_a) {
    var _b = _a.selected, selected = _b === void 0 ? selectItems[0] : _b, setSelected = _a.setSelected, updateSubscriptionType = _a.updateSubscriptionType;
    return (React.createElement("div", { className: "AutomaticSubscriptionType--main" },
        React.createElement(FormPFSelect, { onSelect: function (_e, value) {
                setSelected(getSubscriptionItem(value));
                updateSubscriptionType({ type: value });
            }, selected: selected.value, selectedLabel: selected.title },
            React.createElement(SelectList, null, selectItems.map(function (item) { return (React.createElement(SelectOption, { key: item.value, value: item.value }, item.title)); })))));
};
export default AutomaticSubscriptionType;
//# sourceMappingURL=AutomaticSubscriptionType.js.map