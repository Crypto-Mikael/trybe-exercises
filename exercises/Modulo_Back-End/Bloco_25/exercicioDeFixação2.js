db.transactions.aggregate(
  [
    { $match : {
          value: { $gte: 700, $lte: 6000 },
      },
    }
  ]
);
