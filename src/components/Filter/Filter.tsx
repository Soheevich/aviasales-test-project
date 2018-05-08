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

const Filter = ({ name, enthusiasmLevel = 1, onIncrement, onDecrement }: Props) => {
  return (
    <div className="hello">
      <div className="greeting">
        filter
      </div>
      <div>
        filter
      </div>
    </div>
  );
};

export default Filter;
