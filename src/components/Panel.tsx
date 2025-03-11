// components/Panel.tsx
import styles from '../styles/Panel.module.css';

const Panel = ({ text }: { text: string }) => {
  // Split by explicit \n characters
  const paragraphs = text.split("\n");

  return (
    <div className={styles.panel}>
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

export default Panel;