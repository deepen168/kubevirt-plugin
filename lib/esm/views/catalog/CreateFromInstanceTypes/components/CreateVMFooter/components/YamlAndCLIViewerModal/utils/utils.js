var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { isBootableVolumePVCKind } from '@kubevirt-utils/resources/bootableresources/helpers';
import { encodeKeyForVirtctlCommand } from '@kubevirt-utils/resources/secret/utils';
import { getName, getNamespace } from '@kubevirt-utils/resources/shared';
import { isEmpty } from '@kubevirt-utils/utils/utils';
export var getCreateVMVirtctlCommand = function (vm, selectedBootableVolume, sshPubKey) {
    var _a, _b, _c, _d;
    var sourceMetadata = "".concat(getNamespace(selectedBootableVolume), "/").concat(getName(selectedBootableVolume));
    var source = isBootableVolumePVCKind(selectedBootableVolume)
        ? '--volume-clone-pvc='
        : '--volume-datasource=src:';
    var hasSSH = !isEmpty(sshPubKey);
    var encodedSSHCloudInitUserData = hasSSH && "--cloud-init-user-data ".concat(encodeKeyForVirtctlCommand(vm, sshPubKey));
    var commandStructure = __spreadArray([
        'virtctl create vm',
        "--name=".concat(getName(vm)),
        "--instancetype=".concat((_b = (_a = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _a === void 0 ? void 0 : _a.instancetype) === null || _b === void 0 ? void 0 : _b.name),
        "--preference=".concat((_d = (_c = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _c === void 0 ? void 0 : _c.preference) === null || _d === void 0 ? void 0 : _d.name),
        "".concat(source).concat(sourceMetadata)
    ], (hasSSH ? [encodedSSHCloudInitUserData] : []), true);
    return commandStructure.filter(Boolean).join(" \\\n");
};
//# sourceMappingURL=utils.js.map