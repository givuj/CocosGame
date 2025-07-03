
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;


//单例模式很牛逼，单例模式的设计能解决 “数据一致性”“资源浪费”“全局访问” 等关键问题
@ccclass('NewComponent')
export default class Singleton {
    private static _instance:any = null;//这个static很重要，全局唯一：无论创建多少个类的实例，静态变量只有一份，且在程序运行期间不会被重置。
    static GetInstance<T>():T{
        if(this._instance === null)
        {
            this._instance = new this();
        }
        return this._instance;
    }

}


