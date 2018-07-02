import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button } from 'antd';

import './index.css';
import * as Actions from '../../store/actions/counter';
import produce from 'immer';

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators(Actions, dispatch)
  };
}

class Dashboard extends Component {
  state = { num: 1 };

  onClick() {
    this.setState(
      produce(draft => {
        draft.num += 1;
      })
    );

    console.log(this.state);
  }

  render() {
    return (
      <div className="Dashboard">
        <Button type="primary" onClick={this.onClick.bind(this)}>
          shepi
        </Button>

        <p>{this.props.counter.num}</p>
        <Button className="add_btn" onClick={this.props.add}>
          +
        </Button>
        <Button className="dec_btn" onClick={this.props.minus}>
          -
        </Button>
        <Button className="dec_btn" onClick={this.props.asyncAdd}>
          async
        </Button>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
