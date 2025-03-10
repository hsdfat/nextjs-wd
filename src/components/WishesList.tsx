// components/WishesList.tsx
"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/WishesList.module.css';
import TextHeader from './TextHeader';

interface Wish {
  id: number;
  name: string;
  email: string;
  message: string;
  created_at: string;
}

const WishesList: React.FC = () => {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log("loading")
    const fetchWishes = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/wishes');

        if (!response.ok) {
          throw new Error('Không thể tải dữ liệu');
        }

        const data = await response.json();
        setWishes(data.wishes || []);
      } catch (err) {
        console.log(err);
        setError('Đã xảy ra lỗi khi tải lời chúc. Vui lòng thử lại sau.');
      } finally {
        setLoading(false);
      }
    };

    fetchWishes();
  }, []);

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.spinner}></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.errorContainer}>
        <p className={styles.errorMessage}>{error}</p>
        <button
          onClick={() => window.location.reload()}
          className={styles.retryButton}
        >
          Thử lại
        </button>
      </div>
    );
  }

  return (
    <div className={styles.wishesContainer}>
      <div className={styles.wishesHeader}>
        <TextHeader content={"Lời Chúc Từ Bạn Bè"}></TextHeader>
      </div>

      {wishes.length === 0 ? (
        <div className={styles.emptyState}>
          <p>Chưa có lời chúc nào. Hãy là người đầu tiên gửi lời chúc!</p>
        </div>
      ) : (
        <div className={styles.wishesGrid}>
          {wishes.map((wish) => (
            <div key={wish.id} className={styles.wishCard}>
              <div className={styles.wishHeader}>
                <h3 className={styles.wishName}>{wish.name}</h3>
                <span className={styles.wishDate}>
                  {new Date(wish.created_at).toLocaleDateString('vi-VN')}
                </span>
              </div>
              <p className={styles.wishMessage}>{wish.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishesList;