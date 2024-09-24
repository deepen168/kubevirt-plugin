import * as React from 'react';
import { kubevirtConsole } from '@kubevirt-utils/utils/utils';
import { COMPONENT_NOT_FOUND_ERROR } from './constants';
var URLHealthItemPopup = function (_a) {
    var subsystem = _a.subsystem;
    var _b = React.useState(null), PopupComponent = _b[0], setPopupComponent = _b[1];
    React.useEffect(function () {
        var loadComponent = function () {
            var _a;
            // TODO Fix typing
            // skipcq: JS-0349
            (_a = subsystem === null || subsystem === void 0 ? void 0 : subsystem.popupComponent) === null || _a === void 0 ? void 0 : _a.loader().then(function (Component) {
                if (!Component) {
                    return Promise.reject(COMPONENT_NOT_FOUND_ERROR);
                }
                setPopupComponent(Component);
            }).catch(function (error) {
                if (error === COMPONENT_NOT_FOUND_ERROR) {
                    kubevirtConsole.error(COMPONENT_NOT_FOUND_ERROR);
                }
                else {
                    setTimeout(function () { return loadComponent(); }, 1000);
                }
            });
        };
        if (subsystem === null || subsystem === void 0 ? void 0 : subsystem.popupComponent) {
            loadComponent();
        }
    }, [subsystem, setPopupComponent]);
    return PopupComponent || null;
};
export default URLHealthItemPopup;
//# sourceMappingURL=URLHealthItemPopup.js.map