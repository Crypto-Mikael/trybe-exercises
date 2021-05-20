let angulo_1 = 60;
let angulo_2 = 60;
let angulo_3 = 60;

somadosangulos = angulo_1 + angulo_2 + angulo_3

positvo = angulo_1 > 0 && angulo_2 > 0 && angulo_3 > 0

if (positvo) {
    if (somadosangulos <= 180) {
        console.log('True')
    } else {
        console.log('False')
    }
} else {
    console.log('Invalido')
} 
// Tive que consultar o Gabarito mas o meu codigo não está 100% copiado.
//https://app.betrybe.com/course/fundamentals/javascript/js-features/js-part-1-solutions#exercicio-4