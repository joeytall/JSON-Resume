var gulp = require('gulp'),
    resume = require('gulp-resume'),
    rename = require('gulp-rename');

gulp.task('resume', function(){
  return gulp.src('resume.json')
    .pipe(resume({
      format: 'html',
      theme: 'elegant',
    }))
    .pipe(rename('resume.html'))
    .pipe(gulp.dest('.'));
});

gulp.task('watch', function(){
  gulp.watch('resume.json', ['resume']);
});

gulp.task('default', ['watch']);
