import React from 'react';
import { ConditionsTable, } from '@kubevirt-utils/components/ConditionsTable/ConditionsTable';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Divider, PageSection, PageSectionVariants, Title } from '@patternfly/react-core';
import { DataSourceDetailsGrid } from './components/DataSourceDetailsGrid.tsx/DataSourceDetailsGrid';
var DataSourceDetailsPage = function (_a) {
    var _b;
    var dataSource = _a.obj;
    var t = useKubevirtTranslation().t;
    return (React.createElement("div", null,
        React.createElement(PageSection, { variant: PageSectionVariants.light },
            React.createElement(Title, { className: "co-section-heading", headingLevel: "h2" }, t('DataSource details')),
            React.createElement(DataSourceDetailsGrid, { dataSource: dataSource })),
        React.createElement(Divider, null),
        React.createElement(PageSection, { variant: PageSectionVariants.light },
            React.createElement(Title, { className: "co-section-heading", headingLevel: "h2" }, t('Conditions')),
            React.createElement(ConditionsTable, { conditions: (_b = dataSource === null || dataSource === void 0 ? void 0 : dataSource.status) === null || _b === void 0 ? void 0 : _b.conditions }))));
};
export default DataSourceDetailsPage;
//# sourceMappingURL=DataSourceDetailsPage.js.map