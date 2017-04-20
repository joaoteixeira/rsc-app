module.exports = {

    /**
     * Get the error from a response.
     *
     * @param {Response} response The Vue-resource Response that we will try to get errors from.
     */
    getError: function (response) {
        return response.body['error_description']
            ? response.body.error_description
            : response.statusText
    },

    pad: function (n, width, z) {
        z = z || '0';
        n = n + '';
        return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
    }
}