//延迟三秒执行回调
function delay3(cb){
    setTimeout(()=>{cb(3)},3000)
}


describe('测试分组', () => {
    
    test('测试mocktimers', (done) => {
        delay3((num)=>{
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
