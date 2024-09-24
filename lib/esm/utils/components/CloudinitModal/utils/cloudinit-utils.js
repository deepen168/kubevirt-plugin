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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import produce from 'immer';
import { dump, load } from 'js-yaml';
import { getVolumes } from '@kubevirt-utils/resources/vm';
import { isEmpty, kubevirtConsole } from '@kubevirt-utils/utils/utils';
import { AutomaticSubscriptionTypeEnum } from '../../../../views/clusteroverview/SettingsTab/ClusterTab/components/GuestManagmentSection/AutomaticSubscriptionRHELGuests/components/AutomaticSubscriptionType/utils/utils';
import { AUTO_UPDATE_OS_CMD, CLOUD_CONFIG_HEADER, DNF_AUTOMATIC_PACKAGE } from './constants';
export var deleteObjBlankValues = function (obj) {
    var _a;
    if (obj === void 0) { obj = {}; }
    return Object.fromEntries((_a = Object.entries(obj)) === null || _a === void 0 ? void 0 : _a.filter(function (_a) {
        var v = _a[1];
        return !!v;
    }));
};
export var getCloudInitVolume = function (vm) {
    var _a;
    return (_a = getVolumes(vm)) === null || _a === void 0 ? void 0 : _a.find(function (vol) { return !!vol.cloudInitConfigDrive || !!vol.cloudInitNoCloud; });
};
export var getCloudInitData = function (cloudInitVolume) {
    return (cloudInitVolume === null || cloudInitVolume === void 0 ? void 0 : cloudInitVolume.cloudInitConfigDrive) || (cloudInitVolume === null || cloudInitVolume === void 0 ? void 0 : cloudInitVolume.cloudInitNoCloud);
};
export var convertYAMLUserDataObject = function (userData, opts) {
    try {
        return load(userData, opts);
    }
    catch (e) {
        return undefined;
    }
};
export var convertUserDataObjectToYAML = function (userData, addHeader) {
    try {
        var filteredUser = deleteObjBlankValues(userData);
        var result = dump(filteredUser);
        return addHeader ? "".concat(CLOUD_CONFIG_HEADER, "\n").concat(result) : result;
    }
    catch (e) {
        kubevirtConsole.error(e);
        return undefined;
    }
};
export var convertYAMLToNetworkDataObject = function (networkData) {
    var _a, _b, _c, _d, _e, _f, _g;
    try {
        var networkObj = load(networkData);
        var name_1 = (networkObj === null || networkObj === void 0 ? void 0 : networkObj.ethernets) && ((_a = Object.keys(networkObj === null || networkObj === void 0 ? void 0 : networkObj.ethernets)) === null || _a === void 0 ? void 0 : _a[0]);
        var ips = !isEmpty((_c = (_b = networkObj === null || networkObj === void 0 ? void 0 : networkObj.ethernets) === null || _b === void 0 ? void 0 : _b[name_1]) === null || _c === void 0 ? void 0 : _c.addresses) &&
            ((_e = (_d = networkObj === null || networkObj === void 0 ? void 0 : networkObj.ethernets) === null || _d === void 0 ? void 0 : _d[name_1]) === null || _e === void 0 ? void 0 : _e.addresses);
        var addresses = Array.isArray(ips) ? ips === null || ips === void 0 ? void 0 : ips.join(',') : ips;
        var gateway4 = (_g = (_f = networkObj === null || networkObj === void 0 ? void 0 : networkObj.ethernets) === null || _f === void 0 ? void 0 : _f[name_1]) === null || _g === void 0 ? void 0 : _g.gateway4;
        var nonEmptyNetworkObj = !!addresses || !!name_1 || !!gateway4;
        return (nonEmptyNetworkObj && {
            addresses: addresses,
            gateway4: gateway4,
            name: name_1,
        });
    }
    catch (e) {
        kubevirtConsole.error(e);
        return undefined;
    }
};
export var convertNetworkDataObjectToYAML = function (networkData) {
    var _a;
    var _b;
    var _c = networkData || {}, addresses = _c.addresses, gateway4 = _c.gateway4, name = _c.name;
    var hasValue = !isEmpty(name) || !isEmpty(addresses) || !isEmpty(gateway4);
    try {
        return hasValue
            ? dump({
                ethernets: (_a = {},
                    _a[name || ''] = __assign({ addresses: (_b = (addresses || '')) === null || _b === void 0 ? void 0 : _b.replace(/\s/g, '').split(',') }, (gateway4 && { gateway4: gateway4 })),
                    _a),
                version: 2,
            })
            : null;
    }
    catch (e) {
        kubevirtConsole.error(e);
        return undefined;
    }
};
export var createDefaultCloudInitYAML = function () { return ({
    networkData: '',
    userData: '',
}); };
export var addDNFUpdateToRunCMD = function (userData, autoUpdateEnabled) {
    var _a, _b;
    if (autoUpdateEnabled) {
        (_a = userData.packages) !== null && _a !== void 0 ? _a : (userData.packages = []);
        userData.packages.push(DNF_AUTOMATIC_PACKAGE);
        (_b = userData.runcmd) !== null && _b !== void 0 ? _b : (userData.runcmd = []);
        userData.runcmd.push(AUTO_UPDATE_OS_CMD);
    }
};
export var addSubscriptionManagerToRunCMD = function (userData, subscriptionData) {
    var _a;
    var subscriptionManagerCMD = [
        "subscription-manager register --org=".concat(subscriptionData.organizationID, " --activationkey=").concat(subscriptionData.activationKey),
    ];
    if (subscriptionData.customUrl &&
        subscriptionData.type !== AutomaticSubscriptionTypeEnum.ENABLE_PREDICTIVE_ANALYTICS) {
        subscriptionManagerCMD.push(" --serverurl=".concat(subscriptionData.customUrl));
    }
    if (subscriptionData.type === AutomaticSubscriptionTypeEnum.ENABLE_PREDICTIVE_ANALYTICS) {
        subscriptionManagerCMD.push(' && insights-client --register');
    }
    var command = subscriptionManagerCMD.join(' ');
    (_a = userData.runcmd) !== null && _a !== void 0 ? _a : (userData.runcmd = []);
    userData === null || userData === void 0 ? void 0 : userData.runcmd.push(command);
};
export var updateCloudInitRHELSubscription = function (vmVolumes, subscriptionData, autoUpdateEnabled) {
    if (vmVolumes === void 0) { vmVolumes = []; }
    var _a = subscriptionData || {}, activationKey = _a.activationKey, organizationID = _a.organizationID;
    if (isEmpty(organizationID) || isEmpty(activationKey)) {
        return vmVolumes;
    }
    var _b = vmVolumes.reduce(function (result, vol) {
        !isEmpty(getCloudInitData(vol)) ? (result[0] = vol) : result[1].push(vol);
        return result;
    }, [null, []]), cloudInitVol = _b[0], restVolumes = _b[1];
    var cloudInitVolData = getCloudInitData(cloudInitVol);
    var userDataObject = convertYAMLUserDataObject(cloudInitVolData === null || cloudInitVolData === void 0 ? void 0 : cloudInitVolData.userData);
    var updatedUserDataObject = produce(userDataObject, function (draftUserDataObject) {
        addSubscriptionManagerToRunCMD(draftUserDataObject, subscriptionData);
        addDNFUpdateToRunCMD(draftUserDataObject, autoUpdateEnabled);
    });
    var updatedCloudInitVolumeData = produce(cloudInitVolData, function (draftCloudInitVolumeData) {
        draftCloudInitVolumeData.userData = convertUserDataObjectToYAML(updatedUserDataObject, true);
    });
    var updatedCloudInitVolume = produce(cloudInitVol, function (draftCloudInitVolume) {
        draftCloudInitVolume.cloudInitNoCloud = updatedCloudInitVolumeData;
    });
    return __spreadArray(__spreadArray([], restVolumes, true), [updatedCloudInitVolume], false);
};
//# sourceMappingURL=cloudinit-utils.js.map