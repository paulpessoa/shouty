# Shouty

Before we get started make sure you have a modern version of NodeJs, and NPM installed:

$ node -v
$ npm -v
If you see an error message when you run these commands, you’ll need to fix your Node installation.

Go back to the command prompt and create a new directory for our project:

$ mkdir shouty
Go use cd to go into that directory.

$ cd shouty
First we’ll create a package.json that describes the NPM packages we need for our project and add the @cucumber/cucumber package to it.

$ npm init -y
$ npm install -D @cucumber/cucumber
We can now run the cucumber-js command to see if everything works:

$ ./node_modules/.bin/cucumber-js
There’s no output, because we haven’t written any scenarios yet, but there are no errors either! Having to remember the full path to Cucumber is not very user friendly, but luckily there’s a nicer way.

Edit package.json and change the test line under the scripts from it’s default to cucumber-js

  "scripts": {
    "test": "cucumber-js"
  },
Now we’re ready! If we run npm test at this point, we’ll again see cucumber pass with no errors:

$ npm test

> shouty-js@1.0.0 test /home/fedex/cucumber/shouty-js
> cucumber-js

>
Finally, we’re going to install hamjest in order to have more expressive assertions

$ npm install -D hamjest
Good, we’ve installed Cucumber. Now we need to write our specification.