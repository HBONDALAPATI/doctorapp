import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as f2 from '../store/actions';


class Footer extends Component
{
	render()
	{
		return <div className="footer">
			create by Hari Bondalpati
		</div>
	}
}

export default connect(state=>state,f2)(Footer);