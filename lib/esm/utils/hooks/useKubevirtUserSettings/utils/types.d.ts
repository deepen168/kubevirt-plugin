export declare type TopConsumersData = {
    [key: string]: any;
};
export declare type SetTopConsumerData = <T>(field: string, value: T) => void;
export declare type UseKubevirtUserSettingsTopConsumerCards = () => [TopConsumersData, SetTopConsumerData];
export declare type UserSettingFavorites = [
    string[],
    (val: any) => Promise<{
        [key: string]: string;
    }>
];
export declare type KubevirtUserSetting = [
    value: {
        [key: string]: any;
    },
    updater: (val: any) => Promise<{
        [key: string]: any;
    }>,
    loading: boolean,
    error: Error
];
export declare type UseKubevirtUserSettings = (key?: string) => KubevirtUserSetting;
