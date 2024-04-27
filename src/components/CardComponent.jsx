```jsx
import React from 'react';

// Shared class constants
const roundedFull = "rounded-full";
const textZinc700 = "text-zinc-700";
const px3Py1 = "px-3 py-1";

// Main component
const CardComponent = () => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
      <CardImage src="https://placehold.co/290x200" alt="Pixel Art" />
      <CardContent />
      <CardFooter />
    </div>
  );
};

// Subcomponent for the card image
const CardImage = ({ src, alt }) => (
  <img className="w-full" src={src} alt={alt} />
);

// Subcomponent for the card content
const CardContent = () => (
  <div className="px-6 py-4">
    <UserProfile />
    <ServiceDescription />
  </div>
);

// Subcomponent for user profile
const UserProfile = () => (
  <div className="flex items-center">
    <img className={`w-10 h-10 ${roundedFull} mr-4`} src="https://placehold.co/40" alt="Profile Avatar" />
    <div className="text-sm">
      <p className="text-zinc-900 leading-none">Diego Rago</p>
      <p className="text-zinc-600">Level 2 ★★★☆☆</p>
    </div>
  </div>
);

// Subcomponent for service description
const ServiceDescription = () => (
  <div className="mt-2">
    <p className={`${textZinc700} text-base`}>Haré pixel art profesional para tus videojuegos.</p>
  </div>
);

// Subcomponent for the card footer
const CardFooter = () => (
  <div className="px-6 pt-4 pb-2">
    <RatingTag text="★ 4.9 (931)" />
    <PriceTag text="A partir de USD 5" />
  </div>
);

// Subcomponent for rating tag
const RatingTag = ({ text }) => (
  <span className={`inline-block bg-zinc-200 ${roundedFull} ${px3Py1} text-sm font-semibold ${textZinc700} mr-2 mb-2`}>{text}</span>
);

// Subcomponent for price tag
const PriceTag = ({ text }) => (
  <span className={`inline-block bg-zinc-200 ${roundedFull} ${px3Py1} text-sm font-semibold ${textZinc700} mb-2`}>{text}</span>
);

export default CardComponent;
```