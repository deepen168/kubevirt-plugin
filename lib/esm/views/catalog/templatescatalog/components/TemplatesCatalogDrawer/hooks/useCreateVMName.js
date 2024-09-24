import { useState } from 'react';
import { NAME_INPUT_FIELD } from '@catalog/templatescatalog/utils/consts';
import { generateVMName } from '@kubevirt-utils/resources/template';
import { changeTemplateParameterValue, getTemplateNameParameterValue, hasNameParameter, } from '../utils';
import { useDrawerContext } from './useDrawerContext';
var useCreateVMName = function () {
    var _a = useDrawerContext(), setTemplate = _a.setTemplate, template = _a.template;
    var nameParameterExists = hasNameParameter(template);
    var _b = useState(generateVMName(template)), vmName = _b[0], setVMName = _b[1];
    var nameField = nameParameterExists ? getTemplateNameParameterValue(template) : vmName;
    var onVMNameChange = function (newName) {
        nameParameterExists
            ? setTemplate(function (draftTemplate) {
                return changeTemplateParameterValue(draftTemplate, NAME_INPUT_FIELD, newName);
            })
            : setVMName(vmName);
    };
    return { nameField: nameField, onVMNameChange: onVMNameChange };
};
export default useCreateVMName;
//# sourceMappingURL=useCreateVMName.js.map