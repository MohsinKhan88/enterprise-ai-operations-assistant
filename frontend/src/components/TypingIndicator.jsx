export default function TypingIndicator() {
  return (
    <article className="message message-ai">
      <div className="avatar avatar-ai">AI</div>
      <div className="message-content">
        <div className="bubble bubble-ai typing-bubble">
          <span></span>
          <span></span>
          <span></span>
          <p>Searching enterprise knowledge base...</p>
        </div>
      </div>
    </article>
  );
}
