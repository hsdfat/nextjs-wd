// components/WishesSection.tsx
"use client"
import { useState } from "react";
import TextHeader from "./TextHeader";
import WishesForm from "./WishesForm";
import WishesList from "./WishesList";

const WishesSection = () => {
  // This counter will trigger a refresh of the WishesList when incremented
  const [refreshCounter, setRefreshCounter] = useState<number>(0);

  // This function will be passed to WishesForm and called when a new wish is added
  const handleWishAdded = () => {
    setRefreshCounter(prev => prev + 1);
  };

  return (
    <section className="py-5 wishes-section section-bg-affect" id="wishes" style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    }}>
      <TextHeader content={"Sổ lưu bút"}></TextHeader>
      <WishesForm onWishAdded={handleWishAdded} />
      <WishesList refreshTrigger={refreshCounter} />
    </section>
  );
};

export default WishesSection;