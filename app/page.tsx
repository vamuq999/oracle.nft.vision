import Link from "next/link";

export default function Home() {
  return (
    <main className="shell">
      <section className="card hero">
        <div className="heroTop">
          <div className="badge">Ethereum Mainnet • OracleVision</div>
          <h1 className="title">
            OracleVision
            <span className="titleGlow"> NFT Minter</span>
          </h1>
          <p className="sub">
            A clean, prestige-grade mint portal — minimal noise, maximum aura.
          </p>
        </div>

        <div className="ctaRow">
          <Link className="btn primary" href="/mint">
            Enter Mint Chamber
          </Link>
          <a
            className="btn ghost"
            href="https://etherscan.io/address/0x15545833cFCe7579D967D02A1183114d7e554889"
            target="_blank"
            rel="noreferrer"
          >
            View Contract
          </a>
        </div>

        <div className="footerNote">
          Tip: Keep this repo clean. Mint UI lives at <span className="mono">/mint</span>.
        </div>
      </section>
    </main>
  );
}
