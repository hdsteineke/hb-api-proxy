import React from 'react';

export default function BusinessList({ businesses }) {
  return (
    <div>
      {businesses.map(({ name, location, rating }, i) =>
        <div key={name + location + i}>
          <h3>{name}</h3>
        </div>)}
    </div>
  );
}
