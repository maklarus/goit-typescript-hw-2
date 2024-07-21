import style from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onClick: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => (
  <div className={style.container}>
    <button className={style.loadMoreBtn} onClick={onClick}>
      Load More
    </button>
  </div>
);

export default LoadMoreBtn;
