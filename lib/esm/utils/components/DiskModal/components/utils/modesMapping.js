var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v;
import { V1beta1StorageSpecVolumeModeEnum } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { t } from '@kubevirt-utils/hooks/useKubevirtTranslation';
export var ACCESS_MODES;
(function (ACCESS_MODES) {
    ACCESS_MODES["ROX"] = "ReadOnlyMany";
    ACCESS_MODES["RWO"] = "ReadWriteOnce";
    ACCESS_MODES["RWX"] = "ReadWriteMany";
})(ACCESS_MODES || (ACCESS_MODES = {}));
export var initialAccessModes = [
    ACCESS_MODES.RWX,
    ACCESS_MODES.RWO,
    ACCESS_MODES.ROX,
];
export var initialVolumeModes = [
    V1beta1StorageSpecVolumeModeEnum.Filesystem,
    V1beta1StorageSpecVolumeModeEnum.Block,
];
// See https://kubernetes.io/docs/concepts/storage/persistent-volumes/#types-of-persistent-volumes for more details
export var provisionerAccessModeMapping = {
    'cinder.csi.openstack.org': (_a = {},
        _a[V1beta1StorageSpecVolumeModeEnum.Block] = [ACCESS_MODES.RWO],
        _a[V1beta1StorageSpecVolumeModeEnum.Filesystem] = [ACCESS_MODES.RWO],
        _a),
    'csi.ovirt.org': (_b = {},
        _b[V1beta1StorageSpecVolumeModeEnum.Block] = [ACCESS_MODES.RWO],
        _b[V1beta1StorageSpecVolumeModeEnum.Filesystem] = [ACCESS_MODES.RWO],
        _b),
    'ebs.csi.aws.com': (_c = {},
        _c[V1beta1StorageSpecVolumeModeEnum.Block] = [ACCESS_MODES.RWO],
        _c[V1beta1StorageSpecVolumeModeEnum.Filesystem] = [ACCESS_MODES.RWO],
        _c),
    'kubernetes.io/aws-ebs': (_d = {},
        _d[V1beta1StorageSpecVolumeModeEnum.Block] = [ACCESS_MODES.RWO],
        _d[V1beta1StorageSpecVolumeModeEnum.Filesystem] = [ACCESS_MODES.RWO],
        _d),
    'kubernetes.io/azure-disk': (_e = {},
        _e[V1beta1StorageSpecVolumeModeEnum.Block] = [ACCESS_MODES.RWO],
        _e[V1beta1StorageSpecVolumeModeEnum.Filesystem] = [ACCESS_MODES.RWO],
        _e),
    'kubernetes.io/azure-file': (_f = {},
        _f[V1beta1StorageSpecVolumeModeEnum.Block] = [
            ACCESS_MODES.RWO,
            ACCESS_MODES.RWX,
            ACCESS_MODES.ROX,
        ],
        _f[V1beta1StorageSpecVolumeModeEnum.Filesystem] = [
            ACCESS_MODES.RWO,
            ACCESS_MODES.RWX,
            ACCESS_MODES.ROX,
        ],
        _f),
    'kubernetes.io/cinder': (_g = {},
        _g[V1beta1StorageSpecVolumeModeEnum.Block] = [ACCESS_MODES.RWO],
        _g[V1beta1StorageSpecVolumeModeEnum.Filesystem] = [ACCESS_MODES.RWO],
        _g),
    'kubernetes.io/gce-pd': (_h = {},
        _h[V1beta1StorageSpecVolumeModeEnum.Block] = [ACCESS_MODES.RWO, ACCESS_MODES.ROX],
        _h[V1beta1StorageSpecVolumeModeEnum.Filesystem] = [ACCESS_MODES.RWO, ACCESS_MODES.ROX],
        _h),
    'kubernetes.io/glusterfs': (_j = {},
        _j[V1beta1StorageSpecVolumeModeEnum.Block] = [
            ACCESS_MODES.RWO,
            ACCESS_MODES.RWX,
            ACCESS_MODES.ROX,
        ],
        _j[V1beta1StorageSpecVolumeModeEnum.Filesystem] = [
            ACCESS_MODES.RWO,
            ACCESS_MODES.RWX,
            ACCESS_MODES.ROX,
        ],
        _j),
    'kubernetes.io/no-provisioner': (_k = {},
        _k[V1beta1StorageSpecVolumeModeEnum.Block] = [ACCESS_MODES.RWO],
        _k[V1beta1StorageSpecVolumeModeEnum.Filesystem] = [ACCESS_MODES.RWO],
        _k),
    'kubernetes.io/portworx-volume': (_l = {},
        _l[V1beta1StorageSpecVolumeModeEnum.Block] = [ACCESS_MODES.RWO, ACCESS_MODES.RWX],
        _l[V1beta1StorageSpecVolumeModeEnum.Filesystem] = [ACCESS_MODES.RWO, ACCESS_MODES.RWX],
        _l),
    'kubernetes.io/quobyte': (_m = {},
        _m[V1beta1StorageSpecVolumeModeEnum.Block] = [
            ACCESS_MODES.RWO,
            ACCESS_MODES.RWX,
            ACCESS_MODES.ROX,
        ],
        _m[V1beta1StorageSpecVolumeModeEnum.Filesystem] = [
            ACCESS_MODES.RWO,
            ACCESS_MODES.RWX,
            ACCESS_MODES.ROX,
        ],
        _m),
    'kubernetes.io/rbd': (_o = {},
        _o[V1beta1StorageSpecVolumeModeEnum.Block] = [ACCESS_MODES.RWO, ACCESS_MODES.ROX],
        _o[V1beta1StorageSpecVolumeModeEnum.Filesystem] = [ACCESS_MODES.RWO, ACCESS_MODES.ROX],
        _o),
    'kubernetes.io/scaleio': (_p = {},
        _p[V1beta1StorageSpecVolumeModeEnum.Block] = [ACCESS_MODES.RWO, ACCESS_MODES.ROX],
        _p[V1beta1StorageSpecVolumeModeEnum.Filesystem] = [ACCESS_MODES.RWO, ACCESS_MODES.ROX],
        _p),
    'kubernetes.io/storageos': (_q = {},
        _q[V1beta1StorageSpecVolumeModeEnum.Block] = [ACCESS_MODES.RWO],
        _q[V1beta1StorageSpecVolumeModeEnum.Filesystem] = [ACCESS_MODES.RWO],
        _q),
    'kubernetes.io/vsphere-volume': (_r = {},
        _r[V1beta1StorageSpecVolumeModeEnum.Block] = [ACCESS_MODES.RWO, ACCESS_MODES.RWX],
        _r[V1beta1StorageSpecVolumeModeEnum.Filesystem] = [ACCESS_MODES.RWO, ACCESS_MODES.RWX],
        _r),
    // Since 4.6 new provisioners names will be without the 'kubernetes.io/' prefix.
    'manila.csi.openstack.org': (_s = {},
        _s[V1beta1StorageSpecVolumeModeEnum.Block] = [
            ACCESS_MODES.RWO,
            ACCESS_MODES.RWX,
            ACCESS_MODES.ROX,
        ],
        _s[V1beta1StorageSpecVolumeModeEnum.Filesystem] = [
            ACCESS_MODES.RWO,
            ACCESS_MODES.RWX,
            ACCESS_MODES.ROX,
        ],
        _s),
    'openshift-storage.cephfs.csi.ceph.com': (_t = {},
        _t[V1beta1StorageSpecVolumeModeEnum.Filesystem] = [
            ACCESS_MODES.RWO,
            ACCESS_MODES.RWX,
            ACCESS_MODES.ROX,
        ],
        _t),
    'openshift-storage.rbd.csi.ceph.com': (_u = {},
        _u[V1beta1StorageSpecVolumeModeEnum.Block] = [
            ACCESS_MODES.RWO,
            ACCESS_MODES.RWX,
            ACCESS_MODES.ROX,
        ],
        _u[V1beta1StorageSpecVolumeModeEnum.Filesystem] = [ACCESS_MODES.RWO, ACCESS_MODES.ROX],
        _u),
    'pd.csi.storage.gke.io': (_v = {},
        _v[V1beta1StorageSpecVolumeModeEnum.Block] = [ACCESS_MODES.RWO],
        _v[V1beta1StorageSpecVolumeModeEnum.Filesystem] = [ACCESS_MODES.RWO],
        _v),
};
export var ACCESS_MODE_RADIO_OPTIONS = [
    {
        label: t('Single user (RWO)'),
        value: ACCESS_MODES.RWO,
    },
    {
        label: t('Shared access (RWX)'),
        value: ACCESS_MODES.RWX,
    },
    {
        label: t('Read only (ROX)'),
        value: ACCESS_MODES.ROX,
    },
];
export var VOLUME_MODE_RADIO_OPTIONS = [
    {
        label: t('Filesystem'),
        value: V1beta1StorageSpecVolumeModeEnum.Filesystem,
    },
    {
        label: t('Block'),
        value: V1beta1StorageSpecVolumeModeEnum.Block,
    },
];
export var getAccessModeForProvisioner = function (provisioner, volumeMode) {
    var modeMap = provisionerAccessModeMapping[provisioner] || {};
    var volumeModes = Object.keys(modeMap);
    if ((volumeModes === null || volumeModes === void 0 ? void 0 : volumeModes.length) > 0) {
        return volumeMode ? modeMap[volumeMode] : volumeModes.map(function (mode) { return modeMap[mode]; }).flat();
    }
    return initialAccessModes;
};
export var getVolumeModeForProvisioner = function (provisioner, accessMode) {
    var modeMap = provisionerAccessModeMapping[provisioner] || {};
    var volumeModes = Object.keys(modeMap);
    if ((volumeModes === null || volumeModes === void 0 ? void 0 : volumeModes.length) > 0) {
        return accessMode
            ? volumeModes.filter(function (vMode) { return modeMap[vMode].includes(accessMode); })
            : volumeModes;
    }
    return initialVolumeModes;
};
//# sourceMappingURL=modesMapping.js.map