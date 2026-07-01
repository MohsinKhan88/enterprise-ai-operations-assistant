const prompts = [
  'What is the P1 incident process?',
  'How do I troubleshoot a 503 Service Unavailable error?',
  'When are production deployments allowed?',
  'What are the rollback requirements?'
];

export default function SuggestedPrompts({ onPromptClick, disabled }) {
  return (
    <section className="prompt-panel">
      <h2>How can I help today?</h2>
      <p>Ask operational questions grounded in CloudCorp enterprise documents.</p>

      <div className="prompt-grid">
        {prompts.map((prompt) => (
          <button
            key={prompt}
            className="prompt-card"
            onClick={() => onPromptClick(prompt)}
            disabled={disabled}
          >
            {prompt}
          </button>
        ))}
      </div>
    </section>
  );
}
