import aws from 'aws-sdk';
import accesibilitiesTable from './createAccesibilitiesTable';
import galleryImagesTable from './createGalleryImagesTable';
import menuLinksTable from './createMenuLinksTable';
import servicesTable from './createServicesTable';

aws.config.update({
  region: 'us-east-1',
});

const dynamodb = new aws.DynamoDB();

const res = (err: aws.AWSError, data: aws.DynamoDB.CreateTableOutput) => {
  if (err)
    console.error('Unable to create table: ', JSON.stringify(err, null, 2));
  else
    console.log(
      'Created table with description: ',
      JSON.stringify(data, null, 2),
    );
};

dynamodb.createTable(accesibilitiesTable, res);

dynamodb.createTable(menuLinksTable, res);

dynamodb.createTable(servicesTable, res);

dynamodb.createTable(galleryImagesTable, res);
