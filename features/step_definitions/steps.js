const Person = require('../../src/shouty.js');
const { Given, When, Then } = require('@cucumber/cucumber');
const { is } = require('hamjest');

Given('Lucy is located {int} metres from Sean', function (distance) {
    this.lucy = new Person
    this.sean = new Person
    this.lucy.moveTo(distance)
  });

When('Sean shouts {string}', function (message) {
    this.sean.shout(message)
    this.message = message
  });

Then('Lucy hears Sean\'s message', function () {
if (this.lucy.messagesHeard() == "free bagels at Sean's") {
    is([this.message])
} else if (this.lucy.messagesHeard() == "free coffee") {
    is([this.message])
} else {
    is([this.message = "Test failed"])
}
    console.log("Scenario output:", this.message)
});
  