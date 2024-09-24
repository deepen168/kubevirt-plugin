import { useEffect, useRef } from 'react';
/**
 * Hook that creates an event listener.
 * @param eventName The name of the event to listen to.
 * @param handler The handler to call when the event is triggered.
 * @param element The element to attach the event listener to.
 */
function useEventListener(eventName, handler, element) {
    // Create a ref that stores handler
    var savedHandler = useRef();
    useEffect(function () {
        // Define the listening target
        var targetElement = (element === null || element === void 0 ? void 0 : element.current) || window;
        if (!(targetElement && targetElement.addEventListener)) {
            return;
        }
        // Update saved handler if necessary
        if (savedHandler.current !== handler) {
            savedHandler.current = handler;
        }
        // Create event listener that calls handler function stored in ref
        // eslint-disable-next-line require-jsdoc
        var eventListener = function (event) {
            if (savedHandler === null || savedHandler === void 0 ? void 0 : savedHandler.current) {
                savedHandler.current(event);
            }
        };
        targetElement.addEventListener(eventName, eventListener);
        // Remove event listener on cleanup
        return function () {
            targetElement.removeEventListener(eventName, eventListener);
        };
    }, [eventName, element, handler]);
}
export default useEventListener;
//# sourceMappingURL=useEventListener.js.map