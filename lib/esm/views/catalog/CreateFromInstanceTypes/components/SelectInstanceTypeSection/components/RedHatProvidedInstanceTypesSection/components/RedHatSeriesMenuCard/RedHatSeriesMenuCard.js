import React, { useEffect, useMemo, useRef, useState } from 'react';
import classNames from 'classnames';
import { useInstanceTypeVMStore } from '@catalog/CreateFromInstanceTypes/state/useInstanceTypeVMStore';
import RedHatInstanceTypeSeriesSizesMenuItems from '@kubevirt-utils/components/AddBootableVolumeModal/components/VolumeMetadata/components/InstanceTypeDrilldownSelect/components/RedHatInstanceTypeSeriesMenu/RedHatInstanceTypeSeriesSizesMenuItem';
import { instanceTypeSeriesNameMapper } from '@kubevirt-utils/components/AddBootableVolumeModal/components/VolumeMetadata/components/InstanceTypeDrilldownSelect/utils/constants';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { readableSizeUnit } from '@kubevirt-utils/utils/units';
import { Card, CardBody, Menu, MenuContent, MenuList, MenuToggle, Popper, Tooltip, } from '@patternfly/react-core';
import { AngleDownIcon } from '@patternfly/react-icons';
import './RedHatSeriesMenuCard.scss';
var RedHatSeriesMenuCard = function (_a) {
    var activeMenu = _a.activeMenu, menuRef = _a.menuRef, onMenuSelect = _a.onMenuSelect, onMenuToggle = _a.onMenuToggle, rhSeriesItem = _a.rhSeriesItem;
    var t = useKubevirtTranslation().t;
    var _b = useState(0), distance = _b[0], setDistance = _b[1];
    var cardRef = useRef(null);
    var toggleRef = useRef(null);
    var selectedInstanceType = useInstanceTypeVMStore().instanceTypeVMState.selectedInstanceType;
    var classAnnotation = rhSeriesItem.classAnnotation, classDisplayNameAnnotation = rhSeriesItem.classDisplayNameAnnotation, descriptionAnnotation = rhSeriesItem.descriptionAnnotation, seriesName = rhSeriesItem.seriesName, sizes = rhSeriesItem.sizes;
    var _c = instanceTypeSeriesNameMapper[seriesName] || {}, Icon = _c.Icon, seriesLabel = _c.seriesLabel;
    var isMenuExpanded = useMemo(function () { return seriesName === activeMenu; }, [activeMenu, seriesName]);
    var isSelectedMenu = useMemo(function () { var _a; return (_a = selectedInstanceType === null || selectedInstanceType === void 0 ? void 0 : selectedInstanceType.name) === null || _a === void 0 ? void 0 : _a.startsWith(seriesName); }, [selectedInstanceType, seriesName]);
    var selectedITLabel = useMemo(function () {
        var itSize = sizes === null || sizes === void 0 ? void 0 : sizes.find(function (size) { return "".concat(seriesName, ".").concat(size.sizeLabel) === (selectedInstanceType === null || selectedInstanceType === void 0 ? void 0 : selectedInstanceType.name); });
        var _a = itSize || {}, cpus = _a.cpus, memory = _a.memory, sizeLabel = _a.sizeLabel;
        return t('{{sizeLabel}}: {{cpus}} CPUs, {{memory}} Memory', {
            cpus: cpus,
            memory: readableSizeUnit(memory),
            sizeLabel: sizeLabel,
        });
    }, [selectedInstanceType, seriesName, sizes, t]);
    useEffect(function () {
        var calculateDistance = function () {
            if (cardRef.current && toggleRef.current) {
                var cardRect = cardRef.current.getBoundingClientRect();
                var toggleRect = toggleRef.current.getBoundingClientRect();
                setDistance(toggleRect.bottom - cardRect.bottom + 4);
            }
        };
        calculateDistance();
        window.addEventListener('resize', calculateDistance);
        return function () {
            window.removeEventListener('resize', calculateDistance);
        };
    }, [cardRef.current, toggleRef.current]);
    var card = (React.createElement(Card, { className: "instance-type-series-menu-card__toggle-card" },
        React.createElement("div", { className: "instance-type-series-menu-card__card-icon" }, Icon && React.createElement(Icon, null)),
        React.createElement(CardBody, null,
            React.createElement("div", { className: "instance-type-series-menu-card__card-title" }, classDisplayNameAnnotation),
            React.createElement("div", { className: "instance-type-series-menu-card__card-toggle-text", ref: toggleRef },
                seriesLabel || classAnnotation,
                " ",
                React.createElement(AngleDownIcon, null)),
            React.createElement("div", { className: "instance-type-series-menu-card__card-footer" }, isSelectedMenu && selectedITLabel))));
    return (React.createElement(Popper, { popper: React.createElement(Menu, { activeMenu: activeMenu, id: seriesName, ref: menuRef },
            React.createElement(MenuContent, null,
                React.createElement(MenuList, null,
                    React.createElement(RedHatInstanceTypeSeriesSizesMenuItems, { selected: selectedInstanceType === null || selectedInstanceType === void 0 ? void 0 : selectedInstanceType.name, seriesName: seriesName, setSelected: onMenuSelect, sizes: sizes })))), trigger: React.createElement(MenuToggle, { className: classNames('instance-type-series-menu-card__toggle-container', isSelectedMenu && 'selected'), isExpanded: isMenuExpanded, onClick: function (event) { return onMenuToggle(event, seriesName); }, ref: cardRef, variant: "plain" }, !isMenuExpanded ? React.createElement(Tooltip, { content: descriptionAnnotation }, card) : card), direction: "down", distance: distance, isVisible: isMenuExpanded }));
};
export default RedHatSeriesMenuCard;
//# sourceMappingURL=RedHatSeriesMenuCard.js.map