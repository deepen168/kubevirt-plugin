import { useMemo } from 'react';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { useK8sWatchResources } from '@openshift-console/dynamic-plugin-sdk';
import { getPVCWatch } from './utils';
var useDisksSources = function (vm) {
    var pvcWatches = useMemo(function () { return getPVCWatch(vm); }, [vm]);
    var pvcWatchesResult = useK8sWatchResources(pvcWatches);
    var pvcs = useMemo(function () {
        return Object.values(pvcWatchesResult || [])
            .map(function (watch) { return watch.data; })
            .filter(function (data) { return !isEmpty(data); });
    }, [pvcWatchesResult]);
    var loaded = Object.values(pvcWatchesResult).every(function (watch) { return watch.loaded || !isEmpty(watch.loadError); });
    var loadingError = Object.values(pvcWatchesResult).find(function (watch) {
        var _a;
        return !isEmpty(watch.loadError) && ((_a = watch.loadError) === null || _a === void 0 ? void 0 : _a.code) !== 404;
    });
    return { loaded: loaded, loadingError: loadingError, pvcs: pvcs };
};
export default useDisksSources;
//# sourceMappingURL=useDisksSources.js.map