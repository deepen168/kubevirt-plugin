import { FC } from 'react';
export declare type CreateDataSourceModalFormType = {
    importsToKeep: number;
    name: string;
    schedule: string;
    size: string;
    url: string;
};
declare type CreateDataSourceModalProps = {
    isOpen: boolean;
    namespace: string;
    onClose: () => void;
};
export declare const CreateDataSourceModal: FC<CreateDataSourceModalProps>;
export {};
