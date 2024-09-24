import React from 'react';
import { Link } from 'react-router-dom-v5-compat';
import DurationDropdown from '@kubevirt-utils/components/DurationOption/DurationDropdown';
import DurationOption from '@kubevirt-utils/components/DurationOption/DurationOption';
import FormPFSelect from '@kubevirt-utils/components/FormPFSelect/FormPFSelect';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import useKubevirtUserSettingsTopConsumerCards from '@kubevirt-utils/hooks/useKubevirtUserSettings/useKubevirtUserSettingsTopConsumerCards';
import { Overview } from '@openshift-console/dynamic-plugin-sdk';
import { Card, CardBody, CardHeader, CardTitle, SelectOption } from '@patternfly/react-core';
import { TOP_CONSUMERS_DURATION_KEY, TOP_CONSUMERS_NUM_ITEMS_KEY } from './utils/constants';
import TopConsumersGridRow from './utils/TopConsumersGridRow';
import { TOP_AMOUNT_SELECT_OPTIONS } from './utils/utils';
import './TopConsumersTab.scss';
var TopConsumersTab = function () {
    var t = useKubevirtTranslation().t;
    var _a = useKubevirtUserSettingsTopConsumerCards(), localStorageData = _a[0], setLocalStorageData = _a[1];
    var onNumItemsSelect = function (value) { return setLocalStorageData(TOP_CONSUMERS_NUM_ITEMS_KEY, value); };
    var onDurationSelect = function (value) {
        return setLocalStorageData(TOP_CONSUMERS_DURATION_KEY, DurationOption.fromDropdownLabel(value).toString());
    };
    return (React.createElement(Overview, null,
        React.createElement(Card, { "data-test": "kv-top-consumers-card" },
            React.createElement(CardHeader, { actions: {
                    actions: (React.createElement(React.Fragment, null,
                        React.createElement(Link, { to: "/monitoring/dashboards/grafana-dashboard-kubevirt-top-consumers?period=4h" }, t('View virtualization dashboard')),
                        React.createElement("div", { className: "kv-top-consumers-card__dropdown--duration" },
                            React.createElement(DurationDropdown, { selectedDuration: localStorageData === null || localStorageData === void 0 ? void 0 : localStorageData[TOP_CONSUMERS_DURATION_KEY], selectHandler: onDurationSelect })),
                        React.createElement("div", { className: "kv-top-consumers-card__dropdown--num-items" },
                            React.createElement(FormPFSelect, { onSelect: function (e, value) { return onNumItemsSelect(value); }, selected: localStorageData === null || localStorageData === void 0 ? void 0 : localStorageData[TOP_CONSUMERS_NUM_ITEMS_KEY], toggleProps: { id: 'kv-top-consumers-card-amount-select' } }, TOP_AMOUNT_SELECT_OPTIONS.map(function (opt) { return (React.createElement(SelectOption, { key: opt.key, value: opt.value }, opt.value)); }))))),
                    className: 'co-overview-card__actions',
                    hasNoOffset: false,
                }, className: "kv-top-consumers-card__header" },
                React.createElement(CardTitle, null,
                    t('Top consumers'),
                    " ")),
            React.createElement(CardBody, { className: "kv-top-consumers-card__body" },
                React.createElement(TopConsumersGridRow, { localStorageData: localStorageData, rowNumber: 1, setLocalStorageData: setLocalStorageData, topGrid: true }),
                React.createElement(TopConsumersGridRow, { localStorageData: localStorageData, rowNumber: 2, setLocalStorageData: setLocalStorageData })))));
};
export default TopConsumersTab;
//# sourceMappingURL=TopConsumersTab.js.map