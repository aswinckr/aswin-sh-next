import styles from "../styles/index.module.css";

export default function Newsletter() {
  return (
    <div className={styles.newsletter}>
      <div className={styles.newsletterWrapper}>
        <h2>🍻 Join my Weekly Idea Blast</h2>
        <p>
          Every week I send a newsletter with my latest writing and things I've
          been thinking about. Sign up below to be added to the list.
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
