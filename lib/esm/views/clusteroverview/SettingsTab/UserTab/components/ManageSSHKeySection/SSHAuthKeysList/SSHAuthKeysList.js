import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { Button, Grid, GridItem, Panel, PanelMain, Skeleton, Text, TextVariants, } from '@patternfly/react-core';
import { PlusCircleIcon } from '@patternfly/react-icons';
import SSHAuthKeyRow from './components/SSHAuthKeyRow/SSHAuthKeyRow';
import useSSHAuthKeys from './hooks/useSSHAuthKeys';
import './SSHAuthKeysList.scss';
var SSHAuthKeysList = function () {
    var t = useKubevirtTranslation().t;
    var _a = useSSHAuthKeys(), authKeyRows = _a.authKeyRows, loaded = _a.loaded, onAuthKeyAdd = _a.onAuthKeyAdd, onAuthKeyChange = _a.onAuthKeyChange, onAuthKeyDelete = _a.onAuthKeyDelete, selectableProjects = _a.selectableProjects;
    if (!loaded)
        return React.createElement(Skeleton, null);
    return (React.createElement(React.Fragment, null,
        React.createElement(Panel, { isScrollable: true },
            React.createElement(PanelMain, { maxHeight: "12.25rem" },
                React.createElement(Grid, null,
                    React.createElement(GridItem, { span: 5 },
                        React.createElement(Text, { component: TextVariants.h6 }, t('Project'))),
                    React.createElement(GridItem, { span: 1 }),
                    React.createElement(GridItem, { span: 5 },
                        React.createElement(Text, { component: TextVariants.h6 }, t('Public SSH key')))), authKeyRows === null || authKeyRows === void 0 ? void 0 :
                authKeyRows.map(function (row) { return (React.createElement(SSHAuthKeyRow, { isRemoveDisabled: authKeyRows.length === 1 && isEmpty(row.projectName), key: row.id, onAuthKeyChange: onAuthKeyChange, onAuthKeyDelete: onAuthKeyDelete, row: row, selectableProjects: selectableProjects })); }))),
        React.createElement(Button, { className: "add-row-btn", icon: React.createElement(PlusCircleIcon, null), isDisabled: isEmpty(selectableProjects), isInline: true, onClick: onAuthKeyAdd, variant: "link" }, t('Add public SSH key to project'))));
};
export default SSHAuthKeysList;
//# sourceMappingURL=SSHAuthKeysList.js.map