import React, { Fragment, Suspense, useState } from 'react';
import { Trans } from 'react-i18next';
import RandExp from 'randexp';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { Loading } from '@patternfly/quickstarts';
import { Bullseye, Button, ButtonVariant, Form, FormGroup, InputGroup, InputGroupItem, TextInput, } from '@patternfly/react-core';
import { EyeIcon, EyeSlashIcon } from '@patternfly/react-icons';
import FormGroupHelperText from '../FormGroupHelperText/FormGroupHelperText';
import CloudInitEditor from './CloudInitEditor';
import { CloudinitNetworkForm } from './CloudInitNetworkForm';
var CloudinitForm = function (_a) {
    var cloudInitVolume = _a.cloudInitVolume, enableNetworkData = _a.enableNetworkData, networkData = _a.networkData, onEditorSave = _a.onEditorSave, setEnableNetworkData = _a.setEnableNetworkData, setSubmitDisabled = _a.setSubmitDisabled, showEditor = _a.showEditor, updateNetworkField = _a.updateNetworkField, updateUserField = _a.updateUserField, userData = _a.userData;
    var t = useKubevirtTranslation().t;
    var _b = useState(true), passwordHidden = _b[0], setPasswordHidden = _b[1];
    return (React.createElement(Fragment, { key: "cloudinit-editor" }, showEditor ? (React.createElement(Suspense, { fallback: React.createElement(Bullseye, null,
            React.createElement(Loading, null)) },
        React.createElement(CloudInitEditor, { cloudInitVolume: cloudInitVolume, onSave: onEditorSave }))) : (React.createElement(Form, null,
        React.createElement(FormGroup, { className: "kv-cloudint-advanced-tab--validation-text", fieldId: 'cloudinit-user', isRequired: true, label: t('User'), required: true },
            React.createElement(TextInput, { onChange: function (_event, v) {
                    setSubmitDisabled(isEmpty(v));
                    updateUserField('user', v);
                }, id: 'cloudinit-user', type: "text", value: (userData === null || userData === void 0 ? void 0 : userData.user) || '' })),
        React.createElement(FormGroup, { className: "kv-cloudint-advanced-tab--validation-text", fieldId: 'cloudinit-password', label: t('Password') },
            React.createElement(InputGroup, null,
                React.createElement(InputGroupItem, { isFill: true },
                    React.createElement(TextInput, { id: "cloudinit-password", onChange: function (_event, v) { return updateUserField('password', v); }, type: passwordHidden ? 'password' : 'text', value: (userData === null || userData === void 0 ? void 0 : userData.password) || '' })),
                React.createElement(InputGroupItem, null,
                    React.createElement(Button, { onClick: function () { return setPasswordHidden(!passwordHidden); }, variant: ButtonVariant.link }, passwordHidden ? React.createElement(EyeIcon, null) : React.createElement(EyeSlashIcon, null)))),
            React.createElement(FormGroupHelperText, null,
                React.createElement(Trans, { ns: "plugin__kubevirt-plugin", t: t },
                    "Password for this username -",
                    ' ',
                    React.createElement(Button, { onClick: function () {
                            return updateUserField('password', new RandExp(/[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}/).gen());
                        }, isInline: true, variant: ButtonVariant.link }, "generate password")))),
        React.createElement(CloudinitNetworkForm, { enableNetworkData: enableNetworkData, networkData: networkData, setEnableNetworkData: setEnableNetworkData, updateNetworkField: updateNetworkField })))));
};
export default CloudinitForm;
//# sourceMappingURL=CloudinitForm.js.map