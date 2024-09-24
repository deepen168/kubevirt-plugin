export var diskTypes = {
    cdrom: 'cdrom',
    disk: 'disk',
    lun: 'lun',
};
export var diskTypesLabels = {
    cdrom: 'CD-ROM',
    disk: 'Disk',
    lun: 'LUN',
};
export var WINDOWS_DRIVERS_DISK = 'windows-drivers-disk';
export var VIRTIO_WIN_IMAGE = 'virtio-win-image';
export var VIRTIO_WIN_CONFIG_MAP_NAME = 'virtio-win';
// Different releases, different locations. Respect the order when resolving. Otherwise the configMap name/namespace is considered as well-known.
export var VIRTIO_WIN_CONFIG_MAP_NAMESPACES = ['openshift-cnv', 'kubevirt-hyperconverged'];
export var DEFAULT_WINDOWS_DRIVERS_DISK_IMAGE = 'registry.redhat.io/container-native-virtualization/virtio-win';
//# sourceMappingURL=constants.js.map