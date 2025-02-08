import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";

export default defineConfig({
    plugins: [
        laravel({
            input: [
                "resources/css/app.css",
                "resources/sass/app.scss",
                "resources/sass/navbar.scss",
                "resources/sass/about.scss",
                "resources/sass/event.scss",
                "resources/sass/sponsorship.scss",
                "resources/sass/footbar.scss",
                "resources/js/app.js",
            ],
            refresh: true,
        }),
    ],
});
