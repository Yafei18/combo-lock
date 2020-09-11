import React from 'react';
import Photo from './Photo';

function ReviewerWall(props) {
    return (
        <div className="reviewerWall">
            <h2>Movie List</h2>
            <ul className="reviewers">
                {Object.keys(props.reviewers).map(reviewer => {
                    return (
                        <li key={reviewer}>
                            <div className="reviewer">
                                <span className="reviewerName">{reviewer}</span>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}


export default ReviewerWall;