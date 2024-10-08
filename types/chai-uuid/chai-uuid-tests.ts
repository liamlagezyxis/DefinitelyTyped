import chaiUuid = require("chai-uuid");

declare const assert: Chai.AssertStatic;
declare const expect: Chai.ExpectStatic;

import("chai").then(({ use }) => use(chaiUuid));

// bdd style
expect("67cb8aa1-61bb-4b9b-8ca9-9dc0b278d5f7").to.be.uuid("v4");
expect("67cb8aa1-61bb-4b9b-8ca9-9dc0b278d5f7").to.be.guid;
expect("invalid").to.not.be.uuid("v4");
expect("invalid").to.not.be.guid();

// tdd style
assert.uuid("67cb8aa1-61bb-4b9b-8ca9-9dc0b278d5f7", "v4");
assert.guid("67cb8aa1-61bb-4b9b-8ca9-9dc0b278d5f7");
