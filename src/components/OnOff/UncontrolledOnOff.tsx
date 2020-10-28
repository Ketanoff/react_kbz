import React, {useState} from 'react'

type PropsType = {
	onChange: (on: boolean) => void
}

function UncontrolledOnOff (props: PropsType) {
	
	let [on, setOn] = useState (false)
	
	const onStyle = {
		// marginTop: '5px',
		display : 'inline-block',
		width : '40px',
		height : '22px',
		border : '1px solid red',
		marginLeft : '5px',
		backgroundColor : on ? 'green' : 'white'
	}
	const offStyle = {
		// padding: '2px',
		display : 'inline-block',
		width : '40px',
		height : '22px',
		border : '1px solid black',
		marginLeft : '5px',
		backgroundColor : on ? 'white' : 'red'
	}
	const indicatorStyle = {
		
		display : 'inline-block',
		width : '10px',
		height : '10px',
		borderRadius : '5px',
		border : '1px solid black',
		marginLeft : '5px',
		marginBottom : '3px',
		backgroundColor : on ? 'green' : 'red'
	}
	
	const onClicked = () => {
		setOn (true)
		props.onChange (true)
	}
	const offClicked = () => {
		setOn (false)
		props.onChange (false)
	}
	
	return <div>
		<div style={onStyle} onClick={onClicked}>On</div>
		<div style={offStyle} onClick={offClicked}>Off</div>
		<div style={indicatorStyle}></div>
	</div>
}

export default UncontrolledOnOff
