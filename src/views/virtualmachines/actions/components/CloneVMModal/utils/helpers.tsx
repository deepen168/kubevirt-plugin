import * as React from 'react';
import produce from 'immer';
import { WritableDraft } from 'immer/dist/internal';

import { ensurePath } from '@catalog/utils/WizardVMContext';
import DataVolumeModel from '@kubevirt-ui/kubevirt-api/console/models/DataVolumeModel';
import { IoK8sApiCoreV1PersistentVolumeClaim } from '@kubevirt-ui/kubevirt-api/kubernetes/models';
import { V1DataVolumeTemplateSpec, V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { convertResourceArrayToMap, getName, getNamespace } from '@kubevirt-utils/resources/shared';
import { getDisks, getInterfaces, getVolumes } from '@kubevirt-utils/resources/vm';
import { formatBytes } from '@kubevirt-utils/resources/vm/utils/disk/size';
import { isEmpty } from '@kubevirt-utils/utils/utils';

export const getRandomChars = (len: number): string => {
  return Math.random()
    .toString(36)
    .replace(/[^a-z0-9]+/g, '')
    .substr(1, len);
};

export const getClonedDisksSummary = (
  vm: V1VirtualMachine,
  pvcs: IoK8sApiCoreV1PersistentVolumeClaim[],
) => {
  const disks = getDisks(vm);
  const volumes = getVolumes(vm);
  return disks?.map((disk) => {
    const description = [disk.name];

    const volume = (volumes || []).find((v) => v.name === disk.name);
    if (volume) {
      if (volume?.dataVolume || volume?.persistentVolumeClaim) {
        const pvc = pvcs.find(
          (p) =>
            getName(p) === volume?.persistentVolumeClaim?.claimName ||
            getName(p) === volume?.dataVolume?.name,
        );
        description.push(
          formatBytes(pvc?.spec?.resources?.requests?.storage),
          pvc?.spec?.storageClassName,
        );
      } else if (volume.containerDisk) {
        description.push('container disk');
      } else if (volume.cloudInitNoCloud) {
        description.push('cloud-init disk');
      }
    }
    return <div key={disk.name}>{description.join(' - ')}</div>;
  });
};

export const produceCleanClonedVM = (
  vm: V1VirtualMachine,
  updateClonedVM: (vmDraft: WritableDraft<V1VirtualMachine>) => void,
) => {
  return produce(vm, (draftVM) => {
    ensurePath(draftVM, ['spec']);
    ensurePath(draftVM, ['metadata']);

    if (draftVM?.metadata) {
      delete draftVM?.metadata?.resourceVersion;
      delete draftVM?.metadata?.uid;
      delete draftVM?.metadata?.creationTimestamp;
      delete draftVM?.metadata?.generation;
    }

    if (draftVM?.spec?.template?.spec?.domain) {
      delete draftVM?.spec?.template?.spec?.domain?.firmware;
    }

    delete draftVM?.status;

    (getInterfaces(draftVM) || []).forEach((iface) => {
      delete iface?.macAddress;
    });

    updateClonedVM(draftVM);
  });
};

const createDataVolumeTemplateFromPVC = (
  pvcToClone: IoK8sApiCoreV1PersistentVolumeClaim,
  dvtName: string,
  targetNamespace: string,
): V1DataVolumeTemplateSpec => {
  return {
    apiVersion: `${DataVolumeModel.apiGroup}/${DataVolumeModel.apiVersion}`,
    kind: DataVolumeModel.kind,
    metadata: {
      name: dvtName,
      namespace: targetNamespace,
    },
    spec: {
      source: {
        pvc: {
          name: getName(pvcToClone),
          namespace: getNamespace(pvcToClone),
        },
      },
      storage: {
        resources: { requests: { storage: pvcToClone?.spec?.resources?.requests?.storage } },
      },
    },
  };
};

export const updateClonedVolumes = (
  vm: V1VirtualMachine,
  pvcs: IoK8sApiCoreV1PersistentVolumeClaim[],
) => {
  const targetNamespace = getNamespace(vm);
  const cloneSuffix = getRandomChars(5);
  const pvcMap = convertResourceArrayToMap(pvcs);
  const volumesToClone: string[] = [];

  const updatedVolumes = (getVolumes(vm) || []).map((vol) => {
    if (!vol.persistentVolumeClaim && !vol.dataVolume) return vol;

    if (vol.persistentVolumeClaim) {
      const volumeName = vol.persistentVolumeClaim.claimName;
      !isEmpty(pvcMap[volumeName]) && volumesToClone.push(volumeName);

      const updatedVol = produce(vol, (draftVolume) => {
        draftVolume.persistentVolumeClaim.claimName = `${volumeName}-${cloneSuffix}`;
      });

      return updatedVol;
    }

    const volumeName = vol.dataVolume.name;
    !isEmpty(pvcMap[volumeName]) && volumesToClone.push(volumeName);

    return produce(vol, (draftVolume) => {
      draftVolume.dataVolume.name = `${vol.dataVolume.name}-${cloneSuffix}`;
    });
  });

  const updatedDataVolumeTemplates = volumesToClone.map((volumeName) =>
    createDataVolumeTemplateFromPVC(
      pvcMap[volumeName],
      `${volumeName}-${cloneSuffix}`,
      targetNamespace,
    ),
  );

  debugger;
  vm.spec.dataVolumeTemplates = updatedDataVolumeTemplates;
  vm.spec.template.spec.volumes = updatedVolumes;
};
