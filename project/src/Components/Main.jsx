import React, { Component } from 'react';
import Title from './Title';
import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto';
import {Route} from 'react-router-dom';
import {getPosts, getReviewers} from "./services";
import ReviewerWall from './ReviewerWall';

class Main extends Component {
    constructor() {
        super();
        this.state = {
            reviewers:{},
            posts: [],
            link: "",
            description: "",
            title: ""

        }
        this.fetchPosts();
        this.fetchPosts = this.fetchPosts.bind(this);
        this.fetchReviewers();
        this.fetchReviewers = this.fetchReviewers.bind(this);
        this.addPhoto = this.addPhoto.bind(this);
        this.addName = this.addName.bind(this);
        this.linkButtonDisable = this.linkButtonDisable.bind(this);
        this.descriptionButtonDisable = this.descriptionButtonDisable.bind(this);
        this.titleButtonDisable = this.titleButtonDisable.bind(this);
    }

    linkButtonDisable(event) {
        this.setState({link: event.target.value})
    }

    descriptionButtonDisable(event) {
        this.setState({description: event.target.value})
    }

    titleButtonDisable(event) {
        this.setState({title: event.target.value})
    }

    addPhoto({reviewers, posts}) {
        this.setState({reviewers: reviewers, posts: posts});
    }

    addName({reviewer, reviewers, posts}) {
        this.setState({reviewers: reviewers});
    }

    fetchReviewers() {
        getReviewers().then(reviewers => {
            this.setState({reviewers: reviewers});
        });
    }

    fetchPosts() {
        getPosts().then(posts => {
            this.setState({posts: posts});
        });
    }

    fetchAllReviewersAndPosts() {
        this.fetchReviewers();
        this.fetchPosts();
    }

    componentDidMount() {
        this.fetchAllReviewersAndPosts();
        setInterval(() => {this.fetchAllReviewersAndPosts()}, 2000);
    }


    render() {
        return(
            <div>
                <Route exact path="/" render={({history}) => (
                    <div>
                        <Title title={'MovieShareForum'}/>
                        <ReviewerWall reviewers={this.state.reviewers}/>
                        <PhotoWall posts={this.state.posts} onAddPhoto={(addedPost) => {
                            this.addPhoto(addedPost);
                            history.push('/');
                        }} onAddName={this.addName}/>

                    </div>
                )}/>

                <Route path="/AddPhoto" render={({history}) => (
                    <AddPhoto onAddPhoto={(addedPost) => {
                        this.addPhoto(addedPost);
                        history.push('/');
                    }} onAddName={this.addName} link={this.state.link} description={this.state.description} title={this.state.title}
                              linkButtonDisable={this.linkButtonDisable} descriptionButtonDisable={this.descriptionButtonDisable}
                              titleButtonDisable={this.titleButtonDisable}
                    />
                )}/>

            </div>
        )
    }
}

export default Main;