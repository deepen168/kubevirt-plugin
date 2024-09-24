import NetworkAttachmentDefinitionModel from '@kubevirt-ui/kubevirt-api/console/models/NetworkAttachmentDefinitionModel';
import { DEFAULT_NAMESPACE, OPENSHIFT_MULTUS_NS, OPENSHIFT_SRIOV_NETWORK_OPERATOR_NS, } from '@kubevirt-utils/constants/constants';
import { useAccessReview } from '@openshift-console/dynamic-plugin-sdk';
var useNADListPermissions = function () {
    var canListDefaultNSNads = useAccessReview({
        group: NetworkAttachmentDefinitionModel.apiGroup,
        namespace: DEFAULT_NAMESPACE,
        resource: NetworkAttachmentDefinitionModel.plural,
        verb: 'list',
    })[0];
    var canListOpenShiftSRIOVNetworkOperatorNamespaceNADs = useAccessReview({
        group: NetworkAttachmentDefinitionModel.apiGroup,
        namespace: OPENSHIFT_SRIOV_NETWORK_OPERATOR_NS,
        resource: NetworkAttachmentDefinitionModel.plural,
        verb: 'list',
    })[0];
    var canListOpenShiftMultusNamespaceNADs = useAccessReview({
        group: NetworkAttachmentDefinitionModel.apiGroup,
        namespace: OPENSHIFT_MULTUS_NS,
        resource: NetworkAttachmentDefinitionModel.plural,
        verb: 'list',
    })[0];
    return {
        default: canListDefaultNSNads,
        OPENSHIFT_MULTUS_NS: canListOpenShiftMultusNamespaceNADs,
        OPENSHIFT_SRIOV_NETWORK_OPERATOR_NS: canListOpenShiftSRIOVNetworkOperatorNamespaceNADs,
    };
};
export default useNADListPermissions;
//# sourceMappingURL=useNADListPermissions.js.map