import { _decorator, Component, Sprite, v4 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ChangeCoverColor')
export class ChangeCoverColor extends Component {
    onLoad() {
        const mat = this.getComponent(Sprite).material;
        console.log(mat.getProperty('coverColor'))
        mat.setProperty("coverColor", v4(0.0, 0.0, 1.0, 1.0));
    }
}
