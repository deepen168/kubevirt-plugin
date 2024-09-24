import produce from 'immer';
import { ensurePath, isEmpty } from '@kubevirt-utils/utils/utils';
import { BootMode, BootModeTitles } from './constants';
export var isObjectEmpty = function (obj) { return obj && isEmpty(obj); };
export var getBootloaderFromVM = function (vm) {
    var _a, _b, _c, _d, _e, _f;
    var secureBoot = (_f = (_e = (_d = (_c = (_b = (_a = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _a === void 0 ? void 0 : _a.template) === null || _b === void 0 ? void 0 : _b.spec) === null || _c === void 0 ? void 0 : _c.domain) === null || _d === void 0 ? void 0 : _d.firmware) === null || _e === void 0 ? void 0 : _e.bootloader) === null || _f === void 0 ? void 0 : _f.efi;
    if ((secureBoot === null || secureBoot === void 0 ? void 0 : secureBoot.secureBoot) === true || isObjectEmpty(secureBoot)) {
        return BootMode.uefiSecure;
    }
    if ((secureBoot === null || secureBoot === void 0 ? void 0 : secureBoot.secureBoot) === false) {
        return BootMode.uefi;
    }
    return BootMode.bios;
};
export var getBootloaderTitleFromVM = function (vm) {
    var bootloader = getBootloaderFromVM(vm);
    return BootModeTitles[bootloader];
};
/**
 * A function to return the VirtualMachine object updated with a given boot mode
 * @param {V1VirtualMachine} vm - VirtualMachine object
 * @param {BootloaderOptionValue} firmwareBootloader - selected boot mode
 * @returns {V1VirtualMachine} updated VirtualMachine object
 */
export var updatedVMBootMode = function (vm, firmwareBootloader) {
    return produce(vm, function (vmDraft) {
        ensurePath(vmDraft, 'spec.template.spec.domain.firmware.bootloader');
        ensurePath(vmDraft, 'spec.template.spec.domain.features.smm');
        vmDraft.spec.template.spec.domain.features.smm = { enabled: true };
        switch (firmwareBootloader) {
            case BootMode.uefi:
                vmDraft.spec.template.spec.domain.firmware.bootloader = {
                    efi: { secureBoot: false },
                };
                break;
            case BootMode.uefiSecure:
                vmDraft.spec.template.spec.domain.firmware.bootloader = {
                    efi: { secureBoot: true },
                };
                break;
            default:
                vmDraft.spec.template.spec.domain.firmware.bootloader = { bios: {} };
        }
    });
};
//# sourceMappingURL=utils.js.map