import { HyperConverged } from '@kubevirt-utils/hooks/useHyperConvergeConfiguration';
import { K8sResourceCommon } from '@openshift-console/dynamic-plugin-sdk';
export declare type HyperConvergedList = K8sResourceCommon & {
    items: HyperConverged[];
};
export declare const updateLiveMigrationConfig: (hyperConverged: HyperConverged, value: null | number | string, name: string) => Promise<HyperConverged>;
export declare const getLiveMigrationNetwork: (hyperConverged: HyperConverged) => any;
export declare const getLiveMigrationConfig: (hyperConverge: HyperConverged) => any;
export declare const MIGRATION_PER_CLUSTER = "parallelMigrationsPerCluster";
export declare const MIGRATION_PER_NODE = "parallelOutboundMigrationsPerNode";
export declare const PRIMARY_NETWORK = "Primary live migration network";
