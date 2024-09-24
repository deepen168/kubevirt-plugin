var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
import React, { useState } from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import useKubevirtUserSettingsTableColumns from '@kubevirt-utils/hooks/useKubevirtUserSettings/useKubevirtUserSettingsTableColumns';
import { ActionList, ActionListItem, Alert, AlertVariant, Button, ButtonVariant, DataList, Modal, ModalVariant, Stack, StackItem, } from '@patternfly/react-core';
import { MAX_VIEW_COLS } from './constants';
import DataListRow from './DataListRow';
import { createInputId, getColumnId } from './utils';
import './column-management-modal.scss';
export var ColumnManagementModal = function (_a) {
    var columnLayout = _a.columnLayout, isOpen = _a.isOpen, onClose = _a.onClose;
    var t = useKubevirtTranslation().t;
    var columns = columnLayout.columns, id = columnLayout.id, selectedColumns = columnLayout.selectedColumns, showNamespaceOverride = columnLayout.showNamespaceOverride, type = columnLayout.type;
    var defaultColumns = columns.filter(function (column) { return column.id && !column.additional; });
    var additionalColumns = columns.filter(function (column) { return column.additional; });
    var _b = useKubevirtUserSettingsTableColumns({
        columnManagementID: id,
        columns: columns,
    }), _ = _b[0], setActiveColumns = _b[1], loaded = _b[2], error = _b[3];
    var _c = useState(selectedColumns && selectedColumns.size !== 0
        ? new Set(selectedColumns)
        : new Set(defaultColumns.map(function (col) { return col.id; }))), checkedColumns = _c[0], setCheckedColumns = _c[1];
    var onColumnChange = function (event) {
        var _a;
        var updatedCheckedColumns = new Set(checkedColumns);
        var selectedId = getColumnId((_a = event === null || event === void 0 ? void 0 : event.currentTarget) === null || _a === void 0 ? void 0 : _a.id);
        updatedCheckedColumns.has(selectedId)
            ? updatedCheckedColumns.delete(selectedId)
            : updatedCheckedColumns.add(selectedId);
        setCheckedColumns(updatedCheckedColumns);
    };
    var submit = function (event) { return __awaiter(void 0, void 0, void 0, function () {
        var orderedCheckedColumns;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event.preventDefault();
                    orderedCheckedColumns = new Set();
                    checkedColumns.forEach(function (ids) { return orderedCheckedColumns.add(ids); });
                    return [4 /*yield*/, setActiveColumns(__spreadArray([], orderedCheckedColumns, true))];
                case 1:
                    _a.sent();
                    onClose();
                    return [2 /*return*/];
            }
        });
    }); };
    var areMaxColumnsDisplayed = checkedColumns.size >= MAX_VIEW_COLS;
    var resetColumns = function (event) {
        event.preventDefault();
        var updatedCheckedColumns = new Set(checkedColumns);
        defaultColumns.forEach(function (col) { return col.id && updatedCheckedColumns.add(col.id); });
        additionalColumns.forEach(function (col) { return updatedCheckedColumns.delete(col.id); });
        setCheckedColumns(updatedCheckedColumns);
    };
    return (React.createElement(Modal, { footer: React.createElement(Stack, { className: "kv-tabmodal-footer", hasGutter: true },
            error && (React.createElement(StackItem, null,
                React.createElement(Alert, { isInline: true, title: t('An error occurred'), variant: AlertVariant.danger },
                    React.createElement(Stack, { hasGutter: true },
                        React.createElement(StackItem, null, error.message))))),
            React.createElement(StackItem, null,
                React.createElement(ActionList, { className: "column-management-modal__action-list" },
                    React.createElement(ActionListItem, null,
                        React.createElement(Button, { key: "reset", onClick: resetColumns, variant: ButtonVariant.link }, t('Restore default columns'))),
                    React.createElement(ActionListItem, null,
                        React.createElement(Button, { onClick: onClose, variant: ButtonVariant.secondary }, t('Cancel'))),
                    React.createElement(ActionListItem, null,
                        React.createElement(Button, { form: "modal-with-form-form", isDisabled: !loaded, isLoading: !loaded, key: "create", onClick: submit, variant: ButtonVariant.primary }, t('Save')))))), isOpen: isOpen, onClose: onClose, position: "top", title: t('Manage columns'), variant: ModalVariant.small },
        React.createElement(React.Fragment, null,
            React.createElement("p", { className: "co-m-form-row" }, t('Selected columns will appear in the table.')),
            React.createElement(Alert, { className: "co-alert", isInline: true, title: t('You can select up to {{MAX_VIEW_COLS}} columns', { MAX_VIEW_COLS: MAX_VIEW_COLS }), variant: AlertVariant.info }, !showNamespaceOverride && t('The namespace column is only shown when in "All projects"')),
            React.createElement("div", { className: "row co-m-form-row" },
                React.createElement("div", { className: "col-sm-12" },
                    React.createElement("span", { className: "col-sm-6" },
                        React.createElement("label", { className: "control-label" }, t('Default {{resourceKind}} columns', { resourceKind: type })),
                        React.createElement(DataList, { "aria-label": t('Default column list'), id: "defalt-column-management", isCompact: true }, defaultColumns.map(function (defaultColumn) { return (React.createElement(DataListRow, { checkedColumns: checkedColumns, column: defaultColumn, disableUncheckedRow: areMaxColumnsDisplayed, inputId: createInputId(defaultColumn.id), key: defaultColumn.id, onChange: onColumnChange })); }))),
                    React.createElement("span", { className: "col-sm-6" },
                        React.createElement("label", { className: "control-label" }, t('Additional columns')),
                        React.createElement(DataList, { "aria-label": t('Additional column list'), id: "additional-column-management", isCompact: true }, additionalColumns.map(function (additionalColumn) { return (React.createElement(DataListRow, { checkedColumns: checkedColumns, column: additionalColumn, disableUncheckedRow: areMaxColumnsDisplayed, inputId: createInputId(additionalColumn.id), key: additionalColumn.id, onChange: onColumnChange })); }))))))));
};
//# sourceMappingURL=ColumnManagementModal.js.map