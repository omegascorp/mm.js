(function(window) {
    var callbacks = {},
        modules = {};
    function require(name) {
        if (!modules[name] && callbacks[name]) {
            modules[name] = callbacks[name]();
        }
        if (modules[name]) {
            return modules[name];
        } else {
            throw new Error('Module ' + name + ' is not found');
        }
    }
    function define(name, callback) {
        callbacks[name] = callback;
    }
    window.mm = {
        define: define,
        require: require
    };
})(window);
