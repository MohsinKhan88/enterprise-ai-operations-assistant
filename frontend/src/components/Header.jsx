export default function Header() {
  return (
    <header className="topbar">
      <div>
        <p className="brand">CloudCorp Technologies</p>
        <h1>Enterprise AI Operations Assistant</h1>
      </div>

      <div className="topbar-actions">
        <span className="pill">AWS Bedrock</span>
        <span className="pill success">RAG Enabled</span>
        <span className="pill success">CloudWatch Enabled</span>
      </div>
    </header>
  );
}