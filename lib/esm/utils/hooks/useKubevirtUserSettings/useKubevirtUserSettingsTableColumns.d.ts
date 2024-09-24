import { TableColumn } from '@openshift-console/dynamic-plugin-sdk';
declare type UseKubevirtUserSettingsTableColumnsType = <T>(input: {
    columnManagementID: string;
    columns: TableColumn<T>[];
}) => [
    activeColumns: TableColumn<T>[],
    setActiveColumns: (val: any) => void,
    loaded: boolean,
    error: Error
];
declare const useKubevirtUserSettingsTableColumns: UseKubevirtUserSettingsTableColumnsType;
export default useKubevirtUserSettingsTableColumns;
