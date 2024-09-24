import DropdownEnum from '@kubevirt-utils/utils/dropdownEnum';
declare type TopConsumerMetricData = {
    chartLabel: string;
    dropdownLabel: string;
};
declare abstract class TopConsumerMetricObjectEnum<T> extends DropdownEnum<T> {
    private readonly chartLabel;
    protected readonly dropdownLabel: string;
    getChartLabel: () => string;
    protected constructor(value: T, { chartLabel, dropdownLabel }: TopConsumerMetricData);
}
export declare class TopConsumerMetric extends TopConsumerMetricObjectEnum<string> {
    static readonly CPU: TopConsumerMetric;
    static readonly MEMORY: TopConsumerMetric;
    static readonly MEMORY_SWAP_TRAFFIC: TopConsumerMetric;
    static readonly STORAGE_IOPS: TopConsumerMetric;
    static readonly STORAGE_THROUGHPUT: TopConsumerMetric;
    static readonly VCPU_WAIT: TopConsumerMetric;
    private static readonly all;
    private static readonly dropdownLabelMapper;
    static fromDropdownLabel: (dropdownLabel: string) => TopConsumerMetric;
    static fromString: (source: string) => TopConsumerMetric;
    static getAll: () => any;
    private static readonly stringMapper;
}
export {};
