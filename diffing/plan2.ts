{
  "stage": "FETCH",
  "filter": {
    "$and": [
      {
        "department": {
          "$not": { "$eq": "Sales" }
        }
      },
      {
        "region": {
          "$not": { "$eq": "AL" }
        }
      }
    ]
  },
  "inputStage": {
    "stage": "IXSCAN",
    "keyPattern": { "tenureMonths": 1 },
    "indexName": "tenureMonths_1",
    "isMultiKey": false,
    "multiKeyPaths": { "tenureMonths": [] },
    "isUnique": false,
    "isSparse": false,
    "isPartial": false,
    "indexVersion": 2,
    "direction": "forward",
    "indexBounds": {
      "tenureMonths": ["(4, inf.0]"]
    }
  }
}
]
}