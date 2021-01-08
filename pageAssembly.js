const fs = require('fs');
const ejs = require('ejs');


//micro pages
let microPages = JSON.parse(fs.readFileSync('data/data.json', 'utf8'));
let micro_template = fs.readFileSync('views/micro.ejs', 'utf8');

for (let i = 0; i < microPages.length; i++) {
  let micro_html = ejs.render(micro_template, {//loop through each blog post
    filename: __dirname + '/views/micro.ejs',
    page: microPages[i],
    allPages: microPages
  });
  let name = "build/" + (microPages[i]['name'].replace(/ /g, "-")) + '.html';
  fs.writeFileSync(name, micro_html, 'utf8');
}//loop through each micro page


// macro
let macro_template = fs.readFileSync('views/macro.ejs', 'utf8');
let macro_html = ejs.render(macro_template, {
  filename: __dirname + '/views/about.ejs',
  allPages: microPages
});
fs.writeFileSync("build/index.html", macro_html, 'utf8');



// about
let about_template = fs.readFileSync('views/about.ejs', 'utf8');
let about_html = ejs.render(about_template, {
  filename: __dirname + '/views/about.ejs',
  allPages: microPages
});
fs.writeFileSync("build/about.html", about_html, 'utf8');
