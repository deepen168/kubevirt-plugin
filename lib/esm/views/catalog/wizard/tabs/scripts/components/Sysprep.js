var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from 'react';
import { produceVMSysprep, useWizardVMContext } from '@catalog/utils/WizardVMContext';
import { WizardDescriptionItem } from '@catalog/wizard/components/WizardDescriptionItem';
import WindowsLabel from '@kubevirt-utils/components/Labels/WindowsLabel';
import { useModal } from '@kubevirt-utils/components/ModalProvider/ModalProvider';
import { AUTOUNATTEND, getSysprepConfigMapName, removeSysprepConfig, UNATTEND, WINDOWS, } from '@kubevirt-utils/components/SysprepModal/sysprep-utils';
import { SysprepDescription } from '@kubevirt-utils/components/SysprepModal/SysprepDescription';
import { SysprepModal } from '@kubevirt-utils/components/SysprepModal/SysprepModal';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getVolumes } from '@kubevirt-utils/resources/vm';
import { getRandomChars } from '@kubevirt-utils/utils/utils';
import { editSysprepObject, isSysprepConfig, pushSysprepObject, removeSysprepObject, } from './sysprep-utils';
var Sysprep = function () {
    var _a, _b, _c, _d;
    var t = useKubevirtTranslation().t;
    var createModal = useModal().createModal;
    var _e = useWizardVMContext(), tabsData = _e.tabsData, updateTabsData = _e.updateTabsData, updateVM = _e.updateVM, vm = _e.vm;
    var currentSysprepVolume = (_a = getVolumes(vm)) === null || _a === void 0 ? void 0 : _a.find(function (volume) { var _a, _b; return (_b = (_a = volume === null || volume === void 0 ? void 0 : volume.sysprep) === null || _a === void 0 ? void 0 : _a.configMap) === null || _b === void 0 ? void 0 : _b.name; });
    var currentVMSysprepName = getSysprepConfigMapName(currentSysprepVolume);
    var filterSysprepByName = isSysprepConfig(currentVMSysprepName);
    var sysPrepObject = (_b = tabsData === null || tabsData === void 0 ? void 0 : tabsData.additionalObjects) === null || _b === void 0 ? void 0 : _b.find(filterSysprepByName);
    var _f = (sysPrepObject === null || sysPrepObject === void 0 ? void 0 : sysPrepObject.data) || {}, _g = AUTOUNATTEND, autoUnattend = _f[_g], _h = UNATTEND, unattend = _f[_h];
    var selectedSysprep = !sysPrepObject && currentVMSysprepName;
    var onSysprepSelected = function (newSysprep) {
        updateTabsData(function (tabsDraft) {
            tabsDraft.additionalObjects = ((tabsDraft === null || tabsDraft === void 0 ? void 0 : tabsDraft.additionalObjects) || []).filter(function (object) { return !filterSysprepByName(object); });
        });
        return updateVM(function (vmDraft) {
            if (currentSysprepVolume)
                removeSysprepConfig(vmDraft, currentSysprepVolume.name);
            if (newSysprep) {
                var produced = produceVMSysprep(vmDraft, newSysprep);
                vmDraft.spec = produced.spec;
            }
        });
    };
    var onSysprepCreation = function (unattended, autounattend) {
        var _a;
        var _b, _c;
        if (!unattended && !autounattend) {
            return removeSysprepObject(updateVM, updateTabsData, currentVMSysprepName);
        }
        var sysprepName = ((_b = sysPrepObject === null || sysPrepObject === void 0 ? void 0 : sysPrepObject.metadata) === null || _b === void 0 ? void 0 : _b.name) || "sysprep-".concat((_c = vm === null || vm === void 0 ? void 0 : vm.metadata) === null || _c === void 0 ? void 0 : _c.name, "-").concat(getRandomChars());
        var sysprepData = (_a = {}, _a[AUTOUNATTEND] = autounattend, _a[UNATTEND] = unattended, _a);
        if (sysPrepObject) {
            editSysprepObject(updateTabsData, sysprepName, sysprepData);
        }
        else {
            pushSysprepObject(vm, updateTabsData, sysprepData, sysprepName);
        }
        return updateVM(function (vmDraft) {
            if (currentSysprepVolume)
                removeSysprepConfig(vmDraft, currentSysprepVolume.name);
            var produced = produceVMSysprep(vmDraft, sysprepName);
            vmDraft.spec = produced.spec;
        });
    };
    return (React.createElement(WizardDescriptionItem, { onEditClick: function () {
            return createModal(function (modalProps) {
                var _a;
                return (React.createElement(SysprepModal, __assign({}, modalProps, { autoUnattend: autoUnattend, namespace: (_a = vm === null || vm === void 0 ? void 0 : vm.metadata) === null || _a === void 0 ? void 0 : _a.namespace, onSysprepCreation: onSysprepCreation, onSysprepSelected: onSysprepSelected, sysprepSelected: selectedSysprep, unattend: unattend })));
            });
        }, description: React.createElement(SysprepDescription, { loaded: true, selectedSysprepName: currentVMSysprepName }), isDisabled: ((_d = (_c = tabsData === null || tabsData === void 0 ? void 0 : tabsData.overview) === null || _c === void 0 ? void 0 : _c.templateMetadata) === null || _d === void 0 ? void 0 : _d.osType) !== WINDOWS, isEdit: true, label: React.createElement(WindowsLabel, null), showEditOnTitle: true, testId: "wizard-sysprep", title: t('Sysprep') }));
};
export default Sysprep;
//# sourceMappingURL=Sysprep.js.map