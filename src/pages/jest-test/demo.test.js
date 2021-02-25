
import { Counter, runCbDemo, sum } from './demo'
import { fetchList, fetchListCallback, fetchList404 } from './fetchdemo';


// describe('分组 简单', () => {

//   test('简单变脸对比toBe', () => {
//     expect(sum(1, 2, 3)).toBe(6);
//   });
//   test('对象对比toEqual', () => {
//     expect({ a: 1 }).toEqual({ a: 1 }); //对象不能用boBe 引用地址不一样。
//   });
//   test('对象对比toBeNull', () => {
//     expect(null).toBeNull();
//   });
//   test('对象对比toBeUndefined', () => {
//     expect(undefined).toBeUndefined(); 
//   });
//   test('对象对比toBeDefined', () => {
//     const a = null;
//     expect(a).toBeDefined(); 
//   });
//   test('对象对比toBeTruthy/toBeFalsy', () => {
//     const a = 1 // true;
//     expect(a).toBeTruthy();
//     expect(!a).toBeFalsy();
//   });

//   test('大于小于toBeGreaterThan(OrEqual)/toBeLessThan(OrEqual)', () => {
//     expect(10).toBeGreaterThan(9);
//   });

//   test('小数加减toBeCloseTo', () => {
//     expect(0.1 + 0.2).toBeCloseTo(0.3); // 0.1+0.2 = 0.3xxxxxxxxx 用toBeEqual 不准确。
//   });

//   test('字符串校验格式toMatch/toContain', () => {
//     expect('abc').toMatch(/ab/);
//     expect(['a', 'b', 'c']).toContain('a');  // Array Set 都可以用
//   });


//   const throwNewError = () => {
//     throw new Error('this is a test error')
//   }

//   test('字符串校验格式toThrow', () => {
//     expect(throwNewError).toThrow(/this is a test error/);
//     // expect(throwNewError).not.toThrow();
//   });
// })


// describe('分组 异步', () => {

//   test('异步测试用例 async', () => { // return promise 就可以了。
//     return fetchList().then(data => {
//       expect(data.a).toBe(1)
//     })
//   })

//   test('异步测试用例2 async', () => { // return promise 就可以了。
//     return expect(fetchList()).resolves.toMatchObject({
//       "a": 1
//     })
//   })

//   test('异步测试用例3 async', async () => { // done :fun 调用了done函数才认为执行结束。
//     await expect(fetchList()).resolves.toHaveProperty('a');
//   })

//   test('异步测试用例4 async', () => { // return promise 就可以了。
//     return fetchList().then(data => {
//       expect(data.a).toBe(1)
//     })
//   })

//   test('异步测试用例callback', (done) => { // done :fun 调用了done函数才认为执行结束。
//     fetchListCallback(data => {
//       expect(data.a).toBe(1)
//       done(); //测试用例执行结束
//     })
//   })

//   test('异步测试用例404', () => { // done :fun 调用了done函数才认为执行结束。
//     expect.assertions(1); //必须要走 expect。
//     return fetchList404().catch((e) => {
//       expect(e.toString().indexOf('404') > -1).toBe(true)
//     })
//   })
// })


beforeAll(() => { //所有测试用例执行前 
  console.log('outer before all')
})
beforeEach(() => { //每个测试用例执行前
  console.log('outer before each')
})
afterAll(() => { //所有测试用例执行后
  console.log('outer after all')
})
afterEach(() => { //每个测试用例执行后
  console.log('outer after each')
})
/**
 * outer before all -> 
 * inner before all->
 * 
 * <!--此处根据test循环-->
 * outer before each->
 * inner before each->
 * inner after each ->
 * outer after each ->
 * 
 * inner after all->
 * outer after all
 * 
 * .only 只执行这一个
 *  
 */
/*
describe('分组 class', () => {

  //tip 这里不要放代码，因为他立刻执行。

  let c = null;

  beforeAll(() => { //所有测试用例执行前 
    console.log('inner before all')
    c = new Counter()
  })
  beforeEach(() => { //每个测试用例执行前
    console.log('inner before each')
  })
  afterAll(() => { //所有测试用例执行后
    console.log('inner after all')
  })
  afterEach(() => { //每个测试用例执行后
    console.log('inner after each')
  })

  test('class 测试 add', () => {
    c.add();
    expect(c.count).toBe(2)
  })
  test('class 测试 minus', () => {
    c.minus();
    expect(c.count).toBe(1)
  })
})
*/

describe.only('分组 mock有关', () => {

  test('测试 callback执行', () => {
    const cb = jest.fn(x=>x+' fn add');
    runCbDemo(cb);
    runCbDemo(cb);

    expect(cb.mock.calls.length).toBe(2)
    console.log(cb.mock); // calls [回调参数列表] 
  })

})



