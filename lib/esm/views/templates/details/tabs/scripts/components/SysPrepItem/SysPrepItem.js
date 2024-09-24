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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import React from 'react';
import { useParams } from 'react-router-dom-v5-compat';
import { ConfigMapModel, modelToGroupVersionKind, } from '@kubevirt-ui/kubevirt-api/console';
import WindowsLabel from '@kubevirt-utils/components/Labels/WindowsLabel';
import { useModal } from '@kubevirt-utils/components/ModalProvider/ModalProvider';
import { AUTOUNATTEND, UNATTEND } from '@kubevirt-utils/components/SysprepModal/sysprep-utils';
import { SysprepDescription } from '@kubevirt-utils/components/SysprepModal/SysprepDescription';
import { SysprepModal } from '@kubevirt-utils/components/SysprepModal/SysprepModal';
import VirtualMachineDescriptionItem from '@kubevirt-utils/components/VirtualMachineDescriptionItem/VirtualMachineDescriptionItem';
import { DEFAULT_NAMESPACE } from '@kubevirt-utils/constants/constants';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getTemplateVirtualMachineObject } from '@kubevirt-utils/resources/template';
import { getVolumes } from '@kubevirt-utils/resources/vm';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';
import { Button, Flex, FlexItem, Title } from '@patternfly/react-core';
import { PencilAltIcon } from '@patternfly/react-icons';
import useEditTemplateAccessReview from '../../../../hooks/useIsTemplateEditable';
import { deleteTemplateSysprepObject, getTemplateSysprepObject, replaceTemplateSysprepObject, updateSysprepObject, updateTemplateWithSysprep, } from './sysprep-utils';
var SysPrepItem = function (_a) {
    var _b, _c, _d, _e;
    var template = _a.template;
    var namespace = useParams().ns;
    var isTemplateEditable = useEditTemplateAccessReview(template).isTemplateEditable;
    var vm = getTemplateVirtualMachineObject(template);
    var currentVMSysprepName = (_e = (_d = (_c = (_b = getVolumes(vm)) === null || _b === void 0 ? void 0 : _b.find(function (volume) { var _a, _b; return (_b = (_a = volume === null || volume === void 0 ? void 0 : volume.sysprep) === null || _a === void 0 ? void 0 : _a.configMap) === null || _b === void 0 ? void 0 : _b.name; })) === null || _c === void 0 ? void 0 : _c.sysprep) === null || _d === void 0 ? void 0 : _d.configMap) === null || _e === void 0 ? void 0 : _e.name;
    var sysPrepObject = getTemplateSysprepObject(template, currentVMSysprepName);
    var t = useKubevirtTranslation().t;
    var createModal = useModal().createModal;
    var externalSysprepSelected = isEmpty(sysPrepObject) && currentVMSysprepName;
    var _f = useK8sWatchResource(externalSysprepSelected
        ? {
            groupVersionKind: modelToGroupVersionKind(ConfigMapModel),
            name: externalSysprepSelected,
            namespace: namespace,
        }
        : null), externalSysprepConfig = _f[0], sysprepLoaded = _f[1], sysprepLoadError = _f[2];
    var _g = (externalSysprepConfig === null || externalSysprepConfig === void 0 ? void 0 : externalSysprepConfig.data) || (sysPrepObject === null || sysPrepObject === void 0 ? void 0 : sysPrepObject.data) || {}, _h = AUTOUNATTEND, autoUnattend = _g[_h], _j = UNATTEND, unattend = _g[_j];
    var onSysprepSelected = function (newSysprepName) { return __awaiter(void 0, void 0, void 0, function () {
        var templateNoSysprepObj;
        return __generator(this, function (_a) {
            templateNoSysprepObj = deleteTemplateSysprepObject(template, currentVMSysprepName);
            return [2 /*return*/, updateTemplateWithSysprep(templateNoSysprepObj, newSysprepName, currentVMSysprepName)];
        });
    }); };
    var onSysprepCreation = function (newUnattended, newAutoUnattend) {
        var _a;
        var newSysPrepObject = updateSysprepObject(sysPrepObject, newUnattended, newAutoUnattend);
        var templateWithSysPrep = newSysPrepObject
            ? replaceTemplateSysprepObject(template, newSysPrepObject, currentVMSysprepName)
            : deleteTemplateSysprepObject(template, currentVMSysprepName);
        return updateTemplateWithSysprep(templateWithSysPrep, (_a = newSysPrepObject === null || newSysPrepObject === void 0 ? void 0 : newSysPrepObject.metadata) === null || _a === void 0 ? void 0 : _a.name, externalSysprepSelected);
    };
    return (React.createElement(VirtualMachineDescriptionItem, { descriptionHeader: React.createElement(Flex, { className: "vm-description-item__title" },
            React.createElement(FlexItem, null,
                React.createElement(Title, { headingLevel: "h2" },
                    t('Sysprep'),
                    " ",
                    React.createElement(WindowsLabel, null))),
            React.createElement(FlexItem, null,
                React.createElement(Button, { onClick: function () {
                        return createModal(function (modalProps) {
                            var _a;
                            return (React.createElement(SysprepModal, __assign({}, modalProps, { autoUnattend: autoUnattend, namespace: ((_a = vm === null || vm === void 0 ? void 0 : vm.metadata) === null || _a === void 0 ? void 0 : _a.namespace) || DEFAULT_NAMESPACE, onSysprepCreation: onSysprepCreation, onSysprepSelected: onSysprepSelected, sysprepSelected: externalSysprepSelected, unattend: unattend })));
                        });
                    }, isDisabled: !isTemplateEditable, isInline: true, type: "button", variant: "link" },
                    t('Edit'),
                    React.createElement(PencilAltIcon, { className: "co-icon-space-l pf-c-button-icon--plain" })))), descriptionData: React.createElement(SysprepDescription, { error: sysprepLoadError, loaded: sysprepLoaded }) }));
};
export default SysPrepItem;
//# sourceMappingURL=SysPrepItem.js.map