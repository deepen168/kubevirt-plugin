var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import * as React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Button, Divider, TextInput, Tooltip } from '@patternfly/react-core';
import { Select, SelectGroup, SelectVariant } from '@patternfly/react-core/deprecated';
import { MinusCircleIcon } from '@patternfly/react-icons';
import { EnvironmentKind, MapKindToAbbr } from '../constants';
import { EnvironmentOption } from '../utils';
import EnvironmentSelectOption from './EnvironmentSelectOption';
import './EnvironmentEditor.scss';
var EnvironmentEditor = function (_a) {
    var configMaps = _a.configMaps, diskName = _a.diskName, environmentName = _a.environmentName, environmentNamesSelected = _a.environmentNamesSelected, id = _a.id, kind = _a.kind, onChange = _a.onChange, onRemove = _a.onRemove, secrets = _a.secrets, serial = _a.serial, serviceAccounts = _a.serviceAccounts;
    var t = useKubevirtTranslation().t;
    var _b = React.useState(false), isOpen = _b[0], setOpen = _b[1];
    var onFilter = React.useCallback(function (event, value) {
        var _a, _b, _c;
        var filteredSecrets = (_a = secrets === null || secrets === void 0 ? void 0 : secrets.filter(function (secret) { return secret.metadata.name.includes(value); })) === null || _a === void 0 ? void 0 : _a.map(function (secret) { return (React.createElement(EnvironmentSelectOption, { isDisabled: environmentNamesSelected === null || environmentNamesSelected === void 0 ? void 0 : environmentNamesSelected.includes(secret.metadata.name), key: secret.metadata.name, kind: EnvironmentKind.secret, name: secret.metadata.name })); });
        var filteredConfigMaps = (_b = configMaps === null || configMaps === void 0 ? void 0 : configMaps.filter(function (configMap) { return configMap.metadata.name.includes(value); })) === null || _b === void 0 ? void 0 : _b.map(function (configMap) { return (React.createElement(EnvironmentSelectOption, { isDisabled: environmentNamesSelected === null || environmentNamesSelected === void 0 ? void 0 : environmentNamesSelected.includes(configMap.metadata.name), key: configMap.metadata.name, kind: EnvironmentKind.configMap, name: configMap.metadata.name })); });
        var filteredServiceAccounts = (_c = serviceAccounts === null || serviceAccounts === void 0 ? void 0 : serviceAccounts.filter(function (serviceAccount) { return serviceAccount.metadata.name.includes(value); })) === null || _c === void 0 ? void 0 : _c.map(function (serviceAccount) { return (React.createElement(EnvironmentSelectOption, { isDisabled: environmentNamesSelected === null || environmentNamesSelected === void 0 ? void 0 : environmentNamesSelected.includes(serviceAccount.metadata.name), key: serviceAccount.metadata.name, kind: EnvironmentKind.serviceAccount, name: serviceAccount.metadata.name })); });
        return __spreadArray(__spreadArray(__spreadArray([], filteredSecrets, true), filteredConfigMaps, true), filteredServiceAccounts, true);
    }, [configMaps, environmentNamesSelected, secrets, serviceAccounts]);
    return (React.createElement("div", { className: "row pairs-list__row" },
        React.createElement("div", { className: "col-xs-5 pairs-list__value-pair-field" },
            React.createElement(Select, { onSelect: function (event, selection) {
                    onChange(diskName, selection.getName(), serial, selection.getKind());
                    setOpen(false);
                }, toggleIcon: kind ? (React.createElement("span", { className: "co-m-resource-icon co-m-resource-".concat(kind) }, MapKindToAbbr[kind])) : null, "aria-labelledby": "environment-name-header", hasInlineFilter: true, isOpen: isOpen, maxHeight: 400, menuAppendTo: "parent", onFilter: onFilter, onToggle: function (_, isExpanded) { return setOpen(isExpanded); }, placeholderText: t('Select a resource'), selections: new EnvironmentOption(environmentName, kind), variant: SelectVariant.single },
                React.createElement(SelectGroup, { key: "group1", label: t('Secrets') }, secrets.map(function (secret) { return (React.createElement(EnvironmentSelectOption, { isDisabled: environmentNamesSelected === null || environmentNamesSelected === void 0 ? void 0 : environmentNamesSelected.includes(secret.metadata.name), key: secret.metadata.name, kind: EnvironmentKind.secret, name: secret.metadata.name })); })),
                React.createElement(Divider, { key: "divider1" }),
                React.createElement(SelectGroup, { key: "group2", label: t('Config Maps') }, configMaps.map(function (configMap) { return (React.createElement(EnvironmentSelectOption, { isDisabled: environmentNamesSelected === null || environmentNamesSelected === void 0 ? void 0 : environmentNamesSelected.includes(configMap.metadata.name), key: configMap.metadata.name, kind: EnvironmentKind.configMap, name: configMap.metadata.name })); })),
                React.createElement(Divider, { key: "divider2" }),
                React.createElement(SelectGroup, { key: "group3", label: t('Service Accounts') }, serviceAccounts.map(function (serviceAccount) { return (React.createElement(EnvironmentSelectOption, { isDisabled: environmentNamesSelected === null || environmentNamesSelected === void 0 ? void 0 : environmentNamesSelected.includes(serviceAccount.metadata.name), key: serviceAccount.metadata.name, kind: EnvironmentKind.serviceAccount, name: serviceAccount.metadata.name })); })))),
        React.createElement("div", { className: "col-xs-5 pairs-list__name-field" },
            React.createElement(TextInput, { "aria-labelledby": "environment-serial-header", id: "".concat(id, "-serial"), onChange: function (_, value) { return onChange(diskName, environmentName, value, kind); }, type: "text", value: serial })),
        React.createElement("div", { className: "col-xs-1 pairs-list__action" },
            React.createElement(Tooltip, { content: t('Remove') },
                React.createElement(Button, { className: "pairs-list__span-btns", "data-test-id": "pairs-list__delete-from-btn", onClick: function () { return onRemove(diskName); }, type: "button", variant: "plain" },
                    React.createElement(MinusCircleIcon, { className: "pairs-list__side-btn pairs-list__delete-icon" }),
                    React.createElement("span", { className: "sr-only" }, t('Delete')))))));
};
export default EnvironmentEditor;
//# sourceMappingURL=EnvironmentEditor.js.map