'use strict';

var postEndpoint = require('./post.endpoint');

const routes = (router, config) => {
    postEndpoint (router);
};

module.exports = routes;
// export default routes;