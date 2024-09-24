import { FC, ReactNode } from 'react';
import './DescriptionItem.scss';
declare type DescriptionItemHeaderProps = {
    bodyContent: ReactNode;
    breadcrumb?: string;
    descriptionHeader: ReactNode;
    isPopover: boolean;
    label?: ReactNode;
    maxWidth?: string;
    moreInfoURL?: string;
};
export declare const DescriptionItemHeader: FC<DescriptionItemHeaderProps>;
export {};
