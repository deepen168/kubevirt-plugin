import * as React from 'react';
import { IoK8sApiCoreV1ConfigMap, IoK8sApiCoreV1Secret, IoK8sApiCoreV1ServiceAccount } from '@kubevirt-ui/kubevirt-api/kubernetes/models';
import { EnvironmentKind } from '../constants';
import './EnvironmentEditor.scss';
declare type EnvironmentEditorProps = {
    configMaps: IoK8sApiCoreV1ConfigMap[];
    diskName: string;
    environmentName?: string;
    environmentNamesSelected: string[];
    id: number;
    kind?: EnvironmentKind;
    onChange: (diskName: string, name: string, serial: string, kind: EnvironmentKind) => void;
    onRemove?: (diskName: string) => void;
    secrets: IoK8sApiCoreV1Secret[];
    serial?: string;
    serviceAccounts: IoK8sApiCoreV1ServiceAccount[];
};
declare const EnvironmentEditor: React.FC<EnvironmentEditorProps>;
export default EnvironmentEditor;
