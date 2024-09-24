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
import React, { useEffect } from 'react';
import { SecretModel } from '@kubevirt-ui/kubevirt-api/console';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import useKubevirtUserSettings from '@kubevirt-utils/hooks/useKubevirtUserSettings/useKubevirtUserSettings';
import useRHELAutomaticSubscription from '@kubevirt-utils/hooks/useRHELAutomaticSubscription/useRHELAutomaticSubscription';
import { getGroupVersionKindForModel, useK8sWatchResource, } from '@openshift-console/dynamic-plugin-sdk';
import { Stack, StackItem, Title } from '@patternfly/react-core';
import { useDrawerContext } from './hooks/useDrawerContext';
import { TemplatesCatalogDrawerCreateForm } from './TemplatesCatalogDrawerCreateForm';
import { TemplatesCatalogDrawerFooterSkeleton } from './TemplatesCatalogDrawerFooterSkeleton';
export var TemplatesCatalogDrawerFooter = function (_a) {
    var namespace = _a.namespace, onCancel = _a.onCancel;
    var t = useKubevirtTranslation().t;
    var _b = useKubevirtUserSettings('ssh'), authorizedSSHKeys = _b[0], updateAuthorizedSSHKeys = _b[1], userSettingsLoaded = _b[2];
    var _c = useRHELAutomaticSubscription(), loadedRHELSubscription = _c.loaded, subscriptionData = _c.subscriptionData;
    var _d = useDrawerContext(), templateDataLoaded = _d.templateDataLoaded, templateLoadingError = _d.templateLoadingError;
    var _e = useK8sWatchResource((authorizedSSHKeys === null || authorizedSSHKeys === void 0 ? void 0 : authorizedSSHKeys[namespace]) && {
        groupVersionKind: getGroupVersionKindForModel(SecretModel),
        isList: false,
        name: authorizedSSHKeys === null || authorizedSSHKeys === void 0 ? void 0 : authorizedSSHKeys[namespace],
        namespace: namespace,
    }), loadError = _e[2];
    useEffect(function () {
        var _a;
        // if an error exists it means the secret can not be reached and should be removed from user settings
        if (loadError && (authorizedSSHKeys === null || authorizedSSHKeys === void 0 ? void 0 : authorizedSSHKeys[namespace])) {
            updateAuthorizedSSHKeys(__assign(__assign({}, authorizedSSHKeys), (_a = {}, _a[namespace] = '', _a)));
        }
    }, [authorizedSSHKeys, loadError, namespace, updateAuthorizedSSHKeys]);
    var loaded = templateDataLoaded && userSettingsLoaded && loadedRHELSubscription;
    if (!loaded && !templateLoadingError) {
        return React.createElement(TemplatesCatalogDrawerFooterSkeleton, null);
    }
    return (React.createElement(Stack, { className: "template-catalog-drawer-info" },
        React.createElement("div", { className: "template-catalog-drawer-footer-section" },
            React.createElement(Stack, { hasGutter: true },
                React.createElement(StackItem, null,
                    React.createElement(Title, { headingLevel: "h1", size: "lg" }, t('Quick create VirtualMachine'))),
                React.createElement(TemplatesCatalogDrawerCreateForm, { authorizedSSHKey: !loadError && (authorizedSSHKeys === null || authorizedSSHKeys === void 0 ? void 0 : authorizedSSHKeys[namespace]), namespace: namespace, onCancel: onCancel, subscriptionData: subscriptionData })))));
};
//# sourceMappingURL=TemplatesCatalogDrawerFooter.js.map