import React, { useCallback } from 'react';
import { useParams } from 'react-router-dom-v5-compat';
import FormPFSelect from '@kubevirt-utils/components/FormPFSelect/FormPFSelect';
import { DEFAULT_NAMESPACE } from '@kubevirt-utils/constants/constants';
import { t } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { FormGroup, SelectOption } from '@patternfly/react-core';
import { ExternalLinkAltIcon } from '@patternfly/react-icons';
import { SOURCE_TYPES } from '../../utils/constants';
var getSourceOption = function (source, ns) {
    switch (source) {
        case SOURCE_TYPES.defaultSource:
            return (React.createElement(SelectOption, { description: t('Use the default Template disk source'), value: SOURCE_TYPES.defaultSource },
                React.createElement("span", { "data-test-id": SOURCE_TYPES.defaultSource }, t('Default'))));
        case SOURCE_TYPES.pvcSource:
            return (React.createElement(SelectOption, { description: t('Select an existing persistent volume claim already available on the cluster and clone it.'), value: SOURCE_TYPES.pvcSource },
                React.createElement("span", { "data-test-id": SOURCE_TYPES.pvcSource }, t('PVC (clone PVC)'))));
        case SOURCE_TYPES.httpSource:
            return (React.createElement(SelectOption, { description: t('Import content via URL (HTTP or HTTPS endpoint).'), value: SOURCE_TYPES.httpSource },
                React.createElement("span", { "data-test-id": SOURCE_TYPES.httpSource }, t('URL (creates PVC)'))));
        case SOURCE_TYPES.registrySource:
            return (React.createElement(SelectOption, { description: t('Import content via container registry.'), value: SOURCE_TYPES.registrySource },
                React.createElement("span", { "data-test-id": SOURCE_TYPES.registrySource }, t('Registry (ContainerDisk)'))));
        case SOURCE_TYPES.uploadSource:
            return (React.createElement(SelectOption, { onClick: function () {
                    return window
                        .open("/k8s/ns/".concat(ns || DEFAULT_NAMESPACE, "/persistentvolumeclaims/~new/data"), '_blank')
                        .focus();
                }, description: t('Upload new file using the "Upload data to Persistent Volume Claim" page'), value: SOURCE_TYPES.uploadSource },
                t('Upload (Upload a new file to a PVC)'),
                " ",
                React.createElement(ExternalLinkAltIcon, null)));
        default:
            return;
    }
};
var SelectSourceOption = function (_a) {
    var label = _a.label, onSelectSource = _a.onSelectSource, options = _a.options, selectedSource = _a.selectedSource;
    var ns = useParams().ns;
    var onSelect = useCallback(function (_, selection) {
        if (selection !== SOURCE_TYPES.uploadSource)
            onSelectSource(selection);
    }, [onSelectSource]);
    return (React.createElement(FormGroup, { className: "disk-source-form-group select-source-option", fieldId: "disk-source-required-disk", isRequired: true, label: label },
        React.createElement(FormPFSelect, { onSelect: onSelect, placeholder: t('Select boot source'), selected: selectedSource },
            React.createElement(SelectOption, { isDisabled: true, key: 0, value: "Select a title" }, "Select a title"),
            options.map(function (option) { return getSourceOption(option, ns); }))));
};
export default SelectSourceOption;
//# sourceMappingURL=SelectSourceOption.js.map