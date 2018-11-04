// 리덕스와 연동된 컨테이너 컴포넌트 작성
import React, { Component } from 'react';
import Counter from 'components/Counter';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as counterActions from 'store/modules/counter';

class CounterContainer extends Component {

  handleIncrement = () => {
    this.props.increment();
    // const { CounterActions } = this.props;
    // CounterActions.increment();

  }

  handleDecrement = () => {
    this.props.decrement();
    // const { CounterActions } = this.props;
    // CounterActions.decrement();
  }

  render() {
    const { handleIncrement, handleDecrement } = this;
    const { number } = this.props;

    return (
      <Counter 
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        number={number}
      />
      );
  }
}

export default connect(
  (state) => ({
    number: state.counter.number
  }), 
  (dispatch) => bindActionCreators(counterActions, dispatch)
)(CounterContainer);

