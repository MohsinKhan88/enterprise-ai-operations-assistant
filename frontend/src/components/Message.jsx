import ReactMarkdown from 'react-markdown';
import CitationCard from './CitationCard.jsx';

export default function Message({ message }) {
  const isUser = message.role === 'user';

  return (
    <article className={`message ${isUser ? 'message-user' : 'message-ai'}`}>
      <div className={`avatar ${isUser ? 'avatar-user' : 'avatar-ai'}`}>
        {isUser ? 'You' : 'AI'}
      </div>

      <div className="message-content">
        <div className={`bubble ${isUser ? 'bubble-user' : 'bubble-ai'}`}>
          {isUser ? (
            <p>{message.content}</p>
          ) : (
            <ReactMarkdown>{message.content}</ReactMarkdown>
          )}
        </div>

        {!isUser && <CitationCard citations={message.citations} />}
      </div>
    </article>
  );
}
