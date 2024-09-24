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
import React, { useState } from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { ExpandableSection, FormGroup, ModalVariant } from '@patternfly/react-core';
import TabModal from '../TabModal/TabModal';
import SelectSysprep from './SelectSysprep';
import Sysprep from './Sysprep';
export var SysprepModal = function (_a) {
    var initialAutoUnattend = _a.autoUnattend, _b = _a.enableCreation, enableCreation = _b === void 0 ? true : _b, isOpen = _a.isOpen, namespace = _a.namespace, onClose = _a.onClose, onSysprepCreation = _a.onSysprepCreation, onSysprepSelected = _a.onSysprepSelected, _c = _a.shouldCreateConfigMap, shouldCreateConfigMap = _c === void 0 ? true : _c, sysprepSelected = _a.sysprepSelected, initialUnattend = _a.unattend;
    var t = useKubevirtTranslation().t;
    var _d = useState(initialAutoUnattend), autoUnattend = _d[0], setAutoUnattend = _d[1];
    var _e = useState(initialUnattend), unattend = _e[0], setUnattend = _e[1];
    var _f = useState(shouldCreateConfigMap), creationSectionOpen = _f[0], setCreationSection = _f[1];
    var _g = useState(sysprepSelected), selectedSysprepName = _g[0], setSelectedSysprepName = _g[1];
    var submitHandler = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(enableCreation && creationSectionOpen)) return [3 /*break*/, 2];
                    return [4 /*yield*/, onSysprepCreation(unattend, autoUnattend)];
                case 1: return [2 /*return*/, _a.sent()];
                case 2:
                    if (!onSysprepSelected) return [3 /*break*/, 4];
                    return [4 /*yield*/, onSysprepSelected(selectedSysprepName)];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    }); };
    if (!enableCreation) {
        return (React.createElement(TabModal, { headerText: t('Sysprep'), isOpen: isOpen, onClose: onClose, onSubmit: function () { return submitHandler(); } },
            React.createElement("div", { className: "kv-sysprep-modal" },
                React.createElement(FormGroup, { fieldId: "select-sysprep", label: t('Attach existing sysprep') },
                    React.createElement(SelectSysprep, { namespace: namespace, onSelectSysprep: setSelectedSysprepName, selectedSysprepName: selectedSysprepName })))));
    }
    return (React.createElement(TabModal, { headerText: t('Sysprep'), isOpen: isOpen, modalVariant: ModalVariant.medium, onClose: onClose, onSubmit: function () { return submitHandler(); } },
        React.createElement("div", { className: "kv-sysprep-modal" },
            React.createElement(ExpandableSection, { "data-test-id": "expandable-new-sysprep-section", isExpanded: creationSectionOpen, isIndented: true, onToggle: function (_event, val) { return setCreationSection(val); }, toggleText: t('Create new sysprep') },
                React.createElement(Sysprep, { autoUnattend: autoUnattend, onAutoUnattendChange: setAutoUnattend, onUnattendChange: setUnattend, unattend: unattend })),
            React.createElement(ExpandableSection, { "data-test-id": "expandable-new-sysprep-section", isExpanded: !creationSectionOpen, isIndented: true, onToggle: function () { return setCreationSection(!creationSectionOpen); }, toggleText: t('Attach existing sysprep') },
                React.createElement(SelectSysprep, { namespace: namespace, onSelectSysprep: setSelectedSysprepName, selectedSysprepName: selectedSysprepName })))));
};
//# sourceMappingURL=SysprepModal.js.map