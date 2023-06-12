import styles from "../styles/index.module.css";

export default function Newsletter() {
  return (
    <div className={styles.newsletter}>
      <div className={styles.newsletterWrapper}>
        <h2>🍻 Join my weekly idea blast</h2>
        <p>
          Every week I send a newsletter with the latest ideas I collected and
          personal stories from applying those ideas. Sign up to be the first
          ones to hear.
        </p>
        <iframe
          src="https://embeds.beehiiv.com/6cb40e0e-448f-40f0-938f-186b8f78b542?slim=true"
          data-test-id="beehiiv-embed"
          height="52"
          frameBorder="0"
          scrolling="no"
          style={{
            margin: "0",
            borderRadius: "4px",
            width: "100%",
            backgroundColor: "transparent",
          }}
        ></iframe>
      </div>
    </div>
  );
}
