import { useState } from 'react';
import Header from './components/Header.jsx';
import SuggestedPrompts from './components/SuggestedPrompts.jsx';
import ChatWindow from './components/ChatWindow.jsx';
import { askOperationsAssistant } from './services/api.js';

const starterMessages = [
  {
    id: 'welcome',
    role: 'assistant',
    content:
      'Hello! I am your Enterprise AI Operations Assistant. Ask me about incidents, API errors, deployments, runbooks, or operational procedures.',
    citations: []
  }
];

export default function App() {
  const [messages, setMessages] = useState(starterMessages);
  const [loading, setLoading] = useState(false);

  async function handleAsk(question) {
    const userMessage = {
      id: crypto.randomUUID(),
      role: 'user',
      content: question,
      citations: []
    };

    setMessages((current) => [...current, userMessage]);
    setLoading(true);

    try {
      const response = await askOperationsAssistant(question);

      const assistantMessage = {
        id: crypto.randomUUID(),
        role: 'assistant',
        content: response.answer || 'No answer returned.',
        citations: response.citations || []
      };

      setMessages((current) => [...current, assistantMessage]);
    } catch (error) {
      const errorMessage = {
        id: crypto.randomUUID(),
        role: 'assistant',
        content:
          'I could not reach the AI service. Please check API Gateway, Lambda, CORS settings, or backend logs.',
        citations: []
      };

      setMessages((current) => [...current, errorMessage]);
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="app">
      <Header />

      <section className="hero">
        <div>
          <p className="eyebrow">Enterprise GenAI Support</p>
          <h2>
            Enterprise AI assistant for incident response, deployment standards,
            API troubleshooting, and cloud operations.
          </h2>
          <p>
            Ask natural language questions and receive grounded answers from
            CloudCorp operational documents, runbooks, incident policies, and API
            support guides.
          </p>
        </div>

        <div className="architecture-card">
          <h3>Solution Architecture</h3>

          <div className="arch-item">
            <span>⚛️</span>
            <span>React Frontend</span>
          </div>

          <div className="arch-item">
            <span>🌐</span>
            <span>Amazon API Gateway</span>
          </div>

          <div className="arch-item">
            <span>⚡</span>
            <span>AWS Lambda</span>
          </div>

          <div className="arch-item">
            <span>🧠</span>
            <span>Amazon Bedrock</span>
          </div>

          <div className="arch-item">
            <span>📚</span>
            <span>Knowledge Base</span>
          </div>

          <div className="arch-item">
            <span>🗂️</span>
            <span>S3 Vector Store</span>
          </div>

          <div className="arch-item">
            <span>🤖</span>
            <span>Nova Lite LLM</span>
          </div>
        </div>
      </section>

      <SuggestedPrompts onPromptClick={handleAsk} disabled={loading} />

      <ChatWindow messages={messages} loading={loading} onAsk={handleAsk} />
    </main>
  );
}