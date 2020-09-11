const express = require('express');
const app = express();
const PORT = 4000;

const movie = require('./movie');

app.get('/posts', (req, res) => {
    const posts = movie.posts;
    if (posts) {
        res.json(posts);
    } else {
        res.status(204).json({Alert: `There is no post`});
    }
});

app.get('/reviewers', (req, res) => {
    const reviewers = movie.reviewers;
    if (reviewers) {
        res.json(reviewers);
    } else {
        res.status(204).json({Alert: `There is no reviewer`});
    }
});

app.post('/posts', express.json(), (req, res) => {
    const post = req.body.post;
    movie.addPost(post);
    res.json({reviewers: movie.reviewers, posts: movie.posts});
});

app.post('/reviewers', express.json(), (req, res) => {
    const reviewer = req.body.reviewer;
    if (!(reviewer in movie.reviewers)) {
        movie.addReviewer(reviewer);
    }
    res.json({reviewer, reviewers: movie.reviewers, posts: movie.posts});
});

app.post('/messages', express.json(), (req, res) => {
    const post = req.body.post;
    console.log(post);
    movie.deletePost(post);
    res.json({reviewers: movie.reviewers, posts: movie.posts});
});

app.post('/users', express.json(), (req, res) => {
    const reviewer = req.body.reviewer;
    if (reviewer in movie.reviewers) {
        movie.deleteReviewer(reviewer);
    }
    res.json({reviewer, reviewers: movie.reviewers, posts: movie.posts});
});
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));