import DropdownEnum from '@kubevirt-utils/utils/dropdownEnum';
declare type TopConsumerScopeData = {
    dropdownLabel: string;
};
declare abstract class TopConsumerScopeObjectEnum<T> extends DropdownEnum<T> {
    protected readonly dropdownLabel: string;
    protected constructor(value: T, { dropdownLabel }: TopConsumerScopeData);
}
export declare class TopConsumerScope extends TopConsumerScopeObjectEnum<string> {
    static readonly NODE: TopConsumerScope;
    static readonly PROJECT: TopConsumerScope;
    static readonly VM: TopConsumerScope;
    private static readonly all;
    private static readonly dropdownLabelMapper;
    static fromDropdownLabel: (dropdownLabel: string) => TopConsumerScope;
    static fromString: (source: string) => TopConsumerScope;
    static getAll: () => any;
    private static readonly stringMapper;
}
export {};
