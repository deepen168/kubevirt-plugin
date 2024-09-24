/* eslint-disable require-jsdoc */
var _a;
import BlankDiskModal from '../BlankDiskModal';
import ClonePVCDiskModal from '../ClonePVCDiskModal';
import ContainerDiskModal from '../ContainerDiskModal';
import HTTPDiskModal from '../HTTPDiskModal';
import OtherDiskModal from '../OtherDiskModal';
import PVCDiskModal from '../PVCDiskModal';
import RegistryDiskModal from '../RegistryDiskModal';
import UploadDiskModal from '../UploadDiskModal';
import { SourceTypes } from '../utils/types';
import VolumeSnapshotDiskModal from '../VolumeSnapshotDiskModal';
export var DEFAULT_DISK_SIZE = '30Gi';
export var DEFAULT_CDROM_DISK_SIZE = '10Gi';
export var DiskModalBySource = (_a = {},
    _a[SourceTypes.BLANK] = BlankDiskModal,
    _a[SourceTypes.CLONE_PVC] = ClonePVCDiskModal,
    _a[SourceTypes.EPHEMERAL] = ContainerDiskModal,
    _a[SourceTypes.HTTP] = HTTPDiskModal,
    _a[SourceTypes.PVC] = PVCDiskModal,
    _a[SourceTypes.REGISTRY] = RegistryDiskModal,
    _a[SourceTypes.UPLOAD] = UploadDiskModal,
    _a[SourceTypes.VOLUME_SNAPSHOT] = VolumeSnapshotDiskModal,
    _a);
export var modalsBySource = new Proxy(DiskModalBySource, {
    get: function (target, prop) {
        var _a;
        return (_a = target[prop]) !== null && _a !== void 0 ? _a : OtherDiskModal;
    },
});
//# sourceMappingURL=constants.js.map