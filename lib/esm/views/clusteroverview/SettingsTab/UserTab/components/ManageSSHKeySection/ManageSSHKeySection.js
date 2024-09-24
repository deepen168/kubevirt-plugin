import React from 'react';
import MutedTextSpan from '@kubevirt-utils/components/MutedTextSpan/MutedTextSpan';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Stack } from '@patternfly/react-core';
import ExpandSection from '../../../ExpandSection/ExpandSection';
import SSHAuthKeysList from './SSHAuthKeysList/SSHAuthKeysList';
var ManageSSHKeySection = function () {
    var t = useKubevirtTranslation().t;
    return (React.createElement(ExpandSection, { toggleText: t('Manage SSH keys') },
        React.createElement(Stack, { hasGutter: true },
            React.createElement(MutedTextSpan, { text: t('Set the public SSH key to automatically apply to any new VirtualMachine you create in the selected project.') }),
            React.createElement(SSHAuthKeysList, null))));
};
export default ManageSSHKeySection;
//# sourceMappingURL=ManageSSHKeySection.js.map