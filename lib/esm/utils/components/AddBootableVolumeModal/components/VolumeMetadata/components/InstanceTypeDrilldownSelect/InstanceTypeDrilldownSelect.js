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
import React, { useCallback, useMemo, useState } from 'react';
import useInstanceTypesAndPreferences from '@catalog/CreateFromInstanceTypes/state/hooks/useInstanceTypesAndPreferences';
import HelpTextIcon from '@kubevirt-utils/components/HelpTextIcon/HelpTextIcon';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { FormGroup, PopoverPosition } from '@patternfly/react-core';
import ComposableDrilldownSelect from './components/ComposableDrilldownSelect/ComposableDrilldownSelect';
import DrilldownMenuItem from './components/DrilldownMenuItem/DrilldownMenuItem';
import RedHatInstanceTypeSeriesMenu from './components/RedHatInstanceTypeSeriesMenu/RedHatInstanceTypeSeriesMenu';
import SelectInstanceTypeToggle from './components/SelectInstanceTypeToggle/SelectInstanceTypeToggle';
import UserInstanceTypeMenu from './components/UserInstanceTypeMenu/UserInstanceTypeMenu';
import { MENUS } from './utils/constants';
import { getInstanceTypeMenuItems } from './utils/utils';
export var InstanceTypeDrilldownSelect = function (_a) {
    var selected = _a.selected, setSelected = _a.setSelected;
    var t = useKubevirtTranslation().t;
    var _b = useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var allInstanceTypes = useInstanceTypesAndPreferences().allInstanceTypes;
    var menuItems = useMemo(function () { return getInstanceTypeMenuItems(allInstanceTypes); }, [allInstanceTypes]);
    var onSelect = useCallback(function (value) {
        setSelected(value);
        setIsOpen(false);
    }, [setSelected]);
    return (React.createElement(FormGroup, { label: React.createElement(React.Fragment, null,
            t('Default InstanceType'),
            ' ',
            React.createElement(HelpTextIcon, { bodyContent: t('The default InstanceType for this volume.'), position: PopoverPosition.right })) },
        React.createElement(ComposableDrilldownSelect, { id: MENUS.root, isOpen: isOpen, scrollableMenuIDs: [MENUS.userProvided], setIsOpen: setIsOpen, toggleLabel: React.createElement(SelectInstanceTypeToggle, { selected: selected }) },
            React.createElement(DrilldownMenuItem, __assign({}, menuItems.redHatProvided),
                React.createElement(RedHatInstanceTypeSeriesMenu, { selected: selected, series: menuItems.redHatProvided.items, setSelected: onSelect })),
            React.createElement(DrilldownMenuItem, __assign({}, menuItems.userProvided),
                React.createElement(UserInstanceTypeMenu, { allInstanceTypes: allInstanceTypes, selected: selected, setSelected: onSelect })))));
};
//# sourceMappingURL=InstanceTypeDrilldownSelect.js.map