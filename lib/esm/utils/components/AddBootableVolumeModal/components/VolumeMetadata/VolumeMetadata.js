import React from 'react';
import { DEFAULT_INSTANCETYPE_LABEL, DEFAULT_PREFERENCE_LABEL, } from '@catalog/CreateFromInstanceTypes/utils/constants';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { ANNOTATIONS } from '@kubevirt-utils/resources/template';
import { FormGroup, TextInput } from '@patternfly/react-core';
import { InstanceTypeDrilldownSelect } from './components/InstanceTypeDrilldownSelect/InstanceTypeDrilldownSelect';
import PreferenceSelect from './components/PreferenceSelect/PreferenceSelect';
var VolumeMetadata = function (_a) {
    var bootableVolume = _a.bootableVolume, deleteLabel = _a.deleteLabel, setBootableVolumeField = _a.setBootableVolumeField;
    var t = useKubevirtTranslation().t;
    var _b = bootableVolume || {}, annotations = _b.annotations, labels = _b.labels;
    return (React.createElement(React.Fragment, null,
        React.createElement(PreferenceSelect, { deleteLabel: deleteLabel, selectedPreference: labels === null || labels === void 0 ? void 0 : labels[DEFAULT_PREFERENCE_LABEL], setBootableVolumeField: setBootableVolumeField }),
        React.createElement(InstanceTypeDrilldownSelect, { selected: labels === null || labels === void 0 ? void 0 : labels[DEFAULT_INSTANCETYPE_LABEL], setSelected: setBootableVolumeField('labels', DEFAULT_INSTANCETYPE_LABEL) }),
        React.createElement(FormGroup, { label: t('Description') },
            React.createElement(TextInput, { onChange: function (_, value) {
                    return setBootableVolumeField('annotations', ANNOTATIONS.description)(value);
                }, id: "description", value: annotations === null || annotations === void 0 ? void 0 : annotations.description }))));
};
export default VolumeMetadata;
//# sourceMappingURL=VolumeMetadata.js.map