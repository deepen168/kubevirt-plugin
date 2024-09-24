import { NetworkPresentation } from '@kubevirt-utils/resources/vm/utils/network/constants';
import { TableColumn } from '@openshift-console/dynamic-plugin-sdk';
declare const useNetworkColumns: (data: NetworkPresentation[]) => TableColumn<NetworkPresentation>[];
export default useNetworkColumns;
