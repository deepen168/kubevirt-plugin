import { FC } from 'react';
import { V1CPU } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type CPUDescriptionProps = {
    cpu: V1CPU;
    helperTextResource?: string;
};
declare const CPUDescription: FC<CPUDescriptionProps>;
export default CPUDescription;
