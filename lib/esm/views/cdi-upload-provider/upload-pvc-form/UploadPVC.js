var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _a;
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom-v5-compat';
import axios from 'axios';
import cx from 'classnames';
import { modelToGroupVersionKind, PersistentVolumeClaimModel, StorageClassModel, TemplateModel, } from '@kubevirt-ui/kubevirt-api/console';
import DataVolumeModel from '@kubevirt-ui/kubevirt-api/console/models/DataVolumeModel';
import ExternalLink from '@kubevirt-utils/components/ExternalLink/ExternalLink';
import { createUploadPVC } from '@kubevirt-utils/hooks/useCDIUpload/utils';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { TEMPLATE_TYPE_BASE, TEMPLATE_TYPE_LABEL, TEMPLATE_VM_COMMON_NAMESPACE, } from '@kubevirt-utils/resources/template';
import { useAccessReview, useActiveNamespace, useK8sWatchResource, } from '@openshift-console/dynamic-plugin-sdk';
import { ActionGroup, Alert, Button, ButtonVariant } from '@patternfly/react-core';
import useBaseImages from '../hooks/useBaseImages';
import useMultipleAccessReviews from '../hooks/useMultipleAccessReviews';
import { CDI_UPLOAD_OS_URL_PARAM, CDI_UPLOAD_SUPPORTED_TYPES_URL, CDI_UPLOAD_URL_BUILDER, uploadErrorType, } from '../utils/consts';
import { CDIUploadContext } from '../utils/context';
import { getName, getNamespace, getPVCNamespace } from '../utils/selectors';
import { resourcePath } from '../utils/utils';
import UploadPVCButtonBar from './UploadPVCButtonBar';
import UploadPVCForm from './UploadPVCForm';
import UploadPVCFormStatus from './UploadPVCFormStatus';
var templatesResource = {
    groupVersionKind: modelToGroupVersionKind(TemplateModel),
    isList: true,
    namespace: TEMPLATE_VM_COMMON_NAMESPACE,
    optional: true,
    selector: {
        matchLabels: (_a = {}, _a[TEMPLATE_TYPE_LABEL] = TEMPLATE_TYPE_BASE, _a),
    },
};
var UploadPVCPage = function () {
    var t = useKubevirtTranslation().t;
    var _a = useState(false), isSubmitting = _a[0], setIsSubmitting = _a[1];
    var _b = useState(false), isCheckingCertificate = _b[0], setCheckingCertificate = _b[1];
    var _c = useState(false), disableFormSubmit = _c[0], setDisableFormSubmit = _c[1];
    var _d = useState(null), fileValue = _d[0], setFileValue = _d[1];
    var _e = useState(''), fileName = _e[0], setFileName = _e[1];
    var _f = useState(''), fileNameExtension = _f[0], setFileNameExtension = _f[1];
    var _g = useState(false), isFileRejected = _g[0], setIsFileRejected = _g[1];
    var _h = useState(''), error = _h[0], setError = _h[1];
    var _j = useState(false), isAllocating = _j[0], setIsAllocating = _j[1];
    var _k = useState(null), dvObj = _k[0], setDvObj = _k[1];
    var _l = useK8sWatchResource(templatesResource), commonTemplates = _l[0], loadedTemplates = _l[1], errorTemplates = _l[2];
    var navigate = useNavigate();
    var goldenNamespacesResources = useMemo(function () {
        var goldenNamespaces = __spreadArray([], new Set((commonTemplates || []).map(function (template) { return getPVCNamespace(template); }).filter(function (ns) { return !!ns; })), true);
        return goldenNamespaces.map(function (ns) { return ({
            group: DataVolumeModel.apiGroup,
            namespace: ns,
            resource: DataVolumeModel.plural,
            verb: 'create',
        }); });
    }, [commonTemplates]);
    var _m = useMultipleAccessReviews(goldenNamespacesResources, null), goldenAccessReviews = _m[0], rbacLoading = _m[1];
    var allowedTemplates = commonTemplates.filter(function (tmp) {
        return goldenAccessReviews.some(function (accessReview) {
            return accessReview.allowed && accessReview.resourceAttributes.namespace === getPVCNamespace(tmp);
        });
    });
    var _o = useBaseImages(allowedTemplates), goldenPvcs = _o[0], loadedPvcs = _o[1], errorPvcs = _o[2];
    var _p = useContext(CDIUploadContext), uploadData = _p.uploadData, uploadProxyURL = _p.uploadProxyURL, uploads = _p.uploads;
    var _q = useAccessReview({
        group: StorageClassModel.apiGroup,
        resource: StorageClassModel.plural,
        verb: 'list',
    }), scAllowed = _q[0], scAllowedLoading = _q[1];
    var _r = useK8sWatchResource(scAllowed
        ? {
            groupVersionKind: modelToGroupVersionKind(StorageClassModel),
            isList: true,
            namespaced: false,
        }
        : null), storageClasses = _r[0], scLoaded = _r[1];
    var initialNamespace = useActiveNamespace()[0];
    var namespace = getNamespace(dvObj) || initialNamespace;
    var urlParams = new URLSearchParams(window.location.search);
    var osParam = urlParams.get(CDI_UPLOAD_OS_URL_PARAM);
    var title = t('Upload data to Persistent Volume Claim');
    var fileNameExtText = fileNameExtension
        ? t('Detected file extension is {{fileNameExtension}}', { fileNameExtension: fileNameExtension })
        : t('No file extension detected');
    var save = function (e) {
        e.preventDefault();
        if (!fileName) {
            setError(uploadErrorType.MISSING);
        }
        else {
            // checking valid certificate for proxy
            setCheckingCertificate(true);
            axios
                .get(CDI_UPLOAD_URL_BUILDER(uploadProxyURL))
                .catch(function (catchError) {
                var _a;
                setCheckingCertificate(false);
                // the GET request will return an error everytime, but it will be undefined only if the certificate is invalid.
                if (((_a = catchError === null || catchError === void 0 ? void 0 : catchError.response) === null || _a === void 0 ? void 0 : _a.data) === undefined) {
                    throw new Error(uploadErrorType.CERT);
                }
            })
                .then(function () {
                setError('');
                setIsAllocating(true);
                setIsSubmitting(true);
                return createUploadPVC(dvObj);
            })
                .then(function (_a) {
                var token = _a.token;
                setIsAllocating(false);
                uploadData({
                    file: fileValue,
                    namespace: namespace,
                    pvcName: getName(dvObj),
                    token: token,
                });
            })
                .catch(function (err) {
                setIsAllocating(false);
                setError((err === null || err === void 0 ? void 0 : err.message) || uploadErrorType.ALLOCATE);
            });
        }
    };
    var handleFileChange = function (_, value) {
        setFileValue(value);
        setIsFileRejected(false);
        setError('');
    };
    var handleFileNameChange = function (_, filename) {
        var _a;
        setFileName(filename);
        setFileNameExtension((_a = /[.][^.]+$/.exec(filename)) === null || _a === void 0 ? void 0 : _a.toString());
    };
    useEffect(function () {
        if (errorTemplates || errorPvcs) {
            setError((errorTemplates === null || errorTemplates === void 0 ? void 0 : errorTemplates.message) || (errorPvcs === null || errorPvcs === void 0 ? void 0 : errorPvcs.message));
        }
    }, [errorTemplates, errorPvcs]);
    return (React.createElement(React.Fragment, null,
        React.createElement(Helmet, null,
            React.createElement("title", null, title)),
        React.createElement("div", { className: cx('co-m-pane__body co-m-pane__form', {
                'kv--create-upload__hide': isSubmitting,
            }) },
            React.createElement("h1", { className: "co-m-pane__heading co-m-pane__heading--baseline" },
                React.createElement("div", { className: "co-m-pane__name" }, title)),
            React.createElement("form", { className: "co-m-pane__body-group", onSubmit: save },
                React.createElement(UploadPVCForm, { commonTemplates: allowedTemplates, fileName: fileName, fileValue: fileValue, goldenPvcs: goldenPvcs, handleFileChange: handleFileChange, handleFileNameChange: handleFileNameChange, isLoading: !loadedTemplates, ns: initialNamespace, onChange: setDvObj, osParam: osParam, setDisableFormSubmit: setDisableFormSubmit, setIsFileRejected: setIsFileRejected, storageClasses: storageClasses }),
                React.createElement(UploadPVCButtonBar, { inProgress: rbacLoading ||
                        scAllowedLoading ||
                        !scLoaded ||
                        !loadedTemplates ||
                        !loadedPvcs ||
                        isCheckingCertificate, errorMessage: error, uploadProxyURL: uploadProxyURL },
                    isFileRejected && (React.createElement(Alert, { isInline: true, title: t('File type extension'), variant: "warning" },
                        React.createElement("p", null, t('Based on the file extension it seems like you are trying to upload a file which is not supported ({{fileNameExtText}}).', { fileNameExtText: fileNameExtText })),
                        React.createElement("p", null,
                            React.createElement(ExternalLink, { href: CDI_UPLOAD_SUPPORTED_TYPES_URL, text: t('Learn more about supported formats') })))),
                    React.createElement(ActionGroup, { className: "pf-v5-c-form" },
                        React.createElement(Button, { id: "save-changes", isDisabled: disableFormSubmit || isCheckingCertificate, type: "submit", variant: ButtonVariant.primary }, t('Upload')),
                        React.createElement(Button, { onClick: function () { return navigate(-1); }, type: "button", variant: "secondary" }, t('Cancel')))))),
        React.createElement(UploadPVCFormStatus, { onErrorClick: function () {
                setIsSubmitting(false);
                setError('');
            }, onSuccessClick: function () {
                return navigate(resourcePath(PersistentVolumeClaimModel, getName(dvObj), namespace));
            }, upload: uploads === null || uploads === void 0 ? void 0 : uploads.find(function (upl) { return (upl === null || upl === void 0 ? void 0 : upl.pvcName) === getName(dvObj) && (upl === null || upl === void 0 ? void 0 : upl.namespace) === namespace; }), allocateError: error, dataVolume: dvObj, isAllocating: isAllocating, isSubmitting: isSubmitting, onCancelClick: function () { return navigate(resourcePath(PersistentVolumeClaimModel)); } })));
};
export default UploadPVCPage;
//# sourceMappingURL=UploadPVC.js.map