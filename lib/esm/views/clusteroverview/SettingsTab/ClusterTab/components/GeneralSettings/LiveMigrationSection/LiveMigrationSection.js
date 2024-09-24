import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import ExpandSection from '../../../../ExpandSection/ExpandSection';
import Limits from './Limits/Limits';
import Network from './Network/Network';
import './live-migration-section.scss';
var LiveMigrationSection = function (_a) {
    var hyperConvergeConfiguration = _a.hyperConvergeConfiguration;
    var t = useKubevirtTranslation().t;
    var hyperConverge = hyperConvergeConfiguration[0];
    return (React.createElement(ExpandSection, { className: "live-migration-tab", toggleText: t('Live migration') },
        React.createElement(Limits, { hyperConverge: hyperConverge }),
        React.createElement(Network, { hyperConverge: hyperConverge })));
};
export default LiveMigrationSection;
//# sourceMappingURL=LiveMigrationSection.js.map