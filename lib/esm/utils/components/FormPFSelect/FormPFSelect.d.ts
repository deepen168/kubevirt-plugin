import { FC } from 'react';
import { MenuToggleProps, SelectProps } from '@patternfly/react-core';
declare type FormPFSelectProps = Omit<SelectProps, 'isOpen' | 'toggle'> & {
    closeOnSelect?: boolean;
    selectedLabel?: any;
    toggleProps?: MenuToggleProps;
};
declare const FormPFSelect: FC<FormPFSelectProps>;
export default FormPFSelect;
