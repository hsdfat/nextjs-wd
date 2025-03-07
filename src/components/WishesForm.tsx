// components/WishesForm.tsx
"use client"
import { useState, FormEvent, ChangeEvent } from 'react';
import Link from 'next/link';
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

const WishesForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus | null>(null);

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

    try {
      const response = await fetch('localhost:8080/api/wishes', {
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
      } else {
        setSubmitStatus({ success: false, message: data.error || 'Có lỗi xảy ra, vui lòng thử lại.' });
      }
    } catch (error) {
      setSubmitStatus({ success: false, message: 'Lỗi kết nối, vui lòng thử lại sau.' });
    } finally {
      setIsSubmitting(false);
    }
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
          <div className={`${styles.statusMessage} ${submitStatus.success ? styles.success : styles.error}`}>
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
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Nhập lời chúc của bạn*"
              className={`${styles.formControl} ${styles.textarea}`}
              required
            ></textarea>
          </div>

          <div className={styles.formFooter}>
            <Link href="/wishes" className={styles.viewLink}>
              <span>Xem tất cả lời chúc</span>
            </Link>
            <div className={styles.emojiButtons}>
              <button type="button" className={styles.emojiButton}>
                <span>😊</span>
              </button>
              <button type="button" className={styles.emojiButton}>
                <span>❤️</span>
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={styles.submitButton}
          >
            {isSubmitting ? 'Đang gửi...' : 'Gửi Lời Chúc'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default WishesForm;