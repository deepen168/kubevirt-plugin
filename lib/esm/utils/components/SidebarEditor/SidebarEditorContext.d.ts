import React, { FC } from 'react';
export declare type SidebarEditorContextType = {
    isEditable?: boolean;
    setEditorVisible?: (editorVisible: boolean) => void;
    showEditor: boolean;
    showSwitch: boolean;
};
export declare const SidebarEditorContext: React.Context<SidebarEditorContextType>;
export declare type SidebarEditorProviderType = {
    isEditable?: boolean;
};
export declare const SidebarEditorProvider: FC<SidebarEditorProviderType>;
