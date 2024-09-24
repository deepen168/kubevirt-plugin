import React from 'react';
import { useNavigate } from 'react-router-dom-v5-compat';
import { MigrationPolicyModelGroupVersionKind } from '@kubevirt-ui/kubevirt-api/console';
import MigrationPolicyModel from '@kubevirt-ui/kubevirt-api/console/models/MigrationPolicyModel';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { ListPageCreateDropdown, useAccessReview, } from '@openshift-console/dynamic-plugin-sdk';
import { Button, Tooltip } from '@patternfly/react-core';
import { createItems, migrationPoliciesPageBaseURL } from '../../utils/constants';
var MigrationPoliciesCreateButton = function () {
    var t = useKubevirtTranslation().t;
    var navigate = useNavigate();
    var canCreateMigrationPolicy = useAccessReview({
        group: MigrationPolicyModel.apiGroup,
        resource: MigrationPolicyModel.plural,
        verb: 'create',
    })[0];
    var onCreate = function (type) {
        return type === 'form'
            ? navigate("".concat(migrationPoliciesPageBaseURL, "/form"))
            : navigate("".concat(migrationPoliciesPageBaseURL, "/~new"));
    };
    if (!canCreateMigrationPolicy) {
        return (React.createElement(Tooltip, { content: t('To perform this action you must get permission from your Organization Administrator.') },
            React.createElement(Button, { isAriaDisabled: true }, t('Create MigrationPolicy'))));
    }
    return (React.createElement(ListPageCreateDropdown, { createAccessReview: { groupVersionKind: MigrationPolicyModelGroupVersionKind }, items: createItems, onClick: onCreate }, t('Create MigrationPolicy')));
};
export default MigrationPoliciesCreateButton;
//# sourceMappingURL=MigrationPoliciesCreateButton.js.map