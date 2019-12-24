import React, { useState, useEffect } from "react";
import Promo from "../Promo";

const endpoint = process.env.REACT_APP_IMAGE_ENDPOINT;

const Trending = () => {
  const [ imageUrl, setImageUrl ] = useState();
  useEffect(() => {
    fetch(endpoint)
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
