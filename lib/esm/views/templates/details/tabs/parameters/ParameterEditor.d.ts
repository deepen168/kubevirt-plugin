import { FC } from 'react';
import { TemplateParameter } from '@kubevirt-ui/kubevirt-api/console';
declare type ParameterEditorProps = {
    isEditDisabled?: boolean;
    onChange: (parameter: TemplateParameter) => void;
    parameter: TemplateParameter;
};
declare const ParameterEditor: FC<ParameterEditorProps>;
export default ParameterEditor;
