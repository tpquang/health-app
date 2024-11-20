import React from "react";
import styles from "./style.module.scss";
interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  iconUrl?: string;
}

const ButtonHexagon: React.FC<ButtonProps> = ({
  children,
  disabled = false,
  onClick,
  iconUrl,
}) => {
  return (
    <button
      className={styles.buttonHexagon}
      onClick={onClick}
      disabled={disabled}
    >
      <svg
        className={styles.svg}
        viewBox="0 0 116 134"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 33.5L58 0L116 33.5V100.5L58 134L0 100.5L0 33.5Z"
          fill="url(#paint0_linear_430_200)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_430_200"
            x1="25.9565"
            y1="165.202"
            x2="147.019"
            y2="118.302"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFCC21" />
            <stop offset="1" stopColor="#FF963C" />
          </linearGradient>
        </defs>
      </svg>
      <div className={styles.content}>
        {iconUrl && <img src={iconUrl} alt={children as string} className={styles.icon} />}
        <p className={styles.text}>{children}</p>
      </div>
    </button>
  );
};

export default ButtonHexagon;
