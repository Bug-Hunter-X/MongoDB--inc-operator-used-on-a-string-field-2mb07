```javascript
// Correct approach: Convert the string field to a number before incrementing
db.collection('myCollection').findOneAndUpdate(
  { _id: 1 },
  {
    $inc: { myNumber: 1 }
  },
  {
    upsert: true,
    returnOriginal: false,
  }
);
```