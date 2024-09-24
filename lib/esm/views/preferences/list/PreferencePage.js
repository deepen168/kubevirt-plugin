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
import React, { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom-v5-compat';
import classNames from 'classnames';
import { VirtualMachineClusterPreferenceModelGroupVersionKind, VirtualMachineClusterPreferenceModelRef, VirtualMachinePreferenceModelRef, } from '@kubevirt-ui/kubevirt-api/console';
import { ALL_NAMESPACES_SESSION_KEY } from '@kubevirt-utils/hooks/constants';
import useIsSearchPage from '@kubevirt-utils/hooks/useIsSearchPage';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import useUserPreferences from '@kubevirt-utils/hooks/useUserPreferences';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { ListPageHeader } from '@openshift-console/dynamic-plugin-sdk';
import { Tab, Tabs, TabTitleText } from '@patternfly/react-core';
import PreferenceCreateButton from './components/PreferenceCreateButton';
import ClusterPreferenceList from './ClusterPreferenceList';
import UserPreferenceList from './UserPreferenceList';
import '@kubevirt-utils/styles/list-managment-group.scss';
var PreferencePage = function (props) {
    var _a;
    var t = useKubevirtTranslation().t;
    var navigate = useNavigate();
    var location = useLocation();
    var activeNamespace = (_a = props === null || props === void 0 ? void 0 : props.namespace) !== null && _a !== void 0 ? _a : ALL_NAMESPACES_SESSION_KEY;
    var isSearchPage = useIsSearchPage();
    var _b = useState((location === null || location === void 0 ? void 0 : location.pathname.includes(VirtualMachineClusterPreferenceModelGroupVersionKind.kind)) ? 0 : 1), activeTabKey = _b[0], setActiveTabKey = _b[1];
    var _c = useUserPreferences(activeNamespace, props === null || props === void 0 ? void 0 : props.fieldSelector, props === null || props === void 0 ? void 0 : props.selector), userPreferences = _c[0], loaded = _c[1], loadError = _c[2];
    var urlUserPreference = useMemo(function () {
        return activeNamespace === ALL_NAMESPACES_SESSION_KEY
            ? "/k8s/all-namespaces/".concat(VirtualMachinePreferenceModelRef)
            : "/k8s/ns/".concat(activeNamespace, "/").concat(VirtualMachinePreferenceModelRef);
    }, [activeNamespace]);
    useEffect(function () {
        if (isSearchPage)
            return;
        navigate(activeTabKey === 0
            ? "/k8s/cluster/".concat(VirtualMachineClusterPreferenceModelRef)
            : urlUserPreference);
    }, [activeTabKey, navigate, urlUserPreference, isSearchPage]);
    if (isSearchPage) {
        var searchParams = new URLSearchParams(location === null || location === void 0 ? void 0 : location.search);
        var kindSearched = searchParams.get('kind');
        return kindSearched === VirtualMachineClusterPreferenceModelRef ? (React.createElement(ClusterPreferenceList, __assign({}, props))) : (React.createElement(UserPreferenceList, __assign({}, props)));
    }
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: classNames({ 'list-header-spacer': activeTabKey === 0 }) },
            React.createElement(ListPageHeader, { title: activeTabKey === 0
                    ? t('VirtualMachineClusterPreferences')
                    : t('VirtualMachinePreferences') }, (activeTabKey === 0 || (!isEmpty(userPreferences) && loaded && !loadError)) && (React.createElement(PreferenceCreateButton, { namespace: activeNamespace })))),
        React.createElement(Tabs, { onSelect: function (_, tabIndex) {
                setActiveTabKey(tabIndex);
            }, activeKey: activeTabKey, style: { flexShrink: 0 } },
            React.createElement(Tab, { eventKey: 0, title: React.createElement(TabTitleText, null, t('Cluster preferences')) },
                React.createElement(ClusterPreferenceList, __assign({}, props))),
            React.createElement(Tab, { eventKey: 1, title: React.createElement(TabTitleText, null, t('User preferences')) },
                React.createElement(UserPreferenceList, __assign({}, props))))));
};
export default PreferencePage;
//# sourceMappingURL=PreferencePage.js.map