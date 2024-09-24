import React, { useMemo, useState } from 'react';
import { VirtualMachineInstancetypeModelGroupVersionKind } from '@kubevirt-ui/kubevirt-api/console';
import { isRedHatInstanceType } from '@kubevirt-utils/components/AddBootableVolumeModal/components/VolumeMetadata/components/InstanceTypeDrilldownSelect/utils/utils';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { VirtualMachineClusterInstancetypeModelGroupVersionKind } from '@kubevirt-utils/models';
import { getName } from '@kubevirt-utils/resources/shared';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { ResourceIcon } from '@openshift-console/dynamic-plugin-sdk';
import { MenuItem, MenuSearch, MenuSearchInput, SearchInput } from '@patternfly/react-core';
var UserInstanceTypeMenu = function (_a) {
    var allInstanceTypes = _a.allInstanceTypes, selected = _a.selected, setSelected = _a.setSelected;
    var t = useKubevirtTranslation().t;
    var _b = useState(''), searchInput = _b[0], setSearchInput = _b[1];
    var userCreatedInstanceTypes = allInstanceTypes.filter(function (it) { return !isRedHatInstanceType(it); });
    var filteredItems = useMemo(function () {
        return userCreatedInstanceTypes.filter(function (it) {
            return isEmpty(searchInput) ||
                getName(it).toLowerCase().includes(searchInput.toString().toLowerCase());
        });
    }, [userCreatedInstanceTypes, searchInput]);
    if (isEmpty(filteredItems))
        return React.createElement(MenuItem, { isDisabled: true }, t('No results found'));
    return (React.createElement(React.Fragment, null,
        filteredItems.length > 5 && (React.createElement(MenuSearch, null,
            React.createElement(MenuSearchInput, null,
                React.createElement(SearchInput, { "aria-label": "Filter menu items", onChange: function (_, value) { return setSearchInput(value); }, type: "search", value: searchInput })))),
        filteredItems.map(function (it) {
            var itName = getName(it);
            return (React.createElement(MenuItem, { icon: React.createElement(ResourceIcon, { groupVersionKind: (it === null || it === void 0 ? void 0 : it.kind) === 'VirtualMachineClusterInstancetype'
                        ? VirtualMachineClusterInstancetypeModelGroupVersionKind
                        : VirtualMachineInstancetypeModelGroupVersionKind }), isSelected: selected === itName, itemId: itName, key: itName, onClick: function () { return setSelected(itName); } }, itName));
        })));
};
export default UserInstanceTypeMenu;
//# sourceMappingURL=UserInstanceTypeMenu.js.map