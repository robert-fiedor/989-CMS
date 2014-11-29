/**
 * Created by Rob on 11/25/2014.
 */
//

var BaseAppSettings = {

    routes: {

        client: {

            home: {
                state: 'home',
                url: '/home'
            },
            list: {
                state: 'list',
                url: '/list'
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
                    pathToFile: 'user.html'
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
