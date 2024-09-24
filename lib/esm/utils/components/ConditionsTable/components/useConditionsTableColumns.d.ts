import { TableColumn } from '@openshift-console/dynamic-plugin-sdk';
import { K8sResourceCondition } from '../ConditionsTable';
declare const useConditionsTableColumns: () => TableColumn<K8sResourceCondition>[];
export default useConditionsTableColumns;
