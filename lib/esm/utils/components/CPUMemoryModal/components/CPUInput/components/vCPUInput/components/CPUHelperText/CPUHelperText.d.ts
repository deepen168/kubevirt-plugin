import { FC } from 'react';
import { V1CPU } from '@kubevirt-ui/kubevirt-api/kubevirt';
import './CPUHelperText.scss';
declare type CPUHelperTextProps = {
    cpu: V1CPU;
    hide: boolean;
};
declare const CPUHelperText: FC<CPUHelperTextProps>;
export default CPUHelperText;
