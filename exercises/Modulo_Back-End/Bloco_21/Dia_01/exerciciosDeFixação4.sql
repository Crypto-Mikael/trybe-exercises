-- 1. Usando o EXISTS na tabela books_lent e books , exiba o id e título dos livros que ainda não foram emprestados.

SELECT Id, Title FROM hotel.Books AS b
WHERE EXISTS (
SELECT * FROM hotel.Books_Lent
WHERE book_rental = b.Id AND returned = 1
);

-- 2. Usando o EXISTS na tabela books_lent e books , exiba o id e título dos livros
-- estão atualmente emprestados e que contêm a palavra "lost" no título.

SELECT Id, Title FROM hotel.Books AS b
WHERE EXISTS (
SELECT * FROM hotel.Books_Lent
WHERE book_rental = b.Id 
AND returned = 0
AND b.Title LIKE '%lost%'
);

-- 3. Usando a tabela carsales e customers , exiba apenas o nome dos clientes que ainda não compraram um carro.

SELECT `Name` FROM hotel.Customers AS c
WHERE NOT EXISTS (
	SELECT * FROM hotel.CarSales
    WHERE CarID = c.CustomerID
)
