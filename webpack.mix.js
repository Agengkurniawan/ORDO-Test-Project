const mix = require("laravel-mix");

mix.sass("resources/sass/app.scss", "public/css"),
    mix.sass("resources/sass/navbar.scss", "public/css"),
    mix.sass("resources/sass/about.scss", "public/css"),
    mix.sass("resources/sass/event.scss", "public/css"),
    mix.sass("resources/sass/sponsorship.scss", "public/css"),
    mix.sass("resources/sass/footbar.scss", "public/css");
