import React, { useEffect, useMemo, useState } from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { debounce } from '@kubevirt-utils/utils/debounce';
import { Checkbox, Flex, Popover, PopoverPosition, Text, TextInput } from '@patternfly/react-core';
import { HelpIcon } from '@patternfly/react-icons';
import './automatic-subscription-custom-url.scss';
var AutomaticSubscriptionCustomUrl = function (_a) {
    var customUrl = _a.customUrl, isDisabled = _a.isDisabled, updateCustomUrl = _a.updateCustomUrl;
    var t = useKubevirtTranslation().t;
    var _b = useState(!!customUrl), isChecked = _b[0], setIsChecked = _b[1];
    var _c = useState(), inputValue = _c[0], setInputValue = _c[1];
    var debounceUpdateCustomUrl = useMemo(function () { return debounce(updateCustomUrl, 500); }, [updateCustomUrl]);
    useEffect(function () {
        setInputValue(customUrl);
    }, [customUrl]);
    return (React.createElement("div", { className: "AutomaticSubscriptionCustomUrl--main" },
        React.createElement(Flex, { alignItems: { default: 'alignItemsCenter' } },
            React.createElement(Checkbox, { onChange: function () {
                    return setIsChecked(function (prevIsChecked) {
                        if (prevIsChecked)
                            debounceUpdateCustomUrl({ customUrl: '' });
                        return !prevIsChecked;
                    });
                }, className: "AutomaticSubscriptionCustomUrl--checkbox", id: "auto-register-rhel", isChecked: isChecked && !isDisabled, isDisabled: isDisabled, label: t('Use custom registration server url') }),
            React.createElement(Popover, { "aria-label": 'Help', bodyContent: t('Select this option if you use an on-premise subscription service'), position: PopoverPosition.right },
                React.createElement(HelpIcon, null))),
        isChecked && !isDisabled && (React.createElement(Flex, null,
            React.createElement(Text, null, "URL"),
            React.createElement(TextInput, { onChange: function (_, value) {
                    setInputValue(value);
                    debounceUpdateCustomUrl({ customUrl: value });
                }, className: "AutomaticSubscriptionCustomUrl--input", value: inputValue })))));
};
export default AutomaticSubscriptionCustomUrl;
//# sourceMappingURL=AutomaticSubscriptionCustomUrl.js.map