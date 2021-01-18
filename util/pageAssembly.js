const fs = require('fs');
const ejs = require('ejs');



/**
 * Parses the data.json file.
 * @author Akash and Tanzim
 */
let microPages = JSON.parse(fs.readFileSync('data/clean/data.json', 'utf8'));
/**
 * Reads the template formed through ejs of the micro page and assigns it to an empty variable.
 * @author Akash and Tanzim
 */
let micro_template = fs.readFileSync('src/views/micro.ejs', 'utf8');
for (let i = 0; i < microPages.length; i++) {
  /**
   * Fills the micropage template using data from data.json.
   * @author Akash and Tanzim
   */
  let micro_html = ejs.render(micro_template, {//loop through each blog post
    filename: __dirname + '/../src/views/micro.ejs',
    page: microPages[i],
    allPages: microPages,
    index: i
  });
  /**
   *Assigns a name to the micopage files by race.
   * @author Akash and Tanzim
   */
  let microname = "build/" + (microPages[i]['name'].replace(/ /g, "-")) + '.html';
  fs.writeFileSync(microname, micro_html, 'utf8');
}//loop through each micro page


// macro
/**
 * Reads the template formed through ejs of the macro page and assigns it to an empty variable.
 * @author Akash and Tanzim
 */
let macro_template = fs.readFileSync('src/views/macro.ejs', 'utf8');
/**
 * Fills the macropage template using data from data.json.
 * @author Akash and Tanzim
 */
let macro_html = ejs.render(macro_template, {
  filename: __dirname + '/../src/views/about.ejs',
  allPages: microPages
});
fs.writeFileSync("build/index.html", macro_html, 'utf8');



// about
// macro
/**
 * Reads the template formed through ejs of the about page and assigns it to an empty variable.
 * @author Akash and Tanzim
 */
let about_template = fs.readFileSync('src/views/about.ejs', 'utf8');
/**
 * Fills the about page template using data from data.json.
 * @author Akash and Tanzim
 */
let about_html = ejs.render(about_template, {
  filename: __dirname + '/../src/views/about.ejs',
  allPages: microPages
});
fs.writeFileSync("build/about.html", about_html, 'utf8');
