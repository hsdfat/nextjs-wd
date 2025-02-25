const Panel = ({ text }: { text: string }) => {
  return (
    <p style={{
      width: "80%"
    }}>
      {text.split("\\n").map((line, index) => {
        return <span key={index}>{line}<br /></span>
      })}
    </p>
  );
};

export default Panel;