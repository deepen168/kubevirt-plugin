import xbytes from 'xbytes';
import { removeByteSuffix } from '@kubevirt-utils/components/CapacityInput/utils';
import { DEFAULT_DISK_SIZE } from '@kubevirt-utils/components/DiskModal/utils/constants';
import { t } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getTemplateContainerDisks } from '@kubevirt-utils/resources/template';
import { hasSizeUnit } from '@kubevirt-utils/resources/vm/utils/disk/size';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { BLANK_SOURCE_NAME, CONTAINER_DISK_SOURCE_NAME, DEFAULT_SOURCE, HTTP_SOURCE_NAME, PVC_SOURCE_NAME, REGISTRY_SOURCE_NAME, UPLOAD_SOURCE_NAME, } from '../constants';
export var getQuantityFromSource = function (source) {
    var _a, _b, _c;
    var storage = (_c = (_b = (_a = source === null || source === void 0 ? void 0 : source.storage) === null || _a === void 0 ? void 0 : _a.resources) === null || _b === void 0 ? void 0 : _b.requests) === null || _c === void 0 ? void 0 : _c.storage;
    var quantity = hasSizeUnit(storage)
        ? storage
        : xbytes(Number(storage), { iec: true, space: false });
    return removeByteSuffix(quantity);
};
export var getSourceTypeFromDiskSource = function (diskSource) {
    if ('image' in diskSource)
        return CONTAINER_DISK_SOURCE_NAME;
    var dataVolumeSource = diskSource.source;
    if (isEmpty(dataVolumeSource))
        return DEFAULT_SOURCE;
    if (dataVolumeSource === null || dataVolumeSource === void 0 ? void 0 : dataVolumeSource.blank)
        return BLANK_SOURCE_NAME;
    if (dataVolumeSource === null || dataVolumeSource === void 0 ? void 0 : dataVolumeSource.http)
        return HTTP_SOURCE_NAME;
    if (dataVolumeSource === null || dataVolumeSource === void 0 ? void 0 : dataVolumeSource.registry)
        return REGISTRY_SOURCE_NAME;
    if (dataVolumeSource === null || dataVolumeSource === void 0 ? void 0 : dataVolumeSource.pvc)
        return PVC_SOURCE_NAME;
    if (dataVolumeSource === null || dataVolumeSource === void 0 ? void 0 : dataVolumeSource.upload)
        return UPLOAD_SOURCE_NAME;
    return DEFAULT_SOURCE;
};
export var getGenericSourceCustomization = function (diskSourceId, url, storage, storageClassName) {
    var _a;
    var dataVolumeSpec = {
        source: (_a = {},
            _a[diskSourceId] = {},
            _a),
        storage: {
            resources: {
                requests: {
                    storage: storage !== null && storage !== void 0 ? storage : DEFAULT_DISK_SIZE,
                },
            },
        },
    };
    if (url)
        dataVolumeSpec.source[diskSourceId].url = url;
    if (storageClassName)
        dataVolumeSpec.storage.storageClassName = storageClassName;
    return dataVolumeSpec;
};
export var getContainerDiskSource = function (imageURL) { return ({
    image: imageURL,
}); };
export var getPVCSource = function (pvcName, pvcNamespace, storage, storageClassName) {
    var dataVolumeSpec = {
        source: {
            pvc: {
                name: pvcName,
                namespace: pvcNamespace,
            },
        },
    };
    if (storage)
        dataVolumeSpec.storage = {
            resources: {
                requests: {
                    storage: storage,
                },
            },
        };
    if (storageClassName)
        dataVolumeSpec.storage.storageClassName = storageClassName;
    return dataVolumeSpec;
};
export var getRegistryHelperText = function (template) {
    var containerDisks = getTemplateContainerDisks(template);
    if (containerDisks && containerDisks.length > 0)
        return t('Enter a container image (for example: {{containerDisk}})', {
            containerDisk: containerDisks[0],
        });
};
//# sourceMappingURL=utils.js.map