use('agg_example');
db.transactions.aggregate(
  [ 
    { 
    $group: {
        _id: '$bank',
        total: { $sum: '$value' },
      }
    }
  ]
);