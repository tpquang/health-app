import { Link, useNavigate } from "react-router-dom";
import styles from "./style.module.scss";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const navigate = useNavigate();
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

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

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
            <a
              className={`flex items-center gap-2 ${styles.itemMenuWithIcon}`}
            >
              <img src={"images/icons/icon_challenge.svg"} alt="challenge" />
              <p className="font-noto text-16 color-light">チャレンジ</p>
            </a>
            <a
              className={`flex items-center gap-2 ${styles.itemMenuWithIcon}`}
            >
              <div className="relative">
                {notificationCount > 0 && (
                  <span className={styles.badge}>{notificationCount}</span>
                )}
                <img src={"images/icons/icon_info.svg"} alt="information" />
              </div>
              <p className="font-noto text-16 color-light">お知らせ</p>
            </a>
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
                <li><a>体重グラフ</a></li>
                <li><a>目標</a></li>
                <li><a>選択中のコース</a></li>
                <li><Link to="/column">コラム一覧</Link></li>
                <li><a>設定</a></li>
                <li>
                  <a onClick={handleLogout} className="pointer">
                    ログアウト
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
