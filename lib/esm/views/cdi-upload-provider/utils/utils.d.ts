import { V1beta1DataVolume } from '@kubevirt-ui/kubevirt-api/containerized-data-importer/models';
import { V1beta1PersistentVolumeClaim } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { K8sModel } from '@openshift-console/dynamic-plugin-sdk';
import { ProgressVariant } from '@patternfly/react-core';
import { UPLOAD_STATUS } from './consts';
import { OperatingSystemRecord } from './types';
export declare const killCDIBoundPVC: (pvc: V1beta1PersistentVolumeClaim) => Promise<V1beta1PersistentVolumeClaim>;
export declare const getProgressVariant: (status: UPLOAD_STATUS) => ProgressVariant.danger | ProgressVariant.success | null;
export declare const joinGrammaticallyListOfItems: (items: string[], separator?: string) => string;
export declare const injectDisabled: (children: any, disabled: any) => any;
export declare const resourcePathFromModel: (model: K8sModel, name?: string, namespace?: string) => string;
/**
 * NOTE: This will not work for runtime-defined resources. Use a `connect`-ed component like `ResourceLink` instead.
 */
export declare const resourcePath: (modal: K8sModel, name?: string, namespace?: string) => string | undefined;
export declare const stringValueUnitSplit: (combinedVal: any) => any[];
export declare const compareVersions: (version1: string, version2: string) => number;
export declare const removeOSDups: (osArr: OperatingSystemRecord[]) => OperatingSystemRecord[];
export declare const updateDV: ({ accessMode, mountAsCDROM, namespace, pvcName, requestSizeUnit, requestSizeValue, storageClassName, volumeMode, }: {
    accessMode: any;
    mountAsCDROM: any;
    namespace: any;
    pvcName: any;
    requestSizeUnit: any;
    requestSizeValue: any;
    storageClassName: any;
    volumeMode: any;
}) => V1beta1DataVolume;
