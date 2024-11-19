import styles from "./style.module.scss";

const Footer = () => {
  return (
    <footer className={`bg-dark-500 ${styles.footer}`}>
      <div className="container">
        <div className={`flex gap-x-12 my-14 ${styles.footer__links}`}>
          <p className="color-light font-noto fs-11 pointer">会員登録</p>
          <p className="color-light font-noto fs-11 pointer">運営会社</p>
          <p className="color-light font-noto fs-11 pointer">利用規約</p>
          <p className="color-light font-noto fs-11 pointer">個人情報の取扱について</p>
          <p className="color-light font-noto fs-11 pointer">特定商取引法に基づく表記</p>
          <p className="color-light font-noto fs-11 pointer">お問い合わせ</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
