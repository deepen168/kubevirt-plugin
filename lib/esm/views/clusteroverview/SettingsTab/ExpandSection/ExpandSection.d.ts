import { FC, ReactNode } from 'react';
import './ExpandSection.scss';
declare type ExpandSectionProps = {
    className?: string;
    isDisabled?: boolean;
    isIndented?: boolean;
    toggleContent?: ReactNode;
    toggleText?: string;
};
declare const ExpandSection: FC<ExpandSectionProps>;
export default ExpandSection;
