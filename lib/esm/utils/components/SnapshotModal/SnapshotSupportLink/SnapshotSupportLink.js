import * as React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
var SnapshotSupportLink = function () {
    var t = useKubevirtTranslation().t;
    return (React.createElement("a", { href: 'https://access.redhat.com/documentation/en-us/openshift_container_platform/4.10/html/storage/using-container-storage-interface-csi#persistent-storage-csi-snapshots', rel: "noreferrer", target: "_blank" }, t('Learn more about snapshots')));
};
export default SnapshotSupportLink;
//# sourceMappingURL=SnapshotSupportLink.js.map