import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom-v5-compat';
import DropdownToggle from '@kubevirt-utils/components/toggles/DropdownToggle';
import KebabToggle from '@kubevirt-utils/components/toggles/KebabToggle';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Dropdown, DropdownItem, DropdownList } from '@patternfly/react-core';
import { STATUS_SUCCEEDED } from '../../utils/utils';
import { deleteNetworkCheckup, rerunNetworkCheckup } from '../utils/utils';
var CheckupsNetworkActions = function (_a) {
    var _b;
    var configMap = _a.configMap, _c = _a.isKebab, isKebab = _c === void 0 ? false : _c, jobs = _a.jobs;
    var t = useKubevirtTranslation().t;
    var navigate = useNavigate();
    var _d = useState(false), isActionsOpen = _d[0], setIsActionsOpen = _d[1];
    var onToggle = function () { return setIsActionsOpen(function (prevIsOpen) { return !prevIsOpen; }); };
    var Toggle = isKebab
        ? KebabToggle({ isExpanded: isActionsOpen, onClick: onToggle })
        : DropdownToggle({ isExpanded: isActionsOpen, onClick: onToggle, placeholder: t('Actions') });
    return (React.createElement(Dropdown, { isOpen: isActionsOpen, onOpenChange: function (open) { return setIsActionsOpen(open); }, toggle: Toggle },
        React.createElement(DropdownList, null,
            React.createElement(DropdownItem, { onClick: function () {
                    var _a;
                    setIsActionsOpen(false);
                    deleteNetworkCheckup(configMap, jobs);
                    navigate("/k8s/ns/".concat((_a = configMap === null || configMap === void 0 ? void 0 : configMap.metadata) === null || _a === void 0 ? void 0 : _a.namespace, "/checkups"));
                }, key: "delete" }, t('Delete')),
            React.createElement(DropdownItem, { onClick: function () {
                    setIsActionsOpen(false);
                    return rerunNetworkCheckup(configMap);
                }, isDisabled: ((_b = configMap === null || configMap === void 0 ? void 0 : configMap.data) === null || _b === void 0 ? void 0 : _b[STATUS_SUCCEEDED]) === undefined, key: "rerun" }, t('Rerun')))));
};
export default CheckupsNetworkActions;
//# sourceMappingURL=CheckupsNetworkActions.js.map