import React from 'react';
import ExternalLink from '@kubevirt-utils/components/ExternalLink/ExternalLink';
import FormGroupHelperText from '@kubevirt-utils/components/FormGroupHelperText/FormGroupHelperText';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { FormGroup, NumberInput, Text, TextInput, Title } from '@patternfly/react-core';
var SchedulingSettings = function (_a) {
    var bootableVolume = _a.bootableVolume, setBootableVolumeField = _a.setBootableVolumeField;
    var t = useKubevirtTranslation().t;
    var _b = bootableVolume || {}, cronExpression = _b.cronExpression, retainRevisions = _b.retainRevisions;
    return (React.createElement(React.Fragment, null,
        React.createElement(FormGroup, { fieldId: "volume-registry-retain-revisions", isRequired: true, label: t('Retain revisions') },
            React.createElement(NumberInput, { onChange: function (event) {
                    return setBootableVolumeField('retainRevisions')(event.currentTarget.valueAsNumber);
                }, id: "volume-registry-retain-revisions", min: 0, minusBtnAriaLabel: t('Decrement'), onMinus: function () { return setBootableVolumeField('retainRevisions')(retainRevisions - 1); }, onPlus: function () { return setBootableVolumeField('retainRevisions')(retainRevisions + 1); }, plusBtnAriaLabel: t('Increment'), value: retainRevisions }),
            React.createElement(FormGroupHelperText, null, t('Specify the number of revisions that should be retained. A value of X means that the X latest versions will be kept.'))),
        React.createElement("div", null,
            React.createElement(Title, { headingLevel: "h2", size: "md" }, t('Scheduling settings')),
            React.createElement(Text, null,
                t('Use cron formatting to set when and how often to look for new imports.'),
                ' ',
                React.createElement(ExternalLink, { href: 'https://www.redhat.com/sysadmin/automate-linux-tasks-cron', text: t('Learn more') }))),
        React.createElement(FormGroup, { fieldId: "volume-registry-retain-cron-expression", isRequired: true, label: t('Cron expression') },
            React.createElement(TextInput, { "data-test-id": "volume-registry-retain-cron-expression", id: "volume-registry-retain-cron-expression", onChange: function (_, value) { return setBootableVolumeField('cronExpression')(value); }, type: "text", value: cronExpression }),
            React.createElement(FormGroupHelperText, null, t('Example (At 00:00 on Tuesday): 0 0 * * 2.')))));
};
export default SchedulingSettings;
//# sourceMappingURL=SchedulingSettings.js.map