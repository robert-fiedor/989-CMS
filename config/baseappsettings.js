/**
 * Created by Rob on 11/25/2014.
 */
//

var BaseAppSettings = {

    routes: {

        client: {

            home: {
                state: 'home',
                urlRequested: '/home',
                templateUrl: '/partials/home.html',
                controller: 'HomeController'

            },
            list: {
                state: 'list',
                urlRequested: '/list',
                templateUrl: '/partials/list.html',
                controller: 'ListController'
            },

            playground: {
                state: 'playground',
                urlRequested: '/playground',
                templateUrl: '/partials/playground.html',
                controller: 'PlaygroundController'
            },
            photoshop: {
                state: 'photoshop',
                urlRequested: '/photoshop',
                templateUrl: '/partials/photoshop.html',
                controller: 'PhotoshopController'
            }

        },

        server: {

            get: {

                home: {
                    urlRequested: '/home',
                    pathToFile: 'index.html'
                },

                user: {
                    urlRequested: '/user',
                    pathToFile: 'user.html',

                    profile: {
                        urlRequested: '/user/profile'
                    }
                },

                login: {
                    urlRequested: '/login',
                    pathToFile: 'login.html'
                },

                logOut: {
                    urlRequested: '/logout'
                },
                signUp: {
                    urlRequested: '/signup',
                    pathToFile: 'signup.html'
                }

            }
        }


    },

    permissions: {}
}
module.exports = BaseAppSettings;
