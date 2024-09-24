import { FC } from 'react';
declare type CapacityInputProps = {
    isEditingCreatedDisk?: boolean;
    isMinusDisabled?: boolean;
    label?: string;
    onChange: (quantity: string) => void;
    size: string;
};
declare const CapacityInput: FC<CapacityInputProps>;
export default CapacityInput;
