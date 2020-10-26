const sveltePreprocess = require('svelte-preprocess');

module.exports = {
    preprocess: sveltePreprocess({
      coffescript: true,
      stylus: true,
      pug: true,
      defaults: {
        markup: 'pug',
      },
      postcss: {
        plugins: [require('autoprefixer')()]
      } 
    }),
};