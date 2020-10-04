import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as f2 from '../store/actions';


class Header extends Component
{
	logout()
	{
		this.props.logout()
		this.props.save()
	}
	render()
	{
		let {user,role}=this.props
		return <div className="header">
				<Link to="/">home</Link>
				{role==="doctor"&&<Link to="/doctor">doctor {user.name}</Link>}
				{role==="patient"&&<Link to="/patient">patient {user.name}</Link>}
				{role&&<Link onClick={this.logout.bind(this)} to="/">logout</Link>}
		</div>
	}
}

export default connect(state=>state,f2)(Header);