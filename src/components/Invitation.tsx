import Panel from "./Panel";
import TextHeader from "./TextHeader";

const Invitation = () => {
  // Vietnamese wedding poem in lục bát format (six-eight syllable alternating lines)
  const invitationText = `Duyên tơ kết gió đầu ghềnh\n
Đôi ta hạnh phúc tình bền chẳng phai\n
Ngày vui xin mở rộng tay\n
Mời người đến dự ngày hai chúng mình\n
\n
Trân trọng kính mời quý vị đến dự buổi lễ thành hôn của chúng tôi.\n
\n
Sự hiện diện của quý vị là niềm vinh hạnh lớn lao đối với gia đình chúng tôi.\n
\n
Chân thành cảm ơn!`;

  return (
    <section className="py-5 invitation-section section-bg-affect" id="invitation" style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    }}>
      <TextHeader content={"Lời Ngỏ"}></TextHeader>
      <Panel text={invitationText}></Panel>
    </section>
  );
};

export default Invitation;