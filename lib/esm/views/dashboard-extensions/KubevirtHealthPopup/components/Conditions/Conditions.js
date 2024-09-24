import React from 'react';
import { Link } from 'react-router-dom-v5-compat';
import HyperConvergedModel from '@kubevirt-ui/kubevirt-api/console/models/HyperConvergedModel';
import useHyperConvergeConfiguration from '@kubevirt-utils/hooks/useHyperConvergeConfiguration';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getResourceUrl } from '@kubevirt-utils/resources/shared';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { PrometheusEndpoint, usePrometheusPoll } from '@openshift-console/dynamic-plugin-sdk';
import { Skeleton, StackItem } from '@patternfly/react-core';
import ConditionIcon from './ConditionIcon';
import { HCO_HEALTH_METRIC, VALUE_TO_LABLE } from './constants';
var Conditions = function () {
    var _a, _b, _c, _d;
    var t = useKubevirtTranslation().t;
    var _e = useHyperConvergeConfiguration(), hyperConverge = _e[0], hyperLoaded = _e[1];
    var _f = usePrometheusPoll({
        endpoint: PrometheusEndpoint.QUERY,
        query: HCO_HEALTH_METRIC,
    }), queryData = _f[0], loaded = _f[1];
    var condition = (_d = (_c = (_b = (_a = queryData === null || queryData === void 0 ? void 0 : queryData.data) === null || _a === void 0 ? void 0 : _a.result) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.value) === null || _d === void 0 ? void 0 : _d[1];
    var label = VALUE_TO_LABLE[condition];
    if (!loaded || !hyperLoaded)
        return (React.createElement(StackItem, null,
            React.createElement(Skeleton, { screenreaderText: "Loading contents" })));
    if (isEmpty(condition))
        return null;
    return (React.createElement(React.Fragment, null,
        React.createElement(StackItem, null,
            React.createElement("div", { className: "kv-health-popup__title" }, t('Conditions'))),
        React.createElement(StackItem, { className: "kv-health-popup__alerts-count" },
            React.createElement(ConditionIcon, { conditionValue: condition }),
            React.createElement(Link, { to: getResourceUrl({ model: HyperConvergedModel, resource: hyperConverge }) }, label))));
};
export default Conditions;
//# sourceMappingURL=Conditions.js.map