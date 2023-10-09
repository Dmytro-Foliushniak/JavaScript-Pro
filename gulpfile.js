const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();

// Копіює файл index.html з папки src в папку dist
gulp.task('copy-html', function () {
    return gulp.src('src/index.html')
        .pipe(gulp.dest('dist'));
});

// Завдання для компіляції SASS
gulp.task('styles', function () {
    return gulp.src('src/style/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('styles.min.css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist/css'));
});

// Завдання для мінімізації та конкатенації JS файлів
gulp.task('scripts', function () {
    return gulp.src('src/js/*.js')
        .pipe(concat('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

// Завдання за замовчуванням
gulp.task('default', gulp.series('copy-html', 'styles', 'scripts'));

// Спостерігач за змінами у файлах SASS і JS
gulp.task('watch', function () {
    gulp.watch('src/scss/**/*.scss', gulp.series('styles'));
    gulp.watch('src/js/*.js', gulp.series('scripts'));
    gulp.watch('src/index.html', gulp.series('copy-html'));
});

// Задача для запуску сервера BrowserSync
gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: './dist' // Вкажіть каталог, з якого ви хочете запустити сервер
        },
        port: 3000, // Вкажіть порт для сервера
        open: true // Відкривати браузер автоматично
    });
    // Слідкування за змінами у файлах та перезавантаження браузера
    gulp.watch('./dist/*.html').on('change', browserSync.reload);
    gulp.watch('./dist/css/*.css').on('change', browserSync.reload);
    gulp.watch('./dist/js/*.js').on('change', browserSync.reload);
});

// Запуск сервера BrowserSync разом із іншими завданнями
gulp.task('default', gulp.series('serve'));

