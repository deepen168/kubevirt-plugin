var _a;
import { t } from '@kubevirt-utils/hooks/useKubevirtTranslation';
export var BootMode;
(function (BootMode) {
    BootMode["bios"] = "bios";
    BootMode["uefi"] = "uefi";
    BootMode["uefiSecure"] = "uefiSecure";
})(BootMode || (BootMode = {}));
export var BootModeTitles = (_a = {},
    _a[BootMode.bios] = t('BIOS'),
    _a[BootMode.uefi] = t('UEFI'),
    _a[BootMode.uefiSecure] = t('UEFI (secure)'),
    _a);
export var bootloaderOptions = [
    {
        description: t('Use BIOS when bootloading the guest OS (Default)'),
        title: BootModeTitles[BootMode.bios],
        value: BootMode.bios,
    },
    {
        description: t('Use UEFI when bootloading the guest OS. Requires SMM feature, if the SMM feature is not set, choosing this method will set it to true'),
        title: BootModeTitles[BootMode.uefi],
        value: BootMode.uefi,
    },
    {
        description: t('Use UEFI when bootloading the guest OS. Requires SMM feature, if the SMM feature is not set, choosing this method will set it to true'),
        title: BootModeTitles[BootMode.uefiSecure],
        value: BootMode.uefiSecure,
    },
];
//# sourceMappingURL=constants.js.map