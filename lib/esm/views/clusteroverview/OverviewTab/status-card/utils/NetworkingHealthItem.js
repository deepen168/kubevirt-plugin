import * as React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { HealthState } from '@openshift-console/dynamic-plugin-sdk';
import { HealthItem } from '@openshift-console/dynamic-plugin-sdk-internal';
import { AVAILABLE } from './constants';
var NetworkingHealthItem = function (_a) {
    var _b;
    var nac = _a.nac;
    var t = useKubevirtTranslation().t;
    var nacConditions = (_b = nac === null || nac === void 0 ? void 0 : nac.status) === null || _b === void 0 ? void 0 : _b.conditions;
    var availableCondition = nacConditions === null || nacConditions === void 0 ? void 0 : nacConditions.find(function (condition) { return (condition === null || condition === void 0 ? void 0 : condition.type) === AVAILABLE; });
    var status = (availableCondition === null || availableCondition === void 0 ? void 0 : availableCondition.status) === 'True';
    var message = availableCondition === null || availableCondition === void 0 ? void 0 : availableCondition.message;
    var state = status ? HealthState.OK : HealthState.NOT_AVAILABLE;
    return React.createElement(HealthItem, { details: message, state: state, title: t('Networking') });
};
export default NetworkingHealthItem;
//# sourceMappingURL=NetworkingHealthItem.js.map