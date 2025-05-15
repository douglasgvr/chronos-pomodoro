import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading';
import { TimerIcon } from 'lucide-react';
import { Container } from './components/Container';

export function App() {
  return (
    <>
      <Container>
        <div>
          <TimerIcon />
          <Heading>Chronos</Heading>
        </div>
      </Container>
    </>
  );
}
