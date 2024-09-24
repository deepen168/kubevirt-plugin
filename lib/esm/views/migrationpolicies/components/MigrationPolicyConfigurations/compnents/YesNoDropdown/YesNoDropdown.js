import React from 'react';
import FormPFSelect from '@kubevirt-utils/components/FormPFSelect/FormPFSelect';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { SelectOption } from '@patternfly/react-core';
import { getBooleanText } from '../../../../utils/utils';
var YesNoDropdown = function (_a) {
    var setState = _a.setState, state = _a.state;
    var t = useKubevirtTranslation().t;
    return (React.createElement(FormPFSelect, { popperProps: { width: '141px' }, selected: getBooleanText(state) },
        React.createElement(SelectOption, { key: "yes-opt", onClick: function () { return setState(true); }, value: t('Yes') }, t('Yes')),
        React.createElement(SelectOption, { key: "no-opt", onClick: function () { return setState(false); }, value: t('No') }, t('No'))));
};
export default YesNoDropdown;
//# sourceMappingURL=YesNoDropdown.js.map