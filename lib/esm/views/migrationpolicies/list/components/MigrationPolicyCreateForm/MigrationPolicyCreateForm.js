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
import React, { useMemo, useState } from 'react';
import FormGroupHelperText from '@kubevirt-utils/components/FormGroupHelperText/FormGroupHelperText';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Form, FormGroup, TextInput } from '@patternfly/react-core';
import MigrationPolicyConfigurations from '../../../components/MigrationPolicyConfigurations/MigrationPolicyConfigurations';
import MigrationPolicyCreateFormHeader from './copmonents/MigrationPolicyCreateFormHeader/MigrationPolicyCreateFormHeader';
import MigrationPolicyFormDescription from './copmonents/MigrationPolicyFormDescription/MigrationPolicyFormDescription';
import MigrationPolicyFormFooter from './copmonents/MigrationPolicyFormFooter/MigrationPolicyFormFooter';
import SelectorLabelMatchGroup from './copmonents/SelectorLabelMatchGroup/SelectorLabelMatchGroup';
import { initialMigrationPolicyState, produceMigrationPolicy } from './utils/utils';
import './MigrationPolicyCreateForm.scss';
var MigrationPolicyCreateForm = function () {
    var t = useKubevirtTranslation().t;
    var _a = useState(initialMigrationPolicyState), state = _a[0], setState = _a[1];
    var setStateField = function (field) { return function (value) {
        var isvaluefunction = typeof value === 'function';
        setState(function (prevState) {
            var _a;
            return (__assign(__assign({}, prevState), (_a = {}, _a[field] = isvaluefunction ? value(prevState === null || prevState === void 0 ? void 0 : prevState[field]) : value, _a)));
        });
    }; };
    var migrationPolicy = useMemo(function () { return produceMigrationPolicy(state); }, [state]);
    return (React.createElement("div", { className: "migration-policy__form" },
        React.createElement(MigrationPolicyCreateFormHeader, null),
        React.createElement(Form, { className: "migration-policy__form-body" },
            React.createElement(FormGroup, { fieldId: "create-description" },
                React.createElement(MigrationPolicyFormDescription, null)),
            React.createElement(FormGroup, { fieldId: "migration-policy-name", isRequired: true, label: t('MigrationPolicy name') },
                React.createElement(TextInput, { onChange: function (_, value) { return setStateField('migrationPolicyName')(value); }, value: state === null || state === void 0 ? void 0 : state.migrationPolicyName }),
                React.createElement(FormGroupHelperText, null, t('Unique name of the MigrationPolicy'))),
            React.createElement(FormGroup, { fieldId: "migration-policy-description", label: t('Description') },
                React.createElement(TextInput, { onChange: function (_, value) { return setStateField('description')(value); }, value: state === null || state === void 0 ? void 0 : state.description })),
            React.createElement("h2", null, t('Configurations')),
            React.createElement(MigrationPolicyConfigurations, { setState: setState, setStateField: setStateField, state: state }),
            React.createElement("h2", null, t('Labels')),
            React.createElement(FormGroup, { fieldId: "migration-policy-project-selector", label: t('Project labels') },
                React.createElement(SelectorLabelMatchGroup, { labels: state === null || state === void 0 ? void 0 : state.namespaceSelectorMatchLabel, setLabels: setStateField('namespaceSelectorMatchLabel') })),
            React.createElement(FormGroup, { fieldId: "migration-policy-vmi-selector", label: t('VirtualMachineInstance labels') },
                React.createElement(SelectorLabelMatchGroup, { isVMILabel: true, labels: state === null || state === void 0 ? void 0 : state.vmiSelectorMatchLabel, setLabels: setStateField('vmiSelectorMatchLabel') })),
            React.createElement(MigrationPolicyFormFooter, { migrationPolicy: migrationPolicy }))));
};
export default MigrationPolicyCreateForm;
//# sourceMappingURL=MigrationPolicyCreateForm.js.map