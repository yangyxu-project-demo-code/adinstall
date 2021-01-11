var _exports = {},
    _export = null;

var _temps = {
    common: require('./common/index.js'),
    my: require('./my/index.js')
};

for(var name in _temps){
    _export = _temps[name];
    for(var key in _export){
        _exports[(name + '.' + key).toLowerCase()] = _export[key];
    }
}

module.exports = _exports;
