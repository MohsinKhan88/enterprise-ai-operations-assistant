export default function CitationCard({ citations }) {
  if (!citations || citations.length === 0) return null;

  return (
    <div className="source-panel">
      <div className="source-title">Source Documents</div>

      <div className="source-grid">
        {citations.map((citation, index) => (
          <div className="source-card" key={`${citation.document}-${index}`}>
            <div className="source-icon">📄</div>
            <div>
              <strong>{citation.document || 'Unknown document'}</strong>
              {citation.source && <p>{citation.source}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
