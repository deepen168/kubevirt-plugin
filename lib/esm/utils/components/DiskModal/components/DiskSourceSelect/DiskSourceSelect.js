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
import React from 'react';
import classNames from 'classnames';
import FormPFSelect from '@kubevirt-utils/components/FormPFSelect/FormPFSelect';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Divider, SelectGroup, SelectList } from '@patternfly/react-core';
import DiskSourceOption from './components/DiskSourceOption/DiskSourceOption';
import { attachExistingGroupOptions, blankOption } from './utils/constants';
import './DiskSourceSelect.scss';
var DiskSourceSelect = function (_a) {
    var className = _a.className, onSelect = _a.onSelect;
    var t = useKubevirtTranslation().t;
    return (React.createElement(FormPFSelect, { className: classNames('disk-source-select', className), onSelect: function (_, val) { return onSelect(val); }, selectedLabel: t('Add disk'), toggleProps: { variant: 'primary' } },
        React.createElement(SelectList, null,
            React.createElement(DiskSourceOption, __assign({}, blankOption, { onSelect: onSelect })),
            React.createElement(Divider, null),
            React.createElement(SelectGroup, { className: "disk-source-select__group-title", label: attachExistingGroupOptions.groupLabel }, attachExistingGroupOptions.items.map(function (item) { return (React.createElement(DiskSourceOption, __assign({ key: item.id }, item, { onSelect: onSelect }))); })))));
};
export default DiskSourceSelect;
//# sourceMappingURL=DiskSourceSelect.js.map