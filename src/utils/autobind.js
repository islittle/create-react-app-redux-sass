const { defineProperty } = Object

export default () => (target, key, { value: fn, configurable, enumerable }) => {
    if (typeof fn !== 'function') {
        throw new SyntaxError(`@autobind can only be used on functions, not: ${fn}`)
    }

    const { constructor } = target

    return {
        configurable,
        enumerable,

        get() {
            if (this === target) {
                return fn
            }

            if (this.constructor !== constructor && Object.getPrototypeOf(this).constructor === constructor) {
                return fn
            }

            const boundFn = fn.bind(this)

            defineProperty(this, key, {
                configurable: true,
                writable: true,
                // 绑定后不可枚举
                enumerable: false,
                value: boundFn,
            })

            return boundFn
        },
    }
}
