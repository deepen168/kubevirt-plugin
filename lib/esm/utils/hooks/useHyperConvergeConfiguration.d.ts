import { V1LabelSelector } from '@kubevirt-ui/kubevirt-api/containerized-data-importer/models';
import { V1MigrationConfiguration } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { K8sResourceCommon } from '@openshift-console/dynamic-plugin-sdk';
export declare type HyperConverged = K8sResourceCommon & {
    spec: {
        commonBootImageNamespace?: string;
        commonTemplatesNamespace?: string;
        dataImportCronTemplates: K8sResourceCommon[];
        evictionStrategy?: string;
        featureGates: {
            deployKubeSecondaryDNS?: boolean;
            deployTektonTaskResources?: boolean;
            disableMDevConfiguration?: boolean;
            enableCommonBootImageImport?: boolean;
            nonRoot?: boolean;
            persistentReservation?: boolean;
            root?: boolean;
            withHostPassthroughCPU?: boolean;
        };
        higherWorkloadDensity: {
            memoryOvercommitPercentage: number;
        };
        ksmConfiguration: {
            nodeLabelSelector?: Record<string, never>;
        };
        liveMigrationConfig: V1MigrationConfiguration;
        resourceRequirements: {
            autoCPULimitNamespaceLabelSelector: V1LabelSelector;
        };
        virtualMachineOptions: {
            disableSerialConsoleLog: string;
        };
    };
    status: {
        dataImportCronTemplates: K8sResourceCommon[];
    };
};
declare type UseHyperConvergeConfigurationType = () => [
    hyperConvergeConfig: HyperConverged,
    loaded: boolean,
    error: any
];
declare const useHyperConvergeConfiguration: UseHyperConvergeConfigurationType;
export default useHyperConvergeConfiguration;
