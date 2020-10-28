import React from 'react';

type PropsType = {
	value: boolean
	onClick: (value: boolean) => void
}

function OnOff (props: PropsType) {
	
	
	const onStyle = {
		// marginTop: '5px',
		display : 'inline-block',
		width : '40px',
		height : '22px',
		border : '1px solid red',
		marginLeft : '5px',
		backgroundColor : props.value ? 'green' : 'white'
	};
	const offStyle = {
		// padding: '2px',
		display : 'inline-block',
		width : '40px',
		height : '22px',
		border : '1px solid black',
		marginLeft : '5px',
		backgroundColor : props.value ? 'white' : 'red'
	};
	const indicatorStyle = {
		
		display : 'inline-block',
		width : '10px',
		height : '10px',
		borderRadius : '5px',
		border : '1px solid black',
		marginLeft : '5px',
		marginBottom : '3px',
		backgroundColor : props.value ? 'green' : 'red'
	};
	
	return <div>
		<div style={onStyle}
			 onClick={() => {props.onClick (true);}}
		>On
		</div>
		<div style={offStyle} onClick={() => {
			props.onClick (false);
		}}>Off
		</div>
		<div style={indicatorStyle}></div>
	</div>;
}

export default OnOff;
