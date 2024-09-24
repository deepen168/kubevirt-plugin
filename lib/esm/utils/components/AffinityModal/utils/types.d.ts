import { MatchExpression } from '@openshift-console/dynamic-plugin-sdk';
export declare type IDEntity = {
    id: number;
};
export declare enum AffinityType {
    node = "nodeAffinity",
    pod = "podAffinity",
    podAnti = "podAntiAffinity"
}
export declare enum AffinityCondition {
    preferred = "preferredDuringSchedulingIgnoredDuringExecution",
    required = "requiredDuringSchedulingIgnoredDuringExecution"
}
export declare type AffinityLabel = IDEntity & {
    key: string;
    operator: MatchExpression['operator'];
    values: string[];
};
export declare type AffinityRowData = {
    condition: AffinityCondition;
    expressions?: AffinityLabel[];
    fields?: AffinityLabel[];
    id: string;
    topologyKey?: string;
    type: AffinityType;
    weight?: number;
};
