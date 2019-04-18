const gulp = require('gulp');
const fs = require('fs');

function copy(cb) {
  const folders = [
    "css",
    "js",
    "html"
  ];

  folders.forEach(ls => {
    if(!fs.existsSync(ls)) {
      fs.mkdirSync(ls);
      console.log(`${ls} folder was created.`);
    }
  })
  gulp.src('*.html')
  .pipe(gulp.dest('html'));

  gulp.src('*.js')
  .pipe(gulp.dest('js'));

  gulp.src('*.css')
  .pipe(gulp.dest('css'));

  cb();
}

exports.default = copy;

