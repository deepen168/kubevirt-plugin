/// <reference types="react" />
import { K8sModel } from '@openshift-console/dynamic-plugin-sdk';
declare const useDynamicPages: (model: K8sModel) => {
    component: import("react").ComponentType<import("@openshift-console/dynamic-plugin-sdk").PageComponentProps<import("@openshift-console/dynamic-plugin-sdk").K8sResourceCommon>>;
    name: string;
    href: string;
}[];
export default useDynamicPages;
