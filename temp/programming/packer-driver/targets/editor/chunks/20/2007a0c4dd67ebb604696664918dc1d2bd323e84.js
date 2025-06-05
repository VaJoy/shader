System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Sprite, v4, _dec, _class, _crd, ccclass, property, SetColor;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Sprite = _cc.Sprite;
      v4 = _cc.v4;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ce3481lXWZCRo7ouJZLulog", "SetColor", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Sprite', 'v4']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SetColor", SetColor = (_dec = ccclass('SetColor'), _dec(_class = class SetColor extends Component {
        start() {
          const sp = this.getComponent(Sprite);
          const mat = sp.material;
          mat.setProperty('coverColor', v4(1.0, 0.0, 0.0, 1.0));
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2007a0c4dd67ebb604696664918dc1d2bd323e84.js.map