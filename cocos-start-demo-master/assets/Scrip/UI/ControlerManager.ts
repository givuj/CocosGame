
import { _decorator, Component, Node } from 'cc';
import { EVENT_ENUM } from '../../Enums/Index';
import EventManager from '../../Runtime/EventManager';
const { ccclass, property } = _decorator;



@ccclass('ControlerManager')
export class ControlerManager extends Component {
   //就是相当于当你按下NEXT_LEVEL这个按钮，你就会变成下一关
   handleCtrl(){
    EventManager.Instance.emit(EVENT_ENUM.NEXT_LEVEL);
   }
}

