import React from 'react';

class Taskbar extends React.Component {
	render() {
		return (<div>
			{this.props.taskbarElements}
		</div>);
	}
}

export default Taskbar;
