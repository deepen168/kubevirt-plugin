import VirtualMachineInstancetypeModel from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineInstancetypeModel';
import VirtualMachinePreferenceModel from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachinePreferenceModel';
import { useAccessReview, useActiveNamespace, } from '@openshift-console/dynamic-plugin-sdk';
import { FLAG_KUBEVIRT_INSTANCETYPES, FLAG_KUBEVIRT_PREFERENCES } from './consts';
var useEnableKubevirtMenuFlags = function (setFeatureFlag) {
    var namespace = useActiveNamespace()[0];
    var canShowInstancetypes = useAccessReview({
        group: VirtualMachineInstancetypeModel.apiGroup,
        namespace: namespace,
        resource: VirtualMachineInstancetypeModel.plural,
        verb: 'list',
    })[0];
    var canShowPreferences = useAccessReview({
        group: VirtualMachinePreferenceModel.apiGroup,
        namespace: namespace,
        resource: VirtualMachinePreferenceModel.plural,
        verb: 'list',
    })[0];
    setFeatureFlag(FLAG_KUBEVIRT_PREFERENCES, canShowPreferences);
    setFeatureFlag(FLAG_KUBEVIRT_INSTANCETYPES, canShowInstancetypes);
};
export default useEnableKubevirtMenuFlags;
//# sourceMappingURL=useEnableKubevirtMenuFlags.js.map