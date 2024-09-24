import { useEffect, useMemo, useState } from 'react';
import { useK8sWatchResource, } from '@openshift-console/dynamic-plugin-sdk';
import { KUBEVIRT_APISERVER_PROXY } from './useFeatures/constants';
import { useFeatures } from './useFeatures/useFeatures';
import useKubevirtDataPodHealth from './useKubevirtDataPod/hooks/useKubevirtDataPodHealth';
import useKubevirtDataPod from './useKubevirtDataPod/useKubevirtDataPod';
var useKubevirtWatchResource = function (watchOptions, filterOptions) {
    var _a = useState([]), data = _a[0], setData = _a[1];
    var _b = useState(false), loadedData = _b[0], setLoadedData = _b[1];
    var _c = useState(), loadErrorData = _c[0], setLoadErrorData = _c[1];
    var isProxyPodAlive = useKubevirtDataPodHealth();
    var _d = useFeatures(KUBEVIRT_APISERVER_PROXY), featureEnabled = _d.featureEnabled, loading = _d.loading;
    var shouldUseProxyPod = useMemo(function () {
        if (!featureEnabled && !loading)
            return false;
        if (featureEnabled && !loading && isProxyPodAlive !== null)
            return isProxyPodAlive;
        return null;
    }, [featureEnabled, loading, isProxyPodAlive]);
    var _e = useK8sWatchResource(shouldUseProxyPod === false && watchOptions), resourceK8sWatch = _e[0], loadedK8sWatch = _e[1], loadErrorK8sWatch = _e[2];
    var _f = useKubevirtDataPod(shouldUseProxyPod ? watchOptions : {}, filterOptions), resourceKubevirtDataPod = _f[0], loadedKubevirtDataPod = _f[1], loadErrorKubevirtDataPod = _f[2];
    useEffect(function () {
        if (shouldUseProxyPod !== null) {
            var _a = shouldUseProxyPod
                ? [resourceKubevirtDataPod, loadedKubevirtDataPod, loadErrorKubevirtDataPod]
                : [resourceK8sWatch, loadedK8sWatch, loadErrorK8sWatch], resource = _a[0], loaded = _a[1], loadError = _a[2];
            setLoadedData(loaded);
            if (loadError) {
                setLoadErrorData(loadError);
                setLoadedData(true);
            }
            if (resource && loaded) {
                var isList = typeof (resource === null || resource === void 0 ? void 0 : resource[0]) === 'string';
                setData((isList && (resource === null || resource === void 0 ? void 0 : resource[1])) || (resource === null || resource === void 0 ? void 0 : resource.items) || resource);
                setLoadedData(loaded);
                setLoadErrorData(null);
            }
        }
    }, [
        resourceKubevirtDataPod,
        loadedKubevirtDataPod,
        loadErrorKubevirtDataPod,
        resourceK8sWatch,
        loadedK8sWatch,
        loadErrorK8sWatch,
        isProxyPodAlive,
        shouldUseProxyPod,
    ]);
    return [data, loadedData, loadErrorData];
};
export default useKubevirtWatchResource;
//# sourceMappingURL=useKubevirtWatchResource.js.map