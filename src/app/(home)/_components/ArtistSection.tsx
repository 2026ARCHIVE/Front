import React from "react";
import SectionLayout from "./SectionLayout";
import ArtistCard from "./ArtistCard";

export default function ArtistSection() {
  return (
    <SectionLayout title="대동제 출연 아티스트" link="/schedule">
      <ArtistCard name="BLACKPINK" imageUrl="/artist1.png" date="5.28 (목)" />
      <ArtistCard name="NewJeans" imageUrl="/artist2.png" date="5.28 (목)" />
      <ArtistCard name="Sabrina" imageUrl="/artist3.png" date="5.28 (목)" />
    </SectionLayout>
  );
}
