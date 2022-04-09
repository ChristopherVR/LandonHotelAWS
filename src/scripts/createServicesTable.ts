const servicesTable = {
  TableName: 'Services',
  KeySchema: [
    // Partition Key
    { AttributeName: 'name', KeyType: 'HASH' },
  ],
  AttributeDefinitions: [{ AttributeName: 'name', AttributeType: 'S' }],
  ProvisionedThroughput: {
    ReadCapacityUnits: 10,
    WriteCapacityUnits: 10,
  },
};

export default servicesTable;
