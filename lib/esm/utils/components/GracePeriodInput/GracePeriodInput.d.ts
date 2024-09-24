import { FC } from 'react';
import './grace-period-input.scss';
interface GracePeriodInputProps {
    gracePeriodSeconds: null | number;
    isChecked: boolean;
    onCheckboxChange: (checked: boolean) => void;
    setGracePeriodSeconds: (newGracePeriod: null | number) => void;
}
export declare const GracePeriodInput: FC<GracePeriodInputProps>;
export {};
