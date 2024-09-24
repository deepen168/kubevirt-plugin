export declare const createDataSourceWithImportCron: ({ importsToKeep, name: dataSourceName, namespace, schedule, size, url, }: {
    importsToKeep: number;
    name: string;
    namespace: string;
    schedule: string;
    size: string;
    url: string;
}) => Promise<void>;
