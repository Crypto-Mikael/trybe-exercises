let names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function bigestName () {
  let letters = names[0].length
  for (let index = 0; index < names.length; index += 1) {

    if (names[index].length > letters) {
        letters = names[index].length
        name = names[index]
        };
    };
    return name
}
console.log(bigestName())
