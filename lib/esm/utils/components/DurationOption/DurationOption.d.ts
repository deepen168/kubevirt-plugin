import DropdownEnum from '@kubevirt-utils/utils/dropdownEnum';
export declare const ONE_SECOND = 1000;
export declare const ONE_MINUTE: number;
export declare const FIVE_MIN: number;
export declare const FIFTEEN_MIN: number;
export declare const THIRTY_MIN: number;
export declare const ONE_HOUR: number;
export declare const THREE_HOURS: number;
export declare const FOUR_HOURS: number;
export declare const SIX_HOURS: number;
export declare const TWELVE_HOURS: number;
export declare const ONE_DAY: number;
export declare const TWO_DAYS: number;
export declare const ONE_WEEK: number;
declare class DurationOption extends DropdownEnum<string> {
    static readonly FIFTEEN_MIN: DurationOption;
    static readonly FIVE_MIN: DurationOption;
    static readonly ONE_DAY: DurationOption;
    static readonly ONE_HOUR: DurationOption;
    static readonly ONE_WEEK: DurationOption;
    static readonly SIX_HOURS: DurationOption;
    static readonly THIRTY_MIN: DurationOption;
    static readonly THREE_HOURS: DurationOption;
    static readonly TWELVE_HOURS: DurationOption;
    static readonly TWO_DAYS: DurationOption;
    private static readonly all;
    private static readonly dropdownLabelMapper;
    static fromDropdownLabel: (dropdownLabel: string) => DurationOption;
    static fromString: (source: string) => DurationOption;
    static getAll: () => any;
    static getMilliseconds: (duration: string) => number;
    private static readonly stringMapper;
    protected readonly millisecondsTime: number;
    constructor(value: string, { dropdownLabel }: {
        dropdownLabel: any;
    });
}
export default DurationOption;
