import React from "react";

interface Props {
  location: string;
  zone?: "A" | "B" | "C";
}

export default function MiniMap({ location, zone }: Props) {
    
  return (
    <div>
      <p>{location}</p>
      <p>{zone}</p>
    </div>
  );
}
