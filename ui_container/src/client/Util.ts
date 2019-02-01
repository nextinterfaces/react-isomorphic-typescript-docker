export class Util {

    static isNode() {
        return (typeof window === 'undefined')
    }

    static scrollTop(): void {
        if (Util.isNode()) return
        document.body.scrollTop = document.documentElement.scrollTop = 0
    }

    static hideNavBox(): void {
        if (Util.isNode()) return

        $('.navbar-toggler').click()
    }

    static stringToCode(str) {
        if (!str) {
            return null
        }
        return str.split(' ').join('_')
    }

    static codeToString(str) {
        if (!str) {
            return null
        }
        return str.split('_').join(' ')
    }

}
