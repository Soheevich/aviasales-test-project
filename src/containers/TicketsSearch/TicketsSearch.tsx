import * as React from 'react';

import Filter from '../../components/Filter/Filter';
import Ticket from '../../components/Ticket/Ticket';
import * as actions from '../../store/actions/';
import { StoreState } from '../../types/';
import { connect, Dispatch } from 'react-redux';

class TicketsSearch extends React.Component {

}

export function mapStateToProps({ enthusiasmLevel, languageName }: StoreState) {
  return {
    enthusiasmLevel,
    name: languageName
  };
}

export function mapDispatchToProps(
  dispatch: Dispatch<actions.EnthusiasmAction>
) {
  return {
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    onDecrement: () => dispatch(actions.decrementEnthusiasm())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketsSearch);
