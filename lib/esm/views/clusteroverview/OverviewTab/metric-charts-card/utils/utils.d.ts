import { ChartData, ChartPoint } from './hooks/types';
export declare const getCurrentValue: (chartData: ChartData) => number;
export declare const labelUnits: {
    [key: string]: string;
};
export declare const hasUnit: (metric: string) => boolean;
export declare const getLabelUnit: (metric: any, unit: any) => any;
export declare const labeledTickIndexes: {
    [key: number]: number[];
};
export declare const formatPopoverLabel: (displayUnit: string) => ({ datum }: {
    datum: ChartPoint;
}) => string;
