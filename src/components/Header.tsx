import React, { useEffect, useState } from 'react';
import MenuLink from '../interfaces/menuLink';

function Header() {
  const [links, setLinks] = useState<MenuLink[]>([]);

  useEffect(() => {
    const getData = async () => {
      const resp = await fetch(
        'https://qbkagfkl8l.execute-api.us-east-1.amazonaws.com/Production/menuLinks',
      );
      const data = await resp.json();
      setLinks(data);
    };
    getData();
  }, []);
  return (
    <header id="intro">
      <article className="fullheight">
        <div className="hgroup">
          <h1>Landon Hotel</h1>
          <h2>West London</h2>
          <p>
            <a href="#welcome">
              <img
                src="https://landonhotel.com/images/misc/arrow.png"
                alt="down arrow"
              />
            </a>
          </p>
        </div>
      </article>

      <nav id="nav">
        <div className="navbar">
          <div className="brand">
            <a href="#welcome">
              Landon <span>Hotel</span>
            </a>
          </div>
          <ul>
            {links.map((x: MenuLink) => (
              <li key={x.href}>
                <a className={`info ${x.class}`} href={x.href}>
                  {x.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
