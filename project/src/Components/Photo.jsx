import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {addName, addPost, removeName, removePost} from "./services";

class Photo extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        const imageLink = this.props.post.imageLink;
        const description = this.props.post.description;
        const reviewer = this.props.post.reviewer;
        const post = {
            reviewer: reviewer,
            description: description,
            imageLink: imageLink
        }
        removePost(post)
            .then(({reviewers, posts}) => {
                this.props.onAddPhoto({reviewers, posts});
            });
        removeName(reviewer)
            .then(({reviewer, reviewers, posts}) => {
                this.props.onAddName({reviewer, reviewers, posts});
            });

    }
    render() {
        const post = this.props.post;
        return <figure className="figure">
            <img className="photo" src={post.imageLink} alt={post.description}/>
            <figcaption>
                <p>{post.description}</p>
            </figcaption>
            <div className="button-container">
                <button className="remove-button" onClick={this.handleSubmit}>Remove
                </button>
            </div>
        </figure>
    }
}

Photo.propTypes = {
    post: PropTypes.object.isRequired,
    onAddPhoto: PropTypes.func.isRequired
}

export default Photo;