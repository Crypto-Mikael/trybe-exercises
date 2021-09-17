use("agg_example");
db.transactions.aggregate(
  [
    { 
      $project : {
          _id: "$bank",
          bank: 1,
      },
    }
  ]
);