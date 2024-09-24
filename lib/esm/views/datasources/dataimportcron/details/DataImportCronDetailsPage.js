import React from 'react';
import { ConditionsTable, } from '@kubevirt-utils/components/ConditionsTable/ConditionsTable';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Divider, PageSection, PageSectionVariants, Title } from '@patternfly/react-core';
import { DataImportCronDetailsGrid } from './DataImportCronDetailsGrid';
var DataImportCronDetailsPage = function (_a) {
    var _b;
    var dataImportCron = _a.obj;
    var t = useKubevirtTranslation().t;
    return (React.createElement("div", null,
        React.createElement(PageSection, { variant: PageSectionVariants.light },
            React.createElement(Title, { className: "co-section-heading", headingLevel: "h2" }, t('DataImportCron details')),
            React.createElement(DataImportCronDetailsGrid, { dataImportCron: dataImportCron })),
        React.createElement(Divider, null),
        React.createElement(PageSection, { variant: PageSectionVariants.light },
            React.createElement(Title, { className: "co-section-heading", headingLevel: "h2" }, t('Conditions')),
            React.createElement(ConditionsTable, { conditions: (_b = dataImportCron === null || dataImportCron === void 0 ? void 0 : dataImportCron.status) === null || _b === void 0 ? void 0 : _b.conditions }))));
};
export default DataImportCronDetailsPage;
//# sourceMappingURL=DataImportCronDetailsPage.js.map