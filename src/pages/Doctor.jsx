import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as f2 from '../store/actions';


class Doctor extends Component
{
	state={status:true,ob:{name:"",email:"",phone:"",password:""}}

	componentDidMount()
	{
		let {role}=this.props

		if(role==="")
		{
			this.props.history.push("/")
		}
	}
	_status(s)
	{
		this.setState({status:s})
	}
	set(x)
	{
		this.setState({ob:x})
	}
	render()
	{
		let {b}=this.props
		let {ob}=this.state
		let {status}=this.state
		return <div className="container">
			<div className={status?'left':';left active'}>
				{b.map(x=>
					<p onClick={this.set.bind(this,x)} key={x.email}>{x.name}</p>
				)}
			</div>
			<div className="right">
				<button onClick={this._status.bind(this,!status)}> <i className="fa fa-bars"></i> </button> <h1>Currently Editing</h1>
				<p>name</p>
				<input name="name" placeholder="name" value={ob.name} />
				<p>email</p>
				<input name="email" placeholder="email" value={ob.email} />
				<p>phone</p>
				<input name="phone" placeholder="phone" value={ob.phone} />
				<p>password</p>
				<input name="password" placeholder="password" value={ob.password} />

			</div>
		</div>
	}
}

export default connect(state=>state,f2)(Doctor);