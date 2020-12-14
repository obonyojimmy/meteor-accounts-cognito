// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by accounts-cognito.js.
import { name as packageName } from "meteor/obonyojimmy:accounts-cognito";

// Write your tests here!
// Here is an example.
Tinytest.add('accounts-cognito - example', function (test) {
  test.equal(packageName, "accounts-cognito");
});
