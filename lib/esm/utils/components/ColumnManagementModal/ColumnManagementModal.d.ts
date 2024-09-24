import { FC } from 'react';
import { ColumnLayout } from '@openshift-console/dynamic-plugin-sdk';
import './column-management-modal.scss';
declare type ColumnManagementModalProps = {
    columnLayout: ColumnLayout;
    isOpen: boolean;
    onClose: () => void;
};
export declare const ColumnManagementModal: FC<ColumnManagementModalProps>;
export {};
