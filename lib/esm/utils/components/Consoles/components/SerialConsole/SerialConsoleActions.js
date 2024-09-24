import * as React from 'react';
import { t } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Button } from '@patternfly/react-core';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Consoles/SerialConsole';
export var SerialConsoleActions = function (_a) {
    var onDisconnect = _a.onDisconnect, onReset = _a.onReset, _b = _a.textDisconnect, textDisconnect = _b === void 0 ? t('Disconnect') : _b, _c = _a.textReset, textReset = _c === void 0 ? t('Reset') : _c;
    return (React.createElement("div", { className: css(styles.consoleActionsSerial) },
        React.createElement(Button, { className: "btn-margin", onClick: onDisconnect, variant: "secondary" }, textDisconnect),
        React.createElement(Button, { onClick: onReset, variant: "secondary" }, textReset)));
};
SerialConsoleActions.displayName = 'SerialConsoleActions';
//# sourceMappingURL=SerialConsoleActions.js.map