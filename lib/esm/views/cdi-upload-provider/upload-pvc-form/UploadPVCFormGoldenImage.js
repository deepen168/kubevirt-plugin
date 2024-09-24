import React from 'react';
import { PersistentVolumeClaimModel } from '@kubevirt-ui/kubevirt-api/console';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { ResourceLink } from '@openshift-console/dynamic-plugin-sdk';
import { Alert, Checkbox, FormSelect, FormSelectOption } from '@patternfly/react-core';
import { getName, getNamespace } from '../utils/selectors';
import UploadPVCFormPVCNamespace from './UploadPVCFormPVCNamespace';
var UploadPVCFormGoldenImage = function (_a) {
    var goldenPvcs = _a.goldenPvcs, handleCDROMChange = _a.handleCDROMChange, handleOs = _a.handleOs, handlePvcSizeTemplate = _a.handlePvcSizeTemplate, isLoading = _a.isLoading, mountAsCDROM = _a.mountAsCDROM, namespace = _a.namespace, operatingSystems = _a.operatingSystems, os = _a.os, osImageExists = _a.osImageExists, pvcSizeFromTemplate = _a.pvcSizeFromTemplate;
    var t = useKubevirtTranslation().t;
    return (React.createElement(React.Fragment, null,
        React.createElement("label", { className: "control-label co-required", htmlFor: "golden-os" }, t('Operating System')),
        React.createElement("div", { className: "form-group" },
            React.createElement(FormSelect, { id: "golden-os-select", isDisabled: isLoading, isRequired: true, onChange: function (_, val) { return handleOs(val); }, value: (os === null || os === void 0 ? void 0 : os.id) || '' },
                React.createElement(FormSelectOption, { isDisabled: !!os, key: "defaultValue", label: t('--- Pick an Operating system ---'), value: "" }),
                operatingSystems.map(function (_a) {
                    var baseImageName = _a.baseImageName, baseImageNamespace = _a.baseImageNamespace, id = _a.id, name = _a.name;
                    var goldenPVC = goldenPvcs === null || goldenPvcs === void 0 ? void 0 : goldenPvcs.find(function (pvc) { return getName(pvc) === baseImageName && getNamespace(pvc) === baseImageNamespace; });
                    var labelGoldenPVC = goldenPVC &&
                        t('{{nameOrId}} - Default data image already exists', {
                            nameOrId: name || id,
                        });
                    var labelMissingBaseImageName = !baseImageName &&
                        t('{{nameOrId}} - Template missing data image definition', {
                            nameOrId: name || id,
                        });
                    var label = labelGoldenPVC || labelMissingBaseImageName || name || id;
                    return React.createElement(FormSelectOption, { key: id, label: label, value: id });
                })),
            os && (React.createElement(React.Fragment, null,
                React.createElement(Checkbox, { className: "kv--create-upload__golden-switch", "data-checked-state": pvcSizeFromTemplate, id: "golden-os-checkbox-pvc-size-template", isChecked: pvcSizeFromTemplate, label: t('Use template size PVC'), onChange: function (_, checked) { return handlePvcSizeTemplate(checked); } }),
                React.createElement(Checkbox, { className: "kv--create-upload__golden-switch", "data-checked-state": !!mountAsCDROM, id: "golden-os-checkbox-cdrom-boot-source-template", isChecked: !!mountAsCDROM, label: t('This is a CD-ROM boot source'), onChange: function (_, checked) { return handleCDROMChange(checked); } })))),
        osImageExists && (React.createElement("div", { className: "form-group" },
            React.createElement(Alert, { isInline: true, title: t('Operating system source already defined'), variant: "danger" },
                t('In order to add a new source for {{osName}} you will need to delete the following PVC:', { osName: os === null || os === void 0 ? void 0 : os.name }),
                ' ',
                React.createElement(ResourceLink, { hideIcon: true, inline: true, kind: PersistentVolumeClaimModel.kind, name: os === null || os === void 0 ? void 0 : os.baseImageName, namespace: os === null || os === void 0 ? void 0 : os.baseImageNamespace })))),
        React.createElement(UploadPVCFormPVCNamespace, { namespace: namespace })));
};
export default UploadPVCFormGoldenImage;
//# sourceMappingURL=UploadPVCFormGoldenImage.js.map