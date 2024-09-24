declare const userSettingsInitialState: UserSettingsState;
export declare type UserSettingsState = {
    cards: CardsUserSettings;
    columns: ColumnsUserSettings;
    favoriteBootableVolumes: string[];
    quickStart: QuickStartUserSettings;
    ssh: SSHUserSettings;
};
declare type SSHUserSettings = {
    [namespace: string]: string;
};
declare type ColumnsUserSettings = {
    [tableName: string]: string[];
};
declare type QuickStartUserSettings = {
    [guideName: string]: boolean;
};
declare type CardsUserSettings = {
    [cardPage: string]: {
        cardName: string;
        value: boolean;
    };
};
export default userSettingsInitialState;
