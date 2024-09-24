import { FC } from 'react';
import { V1CPU } from '@kubevirt-ui/kubevirt-api/kubevirt';
import './CPUTopologyHelperText.scss';
declare type CPUTopologyHelperTextProps = {
    cpu: V1CPU;
};
declare const CPUTopologyHelperText: FC<CPUTopologyHelperTextProps>;
export default CPUTopologyHelperText;
