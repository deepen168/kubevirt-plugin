import { FC, PropsWithChildren, ReactNode } from 'react';
declare type EditButtonWithTooltipProps = PropsWithChildren<{
    isEditable: boolean;
    onEditClick: () => void;
    testId: string;
    tooltipContent?: ReactNode;
}>;
declare const EditButtonWithTooltip: FC<EditButtonWithTooltipProps>;
export default EditButtonWithTooltip;
