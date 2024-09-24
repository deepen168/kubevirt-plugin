var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React from 'react';
import EnvironmentForm from '@kubevirt-utils/components/EnvironmentEditor/EnvironmentForm';
import SidebarEditor from '@kubevirt-utils/components/SidebarEditor/SidebarEditor';
import { PATHS_TO_HIGHLIGHT } from '@kubevirt-utils/resources/vm/utils/constants';
import { Divider, Grid, GridItem, PageSection, PageSectionVariants } from '@patternfly/react-core';
import { onSubmitYAML } from '../details/utils/utils';
import DiskList from './components/tables/disk/DiskList';
var StorageTab = function (_a) {
    var vm = _a.vm, vmi = _a.vmi;
    return (React.createElement(SidebarEditor, { onResourceUpdate: onSubmitYAML, pathsToHighlight: __spreadArray(__spreadArray([], PATHS_TO_HIGHLIGHT.DISKS_TAB, true), PATHS_TO_HIGHLIGHT.ENV_TAB, true), resource: vm },
        React.createElement(Grid, { hasGutter: true },
            React.createElement(GridItem, null,
                React.createElement(PageSection, { variant: PageSectionVariants.light },
                    React.createElement(DiskList, { vm: vm, vmi: vmi }))),
            React.createElement(GridItem, null,
                React.createElement(Divider, null)),
            React.createElement(GridItem, null,
                React.createElement(PageSection, { variant: PageSectionVariants.light },
                    React.createElement(EnvironmentForm, { updateVM: onSubmitYAML, vm: vm }))))));
};
export default StorageTab;
//# sourceMappingURL=StorageTab.js.map