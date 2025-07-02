
import { _decorator, Component, Node } from 'cc';
import { createUINode } from '../../Utils/index';
import { TileMapManager } from '../Tile/TileMapManager';
const { ccclass, property } = _decorator;



@ccclass('BattleManage')
export class BattleManage extends Component {


    start () {
        this.generateTileMap();
    }
    generateTileMap(){
        const stage = createUINode();
        stage.setParent(this.node);
        const tileMap = createUINode();
        tileMap.setParent(stage);
        const tileMapManager = tileMap.addComponent(TileMapManager);
        tileMapManager.init();
    }

}
