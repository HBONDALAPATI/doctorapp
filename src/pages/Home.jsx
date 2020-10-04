import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as f2 from '../store/actions';


class Home extends Component
{
	state={
		ob1:{email:"lalit@gmail.com",password:"lalit"},
		ob2:{name:"",email:"",password:"",phone:""}
	}

	input(col1,col2,e)
	{
		let val=e.target.value.trim()
		let state=this.state
		state[col1][col2]=val
		this.setState(state)
	}

	constructor(props)
	{
		super(props)
		this.login1=this.login1.bind(this)
		this.login2=this.login2.bind(this)
		this.signup=this.signup.bind(this)
	}

	signup(e)
	{
		e.preventDefault()
		let {b}=this.props
		let {email}=this.state.ob2
		if(b.some(x=>x.email===email))
		{
			alert("you are already registered kindly login to continue")
		}
		else
		{
			this.props.signup(this.state.ob2)
			this.props.save()

		}
	}
	login1(e)
	{
		e.preventDefault()
		let {a}=this.props
		let {email,password}=this.state.ob1
		if(a.some(x=>x.email==email &&x.password===password))
		{
			this.props.login1(a.find(x=>x.email==email &&x.password===password))
			this.props.save()
			this.props.history.push("/doctor")
		}
		else
		{
			alert("failed to login as doctor")
		}
	}
	
	login2(e)
	{
		e.preventDefault()
		let {b}=this.props
		let {email,password}=this.state.ob1
		if(b.some(x=>x.email==email &&x.password===password))
		{
			this.props.login2(this.state.ob1)
			this.props.save()
			this.props.history.push("/patient")
		}
		else
		{
			alert("failed to login as patient")
		}
	}
	
	render()
	{
		let {ob1,ob2}=this.state
		let {a,b}=this.props
		return <div className="home">
				<form onSubmit={this.login1}>
					<h1>Doctor login</h1>
					<p>username</p>
					<input value={ob1.email} onChange={this.input.bind(this,"ob1","email")} placeholder="email address" />
					<p>password</p>
					<input value={ob1.password} onChange={this.input.bind(this,"ob1","password")} placeholder="your password" />
					<button onClick={this.login1}>Doctor Panel</button>
					<button onClick={this.login2}>Patient Panel</button>
				</form>
				<form onSubmit={this.signup}>
					<h1>Patient Registration</h1>
					<p>name</p>
					<input value={ob2.name} onChange={this.input.bind(this,"ob2","name")} placeholder="your name" />
					<p>email</p>
					<input value={ob2.email} onChange={this.input.bind(this,"ob2","email")} placeholder="email address" />
					<p>phone</p>
					<input value={ob2.phone} onChange={this.input.bind(this,"ob2","phone")} placeholder="your phone" />
					
					<p>password</p>
					<input value={ob2.password} onChange={this.input.bind(this,"ob2","password")} placeholder="your password" />
					<button>Become a member</button>
				</form>
				
		</div> 
	}
}

export default connect(state=>state,f2)(Home);