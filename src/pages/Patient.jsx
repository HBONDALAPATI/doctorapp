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
	render()
	{
		let {user}=this.props
		return <div className="container">
			<div className="left">
					<p>
						welcome patient registration success
					</p>
			</div>
			<div className="right">
				<p>name {user.name}</p>
				<p>email {user.email}</p>
				<p>phone {user.phone}</p>
				<p>password {user.password}</p>

			</div>
		</div>
	}
}

export default connect(state=>state,f2)(Doctor);