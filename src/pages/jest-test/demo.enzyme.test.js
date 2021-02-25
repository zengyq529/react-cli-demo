import React from 'react'

import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App,{DemoComponent} from './enzymedemo';

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
  });

  test('enzyme 受控组件 模拟用户行为 验证受控组件能力', () => {
    let value = '123';
    const onChange = (v) => (value = v);
    const wrapper = mount(<App value={value} onChange={onChange} />)
    expect(wrapper).toMatchSnapshot()
    wrapper.find('input').simulate('change', {
      target: { value: "456" }
    })
    expect(value).toBe('456');
    // wrapper.state('key')直接获取state的值
    // wrapper.setState()//
    // expect(fn).toHaveBeenCalled();
    // expect(fn).toHaveBeenLastCalledWith('值') //最后一次被调用的参数。
  });

  test('enzyme 快照，希望样式不被改变', () => {
    const wrapper = shallow(<DemoComponent />)
    expect(wrapper).toMatchSnapshot(); //通过构建快照，确认渲染结果相同。
  });

  test('enzyme 测试封装', () => {
    const wrapper = shallow(<DemoComponent />)
    expect(wrapper).toMatchSnapshot(); //通过构建快照，确认渲染结果相同。
  });

})
