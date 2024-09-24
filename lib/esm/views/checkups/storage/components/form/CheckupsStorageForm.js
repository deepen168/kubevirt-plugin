import React, { useState } from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { generatePrettyName } from '@kubevirt-utils/utils/utils';
import { Button, ButtonVariant, Form, FormGroup, FormSection, Grid, GridItem, Popover, PopoverPosition, TextInput, } from '@patternfly/react-core';
import { HelpIcon } from '@patternfly/react-icons';
import CheckupsStorageFormActions from './CheckupsStorageFormActions';
import './checkups-storage-form.scss';
var CheckupsStorageForm = function () {
    var t = useKubevirtTranslation().t;
    var _a = useState(generatePrettyName('kubevirt-storage-checkup')), name = _a[0], setName = _a[1];
    var _b = useState('10'), timeOut = _b[0], setTimeOut = _b[1];
    return (React.createElement(Grid, null,
        React.createElement(GridItem, { span: 6 },
            React.createElement(Form, { className: 'CheckupsStorageForm--main' },
                React.createElement(FormSection, { title: t('Run storage checkup'), titleElement: "h1" },
                    t("Storage checkup validating storage is working correctly for VirtualMachines using the kiagnose engine."),
                    React.createElement(FormGroup, { fieldId: "name", isRequired: true, label: t('Name') },
                        React.createElement(TextInput, { id: "name", isRequired: true, name: "name", onChange: function (_event, value) { return setName(value); }, value: name })),
                    React.createElement(FormGroup, { labelIcon: React.createElement(Popover, { bodyContent: t('How much time before the check will try to close itself'), position: PopoverPosition.right },
                            React.createElement(Button, { variant: ButtonVariant.plain },
                                React.createElement(HelpIcon, null))), fieldId: "timeout", isRequired: true, label: t('Timeout (minutes)') },
                        React.createElement(TextInput, { className: "CheckupsStorageForm--main__number-input", id: "timeout", isRequired: true, name: "timeout", onChange: function (_event, val) { return setTimeOut(val); }, type: "number", value: timeOut })),
                    React.createElement(CheckupsStorageFormActions, { name: name, timeOut: timeOut }))))));
};
export default CheckupsStorageForm;
//# sourceMappingURL=CheckupsStorageForm.js.map