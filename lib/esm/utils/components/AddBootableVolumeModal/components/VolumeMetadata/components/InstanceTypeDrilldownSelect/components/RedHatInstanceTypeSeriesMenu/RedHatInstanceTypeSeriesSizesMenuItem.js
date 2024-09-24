import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { readableSizeUnit } from '@kubevirt-utils/utils/units';
import { MenuItem } from '@patternfly/react-core';
var RedHatInstanceTypeSeriesSizesMenuItems = function (_a) {
    var selected = _a.selected, seriesName = _a.seriesName, setSelected = _a.setSelected, sizes = _a.sizes;
    var t = useKubevirtTranslation().t;
    return (React.createElement(React.Fragment, null, sizes.map(function (_a) {
        var cpus = _a.cpus, memory = _a.memory, sizeLabel = _a.sizeLabel;
        var itName = "".concat(seriesName, ".").concat(sizeLabel);
        var itLabel = t('{{sizeLabel}}: {{cpus}} CPUs, {{memory}} Memory', {
            cpus: cpus,
            memory: readableSizeUnit(memory),
            sizeLabel: sizeLabel,
        });
        return (React.createElement(MenuItem, { isSelected: selected === itName, itemId: itName, key: itName, onClick: function () { return setSelected(itName); } }, itLabel));
    })));
};
export default RedHatInstanceTypeSeriesSizesMenuItems;
//# sourceMappingURL=RedHatInstanceTypeSeriesSizesMenuItem.js.map