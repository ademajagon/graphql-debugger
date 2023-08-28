import { Header } from './components/Header';
import { Router } from './pages/Router';

export function App() {
  return (
    <div className="bg-graphql-otel-dark gradient-background flex flex-col">
      <Header />
      <Router />
    </div>
  );
}
