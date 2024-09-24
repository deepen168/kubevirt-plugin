import { FC } from 'react';
import { V1beta1DataImportCron } from '@kubevirt-ui/kubevirt-api/containerized-data-importer/models';
import { V1beta1VirtualMachineClusterPreference } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { RowProps } from '@openshift-console/dynamic-plugin-sdk';
import { BootableResource } from '../../utils/types';
import './BootableVolumesRow.scss';
declare const BootableVolumesRow: FC<RowProps<BootableResource, {
    dataImportCrons: V1beta1DataImportCron[];
    preferences: V1beta1VirtualMachineClusterPreference[];
}>>;
export default BootableVolumesRow;
