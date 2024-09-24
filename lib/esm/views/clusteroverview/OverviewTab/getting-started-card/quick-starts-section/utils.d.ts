import { ObjectMetadata } from '@openshift-console/dynamic-plugin-sdk';
import { AllQuickStartStates, QuickStart } from '@patternfly/quickstarts';
declare type Merge<A, B> = {
    [K in keyof (A | B)]: K extends keyof B ? B[K] : A[K];
};
export declare const orderQuickStarts: (allQuickStarts: Merge<QuickStart, {
    metadata: ObjectMetadata;
}>[], allQuickStartStates: AllQuickStartStates, featured: string[], filter?: ((QuickStart: any) => boolean) | undefined) => Merge<QuickStart[], {
    metadata: ObjectMetadata;
}>[];
export {};
