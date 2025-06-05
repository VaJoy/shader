import { _decorator, Component, Sprite, v4 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ChangeCoverColor')
export class ChangeCoverColor extends Component {
    onLoad() {
        const mat = this.getComponent(Sprite).sharedMaterial;  // 共享材质
        // const mat = this.getComponent(Sprite).material;  // 非共享材质，相当于 this.getComponent(Sprite).getMaterialInstance(0);
        mat.setProperty("coverColor", v4(0.0, 1.0, 1.0, 1.0));
    }
}
