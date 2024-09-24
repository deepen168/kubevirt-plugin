var _a;
import { InterfaceTypes } from '@kubevirt-utils/components/DiskModal/utils/types';
import { t } from '@kubevirt-utils/hooks/useKubevirtTranslation';
export var diskInterfaceOptions = (_a = {},
    _a[InterfaceTypes.SATA] = {
        description: t('Supported by most operating systems including Windows out of the box. Offers lower performance compared to virtio. Consider using it for CD-ROM devices.'),
        label: t('SATA'),
    },
    _a[InterfaceTypes.SCSI] = {
        description: t('Paravirtualized iSCSI HDD driver offers similar functionality to the virtio-block device, with some additional enhancements. In particular, this driver supports adding hundreds of devices, and names devices using the standard SCSI device naming scheme.'),
        label: t('SCSI'),
    },
    _a[InterfaceTypes.VIRTIO] = {
        description: t('Optimized for best performance. Supported by most Linux distributions. Windows requires additional drivers to use this model.'),
        label: t('VirtIO'),
    },
    _a);
//# sourceMappingURL=constants.js.map