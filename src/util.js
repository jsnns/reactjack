function bindTo(f = () => {}, a = [], o = () => {}) {
    return function (ff, oo) {
        oo();
        ff(...a);
    }.bind(this, f.bind(this), o.bind(this));
}

const exists = val => !!val;

export {
    bindTo,
    exists
}