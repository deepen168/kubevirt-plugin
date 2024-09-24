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
import React, { useCallback, useEffect, useState } from 'react';
import SelectToggle from '@kubevirt-utils/components/toggles/SelectToggle';
import { t } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import usePermissions from '@kubevirt-utils/hooks/usePermissions/usePermissions';
import useCanCreateBootableVolume from '@kubevirt-utils/resources/bootableresources/hooks/useCanCreateBootableVolume';
import { Divider, FormGroup, SelectGroup } from '@patternfly/react-core';
import { Select, SelectOption } from '@patternfly/react-core';
import { DROPDOWN_FORM_SELECTION, optionsValueLabelMapper } from '../../utils/constants';
var SourceTypeSelection = function (_a) {
    var formSelection = _a.formSelection, namespace = _a.namespace, setFormSelection = _a.setFormSelection;
    var _b = useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = useCanCreateBootableVolume(namespace), canCreateDS = _c.canCreateDS, canCreatePVC = _c.canCreatePVC, canCreateSnapshots = _c.canCreateSnapshots, loading = _c.loading;
    var _d = usePermissions(), capabilitiesData = _d.capabilitiesData, permissionsLoading = _d.isLoading;
    var canUploadImage = capabilitiesData.uploadImage.allowed && canCreatePVC;
    var onSelect = useCallback(function (event, value) {
        event.preventDefault();
        setFormSelection(value);
        setIsOpen(false);
    }, [setFormSelection]);
    useEffect(function () {
        if (!permissionsLoading && !loading) {
            setFormSelection(!canUploadImage
                ? DROPDOWN_FORM_SELECTION.USE_REGISTRY
                : DROPDOWN_FORM_SELECTION.UPLOAD_VOLUME);
        }
    }, [canUploadImage, permissionsLoading, loading, setFormSelection]);
    var onToggle = function () { return setIsOpen(function (prevIsOpen) { return !prevIsOpen; }); };
    return (React.createElement(FormGroup, { fieldId: "source-type", label: t('Source type') },
        React.createElement(Select, { toggle: SelectToggle({
                'data-test-id': 'source-type-select',
                isExpanded: isOpen,
                isFullWidth: true,
                onClick: onToggle,
                selected: optionsValueLabelMapper[formSelection],
            }), isOpen: isOpen, onOpenChange: function (open) { return setIsOpen(open); }, onSelect: onSelect, selected: formSelection },
            React.createElement(SelectGroup, { label: t('Upload new') },
                React.createElement(SelectOption, __assign({ isDisabled: !canUploadImage, value: DROPDOWN_FORM_SELECTION.UPLOAD_VOLUME }, (!canUploadImage && {
                    description: t("You don't have permission to perform this action"),
                }), { "data-test-id": "upload-volume" }), optionsValueLabelMapper[DROPDOWN_FORM_SELECTION.UPLOAD_VOLUME])),
            React.createElement(Divider, null),
            React.createElement(SelectGroup, { label: t('Use existing') },
                React.createElement(SelectOption, { "data-test-id": "use-existing-volume", description: t('Use volume already available on the cluster'), isDisabled: !canCreatePVC, value: DROPDOWN_FORM_SELECTION.USE_EXISTING_PVC }, optionsValueLabelMapper[DROPDOWN_FORM_SELECTION.USE_EXISTING_PVC]),
                React.createElement(SelectOption, { "data-test-id": "use-snapshot", isDisabled: !canCreateSnapshots, value: DROPDOWN_FORM_SELECTION.USE_SNAPSHOT }, optionsValueLabelMapper[DROPDOWN_FORM_SELECTION.USE_SNAPSHOT])),
            React.createElement(Divider, null),
            React.createElement(SelectGroup, { label: t('Import from') },
                React.createElement(SelectOption, { "data-test-id": "use-registry", description: t('Content from container registry'), isDisabled: !canCreateDS, value: DROPDOWN_FORM_SELECTION.USE_REGISTRY }, optionsValueLabelMapper[DROPDOWN_FORM_SELECTION.USE_REGISTRY])))));
};
export default SourceTypeSelection;
//# sourceMappingURL=SourceTypeSelection.js.map