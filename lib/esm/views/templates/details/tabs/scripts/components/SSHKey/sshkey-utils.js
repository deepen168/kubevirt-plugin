import VirtualMachineModel from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineModel';
import { addSecretToVM } from '@kubevirt-utils/components/SSHSecretModal/utils/utils';
import { generateSSHKeySecret } from '@kubevirt-utils/resources/secret/utils';
import { getName, getNamespace } from '@kubevirt-utils/resources/shared';
import { getTemplateVirtualMachineObject } from '@kubevirt-utils/resources/template';
import { getAccessCredentials } from '@kubevirt-utils/resources/vm';
import { isEmpty } from '@kubevirt-utils/utils/utils';
export var getTemplateSSHKeySecret = function (template, vmSSHKeySecretName) { var _a; return (_a = template === null || template === void 0 ? void 0 : template.objects) === null || _a === void 0 ? void 0 : _a.find(function (object) { return getName(object) === vmSSHKeySecretName; }); };
export var updateSecretName = function (template, secretName) {
    var vm = getTemplateVirtualMachineObject(template);
    template.objects = ((template === null || template === void 0 ? void 0 : template.objects) || []).map(function (object) {
        return object.kind !== VirtualMachineModel.kind ? object : addSecretToVM(vm, secretName);
    });
};
export var updateSSHKeyObject = function (template, sshKey, existingSecretName, newSSHSecretName) {
    var sshKeySecretObject = getTemplateSSHKeySecret(template, existingSecretName);
    if (sshKeySecretObject) {
        sshKeySecretObject.data.key = sshKey;
    }
    else {
        var vm = getTemplateVirtualMachineObject(template);
        updateSecretName(template, newSSHSecretName);
        template.objects.push(generateSSHKeySecret(newSSHSecretName, getNamespace(vm), sshKey));
    }
};
export var removeSecretObject = function (template, secretName) {
    template.objects = ((template === null || template === void 0 ? void 0 : template.objects) || []).filter(function (object) { return getName(object) !== secretName; });
};
export var removeCredential = function (template, secretName) {
    var vm = getTemplateVirtualMachineObject(template);
    var accessCredentials = getAccessCredentials(vm);
    if (isEmpty(accessCredentials))
        return;
    var filteredAccessCredentials = accessCredentials.filter(function (credential) { var _a, _b, _c; return ((_c = (_b = (_a = credential === null || credential === void 0 ? void 0 : credential.sshPublicKey) === null || _a === void 0 ? void 0 : _a.source) === null || _b === void 0 ? void 0 : _b.secret) === null || _c === void 0 ? void 0 : _c.secretName) !== secretName; });
    if (filteredAccessCredentials.length > 0) {
        vm.spec.template.spec.accessCredentials = filteredAccessCredentials;
        return;
    }
    delete vm.spec.template.spec.accessCredentials;
};
//# sourceMappingURL=sshkey-utils.js.map