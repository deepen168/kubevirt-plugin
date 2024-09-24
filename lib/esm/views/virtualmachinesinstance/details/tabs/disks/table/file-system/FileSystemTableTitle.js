import React from 'react';
import HelpTextIcon from '@kubevirt-utils/components/HelpTextIcon/HelpTextIcon';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Flex, FlexItem, PopoverPosition, Title } from '@patternfly/react-core';
var FileSystemTableTitle = function () {
    var t = useKubevirtTranslation().t;
    return (React.createElement(Flex, null,
        React.createElement(FlexItem, { spacer: { default: 'spacerXs' } },
            React.createElement(Title, { headingLevel: "h2" }, t('File systems'))),
        React.createElement(FlexItem, null,
            React.createElement(HelpTextIcon, { bodyContent: t('The following information regarding how the disks are partitioned is provided by the guest agent.'), position: PopoverPosition.right }))));
};
export default FileSystemTableTitle;
//# sourceMappingURL=FileSystemTableTitle.js.map