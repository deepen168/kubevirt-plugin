import { V1beta1DataSource } from '@kubevirt-ui/kubevirt-api/containerized-data-importer/models';
import { V1beta1DataVolumeSourcePVC, V1beta1DataVolumeSourceRef, V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
/**
 * A function to get the data source from a vm and its name and namespace
 * @param {V1VirtualMachine} vm - the vm to get the data source from.
 * @returns {V1beta1DataVolumeSourcePVC | V1beta1DataVolumeSourceRef} - The vms data volume source.
 */
export declare const getPVCSourceOrSourceRef: (vm: V1VirtualMachine) => V1beta1DataVolumeSourcePVC | V1beta1DataVolumeSourceRef;
/**
 * a function to get the boot source from a vm and its status
 * @param {V1VirtualMachine} vm - the vm to get the boot source from
 * @returns the vm's boot source and its status
 */
export declare const getVMBootSourceType: (vm: V1VirtualMachine) => TemplateBootSource;
/**
 * Function to get a human comprehensive label to describe the vm boot source
 * @param {BOOT_SOURCE} bootSourceType - vm boot source type
 * @param {V1beta1DataSource} dataSource - if any, the vm boot data source
 * @returns label representing the boot source type
 */
export declare const getVMBootSourceLabel: (bootSourceType: BOOT_SOURCE, dataSource?: V1beta1DataSource) => string;
