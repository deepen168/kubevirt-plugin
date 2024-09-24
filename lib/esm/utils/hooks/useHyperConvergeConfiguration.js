import { useMemo } from 'react';
import { HyperConvergedModelGroupVersionKind } from '@kubevirt-ui/kubevirt-api/console';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';
var getHyperConvergedObject = function (hyperConverged) {
    var _a;
    if (isEmpty(hyperConverged))
        return null;
    if (hyperConverged === null || hyperConverged === void 0 ? void 0 : hyperConverged.items)
        return (_a = hyperConverged === null || hyperConverged === void 0 ? void 0 : hyperConverged.items) === null || _a === void 0 ? void 0 : _a[0];
    if (Array.isArray(hyperConverged))
        return hyperConverged === null || hyperConverged === void 0 ? void 0 : hyperConverged[0];
    return hyperConverged;
};
var useHyperConvergeConfiguration = function () {
    var _a = useK8sWatchResource({
        groupVersionKind: HyperConvergedModelGroupVersionKind,
        isList: true,
    }), hyperConvergeData = _a[0], hyperConvergeDataLoaded = _a[1], hyperConvergeDataError = _a[2];
    var hyperConverge = useMemo(function () { return getHyperConvergedObject(hyperConvergeData); }, [hyperConvergeData]);
    return [hyperConverge, hyperConvergeDataLoaded, hyperConvergeDataError];
};
export default useHyperConvergeConfiguration;
//# sourceMappingURL=useHyperConvergeConfiguration.js.map