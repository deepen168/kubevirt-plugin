import { modelToGroupVersionKind, RouteModel } from '@kubevirt-ui/kubevirt-api/console';
import { useK8sWatchResources, } from '@openshift-console/dynamic-plugin-sdk';
import { HTTP_REG_EXP, MTV_OPERATOR, MTV_ROUTE_NAME } from '../constants';
var checkResourcesLoaded = function (resources) {
    return Object.keys(resources).length > 0 &&
        Object.values(resources).every(function (value) { return value.loaded || !!value.loadError; });
};
var getMTVLink = function (route) {
    var _a, _b;
    var rawLink = (_a = route === null || route === void 0 ? void 0 : route.spec) === null || _a === void 0 ? void 0 : _a.host;
    return rawLink && !HTTP_REG_EXP.test(rawLink) ? 'https://'.concat((_b = route === null || route === void 0 ? void 0 : route.spec) === null || _b === void 0 ? void 0 : _b.host) : rawLink;
};
var getMTVOperator = function (operators) {
    return operators === null || operators === void 0 ? void 0 : operators.find(function (operator) { return operator.metadata.name === MTV_OPERATOR; });
};
var mtvResources = {
    operators: {
        groupVersionKind: {
            group: 'packages.operators.coreos.com',
            kind: 'PackageManifest',
            version: 'v1',
        },
        isList: true,
        namespaced: false,
    },
    route: {
        groupVersionKind: modelToGroupVersionKind(RouteModel),
        name: MTV_ROUTE_NAME,
    },
};
var useMTVResources = function () {
    var _a, _b;
    var resources = useK8sWatchResources(mtvResources);
    var resourcesLoaded = checkResourcesLoaded(resources);
    var mtvOperator = getMTVOperator((_a = resources === null || resources === void 0 ? void 0 : resources.operators) === null || _a === void 0 ? void 0 : _a.data);
    var mtvLink = getMTVLink((_b = resources === null || resources === void 0 ? void 0 : resources.route) === null || _b === void 0 ? void 0 : _b.data);
    return {
        mtvLink: mtvLink,
        mtvLoaded: resourcesLoaded,
        mtvOperator: mtvOperator,
    };
};
export default useMTVResources;
//# sourceMappingURL=useMTVResources.js.map