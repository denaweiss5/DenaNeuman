import React from "react";
import { Menu } from "semantic-ui-react";

export default class Navbar extends React.Component {
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    return (
      <Menu size="massive" color="violet" inverted className="menu">
        <Menu.Item name="HOME" onClick={this.handleItemClick} />
        <Menu.Item name="ABOUT" onClick={this.handleItemClick} />
        <Menu.Item name="PROJECTS" onClick={this.handleItemClick} />
        <Menu.Item name="BLOG" onClick={this.handleItemClick} />
        <Menu.Item name="CONTACT" onClick={this.handleItemClick} />
      </Menu>
    );
  }
}
