import byteSize from 'byte-size';
export var diskTypes = {
    cdrom: 'CD-ROM',
    disk: 'Disk',
    floppy: 'Floppy',
    LUN: 'LUN',
};
var findDrive = function (obj) {
    var type = Object.keys(diskTypes).find(function (driveType) {
        return Object.keys(obj).includes(driveType);
    });
    return type || 'disk';
};
export var convertBytes = function (bytes) {
    return byteSize(bytes, {
        units: 'iec',
    });
};
export var diskStructureCreator = function (disks) {
    return disks === null || disks === void 0 ? void 0 : disks.map(function (device) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        return {
            drive: findDrive(device),
            interface: (_a = device === null || device === void 0 ? void 0 : device[findDrive(device)]) === null || _a === void 0 ? void 0 : _a.bus,
            metadata: { name: device === null || device === void 0 ? void 0 : device.name },
            name: device === null || device === void 0 ? void 0 : device.name,
            namespace: (_c = (_b = device === null || device === void 0 ? void 0 : device.pvc) === null || _b === void 0 ? void 0 : _b.metadata) === null || _c === void 0 ? void 0 : _c.namespace,
            size: (_g = (_f = (_e = (_d = device === null || device === void 0 ? void 0 : device.pvc) === null || _d === void 0 ? void 0 : _d.spec) === null || _e === void 0 ? void 0 : _e.resources) === null || _f === void 0 ? void 0 : _f.requests) === null || _g === void 0 ? void 0 : _g.storage,
            source: ((_j = (_h = device === null || device === void 0 ? void 0 : device.pvc) === null || _h === void 0 ? void 0 : _h.metadata) === null || _j === void 0 ? void 0 : _j.name) || 'Other',
            storageClass: ((_l = (_k = device === null || device === void 0 ? void 0 : device.pvc) === null || _k === void 0 ? void 0 : _k.spec) === null || _l === void 0 ? void 0 : _l.storageClassName) || '-',
        };
    });
};
export var filters = [
    {
        filter: function (drives, obj) {
            var _a, _b, _c;
            var status = obj === null || obj === void 0 ? void 0 : obj.drive;
            return (((_a = drives.selected) === null || _a === void 0 ? void 0 : _a.length) === 0 ||
                ((_b = drives.selected) === null || _b === void 0 ? void 0 : _b.includes(status)) ||
                !((_c = drives === null || drives === void 0 ? void 0 : drives.all) === null || _c === void 0 ? void 0 : _c.find(function (s) { return s === status; })));
        },
        filterGroupName: 'Disk Type',
        items: Object.keys(diskTypes).map(function (type) { return ({
            id: type,
            title: diskTypes[type],
        }); }),
        reducer: function (obj) { return obj === null || obj === void 0 ? void 0 : obj.drive; },
        type: 'disk-type',
    },
];
//# sourceMappingURL=virtualMachinesInstancePageDisksTabUtils.js.map