/**
 * Created by Rob on 12/1/2014.
 */

var AccessControlList = {
    acl: require('acl'),
    connect: function (dbconnect) {
        AccessControlList.acl = new AccessControlList.acl(new AccessControlList.acl.mongodbBackend(dbconnect, 'Collections'));
    }
};

module.exports = AccessControlList;
