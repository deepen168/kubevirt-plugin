import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import MutedTextSpan from '../MutedTextSpan/MutedTextSpan';
var GuestAgentIsRequiredText = function (_a) {
    var vmi = _a.vmi;
    var t = useKubevirtTranslation().t;
    return React.createElement(MutedTextSpan, { text: vmi ? t('Guest agent is required') : t('Not available') });
};
export default GuestAgentIsRequiredText;
//# sourceMappingURL=GuestAgentIsRequiredText.js.map