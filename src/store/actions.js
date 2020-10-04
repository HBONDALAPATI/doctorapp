export function save()
{
	return dispatch=>dispatch({type:"save all"})
}
export function logout()
{
	return dispatch=>dispatch({type:"logout all"})
}
export function login1(ob)
{
	return dispatch=>dispatch({type:"doctor login",payload:ob})
}
export function login2(ob)
{
	return dispatch=>dispatch({type:"patient login",payload:ob})
}
export function signup(ob)
{
	return dispatch=>dispatch({type:"patient signup",payload:ob})
}
