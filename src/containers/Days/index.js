import React, { Component } from 'react';
import dayjs from 'dayjs';

class Days extends Component {
  componentDidMount() {
    let f = dayjs().format();
    console.log(f);
  }

  render() {
    return <div className="Days">123</div>;
  }
}

export default Days;
