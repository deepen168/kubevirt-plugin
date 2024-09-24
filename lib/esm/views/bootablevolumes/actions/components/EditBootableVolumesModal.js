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
import { InstanceTypeCategory, } from '@catalog/CreateFromInstanceTypes/components/SelectInstanceTypeSection/utils/types';
import { categoryDetailsMap } from '@catalog/CreateFromInstanceTypes/components/SelectInstanceTypeSection/utils/utils';
import { VirtualMachineClusterPreferenceModelGroupVersionKind } from '@kubevirt-ui/kubevirt-api/console';
import ExternalLink from '@kubevirt-utils/components/ExternalLink/ExternalLink';
import InlineFilterSelect from '@kubevirt-utils/components/FilterSelect/InlineFilterSelect';
import FormPFSelect from '@kubevirt-utils/components/FormPFSelect/FormPFSelect';
import HelpTextIcon from '@kubevirt-utils/components/HelpTextIcon/HelpTextIcon';
import TabModal from '@kubevirt-utils/components/TabModal/TabModal';
import { INSTANCE_TYPES_USER_GUIDE_LINK } from '@kubevirt-utils/constants/url-constants';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { DEFAULT_INSTANCETYPE_LABEL, DEFAULT_PREFERENCE_LABEL, } from '@kubevirt-utils/resources/bootableresources/constants';
import { convertResourceArrayToMap } from '@kubevirt-utils/resources/shared';
import { ANNOTATIONS } from '@kubevirt-utils/resources/template';
import { readableSizeUnit } from '@kubevirt-utils/utils/units';
import { Form, FormGroup, Grid, GridItem, PopoverPosition, SelectOption, TextArea, } from '@patternfly/react-core';
import { changeBootableVolumeMetadata } from '../../utils/utils';
var EditBootableVolumesModal = function (_a) {
    var _b, _c;
    var isOpen = _a.isOpen, onClose = _a.onClose, preferences = _a.preferences, source = _a.source;
    var t = useKubevirtTranslation().t;
    var preferencesNames = useMemo(function () { return Object.keys(convertResourceArrayToMap(preferences)).sort(function (a, b) { return a.localeCompare(b); }); }, [preferences]);
    var initialParams = useMemo(function () {
        var _a, _b, _c, _d, _e, _f, _g;
        var instanceTypeLabel = (_c = (_b = (_a = source === null || source === void 0 ? void 0 : source.metadata) === null || _a === void 0 ? void 0 : _a.labels) === null || _b === void 0 ? void 0 : _b[DEFAULT_INSTANCETYPE_LABEL]) === null || _c === void 0 ? void 0 : _c.split('.');
        var initialCategory = Object.entries(categoryDetailsMap).find(function (category) { return category[1].prefix === (instanceTypeLabel === null || instanceTypeLabel === void 0 ? void 0 : instanceTypeLabel[0]); });
        return {
            description: (_e = (_d = source === null || source === void 0 ? void 0 : source.metadata) === null || _d === void 0 ? void 0 : _d.annotations) === null || _e === void 0 ? void 0 : _e[ANNOTATIONS.description],
            instanceType: initialCategory,
            preference: (_g = (_f = source === null || source === void 0 ? void 0 : source.metadata) === null || _f === void 0 ? void 0 : _f.labels) === null || _g === void 0 ? void 0 : _g[DEFAULT_PREFERENCE_LABEL],
            size: initialCategory && (instanceTypeLabel === null || instanceTypeLabel === void 0 ? void 0 : instanceTypeLabel[1]),
        };
    }, [source]);
    var _d = useState(initialParams.preference), preference = _d[0], setPreference = _d[1];
    var _e = useState((_b = initialParams.instanceType) === null || _b === void 0 ? void 0 : _b[0]), instanceType = _e[0], setInstanceType = _e[1];
    var _f = useState(initialParams.size), size = _f[0], setSize = _f[1];
    var _g = useState(initialParams.description), description = _g[0], setDescription = _g[1];
    // update options for 'Size' dropdown according to chosen 'instanceType' in 'Default InstanceType' dropdown
    var instanceTypes = useMemo(function () { return (instanceType ? categoryDetailsMap[instanceType] : {}); }, [instanceType]).instanceTypes;
    var onInstanceTypeSelect = function (_event, newInstanceType) {
        setInstanceType(newInstanceType);
        var newCategoryObject = categoryDetailsMap[newInstanceType];
        var newCategorySize = newCategoryObject.instanceTypes[0].label;
        setSize(newCategorySize);
    };
    var onSizeSelect = function (_event, newSize) {
        setSize(newSize);
    };
    var onSubmitVolumeParams = useCallback(function () {
        var _a, _b, _c, _d;
        var _e, _f;
        var preferenceLabel = preference && (_a = {}, _a[DEFAULT_PREFERENCE_LABEL] = preference, _a);
        var categoryObject = categoryDetailsMap[instanceType];
        var instanceLabel = instanceType && (_b = {},
            _b[DEFAULT_INSTANCETYPE_LABEL] = "".concat(categoryObject.prefix, ".").concat(size),
            _b);
        var descriptionAnnotation = (description === null || description === void 0 ? void 0 : description.trim())
            ? (_c = {}, _c[ANNOTATIONS.description] = description.trim(), _c) : (_d = {}, _d[ANNOTATIONS.description] = undefined, _d); // we do want undefined here to get the annotation removed from the resource, if description not provided
        var metadata = {
            annotations: __assign(__assign({}, (_e = source === null || source === void 0 ? void 0 : source.metadata) === null || _e === void 0 ? void 0 : _e.annotations), descriptionAnnotation),
            labels: __assign(__assign(__assign({}, (_f = source === null || source === void 0 ? void 0 : source.metadata) === null || _f === void 0 ? void 0 : _f.labels), preferenceLabel), instanceLabel),
        };
        return changeBootableVolumeMetadata(source, metadata);
    }, [source, description, instanceType, preference, size]);
    return (React.createElement(TabModal, { headerText: t('Edit volume metadata'), isOpen: isOpen, obj: source, onClose: onClose, onSubmit: onSubmitVolumeParams() },
        React.createElement(Form, null,
            React.createElement(FormGroup, { label: React.createElement(React.Fragment, null,
                    t('Preference'),
                    ' ',
                    React.createElement(HelpTextIcon, { bodyContent: React.createElement(React.Fragment, null,
                            t('The preferred VirtualMachine attribute values required to run a given workload.'),
                            ' ',
                            React.createElement(ExternalLink, { href: "".concat(INSTANCE_TYPES_USER_GUIDE_LINK, "#virtualmachinepreference"), text: t('Read more') })), position: PopoverPosition.right })), isRequired: true },
                React.createElement(InlineFilterSelect, { options: preferencesNames === null || preferencesNames === void 0 ? void 0 : preferencesNames.map(function (opt) { return ({
                        children: opt,
                        groupVersionKind: VirtualMachineClusterPreferenceModelGroupVersionKind,
                        value: opt,
                    }); }), selected: preference, setSelected: setPreference, toggleProps: { placeholder: t('Select preference') } })),
            React.createElement(Grid, { hasGutter: true },
                React.createElement(GridItem, { span: 6 },
                    React.createElement(FormGroup, { label: React.createElement(React.Fragment, null,
                            t('Default InstanceType'),
                            ' ',
                            React.createElement(HelpTextIcon, { bodyContent: t('The default InstanceType for this volume.'), position: PopoverPosition.right })) },
                        React.createElement(FormPFSelect, { onSelect: onInstanceTypeSelect, selected: instanceType }, (_c = Object.keys(InstanceTypeCategory)) === null || _c === void 0 ? void 0 : _c.map(function (instanceTypeCategory) {
                            var _a = categoryDetailsMap[instanceTypeCategory], seriesLabel = _a.seriesLabel, title = _a.title;
                            return (React.createElement(SelectOption, { description: title, key: instanceTypeCategory, value: instanceTypeCategory }, seriesLabel));
                        })))),
                React.createElement(GridItem, { span: 6 },
                    React.createElement(FormGroup, { label: t('Size') },
                        React.createElement(FormPFSelect, { onSelect: onSizeSelect, selected: size }, instanceTypes === null || instanceTypes === void 0 ? void 0 : instanceTypes.map(function (_a) {
                            var cpus = _a.cpus, label = _a.label, memory = _a.memory;
                            return (React.createElement(SelectOption, { description: t('{{cpus}} CPUs, {{memory}} Memory', {
                                    cpus: cpus,
                                    memory: readableSizeUnit(memory),
                                }), key: label, value: label }, label));
                        }))))),
            React.createElement(FormGroup, { label: t('Description') },
                React.createElement(TextArea, { "aria-label": t('description text area'), onChange: function (_event, val) { return setDescription(val); }, resizeOrientation: "vertical", value: description })))));
};
export default EditBootableVolumesModal;
//# sourceMappingURL=EditBootableVolumesModal.js.map