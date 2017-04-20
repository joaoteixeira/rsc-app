const { mix } = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.webpackConfig({
//     resolve: {
//         // modules: [
//         //     path.resolve(__dirname, 'vendor/laravel/spark/resources/assets/js')
//         // ]
//         // alias: {
//         //     '@': resolve('src'),
//         //     'utils': resolve('src/utils')
//         // }
//     }
// });

mix.js('resources/assets/js/main.js', 'public/js')
    .sass('resources/assets/sass/app.scss', 'public/css');
    //.extract(['vue']);
