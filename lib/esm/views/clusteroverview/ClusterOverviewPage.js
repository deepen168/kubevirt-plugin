var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { useIsAdmin } from '@kubevirt-utils/hooks/useIsAdmin';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { HorizontalNav } from '@openshift-console/dynamic-plugin-sdk';
import GuidedTour from '../../utils/components/GuidedTour/GuidedTour';
import WelcomeModal from '../welcome/WelcomeModal';
import ClusterOverviewPageHeader from './Header/ClusterOverviewPageHeader';
import MigrationsTab from './MigrationsTab/MigrationsTab';
import OverviewTab from './OverviewTab/OverviewTab';
import SettingsTab from './SettingsTab/SettingsTab';
import TopConsumersTab from './TopConsumersTab/TopConsumersTab';
var ClusterOverviewPage = function () {
    var t = useKubevirtTranslation().t;
    var isAdmin = useIsAdmin();
    var overviewTabs = useMemo(function () {
        var adminPages = [
            {
                component: TopConsumersTab,
                href: 'top-consumers',
                name: t('Top consumers'),
            },
        ];
        return __spreadArray(__spreadArray([
            {
                component: OverviewTab,
                href: '',
                name: t('Overview'),
            }
        ], (isAdmin ? __spreadArray([], adminPages, true) : []), true), [
            {
                component: MigrationsTab,
                href: 'migrations',
                name: t('Migrations'),
            },
            {
                component: SettingsTab,
                href: 'settings',
                name: t('Settings'),
            },
        ], false);
    }, [isAdmin, t]);
    return (React.createElement(React.Fragment, null,
        React.createElement(Helmet, null,
            React.createElement("title", null, t('Virtualization'))),
        React.createElement(WelcomeModal, null),
        React.createElement(ClusterOverviewPageHeader, null),
        React.createElement(HorizontalNav, { pages: overviewTabs }),
        React.createElement(GuidedTour, null)));
};
export default ClusterOverviewPage;
//# sourceMappingURL=ClusterOverviewPage.js.map