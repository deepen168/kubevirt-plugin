import { load } from 'js-yaml';
import { kubevirtConsole } from '@kubevirt-utils/utils/utils';
export var safeLoad = function (value) {
    try {
        return load(value);
    }
    catch (error) {
        kubevirtConsole.error(error);
        return;
    }
};
var getLineFromPath = function (resourceYAML, path) {
    var yamlLines = resourceYAML.split('\n');
    var range = { end: yamlLines.length - 1, start: 0 };
    var properties = path.split('.');
    var _loop_1 = function (propertyDepth) {
        var property = properties[propertyDepth];
        // at every iteration, go one level deeper, remove initial indentation for that range.
        var replaceIndentationRegex = new RegExp("^[ ]{".concat(2 * parseInt(propertyDepth), "}"));
        var rangeLines = yamlLines
            .slice(range.start + 1, range.end)
            .map(function (line) { return line.replace(replaceIndentationRegex, ''); });
        // find the property
        var startPropertyRange = rangeLines.findIndex(function (line) { return line.startsWith("".concat(property, ":")); });
        // find next property at same depth level
        var rangeLength = rangeLines
            .slice(startPropertyRange + 1)
            .findIndex(function (line) { return line.match(/^[A-z]+:/g); });
        if (rangeLength === -1)
            rangeLength = rangeLines.length - startPropertyRange;
        // property not found
        if (startPropertyRange === -1)
            return { value: undefined };
        range.start += startPropertyRange + 1;
        range.end = range.start + rangeLength;
    };
    for (var propertyDepth in properties) {
        var state_1 = _loop_1(propertyDepth);
        if (typeof state_1 === "object")
            return state_1.value;
    }
    // editor lines starts from 1, array starts from 0
    range.start += 1;
    range.end += 1;
    return range;
};
export var getLinesToHighlight = function (resourceYAML, pathsToHighlight) {
    return pathsToHighlight
        .map(function (path) { return getLineFromPath(resourceYAML, path); })
        .filter(function (highlightLine) { return !!highlightLine; });
};
export var createSelection = function (range) { return ({
    endColumn: 0,
    endLineNumber: range.end + 1,
    positionColumn: 0,
    positionLineNumber: range.end + 1,
    selectionStartColumn: 0,
    selectionStartLineNumber: range.start,
    startColumn: 0,
    startLineNumber: range.start,
}); };
//# sourceMappingURL=utils.js.map