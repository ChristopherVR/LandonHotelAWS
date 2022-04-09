import aws from 'aws-sdk';
import fs from 'fs';
import GalleryImage from '../interfaces/galleryImage';

aws.config.update({
  region: 'us-east-1',
});

console.log('Writing entries to GalleryImages table.');

const dynamodb = new aws.DynamoDB.DocumentClient();

const galleryImagesData = JSON.parse(
  fs.readFileSync('../data/welcome-images.json', 'utf8'),
);

galleryImagesData.forEach(function (galleryImage: GalleryImage) {
  const className = galleryImage.class ?? 'no_class';

  const params = {
    TableName: 'GalleryImages',
    Item: {
      src: galleryImage.src,
      alt: galleryImage.alt,
      className: className,
    },
  };

  dynamodb.put(params, (err, _data) => {
    if (err)
      console.error(
        'Unable to load data into table for gallery images',
        galleryImage.src,
        '. Error: ',
        JSON.stringify(err, null, 2),
      );
    else console.log('Added', galleryImage.src, 'to table.');
  });
});
