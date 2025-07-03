//存放地图数据，主要是别的地方想拿地图就可以在这里拿
import { _decorator, Component, Node } from 'cc';
import Singleton from '../Base/Singleton';
import { ITile } from '../Levels';
const { ccclass, property } = _decorator;

//使用单例模式保存地图数据解决了 1.所有模块访问的是 同一份地图数据（如玩家移动、敌人生成、UI 显示，必须基于同一地图）。
//2.地图数据只需 初始化一次（加载关卡时创建，切换关卡时更新，无需重复创建实例）。
@ccclass('DataManager')
export default class DataManager extends Singleton {
    static get Instance() {
        return super.GetInstance<DataManager>();
    }
    mapInfo:Array<Array<ITile>>;
    mapRowCount:number=0;
    mapColumCount:number=0;
    levelInde:number = 1;
    reset()
    {
        this.mapInfo =[];
        this.mapColumCount = 0;
        this.mapRowCount = 0;
    }
}


//export const DataManagerInstance = new DataManager();//暴露出去，让别人可以拿
