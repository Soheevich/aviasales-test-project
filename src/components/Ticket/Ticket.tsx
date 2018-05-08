import * as React from 'react';
import './Hello.css';

import { configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export interface Props {
  // name: string;
  // enthusiasmLevel?: number;
  // onIncrement?: () => void;
  // onDecrement?: () => void;
}

const Ticket = ({ name, enthusiasmLevel = 1, onIncrement, onDecrement }: Props) => {
  return (
    <div className="hello">
      <div className="greeting">
        Ticket
      </div>
      <div>
        Ticket
      </div>
    </div>
  );
};

export default Ticket;
