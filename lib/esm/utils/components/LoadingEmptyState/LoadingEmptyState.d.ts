import { ComponentType, FC, ReactNode } from 'react';
declare type LoadingEmptyStateProps = {
    bodyContents?: ReactNode | string;
    iconComponent?: ComponentType;
};
declare const LoadingEmptyState: FC<LoadingEmptyStateProps>;
export default LoadingEmptyState;
