import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Button, DescriptionListTerm } from '@patternfly/react-core';
import { PencilAltIcon } from '@patternfly/react-icons';
import SearchItem from '../SearchItem/SearchItem';
var HardwareDeviceTitle = function (_a) {
    var canEdit = _a.canEdit, _b = _a.hideEdit, hideEdit = _b === void 0 ? false : _b, onClick = _a.onClick, title = _a.title;
    var t = useKubevirtTranslation().t;
    if (hideEdit)
        return React.createElement(DescriptionListTerm, null, title);
    return (React.createElement(DescriptionListTerm, null,
        React.createElement(Button, { className: "pf-m-link--align-left", isDisabled: !canEdit, isInline: true, onClick: onClick, variant: "link" },
            React.createElement(SearchItem, { id: title.replace(' ', '-') },
                title,
                ' ',
                React.createElement(PencilAltIcon, { alt: t('Edit'), className: "co-icon-space-l pf-v5-c-button-icon--plain" })))));
};
export default HardwareDeviceTitle;
//# sourceMappingURL=HardwareDeviceTitle.js.map