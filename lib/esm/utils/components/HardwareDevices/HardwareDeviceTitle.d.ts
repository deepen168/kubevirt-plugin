import { FC } from 'react';
declare type HardwareDeviceTitleProps = {
    canEdit: boolean;
    hideEdit?: boolean;
    onClick?: () => void;
    title: string;
};
declare const HardwareDeviceTitle: FC<HardwareDeviceTitleProps>;
export default HardwareDeviceTitle;
