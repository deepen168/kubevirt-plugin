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
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom-v5-compat';
import { DataSourceModelRef } from '@kubevirt-ui/kubevirt-api/console/models/DataSourceModel';
import { DEFAULT_DISK_SIZE } from '@kubevirt-utils/components/DiskModal/utils/constants';
import MutedTextSpan from '@kubevirt-utils/components/MutedTextSpan/MutedTextSpan';
import TabModal from '@kubevirt-utils/components/TabModal/TabModal';
import { DEFAULT_NAMESPACE } from '@kubevirt-utils/constants/constants';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { generatePrettyName } from '@kubevirt-utils/utils/utils';
import { Stack, StackItem } from '@patternfly/react-core';
import { CreateDataSourceForm } from './CreateDataSourceForm';
import { createDataSourceWithImportCron } from './utils';
export var CreateDataSourceModal = function (_a) {
    var isOpen = _a.isOpen, namespace = _a.namespace, onClose = _a.onClose;
    var t = useKubevirtTranslation().t;
    var navigate = useNavigate();
    var _b = useForm({
        defaultValues: {
            importsToKeep: 3,
            name: generatePrettyName('datasource'),
            size: DEFAULT_DISK_SIZE,
        },
    }), errors = _b.formState.errors, handleSubmit = _b.handleSubmit, register = _b.register, setValue = _b.setValue, watch = _b.watch;
    var importsToKeep = watch('importsToKeep');
    var size = watch('size');
    var name = watch('name');
    var onSubmit = handleSubmit(function (data) {
        var _a;
        return createDataSourceWithImportCron(__assign(__assign({}, data), { namespace: namespace || DEFAULT_NAMESPACE, url: ((_a = data === null || data === void 0 ? void 0 : data.url) === null || _a === void 0 ? void 0 : _a.includes('docker://')) ? data === null || data === void 0 ? void 0 : data.url : 'docker://' + (data === null || data === void 0 ? void 0 : data.url) })).then(function () {
            return navigate("/k8s/ns/".concat(namespace || DEFAULT_NAMESPACE, "/").concat(DataSourceModelRef, "/").concat(name));
        });
    }, function () { return Promise.reject({ message: t('Missing required fields') }); });
    return (React.createElement(TabModal, { headerText: t('Create DataSource'), isOpen: isOpen, onClose: onClose, onSubmit: function () { return onSubmit(); } },
        React.createElement(Stack, { hasGutter: true },
            React.createElement(StackItem, null,
                React.createElement(MutedTextSpan, { text: t('Creates a DataImportCron, which defines a cron job to poll and import the disk image.') })),
            React.createElement(StackItem, null,
                React.createElement(CreateDataSourceForm, { errors: errors, importsToKeep: importsToKeep, register: register, setValue: setValue, size: size })))));
};
//# sourceMappingURL=CreateDataSourceModal.js.map