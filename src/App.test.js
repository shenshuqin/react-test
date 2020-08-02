
import App from './App'
import React from 'react'
import {expect} from 'chai';
import {shallow,render,mount } from 'enzyme'

describe('Enzyme Shallow', function () {
    it('App\'s title should be Todos', function () {
    // shallow方法浅渲染的虚拟DOM对象，然后app.find方法找出h1元素，text方法取出该元素的文本
      let app = shallow(<App/>);
    //   find方法只支持简单选择器
      expect(app.find('#title').text()).to.equal('Todos');
    });
});