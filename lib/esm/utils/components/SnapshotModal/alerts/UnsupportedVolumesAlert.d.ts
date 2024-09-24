import * as React from 'react';
import { V1VolumeSnapshotStatus } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type UnsupportedVolumesAlertProps = {
    unsupportedVolumes: V1VolumeSnapshotStatus[];
};
declare const UnsupportedVolumesAlert: React.FC<UnsupportedVolumesAlertProps>;
export default UnsupportedVolumesAlert;
