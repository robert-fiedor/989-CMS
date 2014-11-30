/**
 * Created by Rob on 11/25/2014.
 */
//

var BaseAppSettings = {

    routes: {

        client: {

            home: {
                state: 'home',
                urlRequested: '/home'
            },
            list: {
                state: 'list',
                urlRequested: '/list'
            },
            one: {
                state: 'list2',
                urlRequested: '/one'
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
