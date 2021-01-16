import React, { useState } from 'react'

import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './enzymedemo';

Enzyme.configure({ adapter: new Adapter() });



describe('enzyme test', () => {
  test('enzyme', () => {
    const wrapper = shallow(<App />) // 浅渲染 不渲染子组件 适合单元测试
    console.log(wrapper.find('#app'));
    console.log(wrapper.find('.class-name').prop('title')) //少用 classname 变得可能性很大。
    console.log(wrapper.find('[data-test="container"]')) // 这种解耦比较好。

    // 安装 jest-enzyme 提供了更多匹配器 , 在jest.config.js 添加扩展配置 "setupFilesAfterEnv": ['./node_modules/jest-enzyme/lib/index.js'],
    expect(wrapper.find('[data-test="container"]')).toExist();

  })

  test('enzyme2', () => {
    const wrapper = mount(<App />) //全渲染 适合集成测试
    expect(wrapper).toMatchSnapshot() //如果对展示敏感的测试可以使用快照
  })

})
