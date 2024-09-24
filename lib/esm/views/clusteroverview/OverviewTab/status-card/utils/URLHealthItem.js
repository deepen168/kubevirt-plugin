import * as React from 'react';
import { useK8sModels, useK8sWatchResource, } from '@openshift-console/dynamic-plugin-sdk';
import { k8sBasePath } from '@openshift-console/dynamic-plugin-sdk/lib/utils/k8s/k8s';
import { HealthItem, useURLPoll } from '@openshift-console/dynamic-plugin-sdk-internal';
import URLHealthItemPopup from './URLHealthItemPopup';
import { asArray } from './utils';
var URLHealthItem = function (_a) {
    var subsystem = _a.subsystem;
    var k8sURL = "".concat(k8sBasePath, "/").concat(subsystem === null || subsystem === void 0 ? void 0 : subsystem.url);
    var _b = useURLPoll(k8sURL), response = _b[0], error = _b[1];
    var models = useK8sModels()[0];
    var modelExists = (subsystem === null || subsystem === void 0 ? void 0 : subsystem.additionalResource) &&
        !!(models === null || models === void 0 ? void 0 : models[(subsystem === null || subsystem === void 0 ? void 0 : subsystem.additionalResource).kind]);
    var resourceObj = modelExists ? subsystem === null || subsystem === void 0 ? void 0 : subsystem.additionalResource : null;
    var _c = useK8sWatchResource(resourceObj), resource = _c[0], resourceLoaded = _c[1], resourceError = _c[2];
    var resourceFirehoseResults = {
        data: asArray(resource),
        loaded: resourceLoaded,
        loadError: resourceError,
    };
    var k8sResult = subsystem.additionalResource ? resourceFirehoseResults : null;
    var healthState = subsystem.healthHandler(response, error, k8sResult);
    return (React.createElement(HealthItem, { details: healthState.message, popupTitle: subsystem.popupTitle, state: healthState.state, title: subsystem.title }, (subsystem === null || subsystem === void 0 ? void 0 : subsystem.popupComponent) && React.createElement(URLHealthItemPopup, { subsystem: subsystem })));
};
export default URLHealthItem;
//# sourceMappingURL=URLHealthItem.js.map