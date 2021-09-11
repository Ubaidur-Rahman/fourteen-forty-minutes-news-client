import React from 'react';

const NoMatch = () => {
    return (
        <div className="text-center mt-5">
            <h3>Oppss!!!</h3>
            <br />
            <h5 className="text-danger">Error! 404</h5>
            <p>Try with a valid URL</p>
        </div>
    );
};

export default NoMatch;