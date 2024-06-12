import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>Welcome to my first Next.JS project...</h1>

        <h2>Please select which feature you would like to visit first!</h2>
      </div>
    </main>
  );
}
