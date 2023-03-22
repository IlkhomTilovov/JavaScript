let name = "Webbrain"
function getName() {
    let b = "wba"
    console.log(name);
    return function () {
        console.log(name, b);

    }
}
getName()