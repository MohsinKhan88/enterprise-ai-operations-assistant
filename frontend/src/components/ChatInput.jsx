import { useState } from 'react';

export default function ChatInput({ onSubmit, disabled }) {
  const [question, setQuestion] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    const trimmed = question.trim();
    if (!trimmed || disabled) return;

    onSubmit(trimmed);
    setQuestion('');
  }

  return (
    <form className="composer" onSubmit={handleSubmit}>
      <input
        value={question}
        onChange={(event) => setQuestion(event.target.value)}
        placeholder="Ask about incidents, deployments, API errors, runbooks..."
        disabled={disabled}
      />
      <button type="submit" disabled={disabled}>
        {disabled ? 'Thinking' : 'Send'}
      </button>
    </form>
  );
}
