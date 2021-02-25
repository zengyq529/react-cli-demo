//集成测试
//可以去测试redux  成本比较低。
//基本库  tdd  。 业务逻辑 bdd 。


import React from 'react';
import { mount } from 'enzyme';
import App from '../enzymedemo';


it(`1,输入内容 2 点击回车  3 列表中展示用户输入的内容`, () => {
  const wrapper = mount(<App />);
  const input = wrapper.find('input');
  input.simulate('change', { target: { value: 'sssss' } })//输入内容
  input.simulate('keyUp', { keyCode: 13 })// 回车
  const list = wrapper.find('itemlist') //对应其他组件变化
  expect(list.find('item').length).toBe(3);
})