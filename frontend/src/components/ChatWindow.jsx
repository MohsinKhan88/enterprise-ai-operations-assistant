import Message from './Message.jsx';
import TypingIndicator from './TypingIndicator.jsx';
import ChatInput from './ChatInput.jsx';

export default function ChatWindow({ messages, loading, onAsk }) {
  return (
    <section className="chat-shell">
      <div className="messages">
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}

        {loading && <TypingIndicator />}
      </div>

      <ChatInput onSubmit={onAsk} disabled={loading} />
    </section>
  );
}
