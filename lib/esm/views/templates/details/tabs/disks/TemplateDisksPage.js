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
import React, { useCallback } from 'react';
import { TemplateModel } from '@kubevirt-ui/kubevirt-api/console';
import DiskListTitle from '@kubevirt-utils/components/DiskListTitle/DiskListTitle';
import DiskSourceSelect from '@kubevirt-utils/components/DiskModal/components/DiskSourceSelect/DiskSourceSelect';
import DiskModal from '@kubevirt-utils/components/DiskModal/DiskModal';
import { useModal } from '@kubevirt-utils/components/ModalProvider/ModalProvider';
import SidebarEditor from '@kubevirt-utils/components/SidebarEditor/SidebarEditor';
import { replaceTemplateVM } from '@kubevirt-utils/resources/template';
import { k8sUpdate, ListPageFilter, useListPageFilter, VirtualizedTable, } from '@openshift-console/dynamic-plugin-sdk';
import { PageSection, PageSectionVariants } from '@patternfly/react-core';
import useEditTemplateAccessReview from '../../hooks/useIsTemplateEditable';
import DiskRow from './components/DiskRow';
import useDiskColumns from './hooks/useDiskColumns';
import useDisksFilters from './hooks/useDisksFilters';
import useTemplateDisksTableData from './hooks/useTemplateDisksTableData';
import { getTemplateVMWithNamespace } from './utils';
import './TemplateDisksPage.scss';
var TemplateDisksPage = function (_a) {
    var template = _a.obj;
    var createModal = useModal().createModal;
    var columns = useDiskColumns();
    var _b = useTemplateDisksTableData(template), disks = _b[0], disksLoaded = _b[1];
    var filters = useDisksFilters();
    var _c = useListPageFilter(disks, filters), data = _c[0], filteredData = _c[1], onFilterChange = _c[2];
    var vm = getTemplateVMWithNamespace(template);
    var isTemplateEditable = useEditTemplateAccessReview(template).isTemplateEditable;
    var onSubmitTemplate = useCallback(function (updatedTemplate) {
        var _a, _b;
        return k8sUpdate({
            data: updatedTemplate,
            model: TemplateModel,
            name: (_a = updatedTemplate === null || updatedTemplate === void 0 ? void 0 : updatedTemplate.metadata) === null || _a === void 0 ? void 0 : _a.name,
            ns: (_b = updatedTemplate === null || updatedTemplate === void 0 ? void 0 : updatedTemplate.metadata) === null || _b === void 0 ? void 0 : _b.namespace,
        });
    }, []);
    var onUpdate = useCallback(function (updatedVM) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, onSubmitTemplate(replaceTemplateVM(template, updatedVM))];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); }, [onSubmitTemplate, template]);
    return (React.createElement("div", { className: "template-disks-page" },
        React.createElement(PageSection, { variant: PageSectionVariants.light },
            React.createElement(SidebarEditor, { onResourceUpdate: onSubmitTemplate, resource: template },
                React.createElement(DiskListTitle, null),
                isTemplateEditable && (React.createElement(DiskSourceSelect, { onSelect: function (diskSource) {
                        return createModal(function (_a) {
                            var isOpen = _a.isOpen, onClose = _a.onClose;
                            return (React.createElement(DiskModal, { createDiskSource: diskSource, isOpen: isOpen, onClose: onClose, onSubmit: onUpdate, vm: vm }));
                        });
                    }, className: "list-page-create-button-margin" })),
                React.createElement(ListPageFilter, { data: data, hideLabelFilter: true, loaded: disksLoaded, onFilterChange: onFilterChange, rowFilters: filters }),
                React.createElement(VirtualizedTable, { columns: columns, data: filteredData, loaded: disksLoaded, loadError: undefined, Row: DiskRow, rowData: { actionsDisabled: !isTemplateEditable, onUpdate: onUpdate, vm: vm }, unfilteredData: data })))));
};
export default TemplateDisksPage;
//# sourceMappingURL=TemplateDisksPage.js.map