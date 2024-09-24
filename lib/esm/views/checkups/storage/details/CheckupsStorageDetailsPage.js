import React, { useState } from 'react';
import { useParams } from 'react-router-dom-v5-compat';
import Loading from '@kubevirt-utils/components/Loading/Loading';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { ResourceYAMLEditor } from '@openshift-console/dynamic-plugin-sdk';
import { Bullseye, Divider, PageSection, PageSectionVariants, Tab, Tabs, TabTitleText, } from '@patternfly/react-core';
import CheckupsDetailsPageHistory from '../../CheckupsDetailsPageHistory';
import { getJobByName } from '../../utils/utils';
import useCheckupsStorageData from '../components/hooks/useCheckupsStorageData';
import CheckupsStorageDetailsPageHeader from './CheckupsStorageDetailsPageHeader';
import CheckupsStorageDetailsPageSection from './CheckupsStorageDetailsPageSection';
import './checkups-storage-details-page.scss';
var CheckupsStorageDetailsPage = function () {
    var _a;
    var vmName = useParams().vmName;
    var t = useKubevirtTranslation().t;
    var _b = useCheckupsStorageData(), configMaps = _b.configMaps, error = _b.error, jobs = _b.jobs, loading = _b.loading;
    var _c = useState(0), activeTabKey = _c[0], setActiveTabKey = _c[1];
    var configMap = configMaps.find(function (cm) { return cm.metadata.name === vmName; });
    var jobMatches = getJobByName(jobs, (_a = configMap === null || configMap === void 0 ? void 0 : configMap.metadata) === null || _a === void 0 ? void 0 : _a.name);
    if (!configMap)
        return (React.createElement(Bullseye, null,
            React.createElement(Loading, null)));
    return (React.createElement(PageSection, { variant: PageSectionVariants.light },
        React.createElement(CheckupsStorageDetailsPageHeader, { configMap: configMap, jobs: jobMatches }),
        React.createElement(Tabs, { onSelect: function (_, tabIndex) {
                setActiveTabKey(tabIndex);
            }, activeKey: activeTabKey },
            React.createElement(Tab, { eventKey: 0, title: React.createElement(TabTitleText, null, t('Details')) },
                React.createElement(PageSection, { variant: PageSectionVariants.light },
                    React.createElement(CheckupsStorageDetailsPageSection, { configMap: configMap, job: jobMatches === null || jobMatches === void 0 ? void 0 : jobMatches[0] })),
                React.createElement(PageSection, { variant: PageSectionVariants.light },
                    React.createElement(Divider, null)),
                React.createElement(PageSection, { variant: PageSectionVariants.light },
                    React.createElement(CheckupsDetailsPageHistory, { error: error, jobs: jobMatches, loading: loading }))),
            React.createElement(Tab, { className: "CheckupsStorageDetailsPage--yaml", eventKey: 1, title: React.createElement(TabTitleText, null, t('YAML')) },
                React.createElement(ResourceYAMLEditor, { initialResource: configMap })))));
};
export default CheckupsStorageDetailsPage;
//# sourceMappingURL=CheckupsStorageDetailsPage.js.map