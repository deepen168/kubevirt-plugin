import React from 'react';
import { Trans } from 'react-i18next';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
var AddVolumeContent = function () {
    var t = useKubevirtTranslation().t;
    return (React.createElement(Trans, { t: t },
        "When selecting a DataSource that your virtual machines can boot from, you can add a volume that is not listed by clicking the ",
        React.createElement("b", null, "Add volume"),
        " button."));
};
export default AddVolumeContent;
//# sourceMappingURL=AddVolumeContent.js.map