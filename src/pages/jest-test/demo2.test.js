// 用来生成配置文件
function generateConfig() {
  return {
    port: 8080,
    server: "localhost",
  };
}

// 变化快照
function generateConfig2() {
  return {
    port: 8080,
    server: "localhost",
    latest: new Date(), //用变量的情况
  };
}

describe("分组2", () => {
  // 用来测试配置文件特别适合，因为配置文件不变测试用例就一直会通过
  test("快照1", () => {
    expect(generateConfig()).toMatchSnapshot();
    //结果和快照相等。 第一次运行的时候没有快照，会自动生成快照。 _snapshots_
    //第二次执行的时候会用新的快照和之前的对比 。一样可以通过，不一样就无法通过。
    //如果需要修改配置文件则回到 w.选择 u 模式 更新快照。
    //如果有2个快照报了错误 可以 返回w选择 i 模式 。 i模式交互形式的一个一个的u快照。
  });

  test("快照2", () => {
    expect(generateConfig2()).toMatchSnapshot({
      latest: expect.any(Date),
    });
  });
});

describe("分组3", () => {
  // 用来测试配置文件特别适合，因为配置文件不变测试用例就一直会通过
  test("快照3", () => {
    // npm i prettier --save 再执行这个。
    expect(generateConfig()).toMatchInlineSnapshot(`
      Object {
        "port": 8080,
        "server": "localhost",
      }
    `);  // `inline 快照`
  });
});
