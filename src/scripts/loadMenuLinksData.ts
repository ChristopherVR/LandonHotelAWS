import aws from 'aws-sdk';
import fs from 'fs';
import MenuLink from '../interfaces/menuLink';

aws.config.update({
  region: 'us-east-1',
});

console.log('Writing entries to MenuLinks table.');

const dynamodb = new aws.DynamoDB.DocumentClient();
var menuLinksData = JSON.parse(
  fs.readFileSync('../data/menu-links.json', 'utf8'),
);

menuLinksData.forEach((menuLink: MenuLink) => {
  var params = {
    TableName: 'MenuLinks',
    Item: {
      class: menuLink.class,
      href: menuLink.href,
      text: menuLink.text,
    },
  };

  dynamodb.put(params, (err, _data) => {
    if (err)
      console.error(
        'Unable to load data into table for menu links',
        menuLink.text,
        '. Error: ',
        JSON.stringify(err, null, 2),
      );
    else console.log('Added', menuLink.text, 'to table.');
  });
});
