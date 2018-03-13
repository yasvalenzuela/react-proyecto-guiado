import React from 'react';
import PropTypes from 'prop-types';

/*const Location = () => (
    <div>
        <h1>City</h1>
    </div>
)

const Location = (props) => {
    const city = props.city;
    return (
        <div> 
            <h1>{city}</h1>
        </div>
    )
}
*/

const Location = ({city}) => (
    <div> 
        <h1>{city}</h1>
    </div>
)

Location.propTypes = {
    city: PropTypes.string.isRequired,
}

export default Location;