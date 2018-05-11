import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import { Card, Progress } from 'antd';

@inject('dataStore')
@observer
class Days extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="Days">
        <Card style={{ width: 300 }}>
          <div>2018年已经过了：</div>
          <div>
            <Progress
              type="circle"
              percent={this.props.dataStore.pasted}
              status="active"
            />
          </div>
        </Card>
      </div>
    );
  }
}

export default Days;
