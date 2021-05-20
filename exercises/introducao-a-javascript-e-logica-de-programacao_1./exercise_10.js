let produto_custo = 200 ;
let produto_venda = 300 ;

zero = produto_custo > 0 && produto_venda > 0;
imposto = 0,2 * produto_custo

if (zero) {
    
valorCustoTotal =  imposto + produto_custo;
lucro = produto_venda - valorCustoTotal;

console.log (`O lucro é de ${lucro}`)
} 
else {
    console.log('ERRO! NUMERO INVALIDO')
}
