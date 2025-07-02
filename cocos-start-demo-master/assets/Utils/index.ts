//创建一个空节点，用于挂在一些组件比如sprite等，并且这个空节点的位置在右上，layer为2d，
//这样就不需要自己手动在cocos创建空节点，然后挂脚本和组件
import {  Node,  UITransform, Layers } from 'cc';
export const createUINode = (name:string='')=>
{
    const node = new Node();
    const transform = node.addComponent(UITransform);
    transform.setAnchorPoint(0,1);
    node.layer = 1<<Layers.nameToLayer("UI_2D");
    return node;
}
