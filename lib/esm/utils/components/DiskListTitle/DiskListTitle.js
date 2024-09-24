import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Title } from '@patternfly/react-core';
import SearchItem from '../SearchItem/SearchItem';
var DiskListTitle = function () {
    var t = useKubevirtTranslation().t;
    return (React.createElement(Title, { headingLevel: "h2" },
        React.createElement(SearchItem, { id: "disks" }, t('Disks'))));
};
export default DiskListTitle;
//# sourceMappingURL=DiskListTitle.js.map