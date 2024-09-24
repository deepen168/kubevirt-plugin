import React from 'react';
import FormPFSelect from '@kubevirt-utils/components/FormPFSelect/FormPFSelect';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { FormGroup, SelectOption } from '@patternfly/react-core';
import { interfaceModelType } from '../utils/constants';
var NetworkInterfaceModelSelect = function (_a) {
    var _b;
    var interfaceModel = _a.interfaceModel, setInterfaceModel = _a.setInterfaceModel;
    var t = useKubevirtTranslation().t;
    var interfaceModelOptions = {
        e1000e: {
            description: t('Supported by most operating systems including Windows out of the box. Offers lower performance compared to virtio.'),
            id: interfaceModelType.E1000E,
            name: t('e1000e'),
        },
        virtio: {
            description: t('Optimized for best performance. Supported by most Linux distributions. Windows requires additional drivers to use this model'),
            id: interfaceModelType.VIRTIO,
            name: t('virtio'),
        },
    };
    var handleChange = function (event, value) {
        event.preventDefault();
        setInterfaceModel(value);
    };
    return (React.createElement(FormGroup, { fieldId: "model", label: t('Model') },
        React.createElement("div", { "data-test-id": "model-select" },
            React.createElement(FormPFSelect, { onSelect: handleChange, selected: interfaceModel, selectedLabel: interfaceModelOptions[interfaceModel].name, toggleProps: { isFullWidth: true } }, (_b = Object.values(interfaceModelOptions)) === null || _b === void 0 ? void 0 : _b.map(function (_a) {
                var description = _a.description, id = _a.id, name = _a.name;
                return (React.createElement(SelectOption, { "data-test-id": "model-select-".concat(id), description: description, key: id, value: id }, name));
            })))));
};
export default NetworkInterfaceModelSelect;
//# sourceMappingURL=NetworkInterfaceModelSelect.js.map