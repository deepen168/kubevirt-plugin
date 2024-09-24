import { SecretModel } from '@kubevirt-ui/kubevirt-api/console';
import { generateSSHKeySecret } from '@kubevirt-utils/resources/secret/utils';
import { getName, getNamespace } from '@kubevirt-utils/resources/shared';
export var removeSSHKeyObject = function (updateTabsData, oldSSHServiceName) {
    return updateTabsData(function (tabsDraft) {
        tabsDraft.additionalObjects = ((tabsDraft === null || tabsDraft === void 0 ? void 0 : tabsDraft.additionalObjects) || []).filter(function (object) { return !((object === null || object === void 0 ? void 0 : object.kind) === SecretModel.kind && getName(object) === oldSSHServiceName); });
    });
};
export var updateSSHKeyObject = function (vm, updateTabsData, sshkey, secretName) {
    updateTabsData(function (draftTabs) {
        if (!draftTabs.additionalObjects)
            draftTabs.additionalObjects = [];
        draftTabs.additionalObjects.push(generateSSHKeySecret(secretName, getNamespace(vm), sshkey));
    });
};
//# sourceMappingURL=sshkey-utils.js.map