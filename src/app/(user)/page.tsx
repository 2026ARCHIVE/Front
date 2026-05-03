import React from "react";
import HomeHeader from "./(home)/_components/HomeHeader";
import ArtistSection from "./(home)/_components/ArtistSection";
import EventSection from "./(home)/_components/EventSection";
import LostAndFoundSection from "./(home)/_components/LostAndFoundSection";
import MainBanner from "./(home)/_components/MainBanner";
import NoticeTicker from "./(home)/_components/NoticeTicker";
import MapSection from "./(home)/_components/MapSection";
import NoticeModal from "./(home)/_components/NoticeModal";

export default function Page() {
  return (
    <div className="pb-16">
      <NoticeModal />
      <HomeHeader />
      <MainBanner />
      <NoticeTicker />
      <ArtistSection />
      <EventSection />
      <MapSection />
      <LostAndFoundSection />
    </div>
  );
}
