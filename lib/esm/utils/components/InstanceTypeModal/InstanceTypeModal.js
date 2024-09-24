import React, { useMemo, useState } from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Flex, FlexItem, SelectList, SelectOption, Text } from '@patternfly/react-core';
import FormPFSelect from '../FormPFSelect/FormPFSelect';
import TabModal from '../TabModal/TabModal';
import { getInstanceTypeFromSeriesAndSize, getInstanceTypeSeriesAndSize, getInstanceTypeSeriesDisplayName, getInstanceTypesPrettyDisplaySize, getInstanceTypesSizes, mappedInstanceTypesToSelectOptions, } from './utils/util';
var InstanceTypeModal = function (_a) {
    var _b;
    var allInstanceTypes = _a.allInstanceTypes, instanceType = _a.instanceType, instanceTypeVM = _a.instanceTypeVM, isOpen = _a.isOpen, onClose = _a.onClose, onSubmit = _a.onSubmit;
    var t = useKubevirtTranslation().t;
    var mappedInstanceTypes = useMemo(function () { return mappedInstanceTypesToSelectOptions(allInstanceTypes); }, [allInstanceTypes]);
    var _c = useMemo(function () { return getInstanceTypeSeriesAndSize(instanceType); }, [instanceType]), instanceTypeSeries = _c.series, instanceTypeSize = _c.size;
    var _d = useState(getInstanceTypeSeriesDisplayName(mappedInstanceTypes, instanceTypeSeries)), series = _d[0], setSeries = _d[1];
    var _e = useState(getInstanceTypesPrettyDisplaySize(mappedInstanceTypes, instanceTypeSeries, instanceTypeSize)), size = _e[0], setSize = _e[1];
    var handleSubmit = function (selectedInstanceType) {
        return onSubmit(instanceTypeVM, selectedInstanceType);
    };
    return (React.createElement(TabModal, { headerText: t('Edit Instancetype'), isOpen: isOpen, obj: getInstanceTypeFromSeriesAndSize(mappedInstanceTypes, series, size), onClose: onClose, onSubmit: handleSubmit },
        React.createElement(Flex, { spaceItems: {
                default: 'spaceItemsXl',
            }, direction: { default: 'column' }, spacer: { default: 'spacer4xl' } },
            React.createElement(FlexItem, null,
                React.createElement(Text, { component: "h5" }, t('Series')),
                React.createElement(FormPFSelect, { onSelect: function (_, value) {
                        if (value !== series) {
                            setSeries(value);
                            setSize(null);
                        }
                    }, selected: series, toggleProps: { isFullWidth: true } },
                    React.createElement(SelectList, null, Object.entries(mappedInstanceTypes).map(function (_a) {
                        var key = _a[0], value = _a[1];
                        return (React.createElement(SelectOption, { description: value.descriptionSeries, key: key, value: value.displayNameSeries }, value.displayNameSeries));
                    })))),
            React.createElement(FlexItem, null,
                React.createElement(Text, { component: "h5" }, t('Size')),
                React.createElement(FormPFSelect, { onSelect: function (_, value) {
                        setSize(value);
                    }, selected: size, toggleProps: { isFullWidth: true } }, (_b = getInstanceTypesSizes(mappedInstanceTypes, series)) === null || _b === void 0 ? void 0 : _b.map(function (item) { return (React.createElement(SelectOption, { key: item.prettyDisplaySize, value: item.prettyDisplaySize }, item === null || item === void 0 ? void 0 : item.prettyDisplaySize)); }))))));
};
export default InstanceTypeModal;
//# sourceMappingURL=InstanceTypeModal.js.map