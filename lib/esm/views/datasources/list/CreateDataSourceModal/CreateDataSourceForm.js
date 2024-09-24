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
import React from 'react';
import CapacityInput from '@kubevirt-utils/components/CapacityInput/CapacityInput';
import ExternalLink from '@kubevirt-utils/components/ExternalLink/ExternalLink';
import FormGroupHelperText from '@kubevirt-utils/components/FormGroupHelperText/FormGroupHelperText';
import { FormTextInput } from '@kubevirt-utils/components/FormTextInput/FormTextInput';
import MutedTextSpan from '@kubevirt-utils/components/MutedTextSpan/MutedTextSpan';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Form, FormGroup, Icon, NumberInput, Popover, Stack, StackItem, ValidatedOptions, } from '@patternfly/react-core';
import { HelpIcon } from '@patternfly/react-icons';
import { CRON_DOC_URL } from '../../dataimportcron/details/DataImportCronManageModal/utils';
export var CreateDataSourceForm = function (_a) {
    var errors = _a.errors, importsToKeep = _a.importsToKeep, register = _a.register, setValue = _a.setValue, size = _a.size;
    var t = useKubevirtTranslation().t;
    return (React.createElement(Form, null,
        React.createElement(FormGroup, { fieldId: "datasource-create-name", isRequired: true, label: t('Name') },
            React.createElement(FormTextInput, __assign({}, register('name', { required: true }), { "aria-label": t('Name'), "data-test-id": "datasource-create-name", id: "datasource-create-name", type: "text", validated: (errors === null || errors === void 0 ? void 0 : errors['name']) ? ValidatedOptions.error : ValidatedOptions.default })),
            React.createElement(FormGroupHelperText, { validated: (errors === null || errors === void 0 ? void 0 : errors['name']) ? ValidatedOptions.error : ValidatedOptions.default }, (errors === null || errors === void 0 ? void 0 : errors['name']) && t('This field is required'))),
        React.createElement(FormGroup, { "aria-label": t('Registry URL'), fieldId: "datasource-create-source-url", isRequired: true, label: t('Registry URL') },
            React.createElement(FormTextInput, __assign({}, register('url', { required: true }), { "aria-label": t('Registry URL'), "data-test-id": 'datasource-create-source-url', id: 'datasource-create-source-url', type: "text", validated: (errors === null || errors === void 0 ? void 0 : errors['url']) ? ValidatedOptions.error : ValidatedOptions.default })),
            React.createElement(FormGroupHelperText, { validated: (errors === null || errors === void 0 ? void 0 : errors['url']) ? ValidatedOptions.error : ValidatedOptions.default }, (errors === null || errors === void 0 ? void 0 : errors['url'])
                ? t('This field is required')
                : t('Example: {{exampleURL}}', {
                    exampleURL: 'quay.io/containerdisks/centos:7-2009',
                }))),
        React.createElement(CapacityInput, { label: t('Disk size'), onChange: function (value) { return setValue('size', value); }, size: size }),
        React.createElement(FormGroup, { labelIcon: React.createElement(Popover, { bodyContent: t('As new versions of a DataSource become available older versions will be replaced') },
                React.createElement("button", { "aria-describedby": "retain-revision-info", "aria-label": "More info for retain revisions field", className: "pf-c-form__group-label-help", onClick: function (e) { return e.preventDefault(); }, type: "button" },
                    React.createElement(Icon, null,
                        React.createElement(HelpIcon, null)))), fieldId: "retain-revision-info", isRequired: true, label: t('Retain revisions') },
            React.createElement(NumberInput, { id: 'datasource-create-imports-to-keep', max: 10, min: 0, onMinus: function () { return setValue('importsToKeep', importsToKeep - 1); }, onPlus: function () { return setValue('importsToKeep', importsToKeep + 1); }, value: importsToKeep }),
            React.createElement(FormGroupHelperText, null,
                React.createElement(Stack, null,
                    React.createElement(StackItem, null,
                        React.createElement(MutedTextSpan, { text: t('Specify the number of revisions that should be retained.') })),
                    React.createElement(StackItem, null,
                        React.createElement(MutedTextSpan, { text: t('A value of X means that the X latest versions will be kept') }))))),
        React.createElement(FormGroup, { fieldId: "datasource-create-schedule", label: t('Scheduling settings') },
            React.createElement(FormGroupHelperText, null,
                React.createElement(React.Fragment, null,
                    t('Schedule specifies in cron format when and how often to look for new imports.'),
                    React.createElement(ExternalLink, { href: CRON_DOC_URL, text: t('Learn more') })))),
        React.createElement(FormGroup, { fieldId: "datasource-create-cron", isRequired: true, label: t('Cron expression') },
            React.createElement(FormTextInput, __assign({}, register('schedule', {
                validate: {
                    required: function (value) {
                        if (!value) {
                            return t('Required when automatic update is enabled');
                        }
                        return true;
                    },
                },
            }), { "aria-label": t('Cron expression'), "data-test-id": 'datasource-create-cron', id: 'datasource-create-source-cron', isRequired: true, type: "text", validated: (errors === null || errors === void 0 ? void 0 : errors['schedule']) ? ValidatedOptions.error : ValidatedOptions.default })),
            React.createElement(FormGroupHelperText, { validated: (errors === null || errors === void 0 ? void 0 : errors['schedule']) ? ValidatedOptions.error : ValidatedOptions.default }, (errors === null || errors === void 0 ? void 0 : errors['schedule'])
                ? t('This field is required')
                : t('Example (At 00:00 on Tuesday): {{exampleCron}}', {
                    exampleCron: '0 0 * * 2',
                })))));
};
//# sourceMappingURL=CreateDataSourceForm.js.map