import React, { useState } from 'react';
import FormPFSelect from '@kubevirt-utils/components/FormPFSelect/FormPFSelect';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Card, CardBody, CardHeader, CardTitle, SelectOption } from '@patternfly/react-core';
import { vmsPerResourceOptions } from './utils/constants';
import VMsPerResourceChart from './VMsPerResourceChart';
import './VMsPerResourceCard.scss';
var VMsPerResourceCard = function () {
    var _a, _b;
    var t = useKubevirtTranslation().t;
    var _c = useState((_a = vmsPerResourceOptions[0]) === null || _a === void 0 ? void 0 : _a.title), vmResourceOption = _c[0], setvmResourceOption = _c[1];
    var _d = useState((_b = vmsPerResourceOptions[0]) === null || _b === void 0 ? void 0 : _b.type), type = _d[0], setType = _d[1];
    var handleSelect = function (event, value) {
        var selected = vmsPerResourceOptions === null || vmsPerResourceOptions === void 0 ? void 0 : vmsPerResourceOptions.find(function (option) { return option.title === value; });
        setvmResourceOption(selected === null || selected === void 0 ? void 0 : selected.title);
        setType(selected === null || selected === void 0 ? void 0 : selected.type);
    };
    return (React.createElement(Card, { className: "vms-per-resource-card__gradient", "data-test-id": "vms-per-template-card" },
        React.createElement(CardHeader, { actions: {
                actions: (React.createElement(FormPFSelect, { onSelect: handleSelect, selected: vmResourceOption, toggleProps: { id: 'overview-vms-per-resource-card' } }, vmsPerResourceOptions === null || vmsPerResourceOptions === void 0 ? void 0 : vmsPerResourceOptions.map(function (scope) { return (React.createElement(SelectOption, { key: scope.type, value: scope.title }, scope.title)); }))),
            } },
            React.createElement(CardTitle, null, t('VirtualMachines per resource'))),
        React.createElement(CardBody, null,
            React.createElement(VMsPerResourceChart, { type: type }))));
};
export default VMsPerResourceCard;
//# sourceMappingURL=VMsPerResourceCard.js.map