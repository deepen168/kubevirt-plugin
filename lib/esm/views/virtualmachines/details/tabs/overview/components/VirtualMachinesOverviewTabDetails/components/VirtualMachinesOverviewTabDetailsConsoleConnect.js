import React from 'react';
import cn from 'classnames';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Icon } from '@patternfly/react-core';
import { PlayIcon } from '@patternfly/react-icons';
var VirtualMachinesOverviewTabDetailsConsoleConnect = function (_a) {
    var connect = _a.connect, isDisabled = _a.isDisabled, isHeadlessMode = _a.isHeadlessMode;
    var t = useKubevirtTranslation().t;
    return (React.createElement("div", { className: cn('vnc-grey-background', isDisabled && 'disabled') },
        !isDisabled && (React.createElement(Icon, { onClick: connect, size: "md" },
            React.createElement(PlayIcon, null))),
        isHeadlessMode && t('Console is disabled in headless mode')));
};
export default VirtualMachinesOverviewTabDetailsConsoleConnect;
//# sourceMappingURL=VirtualMachinesOverviewTabDetailsConsoleConnect.js.map