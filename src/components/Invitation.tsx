import Panel from "./Panel";
import TextHeader from "./TextHeader";

const Invitation = () => {
  return (
    <section className="py-5 invitation-section section-bg-affect" id="invitation" style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    }}>
      <TextHeader content={"Lời ngỏ"}></TextHeader>
      <Panel text="Cảm ơn tất cả những người bạn thân yêu của tôi!\n
        Tôi biết các bạn rất bận rộn, bận rộn với công việc, bận rộn với công việc gia đình
        Nhưng tất cả đã có mặt hôm nay để chúc mừng tinh yêu và hạnh phúc của chúng tôi.\n
        Một lần nữa chân thành cảm ơn tất cả các bạn!">

      </Panel>
    </section>
  );
};

export default Invitation;