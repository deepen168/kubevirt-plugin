import React, { ComponentProps, HTMLProps } from 'react';
import { TextInput } from '@patternfly/react-core';
export declare type FormTextInputProps = Omit<ComponentProps<typeof TextInput>, 'onChange'> & Pick<HTMLProps<HTMLInputElement>, 'onChange'>;
export declare const FormTextInput: React.ForwardRefExoticComponent<Omit<FormTextInputProps, "ref"> & React.RefAttributes<HTMLInputElement>>;
