const galleryImagesTable = {
  TableName: 'GalleryImages',
  KeySchema: [
    // Partition Key
    { AttributeName: 'src', KeyType: 'HASH' },
    // Sort Keys
    { AttributeName: 'class', KeyType: 'RANGE' },
  ],
  AttributeDefinitions: [
    { AttributeName: 'alt', AttributeType: 'S' },
    { AttributeName: 'src', AttributeType: 'S' },
    { AttributeName: 'class', AttributeType: 'S' },
  ],
  LocalSecondaryIndexes: [
    {
      IndexName: 'ClassIndex',
      KeySchema: [
        { AttributeName: 'src', KeyType: 'HASH' },
        { AttributeName: 'alt', KeyType: 'RANGE' },
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

export default galleryImagesTable;
