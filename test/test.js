var assert = require("assert");
var is_tasix_member = require("../lib");


describe("ip range check", function () {

  describe("for tasix range", function () {

    it("should succeed when the ip is in tasix range", function () {
      assert.equal(true, is_tasix_member("217.30.160.123"));
    });

    it("should fail when the ip is not in tasix range", function () {
      assert.equal(false, is_tasix_member("102.1.5.0"));
    });

    it("should fail when the ip is not in tasix range", function () {
      assert.equal(false, is_tasix_member("8.8.8.8"));
    });

    it("should fail when the ip is not in tasix range", function () {
      assert.equal(false, is_tasix_member("8.8.4.4"));
    });

  });

});
