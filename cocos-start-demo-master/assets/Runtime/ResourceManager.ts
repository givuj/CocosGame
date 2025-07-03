//存放资源加载数据

import { resources, SpriteFrame } from 'cc';
import Singleton from '../Base/Singleton';




export default class ResourcesManager extends Singleton {
    static get Instance() {
        return super.GetInstance<ResourcesManager>();
    }
    //加载图片资源
  loadRes(path:string,type:typeof SpriteFrame = SpriteFrame){
    return new Promise<SpriteFrame[]>((resolve,reject)=>{
    resources.loadDir(path,type,function(err,assets)
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




