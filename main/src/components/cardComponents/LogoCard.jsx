import React from 'react'

export default function LogoCard({ href, imgSrc, altText}) {
    return (
        <div>
          <a href={href}>
            <img
              src={imgSrc}
              alt={altText}
              className="sign__logo"
            //   height={imgHeight}
            />
          </a>
        </div>
      );
}
