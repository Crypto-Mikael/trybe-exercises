db.transactions.aggregate(
  [{ $match : { from: "Dave America" } }]
);
