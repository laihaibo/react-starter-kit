import * as React from "react";

import styles from "./index.module.css";

interface Props {}
interface State {
  name: string;
}

class Index extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      name: "TSX"
    };
  }

  componentDidMount() {
    console.log(
      "%cCreated by Lai Haibo(2466006555@qq.com)",
      " text-shadow: 0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);font-size:2.5em;font-family: Microsoft Yahei;"
    );
  }

  render() {
    // return <div>HELLO {this.state.name}</div>;
    return (
      <React.Fragment>
        <span>Hello </span>
        <span className={styles.NAME}>{this.state.name}</span>
      </React.Fragment>
    );
  }
}

export default Index;
