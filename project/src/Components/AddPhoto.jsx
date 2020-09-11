import React, { Component } from 'react';
import {addName, addPost} from "./services";
import {Link} from 'react-router-dom';

class AddPhoto extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        const imageLink = event.target.elements.link.value;
        const description = event.target.elements.description.value;
        const reviewer = event.target.elements.reviewer.value;
        const post = {
            reviewer: reviewer,
            description: description,
            imageLink: imageLink
        }
        addPost(post)
            .then(({reviewers, posts}) => {
                this.props.onAddPhoto({reviewers, posts});
            });
        addName(reviewer)
            .then(({reviewer, reviewers, posts}) => {
                this.props.onAddName({reviewer, reviewers, posts});
            });
    }

    render() {
        return (
            <div>
                <h1>Add New Movie</h1>
                <div className="form">
                    <form onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            placeholder="Photo Name"
                            name="reviewer"
                            onChange={(e) => {this.props.titleButtonDisable(e)}}
                        />
                        <input
                            type="text"
                            placeholder="Link"
                            name="link"
                            onChange={(e) => {this.props.linkButtonDisable(e)}}
                        />
                        <input
                            type="text"
                            placeholder="Description"
                            name="description"
                            onChange={(e) => {this.props.descriptionButtonDisable(e)}}
                        />
                        <button disabled={!this.props.title || !this.props.description || !this.props.link}>Post</button>
                    </form>
                    <Link className="link" to="/">Back to Home Page</Link>
                </div>
            </div>


        )
    }
}

export default AddPhoto;