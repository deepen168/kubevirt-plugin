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
import React, { useEffect, useState } from 'react';
import HyperConvergedModel from '@kubevirt-ui/kubevirt-api/console/models/HyperConvergedModel';
import NewBadge from '@kubevirt-utils/components/badges/NewBadge/NewBadge';
import HelpTextIcon from '@kubevirt-utils/components/HelpTextIcon/HelpTextIcon';
import { DISABLED_GUEST_SYSTEM_LOGS_ACCESS } from '@kubevirt-utils/hooks/useFeatures/constants';
import { useFeatures } from '@kubevirt-utils/hooks/useFeatures/useFeatures';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { k8sPatch } from '@openshift-console/dynamic-plugin-sdk';
import { Alert, AlertVariant, PopoverPosition, Split, SplitItem, Switch, } from '@patternfly/react-core';
import './guest-system-logs-access.scss';
var GuestSystemLogsAccess = function (_a) {
    var _b, _c;
    var hyperConvergeConfiguration = _a.hyperConvergeConfiguration, _d = _a.newBadge, newBadge = _d === void 0 ? false : _d;
    var t = useKubevirtTranslation().t;
    var hyperConverge = hyperConvergeConfiguration[0], hyperLoaded = hyperConvergeConfiguration[1];
    var guestSystemLogsAccessToggle = useFeatures(DISABLED_GUEST_SYSTEM_LOGS_ACCESS).toggleFeature;
    var disableSerialConsoleLog = (_c = (_b = hyperConverge === null || hyperConverge === void 0 ? void 0 : hyperConverge.spec) === null || _b === void 0 ? void 0 : _b.virtualMachineOptions) === null || _c === void 0 ? void 0 : _c.disableSerialConsoleLog;
    var _e = useState(null), error = _e[0], setError = _e[1];
    var _f = useState(), isChecked = _f[0], setIsChecked = _f[1];
    useEffect(function () {
        guestSystemLogsAccessToggle(!!disableSerialConsoleLog);
        setIsChecked(!disableSerialConsoleLog);
    }, [disableSerialConsoleLog, guestSystemLogsAccessToggle]);
    var onChange = function (checked) { return __awaiter(void 0, void 0, void 0, function () {
        var err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, k8sPatch({
                            data: [
                                {
                                    op: 'replace',
                                    path: "/spec/virtualMachineOptions/disableSerialConsoleLog",
                                    value: !checked,
                                },
                            ],
                            model: HyperConvergedModel,
                            resource: hyperConverge,
                        })];
                case 1:
                    _a.sent();
                    guestSystemLogsAccessToggle(!checked);
                    setIsChecked(checked);
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _a.sent();
                    setError(err_1.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement(React.Fragment, null,
        React.createElement(Split, null,
            React.createElement(SplitItem, { isFilled: true },
                t('Enable guest system log access'),
                ' ',
                React.createElement(HelpTextIcon, { bodyContent: t("Enables access to the VirtualMachine's guest system log. Wait a few seconds for logging to start before viewing the log."), position: PopoverPosition.bottom }),
                newBadge && React.createElement(NewBadge, null)),
            hyperLoaded && (React.createElement(SplitItem, null,
                React.createElement(Switch, { id: "guest-system-log-access", isChecked: isChecked, onChange: function (_, checked) { return onChange(checked); } })))),
        error && (React.createElement(Alert, { className: "GuestSystemLogsAccess--alert", isInline: true, title: t('Error'), variant: AlertVariant.danger }, error))));
};
export default GuestSystemLogsAccess;
//# sourceMappingURL=GuestSystemLogsAccess.js.map