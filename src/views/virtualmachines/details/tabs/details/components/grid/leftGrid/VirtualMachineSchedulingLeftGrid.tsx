import * as React from 'react';

import VirtualMachineModel from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineModel';
import { IoK8sApiCoreV1Node } from '@kubevirt-ui/kubevirt-api/kubernetes/models';
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { useModal } from '@kubevirt-utils/components/ModalProvider/ModalProvider';
import NodeSelectorModal from '@kubevirt-utils/components/NodeSelectorModal/NodeSelectorModal';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { k8sUpdate } from '@openshift-console/dynamic-plugin-sdk';
import { DescriptionList, GridItem } from '@patternfly/react-core';

import Affinity from '../../Affinity/Affinity';
import Descheduler from '../../Descheduler/Descheduler';
import NodeSelector from '../../NodeSelector/NodeSelector';
import Tolerations from '../../Tolerations/Tolerations';
import VirtualMachineDescriptionItem from '../../VirtualMachineDescriptionItem/VirtualMachineDescriptionItem';

type VirtualMachineSchedulingLeftGridProps = {
  vm?: V1VirtualMachine;
  nodes?: IoK8sApiCoreV1Node[];
  nodesLoaded?: boolean;
};

const VirtualMachineSchedulingLeftGrid: React.FC<VirtualMachineSchedulingLeftGridProps> = ({
  vm,
  nodes,
  nodesLoaded,
}) => {
  const { t } = useKubevirtTranslation();
  const { createModal } = useModal();

  const onSubmit = React.useCallback(
    (updatedVM: V1VirtualMachine) =>
      k8sUpdate({
        model: VirtualMachineModel,
        data: updatedVM,
        ns: updatedVM?.metadata?.namespace,
        name: updatedVM?.metadata?.name,
      }),
    [],
  );

  return (
    <GridItem span={5}>
      <DescriptionList>
        <VirtualMachineDescriptionItem
          descriptionData={<NodeSelector vm={vm} />}
          descriptionHeader={t('Node Selector')}
          isEdit
          onEditClick={() =>
            createModal(({ isOpen, onClose }) => (
              <NodeSelectorModal
                vm={vm}
                nodes={nodes}
                nodesLoaded={nodesLoaded}
                isOpen={isOpen}
                onClose={onClose}
                onSubmit={onSubmit}
              />
            ))
          }
        />
        <VirtualMachineDescriptionItem
          descriptionData={<Tolerations vm={vm} />}
          descriptionHeader={t('Tolerations')}
        />
        <VirtualMachineDescriptionItem
          descriptionData={<Affinity vm={vm} />}
          descriptionHeader={t('Affinity Rules')}
        />
        <VirtualMachineDescriptionItem
          descriptionData={<Descheduler vm={vm} />}
          descriptionHeader={t('Descheduler')}
        />
      </DescriptionList>
    </GridItem>
  );
};

export default VirtualMachineSchedulingLeftGrid;
