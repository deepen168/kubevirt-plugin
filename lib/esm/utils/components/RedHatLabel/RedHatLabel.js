import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { COMMON_INSTANCETYPES } from '@kubevirt-utils/resources/bootableresources/constants';
import { getLabel } from '@kubevirt-utils/resources/shared';
import { APP_NAME_LABEL } from '@kubevirt-utils/resources/template';
import { Label } from '@patternfly/react-core';
var RedHatLabel = function (_a) {
    var obj = _a.obj;
    var t = useKubevirtTranslation().t;
    if (getLabel(obj, APP_NAME_LABEL) !== COMMON_INSTANCETYPES)
        return null;
    return React.createElement(Label, null, t('Red Hat'));
};
export default RedHatLabel;
//# sourceMappingURL=RedHatLabel.js.map