import React, { useEffect, useState } from 'react';
import GalleryImage from '../interfaces/galleryImage';
import config from '../config/awsConfig';

function Welcome() {
  const [images, setImages] = useState<GalleryImage[]>([]);

  useEffect(() => {
    const getData = async () => {
      const resp = await fetch(`${config.url}galleries`);
      const data = await resp.json();
      setImages(data);
    };
    getData();
  }, []);

  return (
    <div className="scene" id="welcome">
      <article className="content">
        <div className="gallery">
          {images.map((x: GalleryImage) => (
            <img key={x.alt} className={x.class} alt={x.alt} src={x.src}></img>
          ))}
        </div>
        <h1>Welcome to the Landon&nbsp;Hotel</h1>
        <p>
          The original Landon perseveres after 50 years in the heart of West
          London.The West End neighborhood has something for everyone— from
          theater to dining to historic sights.And the not-to-miss Rooftop Cafe
          is a great place for travelers and locals to engage over drinks, food,
          and good&nbsp; conversation.&nbsp; To learn more about the Landon
          Hotel in the West End, browse our website and{' '}
          <a href="files/landon_information_sheet_London.pdf">
            download our handy information sheet
          </a>
          .
        </p>
      </article>
    </div>
  );
}

export default Welcome;
