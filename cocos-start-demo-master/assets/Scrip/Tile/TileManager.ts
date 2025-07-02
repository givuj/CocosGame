
import { _decorator, Component, Node, resources, SpriteFrame, Sprite, UITransform, Layers } from 'cc';
const { ccclass, property } = _decorator;
import levels from '../../Levels';
export const TILE_WIDTH = 55;
export const TILE_HEIGHT = 55;

@ccclass('TileManager')
export class TileManager extends Component{
  //这个函数是，帮助节点添加Sprite组件，并且设置spriteFrame图片加载，设置节点位置
  init(spriteFrame:SpriteFrame,i:number,j:number)
  {

        const sprite = this.addComponent(Sprite);

        sprite.spriteFrame = spriteFrame;
        const transform = this.getComponent(UITransform);
        transform.setContentSize(TILE_WIDTH,TILE_HEIGHT);

        this.node.setPosition(i*TILE_WIDTH,-j*TILE_HEIGHT);//设置瓦片加载的图片和位置



  }
}

