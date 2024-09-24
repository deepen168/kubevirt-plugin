import { V1KubeVirtConfiguration } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { K8sResourceCommon } from '@openshift-console/dynamic-plugin-sdk';
export declare type KubevirtHyperconverged = K8sResourceCommon & {
    spec: {
        configuration: V1KubeVirtConfiguration;
    };
};
declare const useKubevirtHyperconvergeConfiguration: () => [hcConfig: KubevirtHyperconverged, configLoaded: boolean, configError: any];
export default useKubevirtHyperconvergeConfiguration;
