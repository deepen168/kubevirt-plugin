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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { useMemo } from 'react';
import { modelToGroupVersionKind, SecretModel } from '@kubevirt-ui/kubevirt-api/console';
import { getMappedProjectsWithKeys, getSecretsLoaded, } from '@kubevirt-utils/components/SSHSecretModal/utils/utils';
import { ALL_NAMESPACES_SESSION_KEY } from '@kubevirt-utils/hooks/constants';
import { getValidNamespace, isEmpty } from '@kubevirt-utils/utils/utils';
import { useK8sWatchResources } from '@openshift-console/dynamic-plugin-sdk';
var useSecretsData = function (secretsNamespace, currentNamespace) {
    var _a, _b;
    var _c, _d, _e;
    var watchedResources = __assign((_a = {}, _a[currentNamespace] = {
        groupVersionKind: modelToGroupVersionKind(SecretModel),
        isList: true,
        limit: 10000,
        namespace: getValidNamespace(currentNamespace),
    }, _a), (secretsNamespace !== currentNamespace && (_b = {},
        _b[secretsNamespace] = __assign(__assign({ groupVersionKind: modelToGroupVersionKind(SecretModel), isList: true }, (secretsNamespace !== ALL_NAMESPACES_SESSION_KEY && {
            namespace: secretsNamespace,
        })), { limit: 10000 }),
        _b)));
    var secretsData = useK8sWatchResources(watchedResources);
    var secretsArrays = (_c = Object.values(secretsData)) === null || _c === void 0 ? void 0 : _c.map(function (watchedResource) { return watchedResource === null || watchedResource === void 0 ? void 0 : watchedResource.data; });
    var allSecrets = secretsArrays === null || secretsArrays === void 0 ? void 0 : secretsArrays.reduce(function (acc, secretsArray) {
        return __spreadArray(__spreadArray([], acc, true), secretsArray, true);
    }, []);
    var secretsLoaded = getSecretsLoaded(secretsData);
    var secretsLoadError = (_e = (_d = Object.values(secretsData)) === null || _d === void 0 ? void 0 : _d.map(function (data) { return data.loadError; })) === null || _e === void 0 ? void 0 : _e.find(function (error) { return !isEmpty(error); });
    var projectsWithSecrets = useMemo(function () { return getMappedProjectsWithKeys(allSecrets); }, [allSecrets]);
    return {
        allSecrets: allSecrets,
        projectsWithSecrets: projectsWithSecrets,
        secretsLoaded: secretsLoaded,
        secretsLoadError: secretsLoadError || null,
    };
};
export default useSecretsData;
//# sourceMappingURL=useSecretsData.js.map