import { TopConsumerMetric } from './topConsumerMetric';
import { TopConsumerScope } from './topConsumerScope';
export declare const getValue: (value: any) => number;
export declare const humanizeTopConsumerMetric: (value: number, metric: TopConsumerMetric) => {
    unit: any;
    value: any;
};
export declare const getHumanizedValue: (value: any, metric: any) => {
    unit: any;
    value: any;
};
export declare const getTopConsumerCardID: (rowNumber: any, cardNumber: any) => string;
export declare const TOP_AMOUNT_SELECT_OPTIONS: {
    key: string;
    value: any;
}[];
export declare const initialTopConsumerCardSettings: {
    [key: string]: {
        metric: TopConsumerMetric;
        scope: TopConsumerScope;
    };
};
export declare const getChartTitle: (scope: any, queryData: any) => string;
