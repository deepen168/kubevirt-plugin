import { V1Template } from '@kubevirt-ui/kubevirt-api/console';
import { V1beta1DataSource, V1beta1DataVolume } from '@kubevirt-ui/kubevirt-api/containerized-data-importer/models';
import { IoK8sApiCoreV1PersistentVolumeClaim } from '@kubevirt-ui/kubevirt-api/kubernetes';
import { V1beta1DataVolumeSourceHTTP, V1beta1DataVolumeSourcePVC, V1beta1DataVolumeSourceRef, V1beta1DataVolumeSourceRegistry, V1beta1PersistentVolumeClaim, V1ContainerDiskSource } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { BOOT_SOURCE } from '../../utils/constants';
export declare type TemplateBootSource = {
    source: {
        containerDisk?: V1ContainerDiskSource;
        http?: V1beta1DataVolumeSourceHTTP;
        pvc?: V1beta1DataVolumeSourcePVC;
        registry?: V1beta1DataVolumeSourceRegistry;
        sourceRef?: V1beta1DataVolumeSourceRef;
    };
    sourceValue?: {
        containerDisk?: V1ContainerDiskSource;
        http?: V1beta1DataVolumeSourceHTTP;
        pvc?: V1beta1PersistentVolumeClaim;
        registry?: V1beta1DataVolumeSourceRegistry;
        sourceRef?: V1beta1PersistentVolumeClaim;
    };
    storageClassName?: string;
    type: BOOT_SOURCE;
};
/**
 * a function to get the boot source from a template and its status
 * @param {V1Template} template - the template to get the boot source from
 * @returns the template's boot source and its status
 */
export declare const getTemplateBootSourceType: (template: V1Template) => TemplateBootSource;
/**
 * a function to k8sGet a PVC
 * @param name the name of the PVC
 * @param ns  the namespace of the PVC
 * @returns a promise that resolves into the PVC
 */
export declare const getPVC: (name: string, ns: string) => Promise<IoK8sApiCoreV1PersistentVolumeClaim>;
/**
 * a function to k8sGet a DataVolume
 * @param name the name of the DataVolume
 * @param ns  the namespace of the DataVolume
 * @returns a promise that resolves into the DataVolume
 */
export declare const getDataVolume: (name: string, ns: string) => Promise<V1beta1DataVolume>;
/**
 * a function to k8sGet a DataSource
 * @param name the name of the DataSource
 * @param ns  the namespace of the DataSource
 * @returns a promise that resolves into the DataSource
 */
export declare const getDataSource: (name: string, ns: string) => Promise<V1beta1DataSource>;
/**
 * a function to k8sGet a DataSource
 * @param name the name of the DataSource
 * @param ns  the namespace of the DataSource
 * @returns a promise that resolves into the DataSource
 */
export declare const getDataSourcePVC: (name: string, ns: string) => Promise<IoK8sApiCoreV1PersistentVolumeClaim>;
/**
 * a function that returns true if the data source is ready
 * @param dataSource the data source to check if ready
 * @returns true if the data source is ready, false otherwise
 */
export declare const isDataSourceReady: (dataSource: V1beta1DataSource) => boolean;
/**
 * a function that returns true if the data source is cloning in progress
 * @param dataSource the data source to check if cloning
 * @returns true if the data source is in cloning state, false otherwise
 */
export declare const isDataSourceCloning: (dataSource: V1beta1DataSource) => boolean;
export declare const isDataSourceUploading: (dataSource: V1beta1DataSource) => boolean;
/**
 * update template's boot source storage class
 * @param template the template to get the boot source from
 * @param storageClassName the storage class name to use
 * @returns - an updated template with storage class name set
 */
export declare const produceTemplateBootSourceStorageClass: (template: V1Template, storageClassName: string) => V1Template;
