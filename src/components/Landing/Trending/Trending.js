import React, { useState, useEffect } from "react";
import Promo from "../Promo";

const Trending = () => {
  const [ imageUrl, setImageUrl ] = useState();
  useEffect(() => {
    fetch('http://localhost:7000')
      .then(response => response.text())
      .then(url => setImageUrl(url));
  }, []);

  if (imageUrl) {
    return (
      <Promo title="Whats trending " size={"xlarge"}>
        <picture>
          <img src={imageUrl} alt="What's trending" />
        </picture>
      </Promo>
    );
  }

  return null;
}

export default Trending;
