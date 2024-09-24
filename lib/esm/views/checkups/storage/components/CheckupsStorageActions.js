import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom-v5-compat';
import DropdownToggle from '@kubevirt-utils/components/toggles/DropdownToggle';
import KebabToggle from '@kubevirt-utils/components/toggles/KebabToggle';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getNamespace } from '@kubevirt-utils/resources/shared';
import { Dropdown, DropdownItem, DropdownList } from '@patternfly/react-core';
import { STATUS_SUCCEEDED } from '../../utils/utils';
import { deleteStorageCheckup, rerunStorageCheckup } from '../utils/utils';
var CheckupsStorageActions = function (_a) {
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
                    setIsActionsOpen(false);
                    deleteStorageCheckup(configMap, jobs);
                    navigate("/k8s/ns/".concat(getNamespace(configMap), "/checkups/storage"));
                }, key: "delete" }, t('Delete')),
            React.createElement(DropdownItem, { onClick: function () {
                    setIsActionsOpen(false);
                    return rerunStorageCheckup(configMap);
                }, isDisabled: ((_b = configMap === null || configMap === void 0 ? void 0 : configMap.data) === null || _b === void 0 ? void 0 : _b[STATUS_SUCCEEDED]) === undefined, key: "rerun" }, t('Rerun')))));
};
export default CheckupsStorageActions;
//# sourceMappingURL=CheckupsStorageActions.js.map