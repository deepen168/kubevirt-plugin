import { FC } from 'react';
import { TemplateParameter } from '@kubevirt-ui/kubevirt-api/console';
declare type FieldGroupProps = {
    className?: string;
    field: TemplateParameter;
    onChange?: (name: string, value: string) => void;
    showError?: boolean;
};
export declare const FieldGroup: FC<FieldGroupProps>;
export {};
