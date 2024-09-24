import { V1beta1DataSource } from '@kubevirt-ui/kubevirt-api/containerized-data-importer/models';
import { UploadDataProps } from '@kubevirt-utils/hooks/useCDIUpload/useCDIUpload';
import { BootableVolume } from '@kubevirt-utils/resources/bootableresources/types';
import { ClaimPropertySets } from '@kubevirt-utils/types/storage';
import { AddBootableVolumeState, DROPDOWN_FORM_SELECTION } from './constants';
declare type createBootableVolumeType = (input: {
    applyStorageProfileSettings: boolean;
    bootableVolume: AddBootableVolumeState;
    claimPropertySets: ClaimPropertySets;
    onCreateVolume: (createdVolume: BootableVolume) => void;
    sourceType: DROPDOWN_FORM_SELECTION;
    uploadData: ({ dataVolume, file }: UploadDataProps) => Promise<void>;
}) => (dataSource: V1beta1DataSource) => Promise<V1beta1DataSource>;
export declare const createBootableVolume: createBootableVolumeType;
export declare const getInstanceTypeFromVolume: (bootableVolume: BootableVolume) => string;
declare type CreateDataSourceWithImportCronType = (bootableVolume: AddBootableVolumeState, initialDataSource: V1beta1DataSource) => Promise<V1beta1DataSource>;
export declare const createDataSourceWithImportCron: CreateDataSourceWithImportCronType;
export {};
