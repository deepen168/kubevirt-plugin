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
import React from 'react';
import RedHatSeriesMenuCard from '@catalog/CreateFromInstanceTypes/components/SelectInstanceTypeSection/components/RedHatProvidedInstanceTypesSection/components/RedHatSeriesMenuCard/RedHatSeriesMenuCard';
import useInstanceTypeCardMenuSection from '@catalog/CreateFromInstanceTypes/components/SelectInstanceTypeSection/hooks/useInstanceTypeCardMenuSection';
import { instanceTypeSeriesNameMapper } from '@kubevirt-utils/components/AddBootableVolumeModal/components/VolumeMetadata/components/InstanceTypeDrilldownSelect/utils/constants';
import { Flex } from '@patternfly/react-core';
var RedHatProvidedInstanceTypesSection = function (_a) {
    var redHatMenuItems = _a.redHatMenuItems;
    var menuProps = useInstanceTypeCardMenuSection();
    return (React.createElement(Flex, { justifyContent: { default: 'justifyContentSpaceBetween' } }, redHatMenuItems.items.map(function (rhSeriesItem) {
        var _a;
        var seriesName = rhSeriesItem === null || rhSeriesItem === void 0 ? void 0 : rhSeriesItem.seriesName;
        return (!((_a = instanceTypeSeriesNameMapper[seriesName]) === null || _a === void 0 ? void 0 : _a.disabled) && (React.createElement(RedHatSeriesMenuCard, __assign({ key: seriesName, rhSeriesItem: rhSeriesItem }, menuProps))));
    })));
};
export default RedHatProvidedInstanceTypesSection;
//# sourceMappingURL=RedHatProvidedInstanceTypesSection.js.map