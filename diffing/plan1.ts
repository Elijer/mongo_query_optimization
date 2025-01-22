{
  "stage": "FETCH",
  "filter": {
    "$and": [
      {
        "region": { "$not": { "$eq": "AL" } }
      },
      { "tenureMonths": { "$gt": 4 } }
    ]
  },
  "inputStage": {
    "stage": "IXSCAN",
    "keyPattern": { "department": 1 },
    "indexName": "department_1",
    "isMultiKey": false,
    "multiKeyPaths": { "department": [] },
    "isUnique": false,
    "isSparse": false,
    "isPartial": false,
    "indexVersion": 2,
    "direction": "forward",
    "indexBounds": {
      "department": [
        "[MinKey, \"Sales\")",
        "(\"Sales\", MaxKey]"
      ]
    }
  }
},