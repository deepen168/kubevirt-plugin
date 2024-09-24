import { Silence } from '@openshift-console/dynamic-plugin-sdk';
declare type UseSilences = () => {
    loaded: boolean;
    loadError: any;
    silences: Silence[];
};
declare const useSilences: UseSilences;
export default useSilences;
