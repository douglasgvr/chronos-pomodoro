import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading';
import { TimerIcon } from 'lucide-react';

export function App() {
  return (
    <>
      <Heading>
        Ola Mundo
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit porro
        accusamus dolor. Temporibus maiores sunt quae labore neque! Illo
        dignissimos modi reprehenderit a hic facilis est dolor obcaecati numquam
        odio.
      </p>
    </>
  );
}
