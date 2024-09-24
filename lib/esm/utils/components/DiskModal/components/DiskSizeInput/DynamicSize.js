import React from 'react';
import { FormGroup, TextInput } from '@patternfly/react-core';
import { ephemeralDiskSizeFieldID } from '../DiskSourceSelect/utils/constants';
import { DYNAMIC } from '../utils/constants';
var DynamicSize = function () {
    return (React.createElement(FormGroup, { fieldId: ephemeralDiskSizeFieldID, label: "Size" },
        React.createElement(TextInput, { id: ephemeralDiskSizeFieldID, isDisabled: true, type: "text", value: DYNAMIC })));
};
export default DynamicSize;
//# sourceMappingURL=DynamicSize.js.map