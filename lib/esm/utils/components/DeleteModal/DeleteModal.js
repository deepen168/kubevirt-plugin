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
import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom-v5-compat';
import TabModal from '@kubevirt-utils/components/TabModal/TabModal';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getResourceUrl } from '@kubevirt-utils/resources/shared';
import { getGroupVersionKindForResource, } from '@openshift-console/dynamic-plugin-sdk';
import { useK8sModel } from '@openshift-console/dynamic-plugin-sdk/lib/utils/k8s/hooks/useK8sModel';
import { useLastNamespace } from '@openshift-console/dynamic-plugin-sdk-internal';
import { ButtonVariant } from '@patternfly/react-core';
import ConfirmActionMessage from '../ConfirmActionMessage/ConfirmActionMessage';
var DeleteModal = memo(function (_a) {
    var body = _a.body, headerText = _a.headerText, isOpen = _a.isOpen, obj = _a.obj, onClose = _a.onClose, onDeleteSubmit = _a.onDeleteSubmit, redirectUrl = _a.redirectUrl, _b = _a.shouldRedirect, shouldRedirect = _b === void 0 ? true : _b;
    var t = useKubevirtTranslation().t;
    var navigate = useNavigate();
    var model = useK8sModel(getGroupVersionKindForResource(obj))[0];
    var lastNamespace = useLastNamespace()[0];
    var url = redirectUrl || getResourceUrl({ activeNamespace: lastNamespace, model: model });
    return (React.createElement(TabModal, { onSubmit: function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, onDeleteSubmit()];
                    case 1:
                        _a.sent();
                        shouldRedirect && navigate(url);
                        return [2 /*return*/];
                }
            });
        }); }, headerText: headerText || t('Delete Resource?'), isOpen: isOpen, obj: obj, onClose: onClose, submitBtnText: t('Delete'), submitBtnVariant: ButtonVariant.danger, titleIconVariant: "warning" }, body || React.createElement(ConfirmActionMessage, { obj: obj })));
});
export default DeleteModal;
//# sourceMappingURL=DeleteModal.js.map