import { FC, ReactNode } from 'react';
declare type WithPermissionTooltipProps = {
    allowed: boolean;
    children: ReactNode;
    title?: string;
};
declare const WithPermissionTooltip: FC<WithPermissionTooltipProps>;
export default WithPermissionTooltip;
