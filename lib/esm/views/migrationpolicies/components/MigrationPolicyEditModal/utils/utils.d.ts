import { V1alpha1MigrationPolicy } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { EditMigrationPolicyInitialState } from './constants';
export declare const fromIECUnit: (unit: string) => BinaryUnit;
export declare const extractEditMigrationPolicyInitialValues: (mp: V1alpha1MigrationPolicy) => EditMigrationPolicyInitialState;
export declare const produceUpdatedMigrationPolicy: (mp: V1alpha1MigrationPolicy, state: EditMigrationPolicyInitialState) => V1alpha1MigrationPolicy;
