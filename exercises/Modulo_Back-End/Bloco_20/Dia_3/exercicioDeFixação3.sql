USE sakila;
-- 1. Exclua do banco de dados o ator com o nome de "KARL".

	-- Primeiro descubra os IDs relacionados ao nome
	SELECT actor_id
	FROM actor
	WHERE first_name = 'KARL';

	-- Em seguida, apague suas referências
	DELETE FROM film_actor
	WHERE actor_id = 12;

	-- Depois exclua o item original
	DELETE FROM actor
	WHERE first_name = 'KARL';

-- 2. Exclua do banco de dados os atores com o nome de "MATTHEW".

	-- Primeiro descubra os IDs relacionados ao nome
	SELECT actor_id
	FROM sakila.actor
	WHERE first_name = 'MATTHEW';

	-- Em seguida, apague as referências
	DELETE FROM sakila.film_actor
	WHERE actor_id IN (8, 103, 181);

	-- Depois exclua o item original
	DELETE FROM sakila.actor
	WHERE first_name = 'MATTHEW';
    
-- 3. Exclua da tabela film_text todos os registros que possuem a palavra "saga" em suas descrições.

	DELETE FROM sakila.film_text
	WHERE DESCRIPTION LIKE '%saga%';
    
-- 4. Apague da maneira mais performática possível todos os registros das tabelas film_actor e film_category.

	TRUNCATE sakila.film_actor;
	TRUNCATE sakila.film_category;