var _a;
import { ConfigMapModel, PersistentVolumeClaimModel, SecretModel, ServiceAccountModel, } from '@kubevirt-ui/kubevirt-api/console';
import DataVolumeModel from '@kubevirt-ui/kubevirt-api/console/models/DataVolumeModel';
import { VolumeTypes } from '@kubevirt-utils/components/DiskModal/utils/types';
export var mapVolumeTypeToK8sModel = (_a = {},
    _a[VolumeTypes.CONFIG_MAP] = ConfigMapModel,
    _a[VolumeTypes.DATA_VOLUME] = DataVolumeModel,
    _a[VolumeTypes.PERSISTENT_VOLUME_CLAIM] = PersistentVolumeClaimModel,
    _a[VolumeTypes.SECRET] = SecretModel,
    _a[VolumeTypes.SERVICE_ACCOUNT] = ServiceAccountModel,
    _a);
//# sourceMappingURL=constants.js.map