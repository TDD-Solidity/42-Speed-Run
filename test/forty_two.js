const FortyTwo = artifacts.require("FortyTwo");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("FortyTwo", function (/* accounts */) {
  
  it("should assert true", async function () {
    await FortyTwo.deployed();
    return assert.isTrue(true);
  });
  
  it('should return 42', async () => {
    
    const fortyTwo = await FortyTwo.deployed();

    const result = await fortyTwo.get42();

    expect(result.toNumber()).to.equal(42);

  })
});
