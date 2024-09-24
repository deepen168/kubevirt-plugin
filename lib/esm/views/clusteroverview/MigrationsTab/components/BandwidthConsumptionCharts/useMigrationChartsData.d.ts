import { ChartDataObject } from './constants';
declare type UseMigrationChartsData = (duration: string, currentTime: number, timespan: number) => {
    bandwidthConsumed: ChartDataObject[];
    maxBandwidthConsumed: number;
    maxMigrationCount: number;
    migrationsCount: ChartDataObject[];
};
export declare const useMigrationChartsData: UseMigrationChartsData;
export default useMigrationChartsData;
