function getId(a) {
    return function (b) {
        return function (c) {
            console.log(a, b, c);

        }
    };
}
getId(1)(2)(3)