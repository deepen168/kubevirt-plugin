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
import { useLocation, useNavigate } from 'react-router-dom-v5-compat';
import ExternalLink from '@kubevirt-utils/components/ExternalLink/ExternalLink';
import { ALL_NAMESPACES_SESSION_KEY } from '@kubevirt-utils/hooks/constants';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { useActiveNamespace } from '@openshift-console/dynamic-plugin-sdk';
import { Button, ButtonVariant, EmptyState, EmptyStateActions, EmptyStateBody, EmptyStateFooter, EmptyStateHeader, EmptyStateIcon, EmptyStateVariant, } from '@patternfly/react-core';
import { StorageDomainIcon } from '@patternfly/react-icons';
import { createURL } from '@virtualmachines/details/tabs/overview/utils/utils';
import { installOrRemoveCheckupsStoragePermissions } from '../utils/utils';
import './CheckupsStorageListEmptyState.scss';
var CheckupsStorageListEmptyState = function (_a) {
    var clusterRoleBinding = _a.clusterRoleBinding, isPermitted = _a.isPermitted, isPermittedToInstall = _a.isPermittedToInstall, loadingPermissions = _a.loadingPermissions;
    var t = useKubevirtTranslation().t;
    var navigate = useNavigate();
    var location = useLocation();
    var namespace = useActiveNamespace()[0];
    var _b = useState(), isLoading = _b[0], setIsLoading = _b[1];
    return (React.createElement(EmptyState, { variant: EmptyStateVariant.lg },
        React.createElement(EmptyStateHeader, { headingLevel: "h4", icon: React.createElement(EmptyStateIcon, { icon: StorageDomainIcon }), titleText: React.createElement(React.Fragment, null, t('No storage checkups found')) }),
        React.createElement(EmptyStateBody, null, t('To get started, install permissions and then run a checkup')),
        React.createElement(EmptyStateFooter, null,
            React.createElement(EmptyStateActions, null,
                React.createElement(Button, { isDisabled: !isPermitted || isLoading || namespace === ALL_NAMESPACES_SESSION_KEY, onClick: function () { return navigate(createURL('form', location.pathname)); } }, t('Run checkup'))),
            React.createElement(EmptyStateActions, null,
                React.createElement(Button, { isDisabled: isLoading ||
                        loadingPermissions ||
                        namespace === ALL_NAMESPACES_SESSION_KEY ||
                        !isPermittedToInstall, onClick: function () { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    setIsLoading(true);
                                    _a.label = 1;
                                case 1:
                                    _a.trys.push([1, , 3, 4]);
                                    return [4 /*yield*/, installOrRemoveCheckupsStoragePermissions(namespace, isPermitted, clusterRoleBinding)];
                                case 2:
                                    _a.sent();
                                    return [3 /*break*/, 4];
                                case 3:
                                    setIsLoading(false);
                                    return [7 /*endfinally*/];
                                case 4: return [2 /*return*/];
                            }
                        });
                    }); }, isLoading: isLoading || loadingPermissions, variant: isLoading ? ButtonVariant.plain : ButtonVariant.secondary }, !isLoading && isPermitted ? t('Remove permissions') : t('Install permissions'))),
            React.createElement(EmptyStateActions, { className: "empty-state-secondary-action" },
                React.createElement(ExternalLink, { href: 'https://docs.openshift.com/container-platform/4.16/virt/monitoring/virt-running-cluster-checkups.html', text: t('Learn more about storage checkups') })))));
};
export default CheckupsStorageListEmptyState;
//# sourceMappingURL=CheckupsStorageListEmptyState.js.map