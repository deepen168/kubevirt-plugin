import React from 'react';
import { Grid, GridItem } from '@patternfly/react-core';
import DetailsLeftGrid from './components/DetailsLeftGrid';
import DetailsRightGrid from './components/DetailsRightGrid';
import './VMDetailsSection.scss';
var VMDetailsSection = function (_a) {
    var instanceTypesAndPreferencesData = _a.instanceTypesAndPreferencesData;
    return (React.createElement("div", { className: "instancetypes-vm-details-section instancetypes-vm-details-body" },
        React.createElement(Grid, { hasGutter: true },
            React.createElement(GridItem, { span: 5 },
                React.createElement(DetailsLeftGrid, { instanceTypesAndPreferencesData: instanceTypesAndPreferencesData })),
            React.createElement(GridItem, { span: 1 }),
            React.createElement(GridItem, { span: 6 },
                React.createElement(DetailsRightGrid, null)))));
};
export default VMDetailsSection;
//# sourceMappingURL=VMDetailsSection.js.map