import React from 'react';
declare type ComponentReadyProps = React.PropsWithChildren<{
    isReady: boolean;
    linkToMetrics?: string;
    spinner?: boolean;
    text?: string;
}>;
declare const ComponentReady: React.FC<ComponentReadyProps>;
export default ComponentReady;
