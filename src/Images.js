import React, { useEffect, useState } from "react";

const Images = () => {
  const [images, setImages] = useState();

  useEffect(() => {
    fetch("images?limit=10")
      .then((res) => res.json())
      .then((data) => {
        console.log("Success:", data);
        setImages(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <React.Suspense fallback={<p>loading...</p>}>
      {images &&
        images.map((img) => (
          <div key={img.id} className="row">
            <div className="firstBorder col">
              <div className="secondBorder">
                <picture>
                  <source srcSet={`${img.url}.webp`} type="image/webp"></source>
                  <source srcSet={`${img.url}.jpg`} type="image/jpeg"></source>
                  <img className="image" src={`${img.url}.jpg`} alt="" />
                </picture>
              </div>
            </div>
            <div className="firstProfileBorder col">
              <div className="secondProfileBorder">
                <img
                  className="profilePicture"
                  src={`${img.user.profile_image}.webp`}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
    </React.Suspense>
  );
};

export default Images;
