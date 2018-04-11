import React, { Component } from 'react';
import shortid from 'shortid';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import menuIcon from '../../assets/menu.svg';
import './styles.scss';

const MenuItems = [
  {
    itemName: 'Redeem Prepaid Card',
    itemUrl: '#!redeem-card',
  },
  {
    itemName: 'Login',
    itemUrl: '#!login',
  },
];

class Menu extends Component {
  constructor() {
    super();

    this.state = {
      open: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const { className } = this.props;
    const cls = classnames('menu', className, { 'menu-open': this.state.open });

    return (
      <div className="menu-container">
        <button className="menu-button" onClick={this.handleClick}>
          <img src={menuIcon} alt="menu icon" />
        </button>
        <ul className={cls}>
          {
            MenuItems.map((item) => {
              return (
                <li key={shortid.generate()}>
                  <a href={item.itemUrl}>{item.itemName}</a>
                </li>
              );
            })
          }
          <li><button className="button button-red button-small">Join Now</button></li>
        </ul>
      </div>
    );
  }
}

Menu.defaultProps = {
  className: '',
};

Menu.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
};


export default Menu;
