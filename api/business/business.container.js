'use strict';

var PostManager = require('./post.manager');

function getContext(request) {
    return { user: request && request.user };
}

function getter(manager, request) {
    return function () {
        return manager.create(getContext(request), this);
    };
}

const createBusinessContainer = (request, config) => {
    return {
        getPostManager: getter(PostManager, request)
    };
};
module.exports = createBusinessContainer;

// export default createBusinessContainer;