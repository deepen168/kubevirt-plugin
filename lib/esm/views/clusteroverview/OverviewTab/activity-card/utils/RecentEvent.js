import * as React from 'react';
import { EventModel } from '@kubevirt-ui/kubevirt-api/console';
import { useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';
import { RecentEventsBody } from '@openshift-console/dynamic-plugin-sdk-internal';
import { VIEW_EVENTS_PATH } from './constants';
import { eventTypes } from './utils';
var RecentEvent = function () {
    var _a = useK8sWatchResource({
        isList: true,
        kind: EventModel.kind,
        namespaced: false,
    }), events = _a[0], loaded = _a[1], loadError = _a[2];
    var filteredEvents = (events === null || events === void 0 ? void 0 : events.filter(function (e) { return eventTypes.includes(e.involvedObject.kind); })) || [];
    var wrappedFilteredEvents = {
        data: filteredEvents,
        loaded: loaded,
        loadError: loadError,
    };
    return React.createElement(RecentEventsBody, { events: wrappedFilteredEvents, moreLink: VIEW_EVENTS_PATH });
};
export default RecentEvent;
//# sourceMappingURL=RecentEvent.js.map