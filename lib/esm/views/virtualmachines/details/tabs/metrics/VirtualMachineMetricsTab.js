var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom-v5-compat';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { useVMIAndPodsForVM } from '@kubevirt-utils/resources/vm';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { Overview } from '@openshift-console/dynamic-plugin-sdk';
import { ExpandableSection, Title } from '@patternfly/react-core';
import MigrationCharts from './MigrationCharts/MigrationCharts';
import NetworkCharts from './NetworkCharts/NetworkCharts';
import StorageCharts from './StorageCharts/StorageCharts';
import TimeRange from './TimeRange/TimeRange';
import UtilizationCharts from './UtilizationCharts/UtilizationCharts';
import { MetricsTabExpendedSections } from './utils/utils';
import './virtual-machine-metrics-tab.scss';
var VirtualMachineMetricsTab = function (_a) {
    var _b;
    var _c, _d;
    var vm = _a.obj;
    var t = useKubevirtTranslation().t;
    var location = useLocation();
    var _e = useVMIAndPodsForVM((_c = vm === null || vm === void 0 ? void 0 : vm.metadata) === null || _c === void 0 ? void 0 : _c.name, (_d = vm === null || vm === void 0 ? void 0 : vm.metadata) === null || _d === void 0 ? void 0 : _d.namespace), loaded = _e.loaded, pods = _e.pods, vmi = _e.vmi;
    var _f = useState((_b = {},
        _b[MetricsTabExpendedSections.migration] = true,
        _b[MetricsTabExpendedSections.network] = true,
        _b[MetricsTabExpendedSections.storage] = true,
        _b[MetricsTabExpendedSections.utilization] = true,
        _b)), expended = _f[0], setExpended = _f[1];
    var onToggle = function (value) { return function () {
        return setExpended(function (currentOpen) {
            var _a;
            return (__assign(__assign({}, currentOpen), (_a = {}, _a[value] = !(currentOpen === null || currentOpen === void 0 ? void 0 : currentOpen[value]), _a)));
        });
    }; };
    useEffect(function () {
        if (!isEmpty(location === null || location === void 0 ? void 0 : location.search) && loaded) {
            var focusedSectionId = Object.values(MetricsTabExpendedSections).find(function (focusedSection) { var _a; return (_a = location === null || location === void 0 ? void 0 : location.search) === null || _a === void 0 ? void 0 : _a.includes(focusedSection); });
            var focusedExpandableSection = document.getElementById(focusedSectionId);
            focusedExpandableSection.scrollIntoView();
        }
    }, [location === null || location === void 0 ? void 0 : location.search, loaded]);
    return (React.createElement("div", { className: "virtual-machine-metrics-tab__main" },
        React.createElement(Title, { className: "title", headingLevel: "h2" }, t('Metrics')),
        React.createElement(TimeRange, null),
        React.createElement(Overview, { className: "virtual-machine-metrics-tab__charts" },
            React.createElement(ExpandableSection, { id: MetricsTabExpendedSections.utilization, isExpanded: expended === null || expended === void 0 ? void 0 : expended[MetricsTabExpendedSections.utilization], onToggle: onToggle(MetricsTabExpendedSections.utilization), toggleText: t('Utilization') },
                React.createElement(UtilizationCharts, { pods: pods, vmi: vmi })),
            React.createElement(ExpandableSection, { id: MetricsTabExpendedSections.storage, isExpanded: expended === null || expended === void 0 ? void 0 : expended[MetricsTabExpendedSections.storage], onToggle: onToggle(MetricsTabExpendedSections.storage), toggleText: t('Storage') },
                React.createElement(StorageCharts, { vmi: vmi })),
            React.createElement(ExpandableSection, { id: MetricsTabExpendedSections.network, isExpanded: expended === null || expended === void 0 ? void 0 : expended[MetricsTabExpendedSections.network], onToggle: onToggle(MetricsTabExpendedSections.network), toggleText: t('Network') },
                React.createElement(NetworkCharts, { vmi: vmi })),
            React.createElement(ExpandableSection, { id: MetricsTabExpendedSections.migration, isExpanded: expended === null || expended === void 0 ? void 0 : expended[MetricsTabExpendedSections.migration], onToggle: onToggle(MetricsTabExpendedSections.migration), toggleText: t('Migration') },
                React.createElement(MigrationCharts, { vmi: vmi })))));
};
export default VirtualMachineMetricsTab;
//# sourceMappingURL=VirtualMachineMetricsTab.js.map