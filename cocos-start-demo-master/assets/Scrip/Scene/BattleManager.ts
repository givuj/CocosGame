
import { _decorator, Component, Node } from 'cc';
import { EVENT_ENUM } from '../../Enums/Index';
import Levels from '../../Levels';
import levels, { ILevel } from '../../Levels';
import Level from '../../Levels/level1';
import DataManager from '../../Runtime/DataManager';
import EventManager from '../../Runtime/EventManager';
import { createUINode } from '../../Utils/index';
import { TILE_WIDTH } from '../Tile/TileManager';
import { TileMapManager} from '../Tile/TileMapManager';
const { ccclass, property } = _decorator;



@ccclass('BattleManage')
export class BattleManage extends Component {
    level:ILevel;
    stage:Node;
    start () {
        this.generateStage();
        this.initLevel();

    }
    onLoad()//绑定详情看EventManager，将NEXT_LEVEL这个按钮与nextLevel()函数绑定
    {
        EventManager.Instance.on(EVENT_ENUM.NEXT_LEVEL,this.nextLevel,this);
    }
    onDestroy()//解绑
    {
        EventManager.Instance.off(EVENT_ENUM.NEXT_LEVEL,this.nextLevel);
    }

    initLevel(){
        const level  = Levels[`level${DataManager.Instance.levelInde}`];
        if(Level)
        {
            this.clearLevel();
            this.level = level;
            DataManager.Instance.mapInfo = this.level.mapInfo;
            DataManager.Instance.mapRowCount = this.level.mapInfo.length||0;
            DataManager.Instance.mapColumCount = this.level.mapInfo[0].length||0;
            this.generateTileMap();
        }
    }

    nextLevel()//下一关函数,通过button（按钮）来执行
    {

        DataManager.Instance.levelInde++;
        this.initLevel();//初始化下一关的地图
    }

    clearLevel(){
        this.stage.destroyAllChildren();
        DataManager.Instance.reset();
    }

    generateStage(){
        this.stage = createUINode();
        this.stage.setParent(this.node);
    }
    generateTileMap(){

        const tileMap = createUINode();
        tileMap.setParent(this.stage);
        const tileMapManager = tileMap.addComponent(TileMapManager);
        tileMapManager.init();
        this.adaptPos();
    }
    //调整地图整体位置
    adaptPos(){
        const{mapRowCount,mapColumCount} = DataManager.Instance;
        const disx = (TILE_WIDTH*mapRowCount)/2;
        const disy = (TILE_WIDTH*mapColumCount)/2+80;
        this.stage.setPosition(-disx,disy);
    }
}
