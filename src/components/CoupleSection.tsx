import TextHeader from "./TextHeader";

const CoupleSection = () => {
  return (
    <section className="py-5 couple-section section-bg-affect" id="couple" style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    }}>
      <TextHeader content={"Chú rể và Cô dâu"}></TextHeader>
    </section>
  );
};

export default CoupleSection;