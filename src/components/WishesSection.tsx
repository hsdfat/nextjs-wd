import TextHeader from "./TextHeader";
import WishesForm from "./WishesForm";
import WishesList from "./WishesList";

const WishesSection = () => {
  return (
    <section className="py-5 wishes-section section-bg-affect" id="wishes" style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    }}>
      <TextHeader content={"Sổ lưu bút"}></TextHeader>
      <WishesForm></WishesForm>
      <WishesList></WishesList>
    </section>
  );
};

export default WishesSection;