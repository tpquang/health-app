import { Link } from "react-router-dom";
import styles from "./style.module.scss";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const [notificationCount, setNotificationCount] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setNotificationCount(1);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className={styles.header + " bg-dark-500"}>
      <div className="container flex justify-between items-center">
        <Link to="/">
          <img className={styles.logo} src={"/logo.svg"} alt="logo" />
        </Link>
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <Link
              to="/my-record"
              className={`flex items-center gap-2 ${styles.itemMenuWithIcon}`}
            >
              <img src={"images/icons/icon_memo.svg"} alt="memo" />
              <p className="font-noto text-16 color-light">自分の記録</p>
            </Link>
            <Link
              to="/#"
              className={`flex items-center gap-2 ${styles.itemMenuWithIcon}`}
            >
              <img src={"images/icons/icon_challenge.svg"} alt="challenge" />
              <p className="font-noto text-16 color-light">チャレンジ</p>
            </Link>
            <Link
              to="/#"
              className={`flex items-center gap-2 ${styles.itemMenuWithIcon}`}
            >
              <div className="relative">
                {notificationCount > 0 && (
                  <span className={styles.badge}>{notificationCount}</span>
                )}
                <img src={"images/icons/icon_info.svg"} alt="information" />
              </div>
              <p className="font-noto text-16 color-light">お知らせ</p>
            </Link>
          </div>
          <div className="relative" ref={menuRef}>
            <img
              className="pointer"
              src={isMenuOpen ? "images/icons/icon_close.svg" : "images/icons/icon_menu.svg"}
              alt={isMenuOpen ? "close menu" : "open menu"}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
            <div className={`${styles.menuCollapse} ${isMenuOpen ? styles.active : ''}`}>
              <ul>
                <li><Link to="/my-record">自分の記録</Link></li>
                <li><Link to="/#">体重グラフ</Link></li>
                <li><Link to="/#">目標</Link></li>
                <li><Link to="/#">選択中のコース</Link></li>
                <li><Link to="/column">コラム一覧</Link></li>
                <li><Link to="/#">設定</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
