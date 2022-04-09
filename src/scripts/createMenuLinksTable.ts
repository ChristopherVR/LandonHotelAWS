const menuLinksTable = {
  TableName: 'MenuLinks',
  KeySchema: [
    // Partition Key
    { AttributeName: 'href', KeyType: 'HASH' },
    // Sort Keys
    { AttributeName: 'text', KeyType: 'RANGE' },
  ],
  AttributeDefinitions: [
    { AttributeName: 'class', AttributeType: 'S' },
    { AttributeName: 'href', AttributeType: 'S' },
    { AttributeName: 'text', AttributeType: 'S' },
  ],
  LocalSecondaryIndexes: [
    {
      IndexName: 'ClassIndex',
      KeySchema: [
        { AttributeName: 'href', KeyType: 'HASH' },
        { AttributeName: 'class', KeyType: 'RANGE' },
      ],
      Projection: {
        ProjectionType: 'KEYS_ONLY',
      },
    },
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 10,
    WriteCapacityUnits: 10,
  },
};

export default menuLinksTable;
