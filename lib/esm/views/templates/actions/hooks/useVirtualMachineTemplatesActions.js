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
import * as React from 'react';
import { useNavigate } from 'react-router-dom-v5-compat';
import { TemplateModel } from '@kubevirt-ui/kubevirt-api/console';
import DataVolumeModel from '@kubevirt-ui/kubevirt-api/console/models/DataVolumeModel';
import { AnnotationsModal } from '@kubevirt-utils/components/AnnotationsModal/AnnotationsModal';
import CloneTemplateModal from '@kubevirt-utils/components/CloneTemplateModal/CloneTemplateModal';
import DeleteModal from '@kubevirt-utils/components/DeleteModal/DeleteModal';
import { LabelsModal } from '@kubevirt-utils/components/LabelsModal/LabelsModal';
import Loading from '@kubevirt-utils/components/Loading/Loading';
import { useModal } from '@kubevirt-utils/components/ModalProvider/ModalProvider';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { useLastNamespacePath } from '@kubevirt-utils/hooks/useLastNamespacePath';
import { asAccessReview } from '@kubevirt-utils/resources/shared';
import { k8sDelete, k8sPatch, useAccessReview, } from '@openshift-console/dynamic-plugin-sdk';
import useEditTemplateAccessReview from '../../details/hooks/useIsTemplateEditable';
import { NO_DELETE_TEMPLATE_PERMISSIONS, NO_EDIT_TEMPLATE_PERMISSIONS, } from '../../utils/constants';
import EditBootSourceModal from '../components/EditBootSourceModal';
import { createDataVolume, getBootDataSource, getEditBootSourceRefDescription, hasEditableBootSource, } from '../editBootSource';
export var EDIT_TEMPLATE_ID = 'edit-template';
var useVirtualMachineTemplatesActions = function (template) {
    var _a, _b, _c, _d, _e, _f, _g;
    var t = useKubevirtTranslation().t;
    var _h = useEditTemplateAccessReview(template), hasEditPermission = _h.hasEditPermission, isCommonTemplate = _h.isCommonTemplate;
    var createModal = useModal().createModal;
    var navigate = useNavigate();
    var _j = React.useState(), bootDataSource = _j[0], setBootDataSource = _j[1];
    var _k = React.useState(true), loadingBootSource = _k[0], setLoadingBootSource = _k[1];
    var editableBootSource = hasEditableBootSource(bootDataSource);
    var lastNamespacePath = useLastNamespacePath();
    var canDeleteTemplate = useAccessReview({
        namespace: (_a = template === null || template === void 0 ? void 0 : template.metadata) === null || _a === void 0 ? void 0 : _a.namespace,
        resource: TemplateModel.plural,
        verb: 'delete',
    })[0];
    var canWriteToDataSourceNs = useAccessReview(asAccessReview(DataVolumeModel, createDataVolume((_d = (_c = (_b = bootDataSource === null || bootDataSource === void 0 ? void 0 : bootDataSource.spec) === null || _b === void 0 ? void 0 : _b.source) === null || _c === void 0 ? void 0 : _c.pvc) === null || _d === void 0 ? void 0 : _d.name, (_g = (_f = (_e = bootDataSource === null || bootDataSource === void 0 ? void 0 : bootDataSource.spec) === null || _e === void 0 ? void 0 : _e.source) === null || _f === void 0 ? void 0 : _f.pvc) === null || _g === void 0 ? void 0 : _g.namespace, {}), 'create'))[0];
    var goToTemplatePage = React.useCallback(function (clonedTemplate) {
        navigate("/k8s/ns/".concat(clonedTemplate.metadata.namespace, "/templates/").concat(clonedTemplate.metadata.name));
    }, [navigate]);
    var onLazyActions = React.useCallback(function () { return __awaiter(void 0, void 0, void 0, function () {
        var dataSource;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!!bootDataSource) return [3 /*break*/, 2];
                    return [4 /*yield*/, getBootDataSource(template)];
                case 1:
                    dataSource = _a.sent();
                    setBootDataSource(dataSource);
                    _a.label = 2;
                case 2:
                    setLoadingBootSource(false);
                    return [2 /*return*/];
            }
        });
    }); }, [bootDataSource, template]);
    var onDelete = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, k8sDelete({
                        model: TemplateModel,
                        resource: template,
                    }).then(function () { return navigate("/k8s/".concat(lastNamespacePath, "/templates")); })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var actions = [
        {
            accessReview: asAccessReview(TemplateModel, template, 'patch'),
            cta: function () {
                // lead to the template details page
                return navigate("/k8s/ns/".concat(template.metadata.namespace, "/templates/").concat(template.metadata.name));
            },
            id: EDIT_TEMPLATE_ID,
            label: t('Edit'),
        },
        {
            accessReview: asAccessReview(TemplateModel, template, 'create'),
            cta: function () {
                return createModal(function (_a) {
                    var isOpen = _a.isOpen, onClose = _a.onClose;
                    return (React.createElement(CloneTemplateModal, { isOpen: isOpen, obj: template, onClose: onClose, onTemplateCloned: goToTemplatePage }));
                });
            },
            id: 'clone-template',
            label: t('Clone'),
        },
        {
            accessReview: asAccessReview(TemplateModel, template, 'patch'),
            cta: function () {
                return navigate("/k8s/ns/".concat(template.metadata.namespace, "/templates/").concat(template.metadata.name, "/disks"));
            },
            description: (isCommonTemplate && t('Red Hat template cannot be edited')) ||
                (!hasEditPermission && t(NO_EDIT_TEMPLATE_PERMISSIONS)),
            disabled: isCommonTemplate || !hasEditPermission,
            id: 'edit-boot-source',
            label: t('Edit boot source'),
        },
        {
            accessReview: asAccessReview(TemplateModel, template, 'patch'),
            cta: function () {
                return createModal(function (_a) {
                    var isOpen = _a.isOpen, onClose = _a.onClose;
                    return (React.createElement(EditBootSourceModal, { dataSource: bootDataSource, isOpen: isOpen, obj: template, onClose: onClose }));
                });
            },
            description: (!loadingBootSource || !canWriteToDataSourceNs) &&
                getEditBootSourceRefDescription(bootDataSource, canWriteToDataSourceNs),
            disabled: !editableBootSource || !canWriteToDataSourceNs,
            id: 'edit-boot-source-ref',
            label: (React.createElement(React.Fragment, null,
                t('Edit boot source reference'),
                " ",
                loadingBootSource && React.createElement(Loading, null))),
        },
        {
            accessReview: asAccessReview(TemplateModel, template, 'patch'),
            cta: function () {
                return createModal(function (_a) {
                    var isOpen = _a.isOpen, onClose = _a.onClose;
                    return (React.createElement(LabelsModal, { onLabelsSubmit: function (labels) {
                            return k8sPatch({
                                data: [
                                    {
                                        op: 'replace',
                                        path: '/metadata/labels',
                                        value: labels,
                                    },
                                ],
                                model: TemplateModel,
                                resource: template,
                            });
                        }, isOpen: isOpen, obj: template, onClose: onClose }));
                });
            },
            description: (isCommonTemplate && t('Labels cannot be edited for Red Hat templates')) ||
                (!hasEditPermission && t(NO_EDIT_TEMPLATE_PERMISSIONS)),
            disabled: isCommonTemplate || !hasEditPermission,
            id: 'edit-labels',
            label: t('Edit labels'),
        },
        {
            accessReview: asAccessReview(TemplateModel, template, 'patch'),
            cta: function () {
                return createModal(function (_a) {
                    var isOpen = _a.isOpen, onClose = _a.onClose;
                    return (React.createElement(AnnotationsModal, { onSubmit: function (updatedAnnotations) {
                            return k8sPatch({
                                data: [
                                    {
                                        op: 'replace',
                                        path: '/metadata/annotations',
                                        value: updatedAnnotations,
                                    },
                                ],
                                model: TemplateModel,
                                resource: template,
                            });
                        }, isOpen: isOpen, obj: template, onClose: onClose }));
                });
            },
            description: (isCommonTemplate && t('Annotations cannot be edited for Red Hat templates')) ||
                (!hasEditPermission && t(NO_EDIT_TEMPLATE_PERMISSIONS)),
            disabled: isCommonTemplate || !hasEditPermission,
            id: 'edit-annotations',
            label: t('Edit annotations'),
        },
        {
            accessReview: asAccessReview(TemplateModel, template, 'delete'),
            cta: function () {
                return createModal(function (_a) {
                    var isOpen = _a.isOpen, onClose = _a.onClose;
                    return (React.createElement(DeleteModal, { headerText: t('Delete VirtualMachine Template?'), isOpen: isOpen, obj: template, onClose: onClose, onDeleteSubmit: onDelete }));
                });
            },
            description: (isCommonTemplate && t('Red Hat template cannot be deleted')) ||
                (!canDeleteTemplate && t(NO_DELETE_TEMPLATE_PERMISSIONS)),
            disabled: isCommonTemplate || !canDeleteTemplate,
            id: 'delete-template',
            label: t('Delete'),
        },
    ];
    return [actions, onLazyActions];
};
export default useVirtualMachineTemplatesActions;
//# sourceMappingURL=useVirtualMachineTemplatesActions.js.map