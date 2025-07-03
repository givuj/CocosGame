
import { _decorator, Component, Node, resources, SpriteFrame, Sprite, UITransform, Layers } from 'cc';
const { ccclass, property } = _decorator;
import levels from '../../Levels';
import DataManager from '../../Runtime/DataManager';
import ResourcesManager from '../../Runtime/ResourceManager';
import { createUINode, randomByRange } from '../../Utils/index';
import { TileManager } from './TileManager';
export const TILE_WIDTH = 55;
export const TILE_HEIGHT = 55;

@ccclass('TileMapManager')
export class TileMapManager extends Component{
 async init()
  {

     const SpriteFrame = await ResourcesManager.Instance.loadRes('texture/tile/tile');//加载瓦片资源
     const {mapInfo} = DataManager.Instance// const {mapInfo}等价于DataManagerInstance.mapInfo
     for(let i=0;i<mapInfo.length;i++)
     {
      const column = mapInfo[i];
      for(let j=0;j<column.length;j++)
      {
        const item = column[j];
        if(item.src === null||item.type === null)
        continue;

        let number = item.src;
        if((number===1||number===5||number===9)&&i%2===0&&j%2===0)
        {
          number+=randomByRange(0,4);
        }
        const imSrc = `tile (${number})`;

        const node = createUINode();

        const spriteFrame = SpriteFrame.find(v=>v.name===imSrc)||SpriteFrame[0];



        const tileManager = node.addComponent(TileManager);//节点添加TileManager脚本
        tileManager.init(spriteFrame,i,j);
        node.setParent(this.node);//设置父节点是必须的

      }
     }
  }

}
