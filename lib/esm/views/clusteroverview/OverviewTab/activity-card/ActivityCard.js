import React, { memo } from 'react';
import { Link } from 'react-router-dom-v5-compat';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { ActivityBody } from '@openshift-console/dynamic-plugin-sdk-internal';
import { Card, CardHeader, CardTitle } from '@patternfly/react-core';
import { VIEW_EVENTS_PATH } from './utils/constants';
import OngoingActivity from './utils/OngoingActivity';
import RecentEvent from './utils/RecentEvent';
var ActivityCard = memo(function () {
    var t = useKubevirtTranslation().t;
    return (React.createElement(Card, { className: "co-overview-card--gradient", "data-test-id": "kv-activity-card" },
        React.createElement(CardHeader, { actions: {
                actions: React.createElement(Link, { to: VIEW_EVENTS_PATH }, t('View events')),
                className: 'co-overview-card__actions',
                hasNoOffset: false,
            } },
            React.createElement(CardTitle, null, t('Activity'))),
        React.createElement(ActivityBody, { className: "co-overview-dashboard__activity-body" },
            React.createElement(OngoingActivity, null),
            React.createElement(RecentEvent, null))));
});
export default ActivityCard;
//# sourceMappingURL=ActivityCard.js.map