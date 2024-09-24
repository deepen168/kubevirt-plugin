import { FC } from 'react';
import './PendingChangesAlert.scss';
declare type PendingChangesAlertProps = {
    isExpandable?: boolean;
    isWarning?: boolean;
    title?: string;
    warningMsg?: string;
};
export declare const PendingChangesAlert: FC<PendingChangesAlertProps>;
export {};
