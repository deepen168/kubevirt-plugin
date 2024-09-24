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
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Button, DataList, DataListCell, DataListControl, DataListDragButton, DataListItem, DataListItemCells, DataListItemRow, DragDrop, Draggable, Droppable, Split, SplitItem, } from '@patternfly/react-core';
import { MinusCircleIcon } from '@patternfly/react-icons';
import { BootOrderEmptyState } from './BootOrderEmptyState';
import DeviceTypeIcon from './DeviceTypeIcon';
export var BootOrderModalBody = function (_a) {
    var changeEditMode = _a.changeEditMode, devices = _a.devices, isEditMode = _a.isEditMode, onChange = _a.onChange;
    var t = useKubevirtTranslation().t;
    var reorder = function (list, startIndex, endIndex) {
        var result = Array.from(list);
        var removed = result.splice(startIndex, 1)[0];
        result.splice(endIndex, 0, removed);
        return result;
    };
    var onDrop = function (source, dest) {
        if (dest) {
            var newBootableDevices = reorder(devices, source.index, dest.index).map(function (device, index) { return (__assign(__assign({}, device), { value: __assign(__assign({}, device.value), { bootOrder: index + 1 }) })); });
            onChange(newBootableDevices);
            return true; // Signal that this is a valid drop and not to animate the item returning home.
        }
    };
    // Remove a bootOrder from a device by index.
    var onDelete = function (name) {
        var deviceToUpdate = devices.find(function (d) { return d.value.name === name; });
        var newDevices = __spreadArray(__spreadArray([], devices.filter(function (device) { return device.value.name !== name; }), true), [
            __assign(__assign({}, deviceToUpdate), { value: __assign(__assign({}, deviceToUpdate.value), { bootOrder: undefined }) }),
        ], false);
        onChange(newDevices);
    };
    var showEmpty = devices.length === 0 && !isEditMode;
    return (React.createElement(React.Fragment, null, showEmpty ? (React.createElement(BootOrderEmptyState, { message: t('VirtualMachine will attempt to boot from disks by order of apearance in YAML file'), onClick: function () {
            changeEditMode(true);
        }, addItemDisabledMessage: t('All sources selected'), addItemIsDisabled: devices.length === 0, addItemMessage: t('Add source'), title: t('No resource selected') })) : (React.createElement(React.Fragment, null,
        React.createElement(DragDrop, { onDrop: onDrop },
            React.createElement(Droppable, { hasNoWrapper: true },
                React.createElement(DataList, { "aria-label": "draggable data list example" }, devices.map(function (_a, index) {
                    var type = _a.type, value = _a.value;
                    return (React.createElement(Draggable, { hasNoWrapper: true, key: value.name },
                        React.createElement(DataListItem, { "aria-labelledby": value.name, ref: React.createRef() },
                            React.createElement(DataListItemRow, null,
                                React.createElement(DataListControl, null,
                                    React.createElement(DataListDragButton, { "aria-describedby": "Press space or enter to begin dragging, and use the arrow keys to navigate up or down. Press enter to confirm the drag, or any other key to cancel the drag operation.", "aria-label": "Reorder", "aria-labelledby": value.name, "aria-pressed": "false" })),
                                React.createElement(DataListItemCells, { dataListCells: [
                                        React.createElement(DataListCell, { key: value.name },
                                            React.createElement(Split, null,
                                                React.createElement(SplitItem, { isFilled: true },
                                                    React.createElement("span", { id: value.name }, value.name),
                                                    React.createElement("span", { className: "pf-u-ml-sm" },
                                                        React.createElement(DeviceTypeIcon, { type: type }))),
                                                React.createElement(SplitItem, null, index !== devices.length - 1 && (React.createElement(Button, { className: "kubevirt-boot-order__delete-btn", id: "".concat(value.name, "-delete-btn"), onClick: function () { return onDelete(value.name); }, variant: "link" },
                                                    React.createElement(MinusCircleIcon, null)))))),
                                    ] })))));
                }))))))));
};
//# sourceMappingURL=BootOrderModalBody.js.map