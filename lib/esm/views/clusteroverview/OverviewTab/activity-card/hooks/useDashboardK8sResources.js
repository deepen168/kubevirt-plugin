var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from 'react';
import { get } from '@kubevirt-utils/utils/utils';
import { useK8sWatchResources, } from '@openshift-console/dynamic-plugin-sdk';
import { asUniqueResource, asWatchK8sResource } from '../utils/utils';
import useDashboardActivities from './useDashboardActivities';
var useDashboardK8sResources = function () {
    var resourceActivities = useDashboardActivities().resourceActivities;
    var resourcesMap = resourceActivities === null || resourceActivities === void 0 ? void 0 : resourceActivities.reduce(function (acc, activity, idx) {
        var _a;
        var _b;
        // TODO Fix typing
        var firehoseResource = (_b = activity === null || activity === void 0 ? void 0 : activity.properties) === null || _b === void 0 ? void 0 : _b.k8sResource;
        var resource = asWatchK8sResource(firehoseResource);
        return __assign(__assign({}, acc), (_a = {}, _a["".concat(idx, "-").concat(firehoseResource.prop)] = resource, _a));
    }, {});
    var resources = useK8sWatchResources(resourcesMap);
    var k8sResourceActivities = React.useMemo(function () {
        var _a;
        return (_a = resourceActivities === null || resourceActivities === void 0 ? void 0 : resourceActivities.map(function (activity, index) {
            var _a;
            // TODO Fix typing
            var firehoseResource = (_a = activity === null || activity === void 0 ? void 0 : activity.properties) === null || _a === void 0 ? void 0 : _a.k8sResource;
            var k8sResources = get(resources, [asUniqueResource(firehoseResource, index).prop, 'data'], []);
            return k8sResources === null || k8sResources === void 0 ? void 0 : k8sResources.filter(function (r) {
                return activity.properties.isActivity ? activity.properties.isActivity(r) : true;
            }).map(function (r) {
                var _a, _b;
                return ({
                    // loader: (a as DashboardsOverviewResourceActivity)?.properties?.loader,
                    component: (_a = activity === null || activity === void 0 ? void 0 : activity.properties) === null || _a === void 0 ? void 0 : _a.component,
                    // skipcq: JS-0349
                    loader: (_b = activity === null || activity === void 0 ? void 0 : activity.properties) === null || _b === void 0 ? void 0 : _b.loader,
                    // TODO Fix typing
                    resource: r,
                    timestamp: activity.properties.getTimestamp
                        ? activity.properties.getTimestamp(r)
                        : null,
                });
            });
        })) === null || _a === void 0 ? void 0 : _a.reduce(function (a, b) { return a.concat(b); }, []);
    }, [resourceActivities, resources]);
    var resourcesLoaded = React.useMemo(function () {
        return resourceActivities === null || resourceActivities === void 0 ? void 0 : resourceActivities.every(function (activity, index) {
            var _a, _b, _c;
            // TODO Fix typing
            var firehoseResource = (_a = activity === null || activity === void 0 ? void 0 : activity.properties) === null || _a === void 0 ? void 0 : _a.k8sResource;
            var uniqueProp = asUniqueResource(firehoseResource, index).prop;
            return ((_b = resources[uniqueProp]) === null || _b === void 0 ? void 0 : _b.loaded) || ((_c = resources[uniqueProp]) === null || _c === void 0 ? void 0 : _c.loadError);
        });
    }, [resourceActivities, resources]);
    return {
        k8sResourceActivities: k8sResourceActivities,
        k8sResources: resources,
        k8sResourcesLoaded: resourcesLoaded,
    };
};
export default useDashboardK8sResources;
//# sourceMappingURL=useDashboardK8sResources.js.map