import Panel from "./Panel";
import QRCode from "./QRCode";
import TextHeader from "./TextHeader";

const DonateSection = () => {
  return (
    <section className="py-5 donate-section section-bg-affect" id="donate" style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    }}>
      <TextHeader content={"Mừng cưới"}></TextHeader>
      <Panel text="Thật vui vì được gặp và đón tiếp các bạn trong một dịp đặc biệt như đám cưới của chúng tôi."></Panel>
      <div className="container-fluid" style={{
        padding: '20px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
      }}>
        <QRCode type={"Chú rể"} name={"LE CHI PHAT"} bank={"Vietinbank"} account={"109003117305"}></QRCode>
        <QRCode type={"Cô dâu"} name={"DO THI TU ANH"} bank={"Agribank"} account={"109003117305"}></QRCode>
      </div>
    </section>
  );
};

export default DonateSection;