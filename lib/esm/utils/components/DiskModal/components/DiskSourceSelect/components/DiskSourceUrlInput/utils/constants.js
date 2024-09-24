var _a;
import { t } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { OS_NAME_TYPES } from '@kubevirt-utils/resources/template';
export var HTTP_URL_PREFIX = 'http://';
export var HTTPS_URL_PREFIX = 'https://';
export var urlSourceHelperTextMapper = (_a = {},
    _a[OS_NAME_TYPES.centos] = {
        afterLabelText: t('and copy the download link URL for the cloud base image'),
        beforeLabelText: t('Example: For CentOS, visit the '),
        label: t('CentOS cloud image list '),
    },
    _a[OS_NAME_TYPES.fedora] = {
        afterLabelText: t('and copy the download link URL for the cloud base image'),
        beforeLabelText: t('Example: For Fedora, visit the '),
        label: t('Fedora cloud image list '),
    },
    _a[OS_NAME_TYPES.rhel] = {
        afterLabelText: t('(requires login) and copy the download link URL of the KVM guest image (expires quickly)'),
        beforeLabelText: t('Example: For RHEL, visit the '),
        label: t('RHEL download page '),
    },
    _a[OS_NAME_TYPES.windows] = {
        afterLabelText: t('and copy the download link URL'),
        beforeLabelText: t('Example: For Windows, get a link to the '),
        label: t('installation iso of Microsoft Windows 10 '),
    },
    _a);
//# sourceMappingURL=constants.js.map