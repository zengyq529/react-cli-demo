//延迟三秒执行回调
function delay3(cb) {
  setTimeout(() => { cb(3) }, 3000)
}


describe('测试分组', () => {

  test('测试mocktimers', (done) => {
    delay3((num) => {
      expect(num).toBe(3);
      done()
    })
  })

  jest.useFakeTimers();//遇到 setTimeout 就用假的代替，避免测试时间过长
  test('测试mocktimers2', (done) => {
    const fn = jest.fn();
    delay3(fn);
    jest.runAllTimers() // 跟useFakeTimers配合使用，避免等待的功能
    jest.runOnlyPendingTimers()//只立即执行队列等待中的setTimeout。
    expect(fn).toHaveBeenCalledTimes(1); //1 n 个setTimeout 立刻执行。

  })

})
import Util from './util'

function doUtilClass() {
  const u = new Util();
  u.a();
  u.b();
}

jest.mock('./util'); //jest.mock发现util是一个类，会自动把类的构造函数和方法变成jest.fn()
// 如果需要自定义模拟才需要在__mock__里面去写真实的模拟方法。
describe('分组demo', () => {

  test('测试class被执行', () => {
    doUtilClass();
    expect(Util).toHaveBeenCalled();
    //被执行，但是执行的细节不管。被用在这种场景函数超级复杂，但是只要执行就好了。
    expect(Util.mock.instances[0].a).toHaveBeenCalled();
    expect(Util.mock.instances[0].b).toHaveBeenCalled();

  })

  //node环境，但是可以操作dom，jest在node环境下自己模拟了node的一套api。
  test('dom节点测试', () => {
    document.body.id = 'c1';
    expect(document.body.id).toBe('c1');
  })
})
