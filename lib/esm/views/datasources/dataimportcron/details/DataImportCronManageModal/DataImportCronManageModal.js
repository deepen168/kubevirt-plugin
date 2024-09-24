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
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { isDataImportCronAutoUpdated } from 'src/views/datasources/utils';
import ExternalLink from '@kubevirt-utils/components/ExternalLink/ExternalLink';
import FormGroupHelperText from '@kubevirt-utils/components/FormGroupHelperText/FormGroupHelperText';
import { FormTextInput } from '@kubevirt-utils/components/FormTextInput/FormTextInput';
import MutedTextSpan from '@kubevirt-utils/components/MutedTextSpan/MutedTextSpan';
import TabModal from '@kubevirt-utils/components/TabModal/TabModal';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Checkbox, Divider, Form, FormGroup, Icon, NumberInput, Popover, Stack, StackItem, ValidatedOptions, } from '@patternfly/react-core';
import { HelpIcon } from '@patternfly/react-icons';
import { CRON_DOC_URL, onDataImportCronManageSubmit } from './utils';
export var DataImportCronManageModal = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h;
    var dataImportCron = _a.dataImportCron, dataSource = _a.dataSource, isOpen = _a.isOpen, onClose = _a.onClose;
    var t = useKubevirtTranslation().t;
    var _j = useState(isDataImportCronAutoUpdated(dataSource, dataImportCron)), allowAutoUpdate = _j[0], setAllowAutoUpdate = _j[1];
    var _k = useForm({
        defaultValues: {
            importsToKeep: ((_b = dataImportCron === null || dataImportCron === void 0 ? void 0 : dataImportCron.spec) === null || _b === void 0 ? void 0 : _b.importsToKeep) || 3,
        },
    }), errors = _k.formState.errors, handleSubmit = _k.handleSubmit, register = _k.register, setValue = _k.setValue, watch = _k.watch;
    var importsToKeep = watch('importsToKeep');
    var onSubmit = handleSubmit(function (data) {
        return onDataImportCronManageSubmit({
            data: __assign(__assign({}, data), { allowAutoUpdate: allowAutoUpdate }),
            resources: {
                dataImportCron: dataImportCron,
                dataSource: dataSource,
            },
        });
    }, function () { return Promise.reject(t('Missing required fields')); });
    return (React.createElement(TabModal, { headerText: t('Manage source for {{dataSource}}', {
            dataSource: (_c = dataImportCron === null || dataImportCron === void 0 ? void 0 : dataImportCron.spec) === null || _c === void 0 ? void 0 : _c.managedDataSource,
        }), isOpen: isOpen, onClose: onClose, onSubmit: function () { return onSubmit(); } },
        React.createElement(Stack, { hasGutter: true },
            React.createElement(StackItem, null,
                React.createElement(MutedTextSpan, { text: "DIC ".concat(dataImportCron.metadata.name) })),
            React.createElement(StackItem, null,
                React.createElement(Form, null,
                    React.createElement(FormGroup, { fieldId: "dataimportcron-manage-source-url", isRequired: true, label: t('Registry URL') },
                        React.createElement(FormTextInput, __assign({}, register('url', { required: true }), { "aria-label": t('Registry URL'), "data-test-id": 'dataimportcron-manage-source-url', defaultValue: (_g = (_f = (_e = (_d = dataImportCron === null || dataImportCron === void 0 ? void 0 : dataImportCron.spec) === null || _d === void 0 ? void 0 : _d.template.spec) === null || _e === void 0 ? void 0 : _e.source) === null || _f === void 0 ? void 0 : _f.registry) === null || _g === void 0 ? void 0 : _g.url, id: 'dataimportcron-manage-source-url', type: "text", validated: (errors === null || errors === void 0 ? void 0 : errors['url']) ? ValidatedOptions.error : ValidatedOptions.default })),
                        React.createElement(FormGroupHelperText, { validated: (errors === null || errors === void 0 ? void 0 : errors['url']) ? ValidatedOptions.error : ValidatedOptions.default }, (errors === null || errors === void 0 ? void 0 : errors['url'])
                            ? t('This field is required')
                            : t('Example: {{exampleURL}}', {
                                exampleURL: 'docker://quay.io/containerdisks/centos:7-2009',
                            }))),
                    React.createElement(Divider, null),
                    React.createElement(FormGroup, { fieldId: "dataimportcron-manage-allow-checkbox" },
                        React.createElement(Checkbox, { id: 'dataimportcron-manage-allow-checkbox', isChecked: allowAutoUpdate, label: t('Allow automatic update'), onChange: function () { return setAllowAutoUpdate(!allowAutoUpdate); } })),
                    allowAutoUpdate && (React.createElement(React.Fragment, null,
                        React.createElement(FormGroup, { labelIcon: React.createElement(Popover, { bodyContent: t('As new versions of a DataSource become available older versions will be replaced') },
                                React.createElement("button", { "aria-describedby": "retain-revision-info", "aria-label": "More info for retain revisions field", className: "pf-c-form__group-label-help", onClick: function (e) { return e.preventDefault(); }, type: "button" },
                                    React.createElement(Icon, null,
                                        React.createElement(HelpIcon, null)))), fieldId: "retain-revision-info", isRequired: true, label: t('Retain revisions') },
                            React.createElement(NumberInput, { id: 'dataimportcron-manage-imports-to-keep', max: 10, min: 0, onMinus: function () { return setValue('importsToKeep', importsToKeep - 1); }, onPlus: function () { return setValue('importsToKeep', importsToKeep + 1); }, value: importsToKeep }),
                            React.createElement(FormGroupHelperText, null,
                                React.createElement(Stack, null,
                                    React.createElement(StackItem, null,
                                        React.createElement(MutedTextSpan, { text: t('Specify the number of revisions that should be retained.') })),
                                    React.createElement(StackItem, null,
                                        React.createElement(MutedTextSpan, { text: t('A value of X means that the X latest versions will be kept') }))))),
                        React.createElement(FormGroup, { fieldId: "dataimportcron-manage-schedule", label: t('Scheduling settings') },
                            React.createElement(FormGroupHelperText, null,
                                React.createElement(React.Fragment, null,
                                    t('Schedule specifies in cron format when and how often to look for new imports.'),
                                    React.createElement(ExternalLink, { href: CRON_DOC_URL, text: t('Learn more') })))),
                        React.createElement(FormGroup, { fieldId: "dataimportcron-manage-cron", label: t('Cron expression') },
                            React.createElement(FormTextInput, __assign({}, register('schedule', {
                                validate: {
                                    required: function (value) {
                                        if (!value && allowAutoUpdate) {
                                            return t('Required when automatic update is enabled');
                                        }
                                        return true;
                                    },
                                },
                            }), { validated: (errors === null || errors === void 0 ? void 0 : errors['schedule']) ? ValidatedOptions.error : ValidatedOptions.default, "aria-label": t('Cron expression'), "data-test-id": 'dataimportcron-manage-cron', defaultValue: (_h = dataImportCron === null || dataImportCron === void 0 ? void 0 : dataImportCron.spec) === null || _h === void 0 ? void 0 : _h.schedule, id: 'dataimportcron-manage-source-cron', type: "text" })),
                            React.createElement(FormGroupHelperText, { validated: (errors === null || errors === void 0 ? void 0 : errors['schedule']) ? ValidatedOptions.error : ValidatedOptions.default }, (errors === null || errors === void 0 ? void 0 : errors['schedule'])
                                ? t('This field is required')
                                : t('Example (At 00:00 on Tuesday): {{exampleCron}}', {
                                    exampleCron: '0 0 * * 2',
                                }))))))))));
};
//# sourceMappingURL=DataImportCronManageModal.js.map