# Mongo Client / Mongo query performance explorations

I received a coding interview at one point that made me wonder how performant MongoDB queries really were, so I started building out a small repo that allowed me to seed and test some fake data.

I was also particularly and continue to be curious about lookups in MongoDB. In the future I would like to compare and contrast with SQL database lookup performance.

Ah, the neverending question of when to use a SQL or a NoSQL database.

In order to use this, I recommend installing and using Compass, a MongoDB UI application, which makes seeing "explanations" on query response times really easy to see (but not necessarily to compare).

The diff folder in the `diffing` folder is me just comparing two different `explanation` outputs.