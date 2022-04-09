import aws from 'aws-sdk';
import fs from 'fs';
import Accesibility from '../interfaces/accesibility';

aws.config.update({
  region: 'us-east-1',
});

console.log('Writing entries to Acessibilities table.');

const dynamodb = new aws.DynamoDB.DocumentClient();
const accessibilitiesData = JSON.parse(
  fs.readFileSync('../data/accessibility.json', 'utf8'),
);

accessibilitiesData.forEach((accessibililty: Accesibility) => {
  const params = {
    TableName: 'Accesibilities',
    Item: {
      name: accessibililty.name,
    },
  };

  dynamodb.put(params, (err, _data) => {
    if (err)
      console.error(
        'Unable to load data into table for accessibility',
        accessibililty.name,
        '. Error: ',
        JSON.stringify(err, null, 2),
      );
    else console.log('Added', accessibililty.name, 'to table.');
  });
});
