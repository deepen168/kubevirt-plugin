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
import React, { useCallback } from 'react';
import HyperConvergedModel from '@kubevirt-ui/kubevirt-api/console/models/HyperConvergedModel';
import SectionWithSwitch from '@kubevirt-utils/components/SectionWithSwitch/SectionWithSwitch';
import { useIsAdmin } from '@kubevirt-utils/hooks/useIsAdmin';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getName } from '@kubevirt-utils/resources/shared';
import { k8sPatch } from '@openshift-console/dynamic-plugin-sdk';
import { Divider } from '@patternfly/react-core';
import ExpandSection from '../../../../ExpandSection/ExpandSection';
import { AUTOMATIC_IMAGE_DOWNLOAD_ANNOTATION } from './utils/consts';
import './automatic-images-download.scss';
var AutomaticImagesDownload = function (_a) {
    var _b, _c, _d, _e;
    var hyperConvergeConfiguration = _a.hyperConvergeConfiguration, newBadge = _a.newBadge;
    var t = useKubevirtTranslation().t;
    var isAdmin = useIsAdmin();
    var hyperConverged = hyperConvergeConfiguration[0], loaded = hyperConvergeConfiguration[1];
    var isEnabledAutomaticImagesDownload = (_c = (_b = hyperConverged === null || hyperConverged === void 0 ? void 0 : hyperConverged.spec) === null || _b === void 0 ? void 0 : _b.featureGates) === null || _c === void 0 ? void 0 : _c.enableCommonBootImageImport;
    var bootSources = ((_d = hyperConverged === null || hyperConverged === void 0 ? void 0 : hyperConverged.spec) === null || _d === void 0 ? void 0 : _d.dataImportCronTemplates) ||
        ((_e = hyperConverged === null || hyperConverged === void 0 ? void 0 : hyperConverged.status) === null || _e === void 0 ? void 0 : _e.dataImportCronTemplates);
    var onChangeAutomaticImagesDownload = useCallback(function (val) {
        k8sPatch({
            data: [
                {
                    op: 'replace',
                    path: "/spec/featureGates/enableCommonBootImageImport",
                    value: val,
                },
            ],
            model: HyperConvergedModel,
            resource: hyperConverged,
        });
    }, [hyperConverged]);
    var onChangeDataImportCronTemplate = useCallback(function (val, index) {
        var _a;
        var copyBootSources = __spreadArray([], bootSources, true);
        copyBootSources[index].metadata.annotations = __assign(__assign({}, copyBootSources[index].metadata.annotations), (_a = {}, _a[AUTOMATIC_IMAGE_DOWNLOAD_ANNOTATION] = val.toString(), _a));
        k8sPatch({
            data: [
                {
                    op: 'replace',
                    path: "/spec",
                    value: { dataImportCronTemplates: copyBootSources },
                },
            ],
            model: HyperConvergedModel,
            resource: hyperConverged,
        });
    }, [bootSources, hyperConverged]);
    return (React.createElement(ExpandSection, { toggleText: t('Automatic images download') },
        React.createElement(SectionWithSwitch, { helpTextIconContent: t('Enable automatic images download and update'), id: "auto-image-download", isDisabled: !loaded || !isAdmin || isEnabledAutomaticImagesDownload === undefined, newBadge: newBadge, switchIsOn: Boolean(isEnabledAutomaticImagesDownload), title: t('Automatic images download'), turnOnSwitch: onChangeAutomaticImagesDownload }),
        isEnabledAutomaticImagesDownload && (React.createElement(React.Fragment, null,
            React.createElement(Divider, { className: "AutomaticImagesDownload--divider" }),
            (bootSources || []).map(function (bootSource, index) {
                var name = getName(bootSource);
                return (React.createElement(SectionWithSwitch, { switchIsOn: bootSource.metadata.annotations[AUTOMATIC_IMAGE_DOWNLOAD_ANNOTATION] !== 'false', id: "".concat(name, "-auto-image-download-switch"), inlineCheckbox: true, key: name, newBadge: newBadge, title: name, turnOnSwitch: function (checked) { return onChangeDataImportCronTemplate(checked, index); } }));
            })))));
};
export default AutomaticImagesDownload;
//# sourceMappingURL=AutomaticImagesDownload.js.map