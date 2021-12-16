import React from 'react'

function alert(props) {
    return (
        <div>
        <button onClick={() => props.alertMyInput(`we are struggling with this alert`)}>
        ClickMe
        </button>     
        </div>
    )
}



export default alert
