import { V1Interface, V1Network } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { NetworkPresentation } from './constants';
/**
 * function to get network interfaces row data from networks and interfaces
 * @param {V1Network[]} networks networks
 * @param {V1Interface[]} interfaces networks interfaces
 * @param autoattachPodInterface
 * @returns returns a network presentation array
 */
export declare const getNetworkInterfaceRowData: (networks: V1Network[], interfaces: V1Interface[], autoattachPodInterface?: boolean) => NetworkPresentation[];
