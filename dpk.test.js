const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Doesn't return '0' when given a string input", () => {
    const trivialKey = deterministicPartitionKey("leon");
    expect(trivialKey).not.toBe("0");
  })

  it("Doesn't return '0' when given a number input", () => {
    const trivialKey = deterministicPartitionKey(1231);
    expect(trivialKey).not.toBe("0");
  })

  it("Expect to return a string when event doesn't have Partition Key", () => {
    const trivialKey = deterministicPartitionKey("leon");
    expect(typeof trivialKey).toBe("string");
  })

  it("expect to return a string when event has Partition Key", () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: "leon" });
    expect(typeof trivialKey).toBe("string");
  })

  it('expect returned string to have length greater than 0', () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: "leon" });
    expect(trivialKey.length).toBeGreaterThan(0);
  })
});
