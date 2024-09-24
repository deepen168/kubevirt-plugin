export declare enum EnvironmentKind {
    configMap = "configMap",
    secret = "secret",
    serviceAccount = "serviceAccount"
}
export declare type EnvironmentVariable = {
    diskName: string;
    kind: EnvironmentKind;
    name: string;
    serial: string;
};
export declare const MapKindToAbbr: {
    configMap: string;
    secret: string;
    serviceAccount: string;
};
