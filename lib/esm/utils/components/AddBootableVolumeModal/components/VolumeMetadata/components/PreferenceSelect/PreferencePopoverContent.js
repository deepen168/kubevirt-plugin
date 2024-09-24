import React from 'react';
import ExternalLink from '@kubevirt-utils/components/ExternalLink/ExternalLink';
import { INSTANCE_TYPES_USER_GUIDE_LINK } from '@kubevirt-utils/constants/url-constants';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
var PreferencePopoverContent = function () {
    var t = useKubevirtTranslation().t;
    return (React.createElement(React.Fragment, null,
        t('The preferred VirtualMachine attribute values required to run a given workload.'),
        ' ',
        React.createElement(ExternalLink, { href: "".concat(INSTANCE_TYPES_USER_GUIDE_LINK, "#virtualmachinepreference"), text: t('Read more') })));
};
export default PreferencePopoverContent;
//# sourceMappingURL=PreferencePopoverContent.js.map