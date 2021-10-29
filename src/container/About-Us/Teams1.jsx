import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { Row, Col } from 'antd';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { getChildrenToRender, isImg } from './utils';
import axios from "axios";

class Teams1 extends React.PureComponent {
  state = {
    persons: []
  }
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/photos`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  getBlockChildren = (data) =>
    data.map((item, i) => {
      const { titleWrapper, ...$item } = item;
      return (
        <Col key={i.toString()} {...$item}>
          {titleWrapper.children.map(getChildrenToRender)}
        </Col>
      );
    });

  render() {
    const { ...props } = this.props;
    const { dataSource } = props;
    delete props.dataSource;
    delete props.isMobile;
    const listChildren = this.getBlockChildren(dataSource.block.children);
    // const listChildren =   this.state.persons.map(person => <li>{person.url}</li>)
    return (
      <div {...props} {...dataSource.wrapper}>
        <div {...dataSource.page}>
          <div {...dataSource.titleWrapper}>
            {dataSource.titleWrapper.children.map(getChildrenToRender)}
          </div>
          <OverPack {...dataSource.OverPack}>
            <QueueAnim
              type="bottom"
              key="block"
              leaveReverse
              {...dataSource.block}
              component={Row}
            >
              {listChildren}
            </QueueAnim>
          </OverPack>
        </div>
      </div>
    );
  }
}

export default Teams1;
