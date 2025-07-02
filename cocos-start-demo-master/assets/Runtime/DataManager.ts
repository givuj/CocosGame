//存放地图数据，主要是别的地方想拿地图就可以在这里拿
import { _decorator, Component, Node } from 'cc';
import { ITile } from '../Levels';
const { ccclass, property } = _decorator;


@ccclass('DataManager')
class DataManager {
    mapInfo:Array<Array<ITile>>;
    mapRowCount:number;
    mapColumCount:number;
}
export const DataManagerInstance = new DataManager();//暴露出去，让别人可以拿
