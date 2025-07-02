
import { _decorator, Component, Node, resources, SpriteFrame, Sprite, UITransform, Layers } from 'cc';
const { ccclass, property } = _decorator;
import levels from '../../Levels';
import { DataManagerInstance } from '../../Runtime/DataManager';
import { createUINode } from '../../Utils/index';
import { TileManager } from './TileManager';
export const TILE_WIDTH = 55;
export const TILE_HEIGHT = 55;

@ccclass('TileMapManager')
export class TileMapManager extends Component{
 async init()
  {

     const SpriteFrame = await this.loadRes();
     const {mapInfo} = DataManagerInstance// const {mapInfo}等价于DataManagerInstance.mapInfo
     for(let i=0;i<mapInfo.length;i++)
     {
      const column = mapInfo[i];
      for(let j=0;j<column.length;j++)
      {
        const item = column[j];
        if(item.src === null||item.type === null)
        continue;
        const imSrc = `tile (${item.src})`;

        const node = createUINode();

        const spriteFrame = SpriteFrame.find(v=>v.name===imSrc)||SpriteFrame[0];



        const tileManager = node.addComponent(TileManager);//节点添加TileManager脚本
        tileManager.init(spriteFrame,i,j);
        node.setParent(this.node);//设置父节点是必须的

      }
     }
  }

  //加载图片资源
  loadRes(){
      return new Promise<SpriteFrame[]>((resolve,reject)=>{
      resources.loadDir('texture/tile/tile',SpriteFrame,function(err,assets)
      {
        if(err)
        {
          reject(err);
          return;
        }
        resolve(assets);
      })
    })
  }
}
