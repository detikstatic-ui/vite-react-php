const NonHeadline = () => {
  return (
    <article className="list-content__item">
      <div className="media media--left media--image-radius block-link">
        <div className="media__image">
          <a href="detail.php" className="media__link">
            <span className="ratiobox ratiobox--4-3 lqd">
              <img src="https://akcdn.detik.net.id/community/media/visual/2020/02/26/9a98b268-9b2e-41c3-9044-69cdad5d5ce6_11.jpeg?w=300&q=90" alt="img-alt" title="img-title" />
            </span>
          </a>
        </div>
        <div className="media__text">
          <h3 className="media__title">
            <a href="detail.php" className="media__link">
              Mager banget Nyuci Baju? Ini Alasan Kenapa Kamu Harus Merawat Pakaian
            </a>
          </h3>
          <div className="media__date">Life | 5 menit yang lalu</div>
        </div>
      </div>
    </article>
  );
};
export default NonHeadline;
