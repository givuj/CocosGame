
import { _decorator, Component, Node } from 'cc';
import Levels from '../../Levels';
import levels, { ILevel } from '../../Levels';
import Level from '../../Levels/level1';
import { DataManagerInstance } from '../../Runtime/DataManager';
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
    initLevel(){
        const level  = Levels[`level${1}`];
        if(Level)
        {
            this.level = level;
            DataManagerInstance.mapInfo = this.level.mapInfo;
            DataManagerInstance.mapRowCount = this.level.mapInfo.length||0;
            DataManagerInstance.mapColumCount = this.level.mapInfo[0].length||0;
            this.generateTileMap();
        }
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
        const{mapRowCount,mapColumCount} = DataManagerInstance;
        const disx = (TILE_WIDTH*mapRowCount)/2;
        const disy = (TILE_WIDTH*mapColumCount)/2+80;
        this.stage.setPosition(-disx,disy);
    }
}
