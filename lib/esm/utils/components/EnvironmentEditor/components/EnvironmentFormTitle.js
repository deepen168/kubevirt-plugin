import React, { memo } from 'react';
import { useLocation } from 'react-router-dom-v5-compat';
import HelpTextIcon from '@kubevirt-utils/components/HelpTextIcon/HelpTextIcon';
import SearchItem from '@kubevirt-utils/components/SearchItem/SearchItem';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Title } from '@patternfly/react-core';
var EnvironmentFormTitle = memo(function () {
    var t = useKubevirtTranslation().t;
    var location = useLocation();
    return (React.createElement(React.Fragment, null,
        !location.pathname.includes('/review/environment') && (React.createElement(SearchItem, { id: "Environment" },
            React.createElement(Title, { headingLevel: "h2" }, t('Environment')))),
        t('Include all values from existing config maps, secrets or service accounts (as disk)'),
        ' ',
        React.createElement(HelpTextIcon, { bodyContent: t('Add new values by referencing an existing config map, secret or service account. Using these values requires mounting them manually to the VM.') })));
});
EnvironmentFormTitle.displayName = 'EnvironmentFormTitle';
export default EnvironmentFormTitle;
//# sourceMappingURL=EnvironmentFormTitle.js.map