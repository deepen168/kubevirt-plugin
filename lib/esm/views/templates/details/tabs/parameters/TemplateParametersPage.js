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
import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom-v5-compat';
import { useImmer } from 'use-immer';
import { TemplateModel } from '@kubevirt-ui/kubevirt-api/console';
import { isEqualObject } from '@kubevirt-utils/components/NodeSelectorModal/utils/helpers';
import SidebarEditor from '@kubevirt-utils/components/SidebarEditor/SidebarEditor';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { k8sUpdate } from '@openshift-console/dynamic-plugin-sdk';
import { ActionGroup, Alert, AlertVariant, Button, Divider, EmptyState, Form, PageSection, PageSectionVariants, Title, } from '@patternfly/react-core';
import useEditTemplateAccessReview from '../../hooks/useIsTemplateEditable';
import ParameterEditor from './ParameterEditor';
import './template-parameters-page.scss';
var TemplateParametersPage = function (_a) {
    var template = _a.obj;
    var t = useKubevirtTranslation().t;
    var _b = useImmer(template), editableTemplate = _b[0], setEditableTemplate = _b[1];
    var isTemplateEditable = useEditTemplateAccessReview(template).isTemplateEditable;
    var navigate = useNavigate();
    var _c = useState(), error = _c[0], setError = _c[1];
    var _d = useState(false), success = _d[0], setSuccess = _d[1];
    var _e = useState(false), loading = _e[0], setLoading = _e[1];
    useEffect(function () { return setEditableTemplate(template); }, [setEditableTemplate, template]);
    var goBack = useCallback(function () {
        navigate(-1);
    }, [navigate]);
    if (isEmpty(editableTemplate === null || editableTemplate === void 0 ? void 0 : editableTemplate.parameters))
        return React.createElement(EmptyState, null, t('No parameters found in this template.'));
    var onParameterChange = function (parameter) {
        setEditableTemplate(function (_a) {
            var draftParameters = _a.parameters;
            var parameterIndex = draftParameters.findIndex(function (p) { return p.name === parameter.name; });
            draftParameters[parameterIndex] = parameter;
        });
    };
    var parameters = editableTemplate.parameters;
    var isSaveDisabled = isEqualObject(template.parameters, parameters);
    var onSave = function (event) { return __awaiter(void 0, void 0, void 0, function () {
        var apiError_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event.preventDefault();
                    setLoading(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, k8sUpdate({
                            data: editableTemplate,
                            model: TemplateModel,
                        })];
                case 2:
                    _a.sent();
                    setSuccess(true);
                    return [3 /*break*/, 5];
                case 3:
                    apiError_1 = _a.sent();
                    setError(apiError_1);
                    return [3 /*break*/, 5];
                case 4:
                    setLoading(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement(PageSection, { className: "template-parameters-page", variant: PageSectionVariants.light },
        React.createElement(SidebarEditor, { onChange: function (newTemplate) { return setEditableTemplate(newTemplate); }, resource: editableTemplate },
            React.createElement(Form, { className: "template-parameters-page__form" },
                React.createElement(Title, { headingLevel: "h2" }, t('Parameters')),
                parameters.map(function (parameter, index) { return (React.createElement(React.Fragment, null,
                    React.createElement(ParameterEditor, { isEditDisabled: !isTemplateEditable, key: parameter.name, onChange: onParameterChange, parameter: parameter }),
                    index !== parameters.length - 1 && React.createElement(Divider, null))); }),
                error && (React.createElement(Alert, { isInline: true, title: t('Error'), variant: AlertVariant.danger }, error)),
                success && (React.createElement(Alert, { isInline: true, title: t('Success'), variant: AlertVariant.info }, t('Parameters successfully edited'))),
                React.createElement(ActionGroup, { className: "pf-c-form" },
                    React.createElement(Button, { isDisabled: isSaveDisabled, isLoading: loading, onClick: onSave, type: "submit", variant: "primary" }, t('Save')),
                    React.createElement(Button, { onClick: goBack, type: "button", variant: "secondary" }, t('Cancel')))))));
};
export default TemplateParametersPage;
//# sourceMappingURL=TemplateParametersPage.js.map