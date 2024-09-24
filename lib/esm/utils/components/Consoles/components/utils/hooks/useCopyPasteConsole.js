import { useEffect, useRef } from 'react';
import { CONSOLE_PASTE_EVENT } from '@kubevirt-utils/components/Consoles/utils/constants';
var useCopyPasteConsole = function () {
    var pasteText = useRef('');
    useEffect(function () {
        var pasteFn = function (event) {
            pasteText.current = event.detail;
        };
        document.addEventListener(CONSOLE_PASTE_EVENT, pasteFn);
        return function () {
            document.removeEventListener(CONSOLE_PASTE_EVENT, pasteFn); // clean up
        };
    }, []);
    return pasteText;
};
export default useCopyPasteConsole;
//# sourceMappingURL=useCopyPasteConsole.js.map