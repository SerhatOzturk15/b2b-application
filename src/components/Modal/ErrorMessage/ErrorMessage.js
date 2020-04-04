import React from 'react';

const ErrorMesage = ({message}) => {
    return(<div style = {{background: '#C0392B', color: 'white', textAlign: 'center'}}>
        {message}
    </div>)
}

export default ErrorMesage