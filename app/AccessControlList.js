/**
 * Created by Rob on 12/1/2014.
 */

var AccessControlList = {
    acl: require('acl'),
    connect: function (dbconnect) {
        AccessControlList.acl = new AccessControlList.acl(new AccessControlList.acl.mongodbBackend(dbconnect, 'Collections'));

        AccessControlList.acl.allow(

            [
                {
                    roles: ['doctor'],
                    allows: [
                        {
                            resources: ['/list','/letter'],
                            permissions: ['get','view']
                        }
                    ]
                },

                {
                    roles: ['patient'],
                    allows: [
                        {
                            resources: '/letter',
                            permissions: ['get','view']
                        }
                    ]
                }
            ]



        )
    }
};

module.exports = AccessControlList;
