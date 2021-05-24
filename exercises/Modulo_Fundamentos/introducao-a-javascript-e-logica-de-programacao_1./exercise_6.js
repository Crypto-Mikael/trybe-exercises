let peça = 'peão';

switch (peça.toLowerCase()) {
    case 'rei':
        console.log('Rei -> Anda uma casa em qualquer direção');
        break;
    case 'rainha':
        console.log('Rainha -> Anda na Diagonal, Horizontal e Vertical quantas casas quiser');
        break;
    case 'cavalo':
        console.log('Cavalo -> Anda em L e pode pular peças');
        break;
    case 'torre':
        console.log('Torre -> Horizontal e Vertical quantas casas quiser.');
        break;
    case 'peão':
        console.log('Peão -> Anda pra frente 1 só bloco de vez');
        break;
    default:
        console.log('Erro, peça não existente.');
        break;
    
}