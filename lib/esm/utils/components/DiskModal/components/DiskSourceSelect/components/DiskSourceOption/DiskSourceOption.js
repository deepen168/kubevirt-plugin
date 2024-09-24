import React from 'react';
import { SelectOption } from '@patternfly/react-core';
var DiskSourceOption = function (_a) {
    var description = _a.description, id = _a.id, label = _a.label, onSelect = _a.onSelect;
    return (React.createElement(SelectOption, { description: description, itemId: id, key: id, onClick: function () { return onSelect(id); } }, label));
};
export default DiskSourceOption;
//# sourceMappingURL=DiskSourceOption.js.map