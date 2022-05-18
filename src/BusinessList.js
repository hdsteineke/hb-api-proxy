import React from 'react';

export default function BusinessList({ businesses }) {
  return (
    <div>
      {businesses.map(({ name, location: { display_address }, rating }, i) =>
        <div key={name + location + i}>
          <h3>{name}</h3>
          <p>{display_address}</p>
          <p>Rating: {rating}</p>
        </div>)}
    </div>
  );
}
