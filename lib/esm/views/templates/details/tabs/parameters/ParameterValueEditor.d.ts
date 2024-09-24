import { FC } from 'react';
import { TemplateParameter } from '@kubevirt-ui/kubevirt-api/console';
declare type ParameterValueEditorProps = {
    isEditDisabled?: boolean;
    onChange: (parameter: TemplateParameter) => void;
    parameter: TemplateParameter;
};
declare const SelectParameterValueType: FC<ParameterValueEditorProps>;
export default SelectParameterValueType;
