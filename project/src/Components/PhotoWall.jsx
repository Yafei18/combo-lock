import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'


function PhotoWall(props) {
    return (
        <div>
            <Link className="addIcon" to="/AddPhoto">Add New Movie</Link>
            {/*<button className="addIcon"  onClick={() => {props.onNavigate()}}>Add New Movie</button>*/}
            <div className="photoGrid">
                { props.posts.map((post, index) => <Photo key={index} post={post} onAddPhoto={props.onAddPhoto} onAddName={props.onAddName}/>) }
            </div>
        </div>
    )
}

PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired,
    onAddPhoto: PropTypes.func.isRequired
}

export default PhotoWall;