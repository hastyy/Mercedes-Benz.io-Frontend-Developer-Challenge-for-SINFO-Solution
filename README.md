THIS IS A CONFIDENTIAL EXERCISE, WHICH IS PART OF A RECRUITING PROCESS AND AS SUCH, IT SHOULD NOT BE SHARED, DISTRIBUTED OR EXPOSED ANYWHERE. DOING SO, WILL AUTOMATICALLY DISQUALIFY YOU FROM THE PROCESS.


**Please read *carefully* through *all* of the following instructions before you begin with the implementation.**


Also, please keep in mind that your handed in code will form the basis of any eventual next steps in an formal recruiting process. It is therefore only in your own best interest to be able to explain every code decision you took.


## Setup your system

### node.js v6.x

To serve the challenge's index.html page and for additional tasks you may need (section [Requirements](#requirements), steps 6. and 7.), we recommend you use [node.js](https://nodejs.org) v6.x. In case you want to manage several node versions on your machine, we recommend [nvm](https://github.com/creationix/nvm) for Mac/*nix and [nodist](https://github.com/marcelklehr/nodist) for Windows.


### Install NPM packages and run dev

Once you have node.js installed, open up your OS's Terminal/Bash application, change into the root folder of the challenge (where the file `package.json` is located) and run `npm install`.

After all NPM packages installed successfully, you should run `npm run dev`). It will open a browser tab with src/index.html running in http://localhost:8080/.


## The challenge

* To build a working html page (with a `shop-slider` component) looking like the `design/shop_w_slider.png` layout.
* Displaying and working correctly in latest Chrome and Firefox.
* Expressive and accessible HTML markup.
* Consistent and organized CSS.
* Readable, performant and organized JavaScript, following best practices.


### Coding guidelines

1. HTML markup
    Make sure the document contains semantically correct HTML5 markup [[help]](http://html5doctor.com/lets-talk-about-semantics/).

2. Accessibility
    - Fully functional with keyboard.
    - Tab navigation follows a logical flow.
    - Use buttons where buttons are needed.
    - Correct usage of ARIA labels and landmark roles.

3. CSS (you can also use SASS - OPTIONAL)
    - You can use one or several CSS OR SCSS files, separated by context, modules, etc.
    - You are not allowed to use any CSS or SASS frameworks (e.g. Bootstrap), but you may include a small third-party CSS reset / normalize.
    - Your CSS should be markup independent. E.g. no class names as `.h1` or `.table`.
    - Make sure your selectors have a low specificity [[help]](https://css-tricks.com/strategies-keeping-css-specificity-low/)
    - avoid long CSS selectors. E.g. use `.hilite-heading--small` instead of `body .main section.top .hilites h3.small`

4. JavaScript
    - Use 'vanilla' JavaScript.
    - Third-party libraries and frameworks are not allowed (e.g. jQuery, React, Vue.js, etc).
    - (OPTIONAL) As an exception, you may use Lory - http://meandmax.github.io/lory/ - for the slider.
    - Avoid generating completely new HTML structures from within JavaScript.
    - Use comments when necessary.


### Requirements

Please develop the following features sequentially, as you shouldn't start an item of this list if any of the previous aren't finished.

Please note it's ok if you don't finish all the steps. Do as much as you can and try to get to step 3, at least.

If you want to impress us, try to get to the Bonus steps, but don't forget the first 4 steps are the most important ones. If any of those aren't ok the Bonus steps will not be taken into account.

1. The page should have 3 visible products as shown in the `design/shop_w_slider.png`.
    - Initially no items should be added to the virtual `Shopping Cart`; in other words, all `quantity` fields and the `Total` value should be 0 (zero).
    - You can use the images in `src` for each `product` or use other that you like.
    - You should style the elements using the measurements that are in `design/shop_w_slider--measurements.png`.

2. The user can add products to the virtual `Shopping Cart` and remove them too.
    - The `Total` value should be updated with the correct price sum every time a product is added or removed (`-` and `+` buttons), or when the user edits the `quantity` field directly.
    - The `quantity` field - and the `Total` value - should never be less than 0 (zero).

3. The page should have 8 products with a slider functionality.
    - Only 3 products are visible, but two arrow buttons should exist to move/slide the `product` list left or right.
    - Each moving/sliding interaction should move the `product` list by 3 products/positions (so if showing product 1, 2 and 3 and then click on the `next` arrow it will show product 4, 5 and 6 after the animation stops).
    - You can start by simply changing the `product` list `x` position, but then we would like to see some animation (the `product` list moving/sliding). You may use Lory - http://meandmax.github.io/lory/ - for this. Bonus points if you can do it using only your own JavaScript.

4. The slider should be user-friendly.
    - When showing the first slider items the `previous` arrow should be disabled.
    - When showing the last slider items the `next` arrow should be disabled.
    - The slider shouldn't have any empty product `slot`, so when moving from product 4, 5 and 6 to the `next` ones it should show 6, 7 and 8. 

5. Bonus #1 - *We will only take that into consideration when all of the above points work as expected.*
    - The page should be responsive in a way that on small devices (mobile) or narrow browser windows it shows less products.
    - The look and breakpoints should be: 1 product visible when < 480px width; 2 products visible when < 768px width; and 3 products when >= 768px.

6. Bonus #2 - *We will only take that into consideration when all of the above points work as expected.*
    - If you've come this far.. Congratulations!! And if you still have time try the following:
    - Add new tasks to minify the HTML, CSS and JavaScript files and put the result in a `dist` folder at the root level. Those tasks should also move all other necessary files (images, etc) for the page to behave and look good when served from that `dist` folder.
    - You can use Webpack, Gulp, Grunt or any other tools/`NPM packages` that may help you with this task.

7. Bonus #3 - *We will only take that into consideration when all of the above points work as expected.*
    - Add new tasks to watch for HTML, CSS and JavaScript changes and reload the browser's tab http://localhost:8080/.
    - You can use Webpack, Gulp, Grunt or any other tools/`NPM packages` that may help you with this task.


## Can I use additional NPM packages?

Yes, as long as the points from the above section [Coding guidelines](#coding-guidelines) are not violated.


## Where should I place my files?

We've got an initial folder and file structure in `src` prepared for you:

* `index.html` - HTML file with prepared markup and included assets.
* `main.js` - this should be your main JS file which initializes other JS modules
* `components` - place JavaScript components here (modules, utils, configs, etc)
* `images` - place any additional images in here
* `vendor` - if using Lory (for the slider) place its JavaScript and/or CSS/SCSS files in here


## IDE configuration

(OPTIONAL) To help you with code formatting style, you can configure your IDE to use the [`.editorconfig`](http://editorconfig.org/#download) file you find in the project's root folder. 


## Troubleshooting

If you experience problems during the challenge send a message to the Mercedes-Benz.io person you are in contact with, describing the problem, your steps and sending screenshots or pasting the error log of your Terminal/Bash application.


## What are you expected to hand in?

When finished, prepare a zip archive with your solution which you send back as an email to the person you are in contact with. *PLEASE DO NOT INCLUDE THE `node_modules` folder*.

Good luck :-)
