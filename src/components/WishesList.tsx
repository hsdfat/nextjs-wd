// components/WishesList.tsx
"use client"
import { useState, useEffect } from 'react';
import styles from '../styles/WishesList.module.css';
import TextHeader from './TextHeader';

interface Wish {
  id: number;
  name: string;
  email: string;
  message: string;
  created_at: string;
}

interface WishesListProps {
  refreshTrigger: number;
}

const WishesList: React.FC<WishesListProps> = ({ refreshTrigger }) => {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedWish, setSelectedWish] = useState<Wish | null>(null);

  useEffect(() => {
    const fetchWishes = async () => {
      setLoading(true);
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://chiphat-tuanh.info.vn';
        const response = await fetch(`${apiUrl}/api/wishes`);

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
  }, [refreshTrigger]); // Re-fetch when refreshTrigger changes

  const handleWishClick = (wish: Wish) => {
    setSelectedWish(wish);
  };

  const closePopup = () => {
    setSelectedWish(null);
  };

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
        <div className={styles.wishesScrollContainer}>
          <div className={styles.wishesGrid}>
            {wishes.map((wish) => (
              <div
                key={wish.id}
                className={styles.wishCard}
                onClick={() => handleWishClick(wish)}
              >
                <div className={styles.wishHeader}>
                  <h3 className={styles.wishName}>{wish.name}</h3>
                  <span className={styles.wishDate}>
                    {new Date(wish.created_at).toLocaleDateString('vi-VN')}
                  </span>
                </div>
                <p className={styles.wishMessage}>
                  {wish.message.length > 100
                    ? `${wish.message.substring(0, 100)}...`
                    : wish.message}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Wish Detail Popup */}
      {selectedWish && (
        <div className={styles.popup} onClick={closePopup}>
          <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.popupHeader}>
              <h3 className={styles.popupName}>{selectedWish.name}</h3>
              <span className={styles.popupDate}>
                {new Date(selectedWish.created_at).toLocaleDateString('vi-VN')}
              </span>
              <button className={styles.closeButton} onClick={closePopup}>×</button>
            </div>
            <div className={styles.popupBody}>
              <p className={styles.popupMessage}>{selectedWish.message}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WishesList;