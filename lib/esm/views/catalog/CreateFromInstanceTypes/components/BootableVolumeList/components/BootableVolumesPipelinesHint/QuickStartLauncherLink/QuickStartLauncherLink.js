import React, { useContext } from 'react';
import { getName } from '@kubevirt-utils/resources/shared';
import { QuickStartContext, QuickStartContextProvider, useValuesForQuickStartContext, } from '@patternfly/quickstarts';
import { Button, ButtonVariant } from '@patternfly/react-core';
import './QuickStartLauncherLink.scss';
var QuickStartLauncherLink = function (_a) {
    var _b;
    var quickStart = _a.quickStart, quickStartLoaded = _a.quickStartLoaded, text = _a.text;
    var quickStartValues = useValuesForQuickStartContext();
    var setActiveQuickStart = useContext(QuickStartContext).setActiveQuickStart;
    var quickStartLink = quickStartLoaded && {
        id: getName(quickStart),
        onClick: function () {
            var _a, _b;
            setActiveQuickStart(quickStart.metadata.name, (_b = (_a = quickStart === null || quickStart === void 0 ? void 0 : quickStart.spec) === null || _a === void 0 ? void 0 : _a.tasks) === null || _b === void 0 ? void 0 : _b.length);
        },
        title: (_b = quickStart === null || quickStart === void 0 ? void 0 : quickStart.spec) === null || _b === void 0 ? void 0 : _b.displayName,
    };
    var handleClick = quickStartLink.onClick;
    return (React.createElement(QuickStartContextProvider, { value: quickStartValues },
        React.createElement(Button, { className: "quick-start-launcher-link", onClick: handleClick, variant: ButtonVariant.link }, text)));
};
export default QuickStartLauncherLink;
//# sourceMappingURL=QuickStartLauncherLink.js.map