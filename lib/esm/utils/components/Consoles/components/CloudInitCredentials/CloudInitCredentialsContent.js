import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getCloudInitCredentials } from '@kubevirt-utils/resources/vmi';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { Stack, StackItem } from '@patternfly/react-core';
import InlineCodeClipboardCopy from './InlineCodeClipboardCopy';
var CloudInitCredentialsContent = function (_a) {
    var vm = _a.vm;
    var t = useKubevirtTranslation().t;
    var users = getCloudInitCredentials(vm).users;
    if (isEmpty(users)) {
        return React.createElement(React.Fragment, null, t('No credentials, see operating system documentation for the default username.'));
    }
    var _b = users.reduce(function (acc, user) {
        var _a, _b;
        return ({
            passwords: (React.createElement(React.Fragment, null,
                acc.passwords,
                React.createElement(InlineCodeClipboardCopy, { clipboardText: (_a = user === null || user === void 0 ? void 0 : user.password) === null || _a === void 0 ? void 0 : _a.concat(String.fromCharCode(13)) }))),
            usernames: (React.createElement(React.Fragment, null,
                acc.usernames,
                React.createElement(InlineCodeClipboardCopy, { clipboardText: (_b = user === null || user === void 0 ? void 0 : user.name) === null || _b === void 0 ? void 0 : _b.concat(String.fromCharCode(13)) }))),
        });
    }, { passwords: React.createElement(React.Fragment, null), usernames: React.createElement(React.Fragment, null) }), passwords = _b.passwords, usernames = _b.usernames;
    return (React.createElement(Stack, null,
        React.createElement(Stack, { hasGutter: true },
            React.createElement(Stack, null,
                React.createElement(StackItem, null, t('The following credentials for this operating system were created via cloud-init. If unsuccessful, cloud-init could be improperly configured.')),
                React.createElement(StackItem, null, t('Contact the image provider for more information.'))),
            React.createElement(StackItem, null,
                React.createElement("strong", null, t('User name')),
                " ",
                usernames),
            React.createElement(StackItem, null,
                React.createElement("strong", null, t('Password')),
                " ",
                passwords))));
};
export default CloudInitCredentialsContent;
//# sourceMappingURL=CloudInitCredentialsContent.js.map