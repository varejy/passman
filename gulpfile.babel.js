'use strict';
import gulp       from 'gulp';
import gutil      from 'gulp-util';
import wpkstream  from 'webpack-stream';
import wpkconfig  from './webpack/config';
import wpkloaders from './webpack/loaders';
import BS         from 'browser-sync-webpack-plugin';
import del        from 'del';
import karma      from 'karma';

const rootPath = __dirname;
const webpack  = {
    dev : Object.create(wpkconfig(rootPath)),
    test: Object.create(wpkconfig(rootPath))
};

webpack.dev
    .watch = true;
    
webpack.dev
    .output
    .filename = 'bundle.js';

webpack.dev
    .externals = { 
        'angular': 'angular',
        'lodash' : '_'
    };

webpack.dev
    .module
    .loaders = wpkloaders.dev(rootPath);

webpack.dev
    .plugins
    .push(
        new BS({
            host: 'localhost',
            port: 4000,
            open: false,
            server: {
                baseDir: ['./','./dist', './node_modules']      
            }
        })
    );


function bundle() {
    return gulp.src('./src/index.ts')
        .pipe(wpkstream(webpack.dev))
        .pipe(gulp.dest('dist'))
};

function clean() {
    return del(['./dist/**'])
}

function test(done) {
    new karma.Server({
    configFile: __dirname + '/karma.conf.js'
  }, () => done()).start();
}

gulp.task('default', gulp.series(clean, bundle));
gulp.task('test', test);



