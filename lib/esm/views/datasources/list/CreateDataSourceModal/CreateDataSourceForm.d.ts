import { FC } from 'react';
import { FieldError, UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { CreateDataSourceModalFormType } from './CreateDataSourceModal';
declare type CreateDataSourceFormProps = {
    errors: {
        [Property in keyof CreateDataSourceModalFormType]?: FieldError;
    };
    importsToKeep: number;
    register: UseFormRegister<CreateDataSourceModalFormType>;
    setValue: UseFormSetValue<CreateDataSourceModalFormType>;
    size: string;
};
export declare const CreateDataSourceForm: FC<CreateDataSourceFormProps>;
export {};
