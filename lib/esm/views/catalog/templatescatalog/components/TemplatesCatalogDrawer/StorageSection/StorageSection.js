import React, { useState } from 'react';
import HelpTextIcon from '@kubevirt-utils/components/HelpTextIcon/HelpTextIcon';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { ExpandableSection, ExpandableSectionToggle, Flex, FlexItem, Skeleton, } from '@patternfly/react-core';
import { useDrawerContext } from '../hooks/useDrawerContext';
import { CustomizeSource } from './CustomizeSource/CustomizeSource';
var StorageSection = function () {
    var t = useKubevirtTranslation().t;
    var _a = useDrawerContext(), template = _a.template, templateDataLoaded = _a.templateDataLoaded, vm = _a.vm;
    var _b = useState(true), storageFieldsExpanded = _b[0], setStorageFieldsExpanded = _b[1];
    var loaded = vm && templateDataLoaded;
    return (React.createElement(React.Fragment, null,
        React.createElement(Flex, null,
            React.createElement(FlexItem, { spacer: { default: 'spacerNone' } },
                React.createElement(ExpandableSectionToggle, { "data-test-id": "expandable-customize-source-section", isExpanded: loaded && storageFieldsExpanded, onToggle: function () { return setStorageFieldsExpanded(!storageFieldsExpanded); } }, t('Storage'))),
            React.createElement(FlexItem, null,
                React.createElement(HelpTextIcon, { bodyContent: t('You can customize the Templates storage by overriding the original parameters') }))),
        React.createElement(ExpandableSection, { "data-test-id": "expandable-storage-section", isDetached: true, isExpanded: storageFieldsExpanded, isIndented: true }, loaded ? React.createElement(CustomizeSource, { template: template }) : React.createElement(Skeleton, null))));
};
export default StorageSection;
//# sourceMappingURL=StorageSection.js.map