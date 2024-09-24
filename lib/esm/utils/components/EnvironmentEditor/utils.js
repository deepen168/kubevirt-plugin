var _a;
import { getDisks, getVolumes } from '@kubevirt-utils/resources/vm';
import { EnvironmentKind } from './constants';
var getKindFromEnvVolume = function (volume) {
    if (volume.configMap)
        return EnvironmentKind.configMap;
    if (volume.secret)
        return EnvironmentKind.secret;
    if (volume.serviceAccount)
        return EnvironmentKind.serviceAccount;
    return null;
};
export var getVMEnvironmentsVariables = function (vm) {
    var disksWithSerial = (getDisks(vm) || []).filter(function (disk) { return disk === null || disk === void 0 ? void 0 : disk.serial; });
    return (getVolumes(vm) || []).reduce(function (acc, volume) {
        var _a, _b, _c;
        var envDisk = disksWithSerial.find(function (disk) { return disk.name === volume.name; });
        if (envDisk)
            acc.push({
                diskName: volume.name,
                kind: getKindFromEnvVolume(volume),
                name: ((_a = volume === null || volume === void 0 ? void 0 : volume.configMap) === null || _a === void 0 ? void 0 : _a.name) ||
                    ((_b = volume === null || volume === void 0 ? void 0 : volume.secret) === null || _b === void 0 ? void 0 : _b.secretName) ||
                    ((_c = volume === null || volume === void 0 ? void 0 : volume.serviceAccount) === null || _c === void 0 ? void 0 : _c.serviceAccountName),
                serial: envDisk === null || envDisk === void 0 ? void 0 : envDisk.serial,
            });
        return acc;
    }, []);
};
export var getRandomSerial = function (len) {
    if (len === void 0) { len = 6; }
    return Math.random()
        .toString(36)
        .replace(/[^a-z0-9]+/g, '')
        .substr(1, len);
};
var getConfigMapVolume = function (diskName, name) { return ({
    configMap: {
        name: name,
    },
    name: diskName,
}); };
var getSecretVolume = function (diskName, secretName) { return ({
    name: diskName,
    secret: {
        secretName: secretName,
    },
}); };
var getServiceAccountVolume = function (diskName, serviceAccountName) { return ({
    name: diskName,
    serviceAccount: {
        serviceAccountName: serviceAccountName,
    },
}); };
var MapGettersForKind = (_a = {},
    _a[EnvironmentKind.configMap] = getConfigMapVolume,
    _a[EnvironmentKind.secret] = getSecretVolume,
    _a[EnvironmentKind.serviceAccount] = getServiceAccountVolume,
    _a);
export var updateVolumeForKind = function (envVolume, resourceName, kind) { return MapGettersForKind[kind](envVolume.name, resourceName); };
export var areEnvironmentsChanged = function (environments, initialEnvironments) {
    var allEnvsInInitial = environments.every(function (_a) {
        var name = _a.name, serial = _a.serial;
        return initialEnvironments.find(function (e) { return e.name === name && e.serial === serial; });
    });
    return !allEnvsInInitial || environments.length !== initialEnvironments.length;
};
var EnvironmentOption = /** @class */ (function () {
    function EnvironmentOption(name, kind) {
        var _this = this;
        this.toString = function () { return _this.name; };
        this.name = name;
        this.kind = kind;
    }
    EnvironmentOption.prototype.getKind = function () {
        return this.kind;
    };
    EnvironmentOption.prototype.getName = function () {
        return this.name;
    };
    return EnvironmentOption;
}());
export { EnvironmentOption };
//# sourceMappingURL=utils.js.map