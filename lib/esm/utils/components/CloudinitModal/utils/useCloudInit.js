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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
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
import { useEffect, useMemo, useState } from 'react';
import { load } from 'js-yaml';
import { produceVMDisks } from '@catalog/utils/WizardVMContext';
import { InterfaceTypes } from '@kubevirt-utils/components/DiskModal/utils/types';
import { getVolumes } from '@kubevirt-utils/resources/vm';
import { convertNetworkDataObjectToYAML, convertUserDataObjectToYAML, convertYAMLToNetworkDataObject, convertYAMLUserDataObject, createDefaultCloudInitYAML, getCloudInitData, getCloudInitVolume, } from './cloudinit-utils';
export var useCloudInit = function (vm) {
    var cloudInitVol = useMemo(function () { return getCloudInitVolume(vm); }, [vm]);
    var cloudInit = useMemo(function () { return getCloudInitData(cloudInitVol) || createDefaultCloudInitYAML(); }, [cloudInitVol]);
    var _a = useState(cloudInit), yamlJSObject = _a[0], setYamlJSObject = _a[1];
    var _b = useState(), userData = _b[0], setUserData = _b[1];
    var _c = useState(), networkData = _c[0], setNetworkData = _c[1];
    var _d = useState(), latestNetworkData = _d[0], setLatestNetworkData = _d[1];
    var _e = useState(), enableNetworkData = _e[0], setEnableNetworkData = _e[1];
    var wrappedSetEnableNetworkData = function (checked) {
        setLatestNetworkData(networkData);
        setYamlJSObject(function (yaml) {
            var _a = yaml || {}, _b = _a.networkData, _ = _b === void 0 ? '' : _b, restYaml = __rest(_a, ["networkData"]);
            var ntData = convertNetworkDataObjectToYAML(latestNetworkData || networkData);
            return checked
                ? __assign(__assign({}, yaml), (ntData && { networkData: ntData })) : restYaml;
        });
        setEnableNetworkData(checked);
    };
    var updateUserField = function (key, value) {
        setYamlJSObject(function (yamlObj) {
            var _a;
            return __assign(__assign({}, yamlObj), { userData: convertUserDataObjectToYAML(__assign(__assign({}, userData), (_a = {}, _a[key] = value, _a)), true) });
        });
    };
    var updateNetworkField = function (key, value) {
        setYamlJSObject(function (yamlObj) {
            var _a;
            var ntData = convertNetworkDataObjectToYAML(__assign(__assign({}, convertYAMLToNetworkDataObject(yamlObj === null || yamlObj === void 0 ? void 0 : yamlObj.networkData)), (_a = {}, _a[key] = value, _a)));
            var _b = yamlObj || {}, _ = _b.networkData, restYaml = __rest(_b, ["networkData"]);
            return __assign(__assign({}, restYaml), (ntData && { networkData: ntData }));
        });
    };
    var updateFromYAML = function (yaml) {
        var cloudData = load(yaml);
        setYamlJSObject(cloudData);
    };
    useEffect(function () {
        var networkDataObj = (yamlJSObject === null || yamlJSObject === void 0 ? void 0 : yamlJSObject.networkData) && convertYAMLToNetworkDataObject(yamlJSObject === null || yamlJSObject === void 0 ? void 0 : yamlJSObject.networkData);
        networkDataObj && setEnableNetworkData(true);
        setNetworkData(networkDataObj);
        var userDataObj = (yamlJSObject === null || yamlJSObject === void 0 ? void 0 : yamlJSObject.userData) && convertYAMLUserDataObject(yamlJSObject === null || yamlJSObject === void 0 ? void 0 : yamlJSObject.userData);
        setUserData(userDataObj);
    }, [yamlJSObject]);
    var cloudInitVolume = useMemo(function () { return ({
        cloudInitNoCloud: yamlJSObject,
        name: 'cloudinitdisk',
    }); }, [yamlJSObject]);
    var updatedVM = useMemo(function () {
        return produceVMDisks(vm, function (vmDraft) {
            var cloudInitDiskName = (cloudInitVol === null || cloudInitVol === void 0 ? void 0 : cloudInitVol.name) || 'cloudinitdisk';
            var cloudInitDisk = vmDraft.spec.template.spec.domain.devices.disks.find(function (disk) { return disk.name === cloudInitDiskName; });
            // cloudinitdisk deleted or doesn't exist, we need to re-create it
            if (!cloudInitDisk) {
                vmDraft.spec.template.spec.domain.devices.disks.push({
                    disk: {
                        bus: InterfaceTypes.VIRTIO,
                    },
                    name: cloudInitDiskName,
                });
            }
            var otherVolumes = getVolumes(vmDraft).filter(function (vol) { return !vol.cloudInitNoCloud && !vol.cloudInitConfigDrive; });
            vmDraft.spec.template.spec.volumes = __spreadArray(__spreadArray([], otherVolumes, true), [cloudInitVolume], false);
        });
    }, [vm, cloudInitVol === null || cloudInitVol === void 0 ? void 0 : cloudInitVol.name, cloudInitVolume]);
    return {
        cloudInitVolume: cloudInitVolume,
        enableNetworkData: enableNetworkData,
        networkData: networkData,
        setEnableNetworkData: wrappedSetEnableNetworkData,
        updatedVM: updatedVM,
        updateFromYAML: updateFromYAML,
        updateNetworkField: updateNetworkField,
        updateUserField: updateUserField,
        userData: userData,
    };
};
//# sourceMappingURL=useCloudInit.js.map