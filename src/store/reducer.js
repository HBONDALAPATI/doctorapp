let intialState={
	a:[{name:"admin",email:"admin@gmail.com",phone:"1234567890",password:"admin"}],
	b:[],
	user:{id:0,name:"",email:"",phone:"",password:""},
	role:""
}

if(localStorage.getItem("state"))
{
	intialState=JSON.parse(localStorage.getItem("state"))
}


const reducer=function(state=intialState,action){
	switch(action.type)
	{
		case "logout all":
			return {
					...state,
					user:{id:0,name:"",email:"",phone:"",password:""},
					role:""
			}
		case "save all":
			localStorage.setItem("state",JSON.stringify(state))
			return state
		case "doctor login":
			return {
				...state,
				role:"doctor",
				user:action.payload
			}
		case "patient login":
			return {
				...state,
				role:"patient",
				user:action.payload
			}
		
		case "patient signup"	:
			return {
				...state,
				b:[...state.b,action.payload]
			}
		default:
			return state
	}
}

export default reducer;