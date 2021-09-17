db.transactions.aggregate(
  [
    { $match : {
      $or: [
        { value: { $gte: 700, $lte: 6000 } },
        { to: "Lisa Simpson" },
      ]
      },
    }
  ]
);
