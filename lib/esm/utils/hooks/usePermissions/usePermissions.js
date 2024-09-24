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
import NetworkAttachmentDefinitionModel from '@kubevirt-ui/kubevirt-api/console/models/NetworkAttachmentDefinitionModel';
import VirtualMachineCloneModel from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineCloneModel';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { UploadTokenRequestModel } from '@kubevirt-utils/models';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { useAccessReview, useActiveNamespace } from '@openshift-console/dynamic-plugin-sdk';
import { ALL_NAMESPACES_SESSION_KEY } from '../constants';
var usePermissions = function () {
    var _a;
    var t = useKubevirtTranslation().t;
    var activeNamespace = useActiveNamespace()[0];
    var _b = useAccessReview(__assign(__assign({ group: NetworkAttachmentDefinitionModel.apiGroup }, (activeNamespace !== ALL_NAMESPACES_SESSION_KEY && { namespace: activeNamespace })), { resource: NetworkAttachmentDefinitionModel.plural, verb: 'get' })), canReadNads = _b[0], canReadNadsLoading = _b[1];
    var _c = useAccessReview(__assign(__assign({ group: VirtualMachineCloneModel.apiGroup }, (activeNamespace !== ALL_NAMESPACES_SESSION_KEY && { namespace: activeNamespace })), { resource: VirtualMachineCloneModel.plural, verb: 'create' })), canCloneVM = _c[0], canCloneVMLoading = _c[1];
    var _d = useAccessReview(__assign(__assign({ group: UploadTokenRequestModel.apiGroup }, (activeNamespace !== ALL_NAMESPACES_SESSION_KEY && { namespace: activeNamespace })), { resource: UploadTokenRequestModel.plural, verb: 'create' })), canCreateUploadToken = _d[0], canCreateUploadTokenLoading = _d[1];
    var capabilitiesData = {
        attacheNetworks: {
            allowed: canReadNads,
            isLoading: canReadNadsLoading,
            taskName: t('Attach VirtualMachine to multiple networks'),
        },
        clone: {
            allowed: canCloneVM,
            isLoading: canCloneVMLoading,
            taskName: t('Clone a VirtualMachine'),
        },
        uploadImage: {
            allowed: canCreateUploadToken,
            isLoading: canCreateUploadTokenLoading,
            taskName: t('Upload a base image from local disk'),
        },
    };
    var isLoading = !isEmpty((_a = Object.values(capabilitiesData)) === null || _a === void 0 ? void 0 : _a.filter(function (task) { return task.isLoading === true; }));
    return {
        capabilitiesData: capabilitiesData,
        isLoading: isLoading,
    };
};
export default usePermissions;
//# sourceMappingURL=usePermissions.js.map