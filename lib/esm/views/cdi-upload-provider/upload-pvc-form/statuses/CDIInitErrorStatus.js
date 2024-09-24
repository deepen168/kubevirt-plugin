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
import { useNavigate } from 'react-router-dom-v5-compat';
import { modelToGroupVersionKind, PodModel } from '@kubevirt-ui/kubevirt-api/console';
import { killUploadPVC } from '@kubevirt-utils/hooks/useCDIUpload/utils';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';
import { Button, ButtonVariant, Checkbox, EmptyStateActions, EmptyStateBody, EmptyStateIcon, Split, SplitItem, Stack, StackItem, Title, } from '@patternfly/react-core';
import { ErrorCircleOIcon } from '@patternfly/react-icons';
import { resourcePath } from '../../utils/utils';
var CDIInitErrorStatus = function (_a) {
    var namespace = _a.namespace, onErrorClick = _a.onErrorClick, pvcName = _a.pvcName;
    var t = useKubevirtTranslation().t;
    var _b = useState(true), shouldKillDv = _b[0], setShouldKillDv = _b[1];
    var _c = useK8sWatchResource({
        groupVersionKind: modelToGroupVersionKind(PodModel),
        name: "cdi-upload-".concat(pvcName),
        namespace: namespace,
    }), pod = _c[0], podLoaded = _c[1], podError = _c[2];
    var navigate = useNavigate();
    var onClick = function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = shouldKillDv;
                    if (!_a) return [3 /*break*/, 2];
                    return [4 /*yield*/, killUploadPVC(pvcName, namespace)];
                case 1:
                    _a = (_b.sent());
                    _b.label = 2;
                case 2:
                    _a;
                    onErrorClick();
                    return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement(React.Fragment, null,
        React.createElement(EmptyStateIcon, { color: "#cf1010", icon: ErrorCircleOIcon }),
        React.createElement(Title, { headingLevel: "h4", size: "lg" }, t('CDI Error: Could not initiate Data Volume')),
        React.createElement(EmptyStateBody, null,
            React.createElement(Stack, { hasGutter: true },
                React.createElement(StackItem, null, t('Data Volume failed to initiate upload, you can either delete the Data Volume and try again, or check logs')),
                React.createElement(StackItem, null,
                    React.createElement(Split, null,
                        React.createElement(SplitItem, { isFilled: true }),
                        React.createElement(Checkbox, { "aria-label": "kill datavolume checkbox", "data-checked-state": shouldKillDv, id: "approve-checkbox", isChecked: shouldKillDv, label: t('Delete Data Volume: {{pvcName}}', { pvcName: pvcName }), onChange: function (_event, checked) { return setShouldKillDv(checked); } }),
                        React.createElement(SplitItem, { isFilled: true }))))),
        React.createElement(Button, { id: "cdi-upload-error-btn", onClick: onClick, variant: "primary" }, shouldKillDv ? t('Back to form (Deletes DataVolume)') : t('Back to form')),
        podLoaded && !podError && pod && (React.createElement(EmptyStateActions, null,
            React.createElement(Button, { onClick: function () { var _a; return navigate("".concat(resourcePath(PodModel, (_a = pod === null || pod === void 0 ? void 0 : pod.metadata) === null || _a === void 0 ? void 0 : _a.name, namespace), "/logs")); }, id: "cdi-upload-check-logs", variant: ButtonVariant.link }, t('Check logs'))))));
};
export default CDIInitErrorStatus;
//# sourceMappingURL=CDIInitErrorStatus.js.map