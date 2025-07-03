
import { _decorator } from 'cc';
import Singleton from '../Base/Singleton';
interface ITtem{
    func:Function
    ctx:unknown
}


export default class EventManager extends Singleton {
    static get Instance() {
        return super.GetInstance<EventManager>();
    }
    private eventDic:Map<string,Array<ITtem>> = new Map();
    on(eventName:string,func:Function,ctx?:unknown)
    {
        if(this.eventDic.has(eventName))
        {
            this.eventDic.get(eventName).push({func,ctx});
        }
        else
        {
            this.eventDic.set(eventName,[{func,ctx}]);
        }
    }
    off(eventName:string,func:Function)
    {
        if(this.eventDic.has(eventName))
        {
            const index = this.eventDic.get(eventName).findIndex(i=>i.func===func)
            {
                index>-1&&this.eventDic.get(eventName).splice(index,1);
            }
        }
    }
    emit(eventName:string,...params:unknown[])//通过key调用相关函数
    {
        if(this.eventDic.has(eventName))
        {
            this.eventDic.get(eventName).forEach(({func,ctx})=>{ctx?func.apply(ctx,params):func(...params)})//apply的作用动态控制 this 指向：让函数在执行时 this 固定为 ctx 对象。
        }
    }
    clear()
    {
        this.eventDic.clear();
    }
}



