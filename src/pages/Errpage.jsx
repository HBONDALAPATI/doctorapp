import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as f2 from '../store/actions';


class Errpage extends Component
{
	render()
	{
		return <div>
			Errpage
		</div>
	}
}

export default connect(state=>state,f2)(Errpage);