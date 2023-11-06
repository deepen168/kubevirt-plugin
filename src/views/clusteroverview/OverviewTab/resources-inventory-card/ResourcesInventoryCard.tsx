import React from 'react';

import { NodeModel, TemplateModel } from '@kubevirt-ui/kubevirt-api/console';
import NetworkAttachmentDefinitionModel from '@kubevirt-ui/kubevirt-api/console/models/NetworkAttachmentDefinitionModel';
import VirtualMachineModel from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineModel';
import useActiveNamespace from '@kubevirt-utils/hooks/useActiveNamespace';
import { useIsAdmin } from '@kubevirt-utils/hooks/useIsAdmin';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getResourceUrl } from '@kubevirt-utils/resources/shared';
import { Card, Grid, GridItem } from '@patternfly/react-core';

import useResourcesQuantities from './hooks/useResourcesQuantities';
import ResourceInventoryItem from './ResourceInventoryItem';

import './ResourcesInventoryCard.scss';

const ResourcesInventoryCard: React.FC = () => {
  const { t } = useKubevirtTranslation();
  const isAdmin = useIsAdmin();
  const { nads, nodes, vms, vmTemplates } = useResourcesQuantities();
  const [activeNamespace] = useActiveNamespace();

  return (
    <div data-test-id="resources-inventory-card" className="resources-inventory-card">
      <Grid hasGutter className="resources-inventory-card__grid">
        <GridItem>
          <Card className="resources-inventory-card__grid-item">
            <ResourceInventoryItem
              quantity={vms}
              label={t('VirtualMachines')}
              path={getResourceUrl({ model: VirtualMachineModel, activeNamespace })}
            />
          </Card>
        </GridItem>
        <GridItem>
          <Card className="resources-inventory-card__grid-item">
            <ResourceInventoryItem
              quantity={vmTemplates}
              label={t('Templates')}
              path={getResourceUrl({ model: TemplateModel, activeNamespace })}
            />
          </Card>
        </GridItem>
        {isAdmin && (
          <GridItem>
            <Card className="resources-inventory-card__grid-item">
              <ResourceInventoryItem
                quantity={nodes}
                label={t('Nodes')}
                path={getResourceUrl({ model: NodeModel })}
              />
            </Card>
          </GridItem>
        )}
        <GridItem>
          <Card className="resources-inventory-card__grid-item">
            <ResourceInventoryItem
              quantity={nads}
              label={t('Networks')}
              path={getResourceUrl({ model: NetworkAttachmentDefinitionModel, activeNamespace })}
            />
          </Card>
        </GridItem>
      </Grid>
    </div>
  );
};

export default ResourcesInventoryCard;
