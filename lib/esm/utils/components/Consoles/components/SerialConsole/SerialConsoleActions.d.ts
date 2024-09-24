import * as React from 'react';
export declare type SerialConsoleActionsProps = React.HTMLProps<HTMLDivElement> & {
    onDisconnect: () => void;
    onReset: () => void;
    textDisconnect?: string;
    textReset?: string;
};
export declare const SerialConsoleActions: React.FunctionComponent<SerialConsoleActionsProps>;
