var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React, { useMemo } from 'react';
import useClusterPreferences from '@catalog/CreateFromInstanceTypes/state/hooks/useClusterPreferences';
import { DEFAULT_PREFERENCE_KIND_LABEL, DEFAULT_PREFERENCE_LABEL, } from '@catalog/CreateFromInstanceTypes/utils/constants';
import { VirtualMachineClusterPreferenceModelGroupVersionKind, VirtualMachinePreferenceModelGroupVersionKind, } from '@kubevirt-ui/kubevirt-api/console';
import InlineFilterSelect from '@kubevirt-utils/components/FilterSelect/InlineFilterSelect';
import HelpTextIcon from '@kubevirt-utils/components/HelpTextIcon/HelpTextIcon';
import Loading from '@kubevirt-utils/components/Loading/Loading';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import useUserPreferences from '@kubevirt-utils/hooks/useUserPreferences';
import { useActiveNamespace } from '@openshift-console/dynamic-plugin-sdk';
import { FormGroup, PopoverPosition } from '@patternfly/react-core';
import { getResourceDropdownOptions } from './utils/utils';
import PreferencePopoverContent from './PreferencePopoverContent';
var PreferenceSelect = function (_a) {
    var deleteLabel = _a.deleteLabel, selectedPreference = _a.selectedPreference, setBootableVolumeField = _a.setBootableVolumeField;
    var t = useKubevirtTranslation().t;
    var activeNamespace = useActiveNamespace()[0];
    var _b = useClusterPreferences(), preferences = _b[0], preferencesLoaded = _b[1];
    var _c = useUserPreferences(activeNamespace), _d = _c[0], userPreferences = _d === void 0 ? [] : _d, userPreferencesLoaded = _c[1];
    var options = useMemo(function () {
        var preferenceOptions = getResourceDropdownOptions(preferences, VirtualMachineClusterPreferenceModelGroupVersionKind, function () { return deleteLabel(DEFAULT_PREFERENCE_KIND_LABEL); }, t('Cluster preferences'));
        var userPreferenceOptions = getResourceDropdownOptions(userPreferences, VirtualMachinePreferenceModelGroupVersionKind, function () {
            return setBootableVolumeField('labels', DEFAULT_PREFERENCE_KIND_LABEL)(VirtualMachinePreferenceModelGroupVersionKind.kind);
        }, t('User preferences'));
        return __spreadArray(__spreadArray([], userPreferenceOptions, true), preferenceOptions, true);
    }, [preferences, userPreferences, deleteLabel, setBootableVolumeField, t]);
    if (!preferencesLoaded || !userPreferencesLoaded)
        return React.createElement(Loading, null);
    return (React.createElement(FormGroup, { label: React.createElement(React.Fragment, null,
            t('Preference'),
            ' ',
            React.createElement(HelpTextIcon, { bodyContent: React.createElement(PreferencePopoverContent, null), position: PopoverPosition.right })), isRequired: true },
        React.createElement(InlineFilterSelect, { options: options, selected: selectedPreference, setSelected: setBootableVolumeField('labels', DEFAULT_PREFERENCE_LABEL), toggleProps: { isFullWidth: true, placeholder: t('Select preference') } })));
};
export default PreferenceSelect;
//# sourceMappingURL=PreferenceSelect.js.map