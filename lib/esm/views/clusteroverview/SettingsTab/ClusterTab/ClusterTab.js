var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import useHyperConvergeConfiguration from '@kubevirt-utils/hooks/useHyperConvergeConfiguration';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Alert, AlertVariant, Divider } from '@patternfly/react-core';
import { useKubevirtCSVDetails } from '../../utils/hooks/useKubevirtCSVDetails';
import { isNewBadgeNeeded } from '../../utils/utils';
import GeneralInformation from './components/GeneralInformation/GeneralInformation';
import GeneralSettings from './components/GeneralSettings/GeneralSettings';
import GuestManagementSection from './components/GuestManagmentSection/GuestManagementSection';
import PersistentReservationSection from './components/PersistentReservationSection/PersistentReservationSection';
import ResourceManagementSection from './components/ResourceManagementSection/ResourceManagementSection';
var ClusterTab = function () {
    var t = useKubevirtTranslation().t;
    var hyperConvergeConfiguration = useHyperConvergeConfiguration();
    var error = hyperConvergeConfiguration === null || hyperConvergeConfiguration === void 0 ? void 0 : hyperConvergeConfiguration[2];
    var _a = useKubevirtCSVDetails(), installedCSV = _a.installedCSV, CSVDetails = __rest(_a, ["installedCSV"]);
    var newBadge = isNewBadgeNeeded(installedCSV);
    return (React.createElement(React.Fragment, null,
        React.createElement(GeneralInformation, __assign({}, CSVDetails)),
        React.createElement(GeneralSettings, { hyperConvergeConfiguration: hyperConvergeConfiguration, newBadge: newBadge }),
        React.createElement(Divider, { className: "section-divider" }),
        React.createElement(GuestManagementSection, { hyperConvergeConfiguration: hyperConvergeConfiguration, newBadge: newBadge }),
        React.createElement(Divider, { className: "section-divider" }),
        React.createElement(ResourceManagementSection, { hyperConvergeConfiguration: hyperConvergeConfiguration, newBadge: newBadge }),
        React.createElement(Divider, { className: "section-divider" }),
        React.createElement(PersistentReservationSection, { hyperConvergeConfiguration: hyperConvergeConfiguration }),
        error && (React.createElement(Alert, { isInline: true, title: t('Error'), variant: AlertVariant.danger }, error))));
};
export default ClusterTab;
//# sourceMappingURL=ClusterTab.js.map