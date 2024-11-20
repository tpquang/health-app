import { FC } from "react";
import styles from "./style.module.scss";
import { type Post as PostType } from "../../types/post.type";

const PostCard: FC<PostType> = ({
  image,
  date,
  time,
  title,
  tags = [],
  className,
}) => {
  return (
    <div className={`${styles.postCard} ${className}`}>
      <div className={styles.postItem}>
        <div className={styles.postImageGroup}>
          <img className={styles.postImage} src={image} alt={title} />
          <p className={`${styles.postDate} fs-15`}>
            <span className="mr-4">{date}</span>
            <span>{time}</span>
          </p>
        </div>
        <p className={`${styles.postTitle} fs-15`}>{title}</p>
        <div className={styles.postTagGroup}>
          {tags.map((tag: string) => (
            <p
              className={`${styles.postTag} color-primary-400 fs-12`}
              key={tag}
            >
              {`#${tag}`}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
