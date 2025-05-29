System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Sprite, Material, UITransform, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, RedDotController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Sprite = _cc.Sprite;
      Material = _cc.Material;
      UITransform = _cc.UITransform;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ac946NbmFlBTK/5eGrRO3vW", "RedDotController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Sprite', 'Material', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RedDotController", RedDotController = (_dec = ccclass('RedDotController'), _dec2 = property(Material), _dec(_class = (_class2 = class RedDotController extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "material", _descriptor, this);
        }

        start() {
          var uiTransform = this.node.getComponent(UITransform);

          if (uiTransform && this.material) {
            // this.material.setProperty('u_node_width', uiTransform.width);
            // this.material.setProperty('u_node_height', uiTransform.height);
            // 如果是 Sprite 组件
            var sprite = this.node.getComponent(Sprite);

            if (sprite) {
              sprite.material = this.material;
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "material", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0fbff7349eb21490197012bb7b7eefa742efec4e.js.map