export declare const STATIC_SEARCH_FILTERS: {
    readonly labels: "labels";
    readonly name: "name";
};
export declare const STATIC_SEARCH_FILTERS_LABELS: {
    readonly labels: any;
    readonly name: any;
};
export declare const STATIC_SEARCH_FILTERS_PLACEHOLDERS: {
    readonly labels: any;
    readonly name: any;
};
export declare const MAX_SUGGESTIONS = 5;
export declare enum KeyEventModes {
    FOCUS = "FOCUS",
    HIDE = "HIDE"
}
export declare const textInputKeyHandler: {
    [x: string]: KeyEventModes;
};
export declare const suggestionBoxKeyHandler: {
    Escape: KeyEventModes;
};
export declare type KeyEventMap = {
    [key: string]: KeyEventModes;
};
