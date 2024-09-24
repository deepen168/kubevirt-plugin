import { useMemo } from 'react';
import { InfrastructureModel, modelToGroupVersionKind } from '@kubevirt-ui/kubevirt-api/console';
import { useAccessReview, useK8sWatchResource, } from '@openshift-console/dynamic-plugin-sdk';
var useSingleNodeCluster = function () {
    var canAccessInfra = useAccessReview({
        group: InfrastructureModel.apiGroup,
        resource: InfrastructureModel.plural,
        verb: 'list',
    })[0];
    var _a = useK8sWatchResource({
        groupVersionKind: modelToGroupVersionKind(InfrastructureModel),
        namespaced: false,
    }), infrastructure = _a[0], loaded = _a[1];
    var isSingleNodeCluster = useMemo(function () { var _a; return ((_a = infrastructure === null || infrastructure === void 0 ? void 0 : infrastructure.status) === null || _a === void 0 ? void 0 : _a.infrastructureTopology) === 'SingleReplica'; }, [infrastructure]);
    return canAccessInfra ? [isSingleNodeCluster, loaded] : [undefined, true];
};
export default useSingleNodeCluster;
//# sourceMappingURL=useSingleNodeCluster.js.map