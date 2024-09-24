import React from 'react';
import DataSourceActions from 'src/views/datasources/actions/DataSourceActions';
import DataSourceModel from '@kubevirt-ui/kubevirt-api/console/models/DataSourceModel';
import DeprecatedBadge from '@kubevirt-utils/components/badges/DeprecatedBadge/DeprecatedBadge';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getBootableVolumeGroupVersionKind, getDataImportCronFromDataSource, isBootableVolumePVCKind, isDeprecated, } from '@kubevirt-utils/resources/bootableresources/helpers';
import { getName, getNamespace, isDataImportCronProgressing, } from '@kubevirt-utils/resources/shared';
import { ANNOTATIONS } from '@kubevirt-utils/resources/template';
import { isDataSourceCloning } from '@kubevirt-utils/resources/template/hooks/useVmTemplateSource/utils';
import { NO_DATA_DASH } from '@kubevirt-utils/resources/vm/utils/constants';
import { ResourceLink, TableData } from '@openshift-console/dynamic-plugin-sdk';
import { Label } from '@patternfly/react-core';
import { TableText, WrapModifier } from '@patternfly/react-table';
import BootableVolumesActions from '../../actions/BootableVolumesActions';
import { getPreferenceReadableOS, getSourcePreferenceLabelValue } from '../../utils/utils';
import './BootableVolumesRow.scss';
var BootableVolumesRow = function (_a) {
    var _b, _c;
    var activeColumnIDs = _a.activeColumnIDs, obj = _a.obj, _d = _a.rowData, dataImportCrons = _d.dataImportCrons, preferences = _d.preferences;
    var t = useKubevirtTranslation().t;
    var bootableVolumeName = getName(obj);
    var bootableVolumeNamespace = getNamespace(obj);
    var dataImportCron = getDataImportCronFromDataSource(dataImportCrons, obj);
    var isCloning = isDataSourceCloning(obj) || isDataImportCronProgressing(dataImportCron);
    return (React.createElement(React.Fragment, null,
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, className: "pf-m-width-20", id: "name" },
            React.createElement(ResourceLink, { className: "bootable-volume-row__name-link", groupVersionKind: getBootableVolumeGroupVersionKind(obj), inline: true, name: bootableVolumeName, namespace: bootableVolumeNamespace }),
            isDeprecated(bootableVolumeName) && React.createElement(DeprecatedBadge, null),
            obj.kind === DataSourceModel.kind && isCloning && React.createElement(Label, null, t('Clone in progress'))),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, className: "pf-m-width-20", id: "namespace" },
            React.createElement(ResourceLink, { kind: "Namespace", name: bootableVolumeNamespace })),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, className: "pf-m-width-15", id: "os" }, getPreferenceReadableOS(obj, preferences)),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, className: "pf-m-width-15", id: "description" },
            React.createElement(TableText, { wrapModifier: WrapModifier.truncate }, ((_c = (_b = obj === null || obj === void 0 ? void 0 : obj.metadata) === null || _b === void 0 ? void 0 : _b.annotations) === null || _c === void 0 ? void 0 : _c[ANNOTATIONS.description]) || NO_DATA_DASH)),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, className: "pf-m-width-15", id: "preference" }, getSourcePreferenceLabelValue(obj)),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, className: "dropdown-kebab-pf pf-v5-c-table__action", id: "" }, isBootableVolumePVCKind(obj) ? (React.createElement(BootableVolumesActions, { preferences: preferences, source: obj })) : (React.createElement(DataSourceActions, { dataSource: obj, isKebabToggle: true })))));
};
export default BootableVolumesRow;
//# sourceMappingURL=BootableVolumesRow.js.map