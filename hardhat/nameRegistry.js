const { expect } = require("chai");

describe("NameRegistry", function () {
  let NameRegistry, nameRegistry, owner, addr1, addr2;

  beforeEach(async function () {
    NameRegistry = await ethers.getContractFactory("NameRegistry");
    [owner, addr1, addr2] = await ethers.getSigners();
    nameRegistry = await NameRegistry.deploy();
  });

  it("Should register a name", async function () {
    await nameRegistry
      .connect(owner)
      .registerName("Alice", "QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco");
    expect(await nameRegistry.getName(owner.address)).to.equal("Alice");
    expect(await nameRegistry.getIpfsImageHash(owner.address)).to.equal(
      "QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco",
    );
  });

  it("Should deregister a name", async function () {
    await nameRegistry
      .connect(owner)
      .registerName("Bob", "QmYwAPJzv5CZsnA625s3Xf2nemtYgPpHdWEz79ojWnPbdG");
    await nameRegistry.connect(owner).deregisterName();
    expect(await nameRegistry.getName(owner.address)).to.equal("not found");
  });

  it("Should transfer a name", async function () {
    await nameRegistry
      .connect(owner)
      .registerName(
        "Charlie",
        "QmaCpDMGvV2BGHeYERUEnRQAwe3N8SzbUtfsmvsqQLuvuJ",
      );
    await nameRegistry.connect(owner).transferName(addr1.address);
    expect(await nameRegistry.getName(addr1.address)).to.equal("Charlie");
  });

  it("Should return correct name and IPFS hash", async function () {
    await nameRegistry
      .connect(owner)
      .registerName("Dave", "QmZkHSJ8KdNQanDvZc5YmRCpqPHXyfUxSs9zyuqCzmP8i7");
    const [name, ipfsHash] = await nameRegistry.getNameAndIpfsHash(
      owner.address,
    );
    expect(name).to.equal("Dave");
    expect(ipfsHash).to.equal("QmZkHSJ8KdNQanDvZc5YmRCpqPHXyfUxSs9zyuqCzmP8i7");
  });
});

