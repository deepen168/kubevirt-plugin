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
import { FormProvider, useForm } from 'react-hook-form';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { Form } from '@patternfly/react-core';
import { isRunning } from '@virtualmachines/utils';
import TabModal from '../TabModal/TabModal';
import AdvancedSettings from './components/AdvancedSettings/AdvancedSettings';
import BootSourceCheckbox from './components/BootSourceCheckbox/BootSourceCheckbox';
import DiskInterfaceSelect from './components/DiskInterfaceSelect/DiskInterfaceSelect';
import DiskNameInput from './components/DiskNameInput/DiskNameInput';
import DynamicSize from './components/DiskSizeInput/DynamicSize';
import DiskSourceContainer from './components/DiskSourceSelect/components/DiskSourceContainer/DiskSourceContainer';
import DiskTypeSelect from './components/DiskTypeSelect/DiskTypeSelect';
import PendingChanges from './components/PendingChanges';
import { CONTAINERDISK_IMAGE_FIELD } from './components/utils/constants';
import { getDefaultCreateValues, getDefaultEditValues } from './utils/form';
import { diskModalTitle, getOS } from './utils/helpers';
import { submit } from './utils/submit';
import { SourceTypes } from './utils/types';
var ContainerDiskModal = function (_a) {
    var editDiskName = _a.editDiskName, isOpen = _a.isOpen, onClose = _a.onClose, onSubmit = _a.onSubmit, vm = _a.vm;
    var os = getOS(vm);
    var isVMRunning = isRunning(vm);
    var isEditDisk = !isEmpty(editDiskName);
    var methods = useForm({
        defaultValues: isEditDisk
            ? getDefaultEditValues(vm, editDiskName)
            : getDefaultCreateValues(vm, SourceTypes.EPHEMERAL),
        mode: 'all',
    });
    var _b = methods.formState, isSubmitting = _b.isSubmitting, isValid = _b.isValid, handleSubmit = methods.handleSubmit;
    return (React.createElement(FormProvider, __assign({}, methods),
        React.createElement(TabModal, { onSubmit: function () {
                return handleSubmit(function (data) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                    return [2 /*return*/, submit({ data: data, editDiskName: editDiskName, onSubmit: onSubmit, vm: vm })];
                }); }); })();
            }, closeOnSubmit: isValid, headerText: diskModalTitle(isEditDisk, isVMRunning), isLoading: isSubmitting, isOpen: isOpen, onClose: onClose },
            React.createElement(PendingChanges, { isVMRunning: isVMRunning }),
            React.createElement(Form, null,
                React.createElement(BootSourceCheckbox, { editDiskName: editDiskName, isDisabled: isVMRunning, vm: vm }),
                React.createElement(DiskNameInput, null),
                React.createElement(DiskSourceContainer, { fieldName: CONTAINERDISK_IMAGE_FIELD, os: os }),
                React.createElement(DynamicSize, null),
                React.createElement(DiskTypeSelect, { isVMRunning: isVMRunning }),
                React.createElement(DiskInterfaceSelect, { isVMRunning: isVMRunning }),
                React.createElement(AdvancedSettings, null)))));
};
export default ContainerDiskModal;
//# sourceMappingURL=ContainerDiskModal.js.map