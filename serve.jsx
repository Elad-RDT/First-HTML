import React from 'react';

class Serve extends React.Component {
  state = {
    showMenu: false
  };

  handleToggle = () => {
    this.setState(prevState => ({
      showMenu: !prevState.showMenu
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.handleToggle}>
          Menu
        </button>
        {this.state.showMenu && (
          <ul>
            {this.props.items.map(item => (
              <li key={item.label}>
                {item.label}
                {item.items && <Serve items={item.items} />}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
