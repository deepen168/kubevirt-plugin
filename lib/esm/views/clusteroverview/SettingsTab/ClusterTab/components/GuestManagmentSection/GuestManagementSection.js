import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Stack, StackItem } from '@patternfly/react-core';
import ExpandSection from '../../../ExpandSection/ExpandSection';
import AutomaticSubscriptionRHELGuests from './AutomaticSubscriptionRHELGuests/AutomaticSubscriptionRHELGuests';
import GuestSystemLogsAccess from './GuestSystemLogsAccess/GuestSystemLogsAccess';
var GuestManagementSection = function (_a) {
    var hyperConvergeConfiguration = _a.hyperConvergeConfiguration, newBadge = _a.newBadge;
    var t = useKubevirtTranslation().t;
    return (React.createElement(ExpandSection, { toggleText: t('Guest management') },
        React.createElement(Stack, { hasGutter: true },
            React.createElement(StackItem, { isFilled: true },
                React.createElement(AutomaticSubscriptionRHELGuests, { newBadge: newBadge })),
            React.createElement(StackItem, { isFilled: true },
                React.createElement(GuestSystemLogsAccess, { hyperConvergeConfiguration: hyperConvergeConfiguration, newBadge: newBadge })))));
};
export default GuestManagementSection;
//# sourceMappingURL=GuestManagementSection.js.map