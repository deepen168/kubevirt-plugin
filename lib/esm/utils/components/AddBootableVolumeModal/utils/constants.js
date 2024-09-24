var _a, _b, _c;
import DataImportCronModel from '@kubevirt-ui/kubevirt-api/console/models/DataImportCronModel';
import DataSourceModel from '@kubevirt-ui/kubevirt-api/console/models/DataSourceModel';
import DataVolumeModel from '@kubevirt-ui/kubevirt-api/console/models/DataVolumeModel';
import { DEFAULT_DISK_SIZE } from '@kubevirt-utils/components/DiskModal/utils/constants';
import { OPENSHIFT_OS_IMAGES_NS } from '@kubevirt-utils/constants/constants';
import { CDI_BIND_REQUESTED_ANNOTATION } from '@kubevirt-utils/hooks/useCDIUpload/consts';
import { t } from '@kubevirt-utils/hooks/useKubevirtTranslation';
export var DROPDOWN_FORM_SELECTION;
(function (DROPDOWN_FORM_SELECTION) {
    DROPDOWN_FORM_SELECTION["UPLOAD_VOLUME"] = "volume";
    DROPDOWN_FORM_SELECTION["USE_EXISTING_PVC"] = "pvc";
    DROPDOWN_FORM_SELECTION["USE_REGISTRY"] = "registry";
    DROPDOWN_FORM_SELECTION["USE_SNAPSHOT"] = "snapshot";
})(DROPDOWN_FORM_SELECTION || (DROPDOWN_FORM_SELECTION = {}));
export var optionsValueLabelMapper = (_a = {},
    _a[DROPDOWN_FORM_SELECTION.UPLOAD_VOLUME] = t('Volume'),
    _a[DROPDOWN_FORM_SELECTION.USE_EXISTING_PVC] = t('Volume'),
    _a[DROPDOWN_FORM_SELECTION.USE_REGISTRY] = t('Registry'),
    _a[DROPDOWN_FORM_SELECTION.USE_SNAPSHOT] = t('Volume snapshot'),
    _a);
export var initialBootableVolumeState = {
    annotations: {},
    bootableVolumeName: null,
    bootableVolumeNamespace: null,
    cronExpression: null,
    isIso: false,
    labels: {},
    pvcName: null,
    pvcNamespace: null,
    registryURL: null,
    retainRevisions: 3,
    size: DEFAULT_DISK_SIZE,
    snapshotName: null,
    snapshotNamespace: null,
    storageClassName: null,
    storageClassProvisioner: null,
    uploadFile: null,
    uploadFilename: null,
};
export var initialDataImportCron = {
    apiVersion: 'cdi.kubevirt.io/v1beta1',
    kind: DataImportCronModel.kind,
    metadata: {
        annotations: (_b = {},
            _b[CDI_BIND_REQUESTED_ANNOTATION] = 'true',
            _b),
        name: '',
        namespace: '',
    },
    spec: {
        managedDataSource: '',
        schedule: '',
        template: {
            spec: {},
        },
    },
};
export var emptySourceDataVolume = {
    apiVersion: "".concat(DataVolumeModel.apiGroup, "/").concat(DataVolumeModel.apiVersion),
    kind: DataVolumeModel.kind,
    metadata: {
        annotations: (_c = {},
            _c[CDI_BIND_REQUESTED_ANNOTATION] = 'true',
            _c),
        name: '',
        namespace: OPENSHIFT_OS_IMAGES_NS,
    },
    spec: {
        storage: {
            resources: {
                requests: {
                    storage: '',
                },
            },
        },
    },
};
export var emptyDataSource = {
    apiVersion: "".concat(DataSourceModel.apiGroup, "/").concat(DataSourceModel.apiVersion),
    kind: DataSourceModel.kind,
    metadata: {
        name: '',
        namespace: OPENSHIFT_OS_IMAGES_NS,
    },
    spec: { source: {} },
};
//# sourceMappingURL=constants.js.map