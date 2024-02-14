import React, { FC } from 'react';

import { modelToRef, TemplateModel } from '@kubevirt-ui/kubevirt-api/console';
import { V1beta1DataSource } from '@kubevirt-ui/kubevirt-api/containerized-data-importer/models';
import ListPageFilter from '@kubevirt-utils/components/ListPageFilter/ListPageFilter';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import {
  K8sResourceCommon,
  ListPageBody,
  ListPageCreate,
  ListPageHeader,
  useListPageFilter,
  VirtualizedTable,
} from '@openshift-console/dynamic-plugin-sdk';
import { Stack, StackItem } from '@patternfly/react-core';

import VirtualMachineTemplatesRow from './components/VirtualMachineTemplatesRow';
import VirtualMachineTemplateSupport from './components/VirtualMachineTemplateSupport/VirtualMachineTemplateSupport';
import { useTemplatesWithAvailableSource } from './hooks/useTemplatesWithAvailableSource';
import useVirtualMachineTemplatesColumns from './hooks/useVirtualMachineTemplatesColumns';
import useVirtualMachineTemplatesFilters from './hooks/useVirtualMachineTemplatesFilters';

type VirtualMachineTemplatesListProps = {
  namespace: string;
};
const VirtualMachineTemplatesList: FC<VirtualMachineTemplatesListProps> = ({ namespace }) => {
  const { t } = useKubevirtTranslation();
  const {
    availableDatasources,
    availableTemplatesUID,
    bootSourcesLoaded,
    cloneInProgressDatasources,
    error,
    loaded,
    templates,
  } = useTemplatesWithAvailableSource({
    namespace,
    onlyAvailable: false,
    onlyDefault: false,
  });
  const filters = useVirtualMachineTemplatesFilters(availableTemplatesUID);
  const [data, filteredData, onFilterChange] = useListPageFilter(templates, filters);
  const [columns, activeColumns, loadedColumns] = useVirtualMachineTemplatesColumns(namespace);

  const templatesLoaded = loaded && bootSourcesLoaded;

  return (
    <>
      <ListPageHeader title={t('VirtualMachine Templates')}>
        <ListPageCreate
          createAccessReview={{ groupVersionKind: modelToRef(TemplateModel), namespace }}
          groupVersionKind={modelToRef(TemplateModel)}
        >
          {t('Create Template')}
        </ListPageCreate>
      </ListPageHeader>
      <ListPageBody>
        <Stack hasGutter>
          <StackItem>
            <VirtualMachineTemplateSupport />
          </StackItem>
          <StackItem>
            <ListPageFilter
              columnLayout={{
                columns: columns?.map(({ additional, id, title }) => ({
                  additional,
                  id,
                  title,
                })),
                id: modelToRef(TemplateModel),
                selectedColumns: new Set(activeColumns?.map((col) => col?.id)),
                type: t('Template'),
              }}
              data={data}
              loaded={templatesLoaded && loadedColumns}
              onFilterChange={onFilterChange}
              rowFilters={filters}
            />
            <VirtualizedTable<
              K8sResourceCommon,
              {
                availableDatasources: Record<string, V1beta1DataSource>;
                availableTemplatesUID: Set<string>;
                cloneInProgressDatasources: Record<string, V1beta1DataSource>;
              }
            >
              EmptyMsg={() => (
                <div className="pf-u-text-align-center" id="no-templates-msg">
                  {t('No templates found')}
                </div>
              )}
              columns={activeColumns}
              data={filteredData}
              loaded={templatesLoaded && loadedColumns}
              loadError={error}
              Row={VirtualMachineTemplatesRow}
              rowData={{ availableDatasources, availableTemplatesUID, cloneInProgressDatasources }}
              unfilteredData={data}
            />
          </StackItem>
        </Stack>
      </ListPageBody>
    </>
  );
};

export default VirtualMachineTemplatesList;
