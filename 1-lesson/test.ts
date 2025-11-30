type TestRunnerParam = { page: any };
type TestRunner = (testRunnerParam: TestRunnerParam) => Promise<void> | void;

function test(name: string, testRunner: TestRunner) {
  console.log("Test", name, "has been started!");

  const testRunnerParam = { page: {} };

  testRunner(testRunnerParam);
}

// usage
async function testR1({ page }: TestRunnerParam) {
  // reffe
}

test("experiments;l tesd", testR1);

test("experiments;l tesd", async (p) => {
  //  const page = p.page;
  const { page } = p;
});

export { test };
