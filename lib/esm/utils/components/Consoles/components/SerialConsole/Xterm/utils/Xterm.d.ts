/// <reference types="react" />
export declare type XTermProps = {
    /** The number of columns to resize to */
    cols?: number;
    fontFamily?: string;
    fontSize?: number;
    /** A reference object to attach to the xterm */
    innerRef?: React.RefObject<any>;
    /** Data to be sent from terminall to backend; (data) => {} */
    onData?: (e: string) => void;
    /** terminall title has been changed. */
    onTitleChanged?: (title: string) => void;
    /** The number of rows to resize to */
    rows?: number;
};
export declare const onBeforeUnload: (event: any) => string;
export declare const onFocusOut: () => void;
export declare const onFocusIn: () => void;
