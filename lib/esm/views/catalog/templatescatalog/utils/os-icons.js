var bsd = require('./svg/bsd.svg');
var centos = require('./svg/centos.svg');
var debian = require('./svg/debian.svg');
var fedora = require('./svg/fedora.svg');
var opensuse = require('./svg/opensuse.svg');
var rhel = require('./svg/rhel.svg');
var ubuntu = require('./svg/ubuntu.svg');
var windows = require('./svg/windows.svg');
var linux = require('./svg/linux.svg');
var iconMap = {
    'icon-bsd': bsd,
    'icon-centos': centos,
    'icon-debian': debian,
    'icon-fedora': fedora,
    'icon-linux': linux,
    'icon-opensuse': opensuse,
    'icon-other': linux,
    'icon-rhel': rhel,
    'icon-ubuntu': ubuntu,
    'icon-windows': windows,
};
export var getTemplateOSIcon = function (template) {
    var _a, _b;
    var icon = (_b = (_a = template === null || template === void 0 ? void 0 : template.metadata) === null || _a === void 0 ? void 0 : _a.annotations) === null || _b === void 0 ? void 0 : _b.iconClass;
    return iconMap[icon] || iconMap['icon-other'];
};
export var getVolumeNameOSIcon = function (volumeName) {
    var icon = 'icon-'.concat(volumeName.replace(/\d/, '').split('-')[0]);
    return iconMap[icon];
};
export var getIconByOSName = function (osName) {
    return iconMap['icon-'.concat(osName)];
};
//# sourceMappingURL=os-icons.js.map