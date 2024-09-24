import { FC } from 'react';
import { V1Volume } from '@kubevirt-ui/kubevirt-api/kubevirt';
import './CloudInitEditor.scss';
declare type CloudInitEditorProps = {
    cloudInitVolume: V1Volume;
    onSave: (yaml: string) => void;
};
export declare const _CloudInitEditor: FC<CloudInitEditorProps>;
export {};
