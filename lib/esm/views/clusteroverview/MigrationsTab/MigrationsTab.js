import * as React from 'react';
import DurationDropdown from '@kubevirt-utils/components/DurationOption/DurationDropdown';
import DurationOption from '@kubevirt-utils/components/DurationOption/DurationOption';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import useLocalStorage from '@kubevirt-utils/hooks/useLocalStorage';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { Overview } from '@openshift-console/dynamic-plugin-sdk';
import { Bullseye, Card, CardBody, CardHeader, CardTitle, Grid, GridItem, } from '@patternfly/react-core';
import BandwidthConsumptionCharts from './components/BandwidthConsumptionCharts/BandwidthConsumptionCharts';
import MigrationEmptyState from './components/MigrationEmptyState/MigrationEmptyState';
import MigrationsChartDonut from './components/MigrationsChartDonut/MigrationsChartDonut';
import MigrationsLimitionsPopover from './components/MigrationsLimitionsPopover/MigrationsLimitionsPopover';
import MigrationTable from './components/MigrationsTable/MigrationsTable';
import { getFilteredDurationVMIMS } from './components/MigrationsTable/utils/utils';
import useMigrationCardDataAndFilters from './hooks/useMigrationCardData';
import { MIGRATIONS_DURATION_KEY } from './utils/constants';
import './MigrationsTab.scss';
var MigrationsTab = function () {
    var t = useKubevirtTranslation().t;
    var _a = useLocalStorage(MIGRATIONS_DURATION_KEY, DurationOption.FIVE_MIN.toString()), duration = _a[0], setDuration = _a[1];
    var migrationCardDataAndFilters = useMigrationCardDataAndFilters(duration);
    var _b = migrationCardDataAndFilters || {}, onFilterChange = _b.onFilterChange, vmims = _b.vmims;
    var filteredVMIMS = getFilteredDurationVMIMS(vmims, duration);
    var onDurationSelect = function (value) { var _a; return setDuration((_a = DurationOption.fromDropdownLabel(value)) === null || _a === void 0 ? void 0 : _a.toString()); };
    return (React.createElement(Overview, null,
        React.createElement(Card, { "data-test": "kv-monitoring-card" },
            React.createElement(CardHeader, { actions: {
                    actions: (React.createElement(React.Fragment, null,
                        React.createElement("div", { className: "kv-top-consumers-card__dropdown--duration" },
                            React.createElement(DurationDropdown, { selectedDuration: duration, selectHandler: onDurationSelect })))),
                    className: 'co-overview-card__actions',
                    hasNoOffset: false,
                }, className: "kv-monitoring-card__header" },
                React.createElement(CardTitle, null,
                    t('VirtualMachineInstanceMigrations information'),
                    " ")),
            React.createElement(CardBody, { className: "kv-monitoring-card__body" }, !isEmpty(filteredVMIMS) ? (React.createElement(Grid, null,
                React.createElement(GridItem, { className: "kv-monitoring-card__graph-separator", span: 6 },
                    React.createElement(CardHeader, { actions: {
                            actions: (React.createElement(React.Fragment, null,
                                React.createElement(MigrationsLimitionsPopover, null))),
                            className: 'co-overview-card__actions',
                            hasNoOffset: false,
                        } },
                        React.createElement(CardTitle, null, t('Migrations'))),
                    React.createElement(CardBody, { className: "kv-monitoring-card__body" },
                        React.createElement(MigrationsChartDonut, { onFilterChange: onFilterChange, vmims: filteredVMIMS }))),
                React.createElement(GridItem, { span: 6 },
                    React.createElement(CardHeader, null,
                        React.createElement(CardTitle, null, t('Bandwidth consumption'))),
                    React.createElement(CardBody, { className: "kv-monitoring-card__body" },
                        React.createElement(BandwidthConsumptionCharts, { duration: duration }))),
                React.createElement(GridItem, { className: "kv-monitoring-card__table-separator", span: 12 },
                    React.createElement(MigrationTable, { tableData: migrationCardDataAndFilters })))) : (React.createElement(Bullseye, null,
                React.createElement(MigrationEmptyState, null)))))));
};
export default MigrationsTab;
//# sourceMappingURL=MigrationsTab.js.map