import { FC } from 'react';
import { V1alpha1MigrationPolicy } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type MigrationPolicyYAMLPageProps = {
    obj?: V1alpha1MigrationPolicy;
};
declare const MigrationPolicyYAMLPage: FC<MigrationPolicyYAMLPageProps>;
export default MigrationPolicyYAMLPage;
