const {src, dest, watch}    =    require('gulp')
const {init, reload}        =    require('browser-sync').create()
const autoprefixer          =    require('gulp-autoprefixer')
const sass                  =    require('gulp-sass')
const sourcemaps            =    require('gulp-sourcemaps')

 

function style() { 
    return src('./src/sass/*.sass')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(autoprefixer(['last 15 versions', '> 1%'], {cascade: true}))
    .pipe(sourcemaps.write('./'))
    .pipe(dest('./src/css'))
    .pipe(reload({stream: true}))
}

function serve() { 
    init({server: {baseDir: "./src/"}})
    watch('./src/sass/*.sass', style)
    watch('./src/*.html').on('change', reload)
}

exports.style = style
exports.default = serve
