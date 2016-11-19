'use strict';
import gulp          from 'gulp';
import gutil         from 'gulp-util';
import webpack       from 'webpack-stream';
import webpackConfig from './webpack.config';
import BS            from 'browser-sync-webpack-plugin';
import del           from 'del';

webpackConfig.watch = true;
webpackConfig
    .output
    .filename = 'bundle.js';
webpackConfig
    .externals = { 
        'angular': 'angular',
        'lodash' : '_'
    };
webpackConfig
    .plugins
    .push(
        new BS({
            host: 'localhost',
            port: 4000,
            open: false,
            server: {
                baseDir: ['./','./dist', './node_modules'],
                
        }
        })
    );

function bundle() {
    return gulp.src('./src/index.ts')
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('dist'))
};

function clean() {
    return del(['./dist/**'])
}

gulp.task('default', gulp.series(clean, bundle)
);



