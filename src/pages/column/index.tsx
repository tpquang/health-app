import { useEffect, useState } from "react";
import { columnService } from "../../services/api/column.service";
import styles from "./style.module.scss";
import Button from "../../components/Button/Button";
import PostCard from "../../components/PostCard";
import { type Post as PostType } from "../../types/post.type";

const Column = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchPosts = async (pageNumber: number) => {
    try {
      setLoading(true);
      const response = await columnService.getPosts({ page: pageNumber });
      if (pageNumber === 1) {
        setPosts(response.data);
      } else {
        setPosts((prevPosts) => [...prevPosts, ...response.data]);
      }

      if (!response.data.length || response.data.length < 8) {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching column posts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts(1);
  }, []);

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchPosts(nextPage);
  };

  return (
    <>
      <section className="recommended-column pt-14 pb-6">
        <div className="container">
          <div className="flex gap-8">
            <div className={`${styles.recommendedColumnItem} bg-dark-500`}>
              <h2 className="uppercase font-inter fs-22 color-primary-300 fw-400 text-center">
                RECOMMENDED COLUMN
              </h2>
              <div className={styles.shortLine}></div>
              <p className="font-noto fs-18 color-light text-center">
                オススメ
              </p>
            </div>
            <div className={`${styles.recommendedColumnItem} bg-dark-500`}>
              <h2 className="uppercase font-inter fs-22 color-primary-300 fw-400 text-center">
                RECOMMENDED DIET
              </h2>
              <div className={styles.shortLine}></div>
              <p className="font-noto fs-18 color-light text-center">
                ダイエット
              </p>
            </div>
            <div className={`${styles.recommendedColumnItem} bg-dark-500`}>
              <h2 className="uppercase font-inter fs-22 color-primary-300 fw-400 text-center">
                RECOMMENDED BEAUTY
              </h2>
              <div className={styles.shortLine}></div>
              <p className="font-noto fs-18 color-light text-center">美容</p>
            </div>
            <div className={`${styles.recommendedColumnItem} bg-dark-500`}>
              <h2 className="uppercase font-inter fs-22 color-primary-300 fw-400 text-center">
                RECOMMENDED HEALTH
              </h2>
              <div className={styles.shortLine}></div>
              <p className="font-noto fs-18 color-light text-center">健康</p>
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.listPosts} pt-8 pb-16`}>
        <div className="container">
          <div className={`${styles.mxCustom} row`}>
            {posts.map((post) => (
              <PostCard key={post.id} {...post} className="col-md-3" />
            ))}
          </div>
          {hasMore && (
            <div className="text-center">
              <Button
                variant="gradient"
                size="large"
                onClick={handleLoadMore}
                disabled={loading}
                className=""
              >
                {loading ? "読み込み中..." : "記録をもっと見る"}
              </Button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Column;
