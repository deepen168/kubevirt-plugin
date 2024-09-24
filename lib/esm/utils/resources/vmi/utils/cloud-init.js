import { load } from 'js-yaml';
import { getCloudInitData, getCloudInitVolume, } from '@kubevirt-utils/components/CloudinitModal/utils/cloudinit-utils';
import { CLOUD_INIT_MISSING_USERNAME } from '@kubevirt-utils/components/Consoles/utils/constants';
import { kubevirtConsole } from '@kubevirt-utils/utils/utils';
export var getCloudInitCredentials = function (vm) {
    var _a, _b, _c;
    var cloudInitVolume = getCloudInitVolume(vm);
    var cloudInitData = getCloudInitData(cloudInitVolume);
    try {
        var userDataObject = load(cloudInitData === null || cloudInitData === void 0 ? void 0 : cloudInitData.userData);
        if ((userDataObject === null || userDataObject === void 0 ? void 0 : userDataObject.user) || (userDataObject === null || userDataObject === void 0 ? void 0 : userDataObject.password)) {
            return {
                users: [
                    {
                        name: (userDataObject === null || userDataObject === void 0 ? void 0 : userDataObject.user) || CLOUD_INIT_MISSING_USERNAME,
                        password: userDataObject === null || userDataObject === void 0 ? void 0 : userDataObject.password.toString(),
                    },
                ],
            };
        }
        if ((_a = userDataObject === null || userDataObject === void 0 ? void 0 : userDataObject.passwd) === null || _a === void 0 ? void 0 : _a.users) {
            return {
                users: (_c = (_b = userDataObject === null || userDataObject === void 0 ? void 0 : userDataObject.passwd) === null || _b === void 0 ? void 0 : _b.users) === null || _c === void 0 ? void 0 : _c.map(function (userobject) {
                    return { name: (userobject === null || userobject === void 0 ? void 0 : userobject.name) || CLOUD_INIT_MISSING_USERNAME };
                }),
            };
        }
    }
    catch (e) {
        kubevirtConsole.error(e);
    }
    return { users: [] };
};
//# sourceMappingURL=cloud-init.js.map