import * as React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Text, TextVariants } from '@patternfly/react-core';
import { AUTOUNATTEND } from '../sysprep-utils';
import SysprepFileField from '../SysprepFileField';
import SysprepAutounattendHelperPopup from './SysprepAutounattendHelperPopup';
var SysprepAutounattend = function (_a) {
    var onChange = _a.onChange, value = _a.value;
    var t = useKubevirtTranslation().t;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "kv-sysprep--title" },
            React.createElement(Text, { component: TextVariants.h6 }, t('Autounattend.xml answer file')),
            React.createElement(SysprepAutounattendHelperPopup, null)),
        React.createElement(SysprepFileField, { id: AUTOUNATTEND, onChange: onChange, value: value })));
};
export default SysprepAutounattend;
//# sourceMappingURL=SysprepAutounattend.js.map