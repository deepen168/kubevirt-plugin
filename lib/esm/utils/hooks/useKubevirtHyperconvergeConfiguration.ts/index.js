import { KUBEVIRT_HYPERCONVERGED, OPENSHIFT_CNV } from '@kubevirt-utils/constants/constants';
import { isUpstream } from '@kubevirt-utils/utils/utils';
import { useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';
import { KUBEVIRT_HC_GROUP_VERSION_KIND, KUBEVIRT_HC_NAME } from './constants';
var useKubevirtHyperconvergeConfiguration = function () {
    var _a = useK8sWatchResource({
        groupVersionKind: KUBEVIRT_HC_GROUP_VERSION_KIND,
        name: KUBEVIRT_HC_NAME,
        namespace: isUpstream ? KUBEVIRT_HYPERCONVERGED : OPENSHIFT_CNV,
    }), kubevirtHCConfig = _a[0], configLoaded = _a[1], configError = _a[2];
    return [kubevirtHCConfig, configLoaded, configError];
};
export default useKubevirtHyperconvergeConfiguration;
//# sourceMappingURL=index.js.map