# restaurant-page

Restaurant Page project from The Odin Project (Javascript path)

Things I learnt from this project:

- Wow, the whole webpack thing was quite overwhelming at first. I still don't fully understand it, but I have a _bit_ of an idea about how it works.

  - Webpack is a "module bundler". From my understanding, it helps us bundle things from external libraries/internal files so that it can be used in our Javascript.
  - Having come from a python background, importing an external module or a function/class from a separate local python file was as simple as typing `import <module>`. We can do this because it has access to our file system (like node). However, it's not as easy in vanilla Javascript since javascript is only meant to be run in the browser - allowing it access to the local file system may pose security concerns.
  - As a result, importing modules can be really weird in JS, instead of typing something like `require('moment')` (which is what you type in node), you have to do something like `require('./node_modules/moment/min/moment.min.js)`.
  - From my understanding, webpack simplifies this, and allows us to simply _import_ modules, like `import _ from <module>`. We can import external libraries, as well as functions from local JS files (really useful - lets us split up our code into different files to organize everything better, + a layer of encapsulation).
  - There are 3 main 'components' of a webpack project - the `src` folder, `dist` folder and `webpack.config.js` file. The `src` folder contains all the JS/CSS files that we write, as well as all the assets (images, audio, etc) that we use. Upon running webpack, webpack compiles our human-readable code into a messy `main.js` file in the `dist` folder (not necessarily `main.js` - how it compiles/the output can be changed in `webpack.config.js`. I guess a more accurate statement is that webpack compiles our code according to the settings in the config file). The `main.js` file (which still has the exact same function as our JS files - it's just very unreadable for humans, but does the same thing) is then loaded, as a single script file, by our `index.html` file. The files in the `dist` folder are the actual files that we are loading on our webpage.

- ES6 Modules : Beautiful. It allows us to split our code into different files, which helps a ton with organizing our code.

- Dynamically generating HTML - One of the project requirements was that we had to generate the _entire_ HTML for the webpage dynamically. (We were only allowed to hard-code **one** div!) It was admittedly quite tedious. For example, to create a simple `<div class="a" id="b">Content<div>` element, we had to first create an empty `div` element, add `a` to its classList, then set its id to `b`, then set its textContent to `Content`, and finally append it to the document. Of course, dynamically generating HTML can be helpful when we have a ton of repeated tasks (e.g. generating 1000+ squares in the etch-a-sketch project), but it feels very cumbersome to write static, unique HTML content with just javascript. It was required in this project as we were changing the DOM with javascript, but I wonder if there's a way to, say have a bunch of different HTML template files (e.g. only containing a different body), and using javascript to "merge" it into the `body` section of our main HTML file.
