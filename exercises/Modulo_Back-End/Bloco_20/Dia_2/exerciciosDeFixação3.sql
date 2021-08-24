USE sakila;

-- 1. Mostre o nome, sobrenome e e-mail dos clientes com os seguintes sobrenomes:
-- hicks, crawford, henry, boyd, mason, morales e kennedy , ordenados por nome em ordem alfabética.

SELECT * FROM customer
WHERE last_name in('HICKS', 'CRAWFORD', 'HENRY', 'BOYD', 'MASON', 'MORALES', 'KENNEDY') 
ORDER BY last_name;

-- 2. Mostre o e-mail dos clientes com os address_id 172, 173, 174, 175 e 176 ,
-- ordenados em ordem alfabética.

SELECT email FROM customer
WHERE address_id in(172, 173, 174, 175, 176)
ORDER BY email;

-- 3. Descubra quantos pagamentos foram feitos entre 01/05/2005 e 01/08/2005.
-- Lembre-se de que, no banco de dados, as datas estão armazenadas no formato ano/mês/dia,
-- diferente do formato brasileiro, que é dia/mês/ano.

SELECT * FROM payment
WHERE payment_date BETWEEN('2005-05-01%') AND ('2005-09-01%');

-- 4. Mostre o título, ano de lançamento e duração do empréstimo de todos os filmes com a duração de empréstimo de 3 a 6.
-- Os resultados devem ser classificados em filmes com maior duração de empréstimo primeiro.
-- Em caso de empate, ordene em ordem alfabética pelo título.

SELECT title, release_year, rental_duration, length FROM film
WHERE rental_duration BETWEEN (3) AND (6)
ORDER BY length, title;

-- 5. Monte um relatório que exiba o título e classificação dos 500 primeiros filmes direcionados para as classificações indicativas G,
-- PG e PG-13 . Os resultados devem estar ordenados por título.

SELECT title, rating FROM film
WHERE rating in ('G', 'PG', 'PG-13')
ORDER BY title;