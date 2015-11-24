module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            client: {
                src: 'client/scripts/app.js',
                dest: 'server/public/assets/scripts/app.min.js'
            },
            client: {
                src: 'client/scripts/pinder.js',
                dest: 'server/public/assets/scripts/pinder.min.js'
            },
            controllers: {
                src: 'client/scripts/controllers/controller.js',
                dest: 'server/public/assets/scripts/controllers/controller.min.js'
            },
            controllers2: {
                src: 'client/scripts/controllers/ContactFormController.js',
                dest: 'server/public/assets/scripts/controllers/ContactFormController.min.js'
            },
            directives: {
                src: 'client/scripts/angular_directive/socialwidgets.js',
                dest: 'server/public/assets/scripts/angular_directive/socialwidgets.min.js'
            }
        },
        copy: {
            angular: {
                expand: true,
                cwd: 'node_modules',
                src: [
                    "angular/angular.min.js",
                    "angular/angular.min.js.map",
                    "angular-route/angular-route.min.js",
                    "angular-route/angular-route.min.js.map",
                    "angular-aria/angular-aria.min.js",
                    "angular-aria/angular-aria.min.js.map"
                ],
                "dest": "server/public/vendors/"
            },
            bootstrap: {
                expand: true,
                cwd: 'node_modules/bootstrap/dist/css',
                src: [
                    "bootstrap.min.css"
                ],
                "dest": "server/public/vendors/bootstrap"
            },
            html: {
                expand: true,
                cwd: "client",
                src: "views/index.html",
                dest: "server/public/assets/"
            },

            htmlRoutes:{
                expand: true,
                cwd: "client/views/routes/",
                src: [
                    //"code.html",
                    //"home.html",
                    //"projects.html"
                ],
                dest: "server/public/assets/views/routes/"
            },
            htmlTemplates: {
                expand: true,
                cwd: "client/views/templates",
                src : "*.html",
                dest: "server/public/assets/views/templates/"
            },

            style: {
                expand: true,
                cwd: "client",
                src: 'styles/style.css',
                dest: 'server/public/assets/'
            },
            pinder: {
                expand: true,
                cwd: "client",
                src: 'styles/pinder.css',
                dest: 'server/public/assets/'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['copy', 'uglify']);
};