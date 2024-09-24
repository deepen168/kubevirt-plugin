import React, { useState } from 'react';
import { checkDifferentStorageClassFromBootPVC } from '../../utils/helpers';
import ApplyStorageProfileSettings from '../StorageProfileSettings/ApplyStorageProfileSettings';
import DefaultStorageClassAlert from './DefaultStorageClassAlert';
import EnablePreallocationCheckbox from './EnablePreallocationCheckbox';
import StorageClassSelect from './StorageClassSelect';
var StorageClassAndPreallocation = function (_a) {
    var vm = _a.vm;
    var _b = useState(false), showSCAlert = _b[0], setShowSCAlert = _b[1];
    return (React.createElement(React.Fragment, null,
        React.createElement(StorageClassSelect, { checkSC: function (selectedStorageClass) {
                return checkDifferentStorageClassFromBootPVC(vm, selectedStorageClass);
            }, setShowSCAlert: setShowSCAlert }),
        showSCAlert && React.createElement(DefaultStorageClassAlert, null),
        React.createElement(ApplyStorageProfileSettings, null),
        React.createElement(EnablePreallocationCheckbox, null)));
};
export default StorageClassAndPreallocation;
//# sourceMappingURL=StorageClassAndPreallocation.js.map