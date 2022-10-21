import Head from "next/head";
import { FormEvent, useState } from "react";
import styles from "./summarize.module.css";

export default function Home() {
    const [article, setArticle] = useState("");
    const [bulletCount, setBulletCount] = useState(3);
    const [creativity, setCreativity] = useState(0.5);
    const [result, setResult] = useState("");
    const [status, setStatus] = useState("input");


    async function onSubmit(event: FormEvent) {
        event.preventDefault();
        setStatus("loading");
        setResult("");
        try {
            const response = await fetch("/api/summarize", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ article, bulletCount, creativity}),
            });
            const data = await response.json();
            const r = data.result.trim().replace(/\n/g, "\n\n");
            setResult(r);
            setStatus("success");
        } catch (e) {
            setStatus("error");
        }

    }

    return (
        <div>
            <Head>
                <title>Demo - Summarize</title>
            </Head>

            <main className={styles.main}>
                <h3>Summarize Article</h3>
                <form onSubmit={onSubmit}>
                    <h2>Article</h2>
                    <textarea
                        name="article"
                        placeholder="Enter text to summarize"
                        value={article}
                        onChange={(e) => setArticle(e.target.value)}
                    />
                    <div>
                        <span>Number of bullet points: {bulletCount}</span>
                        <br />
                        <input type="range" min={1} max={10} value={bulletCount} onChange={(e) => setBulletCount(parseInt(e.target.value))} />
                    </div>
                    <div>
                        <span>Creativity: {Math.round(creativity * 100)}%</span>
                        <br />
                        <input type="range" min={0.0} max={1.0} value={creativity} step={0.01} onChange={(e) => setCreativity(parseFloat(e.target.value))} />
                    </div>
                    <input type="submit" value="Summarize Article" />
                </form>
                <div>
                    {result && <>
                        <h2>Summary</h2>
                        <pre className={styles.result}>{result}</pre>
                    </>}
                </div>

                <span className={styles.status}>
                    {status == "loading" && "Loading..."}
                    {status == "error" && "Error while trying to summarize the article"}
                </span>
            </main>
        </div>
    );
}
