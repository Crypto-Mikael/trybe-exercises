USE PecasFornecedores;

-- 1. Escreva uma query para exibir todas as peças que começam com GR .

SELECT * FROM Pecas
WHERE name LIKE 'gr%';

-- 2. Escreva uma query para exibir todos os fornecimentos que contenham a peça com code 2. 
-- Organize o resultado por ordem alfabética de fornecedor.

SELECT * FROM Fornecimentos
WHERE peca LIKE '2'
ORDER BY Fornecedor;

-- 3. Escreva uma query para exibir as peças, preço e fornecedor de todos os fornecimentos
-- em que o código do fornecedor tenha a letra N .

SELECT peca, Fornecedor, Preco FROM Fornecimentos
WHERE Fornecedor LIKE '%n%';

-- 4. Escreva uma query para exibir todas as informações dos fornecedores que são empresas limitadas (LTDA).
-- Ordene os resultados em ordem alfabética decrescente.

SELECT * FROM Fornecedores
WHERE name LIKE '%LTDA';

-- 5. Escreva uma query para exibir o número de empresas (fornecedores) que contém a letra F no código.

SELECT * FROM Fornecedores
WHERE code LIKE '%F%';

-- 6. Escreva uma query para exibir os fornecimentos onde as peças custam mais de R$15,00 e menos de $40,00.
-- Ordene os resultados por ordem crescente.

SELECT * FROM Fornecimentos
WHERE Preco BETWEEN 15 AND 40;

-- 7. Escreva uma query para exibir o número de vendas feitas entre o dia 15/04/2018 e o dia 30/07/2019.

SELECT * FROM Vendas
WHERE order_date BETWEEN '2018-04-15' AND '2019-07-30';