import * as React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Text, TextVariants } from '@patternfly/react-core';
import { UNATTEND } from '../sysprep-utils';
import SysprepFileField from '../SysprepFileField';
import SysprepUnattendHelperPopup from './SysprepUnattendHelperPopup';
var SysprepUnattend = function (_a) {
    var onChange = _a.onChange, value = _a.value;
    var t = useKubevirtTranslation().t;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "kv-sysprep--title" },
            React.createElement(Text, { component: TextVariants.h6 }, t('Unattend.xml answer file')),
            React.createElement(SysprepUnattendHelperPopup, null)),
        React.createElement(SysprepFileField, { id: UNATTEND, onChange: onChange, value: value })));
};
export default SysprepUnattend;
//# sourceMappingURL=SysprepUnattend.js.map