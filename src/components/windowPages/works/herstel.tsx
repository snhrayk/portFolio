import styles from "../../../styles/herstel.module.scss";

export default function Herstel() {
  return (
    <div className={styles.container}>
      <header>
        <h1>
          <img src="../../image/portfolio-logo.png" alt="ポートフォリオロゴ" />{" "}
        </h1>
      </header>
      <div className={styles.worksList}>
        <h2>作品一覧</h2>
        <p className={styles.selected}>herstel</p>
        <p>florita</p>
        <p>fave#</p>
        <p>ゆるめ旅</p>
        <p>キャンドルナイトポスター</p>
        <p>名刺</p>
      </div>
      <div className={styles.herstelWrap}>
        <div className={styles.slideWrap}>
          <div className={styles.imgWrap}>
            <img
              className={styles.herstelImg}
              src="../../../image/herstel.png"
              alt="herstel全体"
            />
            <div className={styles.back}></div>
            <div className={styles.next}></div>
          </div>
        </div>
        <div className={styles.data}>
          <div className={styles.dataTop}>
            <p className={styles.prize}>+E展 敢闘賞受賞作品</p>
            {/* <p>#1年前期</p> */}
            {/* <p>#個人制作</p> */}
          </div>
          <h3>
            herstel<span>ハーステル</span>
          </h3>
          <p className={styles.date}>$23.04~23.08</p>
          <p className={styles.mainExplain}>
            今子育てに奮闘中の主婦の方に向けた<span>紅茶定期便サービス</span>。
            <br />
            子育ての疲れに効果的な紅茶をご用意しております。
          </p>
          <p className={styles.used}>
            html / css / Xd / Illustrator / Photoshop
          </p>
          {/* <div className={styles.usedWrap}>
            <div className={styles.used}></div>
            <div className={styles.used}></div>
            <div className={styles.usedApp}>
              <p>Xd</p>
            </div>{" "}
            <div className={styles.usedApp}>
              <p>Ps</p>
            </div>{" "}
            <div className={styles.usedApp}>
              <p>Ai</p>
            </div>
          </div> */}
          <div className={styles.btnWrap}>
            <p className={styles.term}>1年前期</p>
            <p className={styles.siteBtn}>
              <a href="#">サイトを見る</a>
            </p>
          </div>
          <p className={styles.subExplain}>
            紅茶×定期便をテーマに、企画からデザイン・コーディングまで個人で制作しました。
            初めての制作でしたが、自分が考えるものを形にする楽しさを知ることができました。
          </p>
        </div>
      </div>
    </div>
  );
}
