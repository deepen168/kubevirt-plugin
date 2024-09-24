import { V1beta1DataImportCron, V1beta1DataSource } from '@kubevirt-ui/kubevirt-api/containerized-data-importer/models';
export declare const CRON_DOC_URL = "https://www.redhat.com/sysadmin/automate-linux-tasks-cron";
export declare const onDataImportCronManageSubmit: ({ data: { allowAutoUpdate, importsToKeep, schedule, url }, resources: { dataImportCron, dataSource }, }: {
    data: {
        allowAutoUpdate: boolean;
        importsToKeep: number;
        schedule: string;
        url: string;
    };
    resources: {
        dataImportCron: V1beta1DataImportCron;
        dataSource: V1beta1DataSource;
    };
}) => Promise<V1beta1DataImportCron>;
