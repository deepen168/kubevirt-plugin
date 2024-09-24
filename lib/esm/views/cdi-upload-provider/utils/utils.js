import { Children, cloneElement } from 'react';
import DataVolumeModel from '@kubevirt-ui/kubevirt-api/console/models/DataVolumeModel';
import { getGroupVersionKindForModel, k8sDelete, } from '@openshift-console/dynamic-plugin-sdk';
import { ProgressVariant } from '@patternfly/react-core';
import { LABEL_CDROM_SOURCE, UPLOAD_STATUS } from './consts';
import { getKubevirtModelAvailableAPIVersion } from './selectors';
export var killCDIBoundPVC = function (pvc) {
    return k8sDelete({
        model: DataVolumeModel,
        resource: pvc,
    });
};
export var getProgressVariant = function (status) {
    switch (status) {
        case UPLOAD_STATUS.ERROR:
            return ProgressVariant.danger;
        case UPLOAD_STATUS.SUCCESS:
            return ProgressVariant.success;
        default:
            return null;
    }
};
export var joinGrammaticallyListOfItems = function (items, separator) {
    if (separator === void 0) { separator = 'and'; }
    var result = items.join(', ');
    var lastCommaIdx = result.lastIndexOf(',');
    return items.length > 1 && lastCommaIdx >= 0
        ? "".concat(result.substr(0, lastCommaIdx), " ").concat(separator).concat(result.substr(lastCommaIdx + 1))
        : result;
};
export var injectDisabled = function (children, disabled) {
    return Children.map(children, function (c) {
        if ((c === null || c === void 0 ? void 0 : c.type) !== 'button') {
            return c;
        }
        return cloneElement(c, { disabled: c.props.disabled || disabled });
    });
};
var unknownKinds = new Set();
export var resourcePathFromModel = function (model, name, namespace) {
    var crd = model.crd, namespaced = model.namespaced, plural = model.plural;
    var url = '/k8s/';
    if (!namespaced) {
        url += 'cluster/';
    }
    if (namespaced) {
        url += namespace ? "ns/".concat(namespace, "/") : 'all-namespaces/';
    }
    if (crd) {
        url += getGroupVersionKindForModel(model);
    }
    else if (plural) {
        url += plural;
    }
    if (name) {
        // Some resources have a name that needs to be encoded. For instance,
        // Users can have special characters in the name like `#`.
        url += "/".concat(encodeURIComponent(name));
    }
    return url;
};
/**
 * NOTE: This will not work for runtime-defined resources. Use a `connect`-ed component like `ResourceLink` instead.
 */
export var resourcePath = function (modal, name, namespace) {
    if (!modal) {
        if (!unknownKinds.has(modal === null || modal === void 0 ? void 0 : modal.kind)) {
            unknownKinds.add(modal === null || modal === void 0 ? void 0 : modal.kind);
            // eslint-disable-next-line no-console
            console.error("resourcePath: no model for \"".concat(modal === null || modal === void 0 ? void 0 : modal.kind, "\""));
        }
        return;
    }
    return resourcePathFromModel(modal, name, namespace);
};
export var stringValueUnitSplit = function (combinedVal) {
    var index = combinedVal.search(/([a-zA-Z]+)/g);
    var value;
    var unit;
    if (index === -1) {
        value = combinedVal;
    }
    else {
        value = combinedVal.slice(0, index);
        unit = combinedVal.slice(index);
    }
    return [value, unit];
};
var splitVersion = function (osID) {
    return (osID || '')
        .split(/\D/)
        .filter(function (x) { return x; })
        .map(function (num) { return parseInt(num); });
};
export var compareVersions = function (version1, version2) {
    if (!version1 && !version2) {
        return 0;
    }
    // 'devel' version if exist is always the highest version.
    if (version1 === 'devel') {
        return 1;
    }
    if (version2 === 'devel') {
        return -1;
    }
    var finalVersion1 = splitVersion(version1) || [];
    var finalVersion2 = splitVersion(version2) || [];
    var selectedArray = (finalVersion1 === null || finalVersion1 === void 0 ? void 0 : finalVersion1.length) > (finalVersion2 === null || finalVersion2 === void 0 ? void 0 : finalVersion2.length) ? finalVersion1 : finalVersion2;
    var zipped = selectedArray.map(function (_, index) {
        return [finalVersion1 === null || finalVersion1 === void 0 ? void 0 : finalVersion1[index], finalVersion2 === null || finalVersion2 === void 0 ? void 0 : finalVersion2[index]];
    });
    var idx = 0;
    while (idx < zipped.length) {
        /*
          undefined values are equal to 0, eg:
          14.0 == 14 -> zipped = [[14,14],[0,undefined]]
          1.0.0 == 1 -> zipped = [[1,1],[0,undefined],[0,undefined]]
        */
        var ver1 = !zipped[idx][0] ? 0 : zipped[idx][0];
        var ver2 = !zipped[idx][1] ? 0 : zipped[idx][1];
        if (ver1 > ver2) {
            return 1;
        }
        if (ver2 > ver1) {
            return -1;
        }
        idx++;
    }
    return 0;
};
var descSortOSes = function (os1, os2) {
    var nameCMP = (os1.name || '').localeCompare(os2.name || '');
    if (nameCMP !== 0) {
        return nameCMP * -1;
    }
    return compareVersions(os1.id, os2.id) * -1;
};
export var removeOSDups = function (osArr) {
    var osNames = new Set();
    return osArr
        .reduce(function (acc, os) {
        if ((os === null || os === void 0 ? void 0 : os.name) && !osNames.has(os === null || os === void 0 ? void 0 : os.name)) {
            osNames.add(os === null || os === void 0 ? void 0 : os.name);
            acc.push(os);
        }
        return acc;
    }, [])
        .sort(descSortOSes);
};
export var updateDV = function (_a) {
    var _b;
    var accessMode = _a.accessMode, mountAsCDROM = _a.mountAsCDROM, namespace = _a.namespace, pvcName = _a.pvcName, requestSizeUnit = _a.requestSizeUnit, requestSizeValue = _a.requestSizeValue, storageClassName = _a.storageClassName, volumeMode = _a.volumeMode;
    var obj = {
        apiVersion: getKubevirtModelAvailableAPIVersion(DataVolumeModel),
        kind: DataVolumeModel.kind,
        metadata: {
            labels: (_b = {},
                _b[LABEL_CDROM_SOURCE] = mountAsCDROM === null || mountAsCDROM === void 0 ? void 0 : mountAsCDROM.toString(),
                _b),
            name: pvcName,
            namespace: namespace,
        },
        spec: {
            source: {
                upload: {},
            },
            storage: {
                accessModes: [accessMode],
                resources: {
                    requests: {
                        storage: "".concat(requestSizeValue).concat(requestSizeUnit),
                    },
                },
                storageClassName: storageClassName,
                volumeMode: volumeMode,
            },
        },
    };
    return obj;
};
//# sourceMappingURL=utils.js.map