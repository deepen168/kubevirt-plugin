import * as React from 'react';
export declare type AccessConsolesProps = {
    /**
     * Child element can be either
     *   - <SerialConsole>, <VncConsole> or <DesktopViewer>
     *   - or has a property "type" of value either SERIAL_CONSOLE_TYPE or VNC_CONSOLE_TYPE (useful when wrapping (composing) basic console components
     */
    children?: React.ReactElement[] | React.ReactNode;
    /** Initial selection of the Select */
    preselectedType?: string;
    /** The value for the Desktop Viewer Console option. This can be overriden by the type property of the child component */
    textDesktopViewerConsole?: string;
    /** Placeholder text for the console selection */
    textSelectConsoleType?: string;
    /** The value for the Serial Console option. This can be overriden by the type property of the child component */
    textSerialConsole?: string;
    /** The value for the VNC Console option. This can be overriden by the type property of the child component */
    textVncConsole?: string;
};
export declare const getChildTypeName: (child: any) => any;
export declare const getConsoleForType: (consoleType: string, children: any) => React.JSX.Element[];
