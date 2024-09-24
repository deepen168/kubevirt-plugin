import { K8sResourceCommon } from '@openshift-console/dynamic-plugin-sdk';
export declare const MTV_OPERATOR = "mtv-operator";
export declare const MTV_ROUTE_NAME = "virt";
export declare type PackageManifestKind = K8sResourceCommon & {
    status: any;
};
export declare const HTTP_REG_EXP: RegExp;
