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
                templateUrl: '/views/home.html',
                controller: 'HomeController'

            },
            list: {
                state: 'list',
                urlRequested: '/list',
                templateUrl: '/views/list.html',
                controller: 'List   Controller'


            },
            one: {
                state: 'list2',
                urlRequested: '/one',
                templateUrl: '/views/home.html'

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

    permissions: [
        {
            roles: ['doctor'],
            allows: [
                {resources: 'blogs', permissions: 'get'},
                {resources: ['forums', 'news'], permissions: ['get', 'put', 'delete']}
            ]
        },
        {
            roles: ['patient'],
            allows: [
                {resources: 'blogs', permissions: 'get'},
                {resources: ['forums', 'news'], permissions: ['get', 'put', 'delete']}
            ]
        }
    ]

}

module.exports = BaseAppSettings;
