
SELECT * FROM staff;

-- 1. Insira um novo funcionário na tabela sakila.staff .

INSERT INTO sakila.staff (first_name, last_name, address_id, email, store_id, active, username, password)
VALUES('Miguel', 'Campos', 2, 'alguem@algum.com', 1, 1, 'roberto', 123);

-- 2. Feito o exercício anterior, vamos agora para o nível 2. Insira dois funcionários novos em apenas uma query .
INSERT INTO sakila.staff (first_name, last_name, address_id, email, store_id, active, username, password)
VALUES('Miguel', 'Campos', 2, 'alguem@algum.com', 1, 1, 'roberto', 123),
	  ('Roberto', 'Fodase', 2, 'alguma@algum.com', 1, 1, 'miguel', 123);
      
-- 3. Selecione os cinco primeiros nomes e sobrenomes da tabela sakila.customer 
-- e cadastre essas pessoas como atores na tabela sakila.actor.

INSERT INTO sakila.actor(first_name, last_name)
SELECT fist_name, last_name FROM sakila.customer
ORDER BY customer_id LIMIT 5;
    
-- 4. Cadastre 3 categorias de uma vez só na tabela sakila.category.

INSERT INTO sakila.category(name)
VALUES ('Sci-Fi'), ('Fantasy'), ('Biography');

-- 5. Cadastre 1 nova loja na tabela sakila.store.

INSERT INTO sakila.store (manager_staff_id, iddress_id)
VALUES (3, 3);
