import { FC } from 'react';
import styles from './style.module.scss';
import { type PostCard as PostCardType } from '../../types/postCard.types';

const PostCard: FC<PostCardType> = ({ 
  image, 
  date, 
  time, 
  title, 
  tags = [], 
  className 
}) => {
  return (
    <div className={`${styles.postCard} ${className}`}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} className={styles.image} />
        <div className={styles.metadata}>
          {date} | {time}
        </div>
      </div>
      <h3 className={styles.title}>{title}</h3>
      {tags.length > 0 && (
        <div className={styles.tags}>
          {tags.map((tag, index) => (
            <span key={index} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostCard; 