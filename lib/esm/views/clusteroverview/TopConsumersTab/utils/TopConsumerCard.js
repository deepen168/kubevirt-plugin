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
import React, { useMemo } from 'react';
import FormPFSelect from '@kubevirt-utils/components/FormPFSelect/FormPFSelect';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Card, SelectOption } from '@patternfly/react-core';
import { TopConsumerMetric } from './topConsumerMetric';
import { TopConsumersChartList } from './TopConsumersChartList';
import { TopConsumerScope } from './topConsumerScope';
import './TopConsumerCard.scss';
var TopConsumerCard = function (_a) {
    var _b, _c;
    var cardID = _a.cardID, localStorageData = _a.localStorageData, setLocalStorageData = _a.setLocalStorageData;
    var t = useKubevirtTranslation().t;
    var metricKey = useMemo(function () { var _a, _b; return (_b = (_a = localStorageData === null || localStorageData === void 0 ? void 0 : localStorageData[cardID]) === null || _a === void 0 ? void 0 : _a.metric) === null || _b === void 0 ? void 0 : _b.value; }, [cardID, localStorageData]);
    var scopeKey = useMemo(function () { var _a, _b; return (_b = (_a = localStorageData === null || localStorageData === void 0 ? void 0 : localStorageData[cardID]) === null || _a === void 0 ? void 0 : _a.scope) === null || _b === void 0 ? void 0 : _b.value; }, [cardID, localStorageData]);
    var onMetricSelect = function (value) {
        var _a;
        setLocalStorageData(cardID, __assign(__assign({}, localStorageData === null || localStorageData === void 0 ? void 0 : localStorageData[cardID]), { metric: __assign(__assign({}, (_a = localStorageData === null || localStorageData === void 0 ? void 0 : localStorageData[cardID]) === null || _a === void 0 ? void 0 : _a.metric), { value: TopConsumerMetric.fromDropdownLabel(value).toString() }) }));
    };
    var onScopeSelect = function (value) {
        var _a;
        setLocalStorageData(cardID, __assign(__assign({}, localStorageData === null || localStorageData === void 0 ? void 0 : localStorageData[cardID]), { scope: __assign(__assign({}, (_a = localStorageData === null || localStorageData === void 0 ? void 0 : localStorageData[cardID]) === null || _a === void 0 ? void 0 : _a.scope), { value: TopConsumerScope.fromDropdownLabel(value).toString() }) }));
    };
    return (React.createElement(Card, { className: "co-overview-card--gradient kv-top-consumer-card__metric-card" },
        React.createElement("div", { className: "kv-top-consumer-card__header" },
            React.createElement("div", null,
                React.createElement(FormPFSelect, { onSelect: function (e, value) { return onMetricSelect(value); }, selected: t((_b = TopConsumerMetric.fromString(metricKey)) === null || _b === void 0 ? void 0 : _b.getDropdownLabel()), toggleProps: { id: 'kv-top-consumers-card-metric-select' } }, TopConsumerMetric.getAll().map(function (metric) { return (React.createElement(SelectOption, { key: metric === null || metric === void 0 ? void 0 : metric.getValue(), value: t(metric === null || metric === void 0 ? void 0 : metric.getDropdownLabel()) }, t(metric === null || metric === void 0 ? void 0 : metric.getDropdownLabel()))); }))),
            React.createElement("div", { className: "kv-top-consumer-card__scope-select" },
                React.createElement(FormPFSelect, { onSelect: function (e, value) { return onScopeSelect(value); }, selected: t((_c = TopConsumerScope.fromString(scopeKey)) === null || _c === void 0 ? void 0 : _c.getDropdownLabel()), toggleProps: { id: 'kv-top-consumers-card-scope-select' } }, TopConsumerScope.getAll().map(function (scope) { return (React.createElement(SelectOption, { key: scope === null || scope === void 0 ? void 0 : scope.getValue(), value: t(scope === null || scope === void 0 ? void 0 : scope.getDropdownLabel()) }, t(scope === null || scope === void 0 ? void 0 : scope.getDropdownLabel()))); })))),
        React.createElement("div", { className: "kv-top-consumer-card__chart-header" },
            React.createElement("div", null, t('Resource')),
            React.createElement("div", null, t('Usage'))),
        React.createElement(TopConsumersChartList, { localStorageData: localStorageData, metric: TopConsumerMetric.fromString(metricKey), scope: TopConsumerScope.fromString(scopeKey) })));
};
export default TopConsumerCard;
//# sourceMappingURL=TopConsumerCard.js.map