export declare const dateTimeFormatter: Intl.DateTimeFormat;
export declare const timeFormatter: Intl.DateTimeFormat;
export declare const dateFormatterNoYear: Intl.DateTimeFormat;
export declare const utcDateTimeFormatter: Intl.DateTimeFormat;
export declare const isValid: (dateTime: Date) => boolean;
export declare const fromNow: (dateTime: Date | string, now?: Date, options?: any) => string | {
    time: string;
    value: number;
};
export declare const timestampFor: (mdate: Date, now: Date, omitSuffix: boolean) => any;
