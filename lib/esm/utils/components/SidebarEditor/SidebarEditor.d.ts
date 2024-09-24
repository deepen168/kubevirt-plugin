import { ReactNode } from 'react';
import { K8sResourceCommon } from '@openshift-console/dynamic-plugin-sdk';
import './sidebar-editor.scss';
declare type SidebarEditorProps<Resource> = {
    children: ((resource: Resource) => ReactNode) | ReactNode | ReactNode[];
    onChange?: (resource: Resource) => void;
    onResourceUpdate?: (newResource: Resource) => Promise<Resource | void>;
    pathsToHighlight?: string[];
    resource: Resource;
};
declare const SidebarEditor: <Resource extends K8sResourceCommon>({ children, onChange, onResourceUpdate, pathsToHighlight, resource, }: SidebarEditorProps<Resource>) => JSX.Element;
export default SidebarEditor;
