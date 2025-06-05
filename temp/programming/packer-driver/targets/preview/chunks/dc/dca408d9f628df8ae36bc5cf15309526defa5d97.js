System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Sprite, v4, _dec, _class, _crd, ccclass, property, ChangeCoverColor;

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

      _cclegacy._RF.push({}, "301fciIGUdImr4mMQJY6bF/", "ChangeCoverColor", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Sprite', 'v4']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ChangeCoverColor", ChangeCoverColor = (_dec = ccclass('ChangeCoverColor'), _dec(_class = class ChangeCoverColor extends Component {
        onLoad() {
          var mat = this.getComponent(Sprite).sharedMaterial; // 共享材质
          // const mat = this.getComponent(Sprite).material;  // 非共享材质，相当于 this.getComponent(Sprite).getMaterialInstance(0);

          mat.setProperty("coverColor", v4(0.0, 1.0, 1.0, 1.0));
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=dca408d9f628df8ae36bc5cf15309526defa5d97.js.map