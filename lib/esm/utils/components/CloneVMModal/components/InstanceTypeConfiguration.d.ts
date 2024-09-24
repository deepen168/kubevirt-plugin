import { FC } from 'react';
import { V1InstancetypeMatcher } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type InstanceTypeConfigurationProps = {
    itMatcher: V1InstancetypeMatcher;
};
declare const InstanceTypeConfiguration: FC<InstanceTypeConfigurationProps>;
export default InstanceTypeConfiguration;
