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
import React, { useRef, useState } from 'react';
import axios from 'axios';
import { CDIConfigModelRef } from '@kubevirt-ui/kubevirt-api/console';
import { getUploadProxyURL } from '@kubevirt-utils/hooks/useCDIUpload/utils';
import { useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';
import { CDI_UPLOAD_URL_BUILDER, UPLOAD_STATUS } from '../utils/consts';
var resource = {
    isList: false,
    kind: CDIConfigModelRef,
    name: 'config',
    namespaced: false,
};
var useCDIUpload = function () {
    var _a = useK8sWatchResource(resource), cdiConfig = _a[0], configLoaded = _a[1], configError = _a[2];
    var _b = useState([]), uploads = _b[0], setUploads = _b[1];
    var canUpdateState = useRef(true);
    var uploadProxyURL = getUploadProxyURL(cdiConfig);
    var updateUpload = function (changedUpload) {
        if (canUpdateState.current) {
            canUpdateState.current = false;
            setUploads(function (prevUploads) {
                var rest = prevUploads === null || prevUploads === void 0 ? void 0 : prevUploads.filter(function (upl) {
                    return (upl === null || upl === void 0 ? void 0 : upl.pvcName) !== (changedUpload === null || changedUpload === void 0 ? void 0 : changedUpload.pvcName) || (upl === null || upl === void 0 ? void 0 : upl.namespace) !== (changedUpload === null || changedUpload === void 0 ? void 0 : changedUpload.namespace);
                });
                return __spreadArray(__spreadArray([], rest, true), [changedUpload], false);
            });
        }
    };
    var uploadData = function (_a) {
        var file = _a.file, namespace = _a.namespace, pvcName = _a.pvcName, token = _a.token;
        var CancelToken = axios.CancelToken;
        var cancelSource = CancelToken.source();
        var noRouteFound = configError || !configLoaded || !uploadProxyURL;
        var newUpload = {
            cancelUpload: cancelSource.cancel,
            fileName: file === null || file === void 0 ? void 0 : file.name,
            namespace: namespace,
            progress: 0,
            pvcName: pvcName,
            uploadError: noRouteFound && { message: "No Upload URL found ".concat(configError) },
            uploadStatus: noRouteFound ? UPLOAD_STATUS.ERROR : UPLOAD_STATUS.UPLOADING,
        };
        if (noRouteFound) {
            updateUpload(newUpload);
            return;
        }
        var form = new FormData();
        form.append('file', file);
        try {
            axios({
                cancelToken: cancelSource.token,
                data: form,
                headers: {
                    Authorization: "Bearer ".concat(token),
                    'Content-Type': 'multipart/form-data',
                },
                method: 'POST',
                onUploadProgress: function (e) {
                    var progress = Math.floor((e.loaded / file.size) * 100);
                    updateUpload(__assign(__assign(__assign({}, newUpload), { progress: progress }), (progress === 100 && { uploadStatus: UPLOAD_STATUS.SUCCESS })));
                },
                url: CDI_UPLOAD_URL_BUILDER(uploadProxyURL),
            });
        }
        catch (err) {
            var isCancel = axios.isCancel(err);
            updateUpload(__assign(__assign(__assign({}, newUpload), { uploadStatus: isCancel ? UPLOAD_STATUS.CANCELED : UPLOAD_STATUS.ERROR }), (isCancel && {
                uploadError: { message: "".concat(err.message) },
            })));
        }
    };
    // multiple uploads could cause abuse of setUploads, so we use a Ref until state finished updating.
    React.useEffect(function () {
        if (!canUpdateState.current) {
            canUpdateState.current = true;
        }
    }, [uploads]);
    return {
        uploadData: uploadData,
        uploadProxyURL: uploadProxyURL,
        uploads: uploads,
    };
};
export default useCDIUpload;
//# sourceMappingURL=useCDIUpload.js.map