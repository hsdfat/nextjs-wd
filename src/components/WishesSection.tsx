import TextHeader from "./TextHeader";

const WishesSection = () => {
    return (
      <section className="py-5 wishes-section section-bg-affect" id="wishes" style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}>
        <TextHeader content={"Sổ lưu bút"}></TextHeader>
        
      </section>
    );
  };
  
  export default WishesSection;