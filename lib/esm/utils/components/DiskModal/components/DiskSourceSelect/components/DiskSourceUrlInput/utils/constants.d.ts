import { OS_NAME_TYPES } from '@kubevirt-utils/resources/template';
declare type UrlSourceHelperText = {
    afterLabelText: string;
    beforeLabelText: string;
    label: string;
};
declare type UrlSourceHelperTextMapper = {
    [key in Exclude<OS_NAME_TYPES, OS_NAME_TYPES.other>]: UrlSourceHelperText;
};
export declare const HTTP_URL_PREFIX = "http://";
export declare const HTTPS_URL_PREFIX = "https://";
export declare const urlSourceHelperTextMapper: UrlSourceHelperTextMapper;
export {};
