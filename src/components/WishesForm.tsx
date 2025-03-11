// components/WishesForm.tsx
"use client"
import { useState, FormEvent, ChangeEvent, useRef, useEffect } from 'react';
import styles from '../styles/WishesForm.module.css';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface SubmitStatus {
  success: boolean;
  message: string;
}

interface WishesFormProps {
  onWishAdded: () => void;
}

const WishesForm: React.FC<WishesFormProps> = ({ onWishAdded }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus | null>(null);
  const [isDone, setIsDone] = useState<boolean>(false);
  const [emojiMenuOpen, setEmojiMenuOpen] = useState<boolean>(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const emojiButtonRef = useRef<HTMLButtonElement>(null);
  const emojiMenuRef = useRef<HTMLDivElement>(null);

  // Common emojis array
  const commonEmojis = ["😊", "❤️", "👍", "🎉", "🥂", "💍", "💐", "🎊", "💖", "😍", "👰", "🤵", "✨"];

  // Close emoji menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        emojiMenuRef.current &&
        emojiButtonRef.current &&
        !emojiMenuRef.current.contains(event.target as Node) &&
        !emojiButtonRef.current.contains(event.target as Node)
      ) {
        setEmojiMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsDone(false);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';
      const response = await fetch(`${apiUrl}/api/wishes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ success: true, message: 'Cảm ơn bạn đã gửi lời chúc!' });
        setFormData({ name: '', email: '', message: '' });
        setIsDone(true);
        // Notify parent component to refresh wishes list
        onWishAdded();
      } else {
        setSubmitStatus({ success: false, message: data.error || 'Có lỗi xảy ra, vui lòng thử lại.' });
      }
    } catch (error) {
      setSubmitStatus({ success: false, message: `Lỗi kết nối, vui lòng thử lại sau.` });
    } finally {
      setIsSubmitting(false);
      // Reset the done state after 3 seconds
      if (isDone) {
        setTimeout(() => {
          setIsDone(false);
        }, 3000);
      }
    }
  };

  // Insert emoji at cursor position in textarea
  const insertEmoji = (emoji: string) => {
    if (!textareaRef.current) return;

    const textarea = textareaRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    const newMessage =
      formData.message.substring(0, start) +
      emoji +
      formData.message.substring(end);

    setFormData({
      ...formData,
      message: newMessage
    });

    // Set focus back to textarea and place cursor after inserted emoji
    setTimeout(() => {
      textarea.focus();
      textarea.selectionStart = start + emoji.length;
      textarea.selectionEnd = start + emoji.length;
    }, 10);

    // Close emoji menu after selection
    setEmojiMenuOpen(false);
  };

  // Quick insert heart emoji
  const quickInsertHeart = () => {
    if (!textareaRef.current) return;

    const textarea = textareaRef.current;
    const cursorPos = textarea.selectionStart;

    const newMessage =
      formData.message.substring(0, cursorPos) +
      "❤️" +
      formData.message.substring(cursorPos);

    setFormData({
      ...formData,
      message: newMessage
    });

    // Update cursor position after the inserted emoji
    setTimeout(() => {
      textarea.focus();
      const newPos = cursorPos + "❤️".length;
      textarea.selectionStart = newPos;
      textarea.selectionEnd = newPos;
    }, 10);
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.formHeader}>
        <p className={styles.formDescription}>
          Cảm ơn bạn rất nhiều vì đã gửi những lời chúc mừng tốt đẹp nhất đến đám cưới của chúng tôi!
        </p>
      </div>

      <div className={styles.formBody}>
        {submitStatus && (
          <div
            className={`${styles.statusMessage} ${submitStatus.success ? styles.success : styles.error}`}
            style={{ opacity: isDone ? 0 : 1, transition: 'opacity 0.5s ease-in-out' }}
          >
            {submitStatus.message}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nhập tên của bạn*"
              className={styles.formControl}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="E-mail"
              className={styles.formControl}
            />
          </div>

          <div className={styles.formGroup}>
            <textarea
              ref={textareaRef}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Nhập lời chúc của bạn*"
              className={`${styles.formControl} ${styles.textarea}`}
              required
            ></textarea>
          </div>

          <div className={styles.formFooter}>
            <div className={styles.emojiButtons}>
              <div className={styles.emojiButtonContainer}>
                <button
                  type="button"
                  className={styles.emojiButton}
                  onClick={() => setEmojiMenuOpen(!emojiMenuOpen)}
                  ref={emojiButtonRef}
                >
                  <span>😊</span>
                </button>
                {emojiMenuOpen && (
                  <div className={styles.emojiMenu} ref={emojiMenuRef}>
                    {commonEmojis.map((emoji, index) => (
                      <button
                        key={index}
                        type="button"
                        className={styles.emojiMenuItem}
                        onClick={() => insertEmoji(emoji)}
                      >
                        {emoji}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <button
                type="button"
                className={styles.emojiButton}
                onClick={quickInsertHeart}
              >
                <span>❤️</span>
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`${styles.submitButton} ${isDone ? styles.doneButton : ''} ${isSubmitting ? styles.loadingButton : ''}`}
          >
            {isSubmitting ? (
              <>
                <span className={styles.spinner}></span>
                <span>Đang gửi...</span>
              </>
            ) : isDone ? (
              <>
                <span className={styles.checkmark}>✓</span>
                <span>Đã gửi</span>
              </>
            ) : (
              'Gửi Lời Chúc'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default WishesForm;