export var SourceTypes;
(function (SourceTypes) {
    SourceTypes["BLANK"] = "blank";
    SourceTypes["CLONE_PVC"] = "pvc";
    SourceTypes["DATA_SOURCE"] = "dataSource";
    SourceTypes["EPHEMERAL"] = "containerDisk";
    SourceTypes["HTTP"] = "http";
    SourceTypes["OTHER"] = "Other";
    SourceTypes["PVC"] = "persistentVolumeClaim";
    SourceTypes["REGISTRY"] = "registry";
    SourceTypes["UPLOAD"] = "upload";
    SourceTypes["VOLUME_SNAPSHOT"] = "snapshot";
})(SourceTypes || (SourceTypes = {}));
export var InterfaceTypes;
(function (InterfaceTypes) {
    InterfaceTypes["SATA"] = "sata";
    InterfaceTypes["SCSI"] = "scsi";
    InterfaceTypes["VIRTIO"] = "virtio";
})(InterfaceTypes || (InterfaceTypes = {}));
export var VolumeTypes;
(function (VolumeTypes) {
    VolumeTypes["CLOUD_INIT_CONFIG_DRIVE"] = "cloudInitConfigDrive";
    VolumeTypes["CLOUD_INIT_NO_CLOUD"] = "cloudInitNoCloud";
    VolumeTypes["CONFIG_MAP"] = "configMap";
    VolumeTypes["CONTAINER_DISK"] = "containerDisk";
    VolumeTypes["DATA_VOLUME"] = "dataVolume";
    VolumeTypes["PERSISTENT_VOLUME_CLAIM"] = "persistentVolumeClaim";
    VolumeTypes["SECRET"] = "secret";
    VolumeTypes["SERVICE_ACCOUNT"] = "serviceAccount";
})(VolumeTypes || (VolumeTypes = {}));
//# sourceMappingURL=types.js.map