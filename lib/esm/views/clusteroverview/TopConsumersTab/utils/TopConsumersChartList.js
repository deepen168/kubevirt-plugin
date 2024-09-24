import React, { useMemo } from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { PrometheusEndpoint, usePrometheusPoll } from '@openshift-console/dynamic-plugin-sdk';
import { CardBody } from '@patternfly/react-core';
import { SHOW_TOP_5_ITEMS, TOP_CONSUMERS_DURATION_KEY, TOP_CONSUMERS_NUM_ITEMS_KEY, } from './constants';
import NoDataAvailableMessage from './NoDataAvailableMessage';
import { getTopConsumerQuery } from './queries';
import { TopConsumerMetric } from './topConsumerMetric';
import TopConsumersProgressChart from './TopConsumersProgressChart';
import { getChartTitle, getHumanizedValue, getValue } from './utils';
import './TopConsumersChartList.scss';
export var TopConsumersChartList = function (_a) {
    var _b, _c;
    var localStorageData = _a.localStorageData, metric = _a.metric, scope = _a.scope;
    var t = useKubevirtTranslation().t;
    var duration = useMemo(function () { return localStorageData === null || localStorageData === void 0 ? void 0 : localStorageData[TOP_CONSUMERS_DURATION_KEY]; }, [localStorageData]);
    var numItemsLabel = useMemo(function () { return localStorageData === null || localStorageData === void 0 ? void 0 : localStorageData[TOP_CONSUMERS_NUM_ITEMS_KEY]; }, [localStorageData]);
    var numItemsToShow = useMemo(function () { return (numItemsLabel === SHOW_TOP_5_ITEMS ? 5 : 10); }, [numItemsLabel]);
    var query = usePrometheusPoll({
        endpoint: PrometheusEndpoint.QUERY,
        endTime: Date.now(),
        query: getTopConsumerQuery(metric === null || metric === void 0 ? void 0 : metric.getValue(), scope === null || scope === void 0 ? void 0 : scope.getValue(), numItemsToShow, duration),
    })[0];
    var numQueryResults = (_c = (_b = query === null || query === void 0 ? void 0 : query.data) === null || _b === void 0 ? void 0 : _b.result) === null || _c === void 0 ? void 0 : _c.length;
    var ChartList = React.useMemo(function () {
        var _a, _b, _c, _d, _e;
        var numLinesToShow = numQueryResults >= numItemsToShow ? numItemsToShow : numQueryResults;
        var max = getValue((_c = (_b = (_a = query === null || query === void 0 ? void 0 : query.data) === null || _a === void 0 ? void 0 : _a.result[0]) === null || _b === void 0 ? void 0 : _b.value) === null || _c === void 0 ? void 0 : _c[1]);
        var charts = [];
        for (var i = 0; i < numLinesToShow; i++) {
            var queryData = (_d = query === null || query === void 0 ? void 0 : query.data) === null || _d === void 0 ? void 0 : _d.result[i];
            var title = getChartTitle(scope, queryData);
            var rawValue = getValue((_e = queryData === null || queryData === void 0 ? void 0 : queryData.value) === null || _e === void 0 ? void 0 : _e[1]);
            var humanizedValue = getHumanizedValue(rawValue, metric);
            charts.push(React.createElement(TopConsumersProgressChart, { key: "chart-".concat(metric === null || metric === void 0 ? void 0 : metric.getValue(), "-").concat(scope === null || scope === void 0 ? void 0 : scope.getValue(), "-").concat(i), labelUnit: humanizedValue.unit, labelValue: humanizedValue.value, maxValue: max, title: title, value: rawValue }));
        }
        return charts;
    }, [query, metric, scope, numItemsToShow, numQueryResults]);
    var showNoDataMessage = numQueryResults === 0;
    return (React.createElement(CardBody, { className: "kv-top-consumers-card__chart-list-container" },
        React.createElement("div", { className: "kv-top-consumers-card__metric-title" }, t(metric === null || metric === void 0 ? void 0 : metric.getChartLabel())),
        React.createElement("div", { className: "kv-top-consumers-card__chart-list-body" }, showNoDataMessage ? (React.createElement(NoDataAvailableMessage, { isVCPU: metric === TopConsumerMetric.VCPU_WAIT })) : (ChartList))));
};
//# sourceMappingURL=TopConsumersChartList.js.map