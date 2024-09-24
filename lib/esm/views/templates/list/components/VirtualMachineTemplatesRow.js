import * as React from 'react';
import { useNavigate } from 'react-router-dom-v5-compat';
import { TemplateModel } from '@kubevirt-ui/kubevirt-api/console';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { isDeprecatedTemplate } from '@kubevirt-utils/resources/template';
import { ResourceLink, TableData } from '@openshift-console/dynamic-plugin-sdk';
import { Label } from '@patternfly/react-core';
import VirtualMachineTemplatesActions from '../../actions/VirtualMachineTemplatesActions';
import { getWorkloadProfile } from '../../utils/selectors';
import { useVirtualMachineTemplatesCPUMemory } from '../hooks/useVirtualMachineTemplatesCPUMemory';
import VirtualMachineTemplatesSource from './VirtualMachineTemplatesSource/VirtualMachineTemplatesSource';
var VirtualMachineTemplatesRow = function (_a) {
    var activeColumnIDs = _a.activeColumnIDs, obj = _a.obj, _b = _a.rowData, availableDatasources = _b.availableDatasources, availableTemplatesUID = _b.availableTemplatesUID, cloneInProgressDatasources = _b.cloneInProgressDatasources;
    var t = useKubevirtTranslation().t;
    var navigate = useNavigate();
    return (React.createElement(React.Fragment, null,
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, className: "pf-m-width-30", id: "name" },
            React.createElement(ResourceLink, { onClick: function () {
                    return navigate("/k8s/ns/".concat(obj.metadata.namespace, "/templates/").concat(obj.metadata.name));
                }, kind: TemplateModel.kind, name: obj.metadata.name, namespace: obj.metadata.namespace }),
            isDeprecatedTemplate(obj) && React.createElement(Label, { isCompact: true }, t('Deprecated'))),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "namespace" },
            React.createElement(ResourceLink, { kind: "Namespace", name: obj.metadata.namespace })),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, className: "pf-m-width-15", id: "workload" }, t(getWorkloadProfile(obj))),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, className: "pf-m-width-30", id: "availability" },
            React.createElement(VirtualMachineTemplatesSource, { availableDatasources: availableDatasources, availableTemplatesUID: availableTemplatesUID, cloneInProgressDatasources: cloneInProgressDatasources, template: obj })),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "cpu" }, useVirtualMachineTemplatesCPUMemory(obj)),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, className: "dropdown-kebab-pf pf-v5-c-table__action", id: "" },
            React.createElement(VirtualMachineTemplatesActions, { isKebabToggle: true, template: obj }))));
};
export default VirtualMachineTemplatesRow;
//# sourceMappingURL=VirtualMachineTemplatesRow.js.map