const movie = {
    reviewers: {
        "GREEN BOOK": "GREEN BOOK",
        "THE AVENGERS": "THE AVENGERS",
        "DYING TO SURVIVE": "DYING TO SURVIVE",
        "SPIDER-MAN": "SPIDER-MAN",
        "SEARCHING" : "SEARCHING"
    },
    posts: [{
        reviewer: "GREEN BOOK",
        description: "Green Book is a 2018 American biographical comedy-drama film directed by Peter Farrelly. Set in 1962, the film is inspired by the true story of a tour of the Deep South by African American classical and jazz pianist Don Shirley (Mahershala Ali) and Italian American bouncer Frank Vallelonga (Viggo Mortensen) who served as Shirley's driver and bodyguard. ",
        imageLink: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556105260143&di=5656855cc2de98d134d5e9a6e2265c23&imgtype=0&src=http%3A%2F%2Fupload-images.jianshu.io%2Fupload_images%2F6340526-df2711592afad3eb.jpg"
    }, {
        reviewer: "THE AVENGERS",
        description: "Marvel's The Avengers[6] (classified under the name Marvel Avengers Assemble in the United Kingdom and Ireland),[3][7] or simply The Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the same name, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures.",
        imageLink: "https://img1.grunge.com/img/gallery/why-marvel-changed-how-the-avengers-looked/-1484339519.jpg"
    }, {
        reviewer: "DYING TO SURVIVE",
        description: "Dying to Survive is a 2018 Chinese comedy-drama film[3] directed by Wen Muye in his feature film debut. The film is based on the real-life story of Lu Yong (陆勇), a Chinese leukemia patient who smuggled cheap but unproven cancer medicine from India for 1,000 Chinese cancer sufferers in 2004.",
        imageLink: "https://img.chainnews.com/material/images/d3c2d8a70e0c2dc960b117c71ef81589.jpg"
    },{
        reviewer: "SPIDER-MAN",
        description: "Spider-Man is a fictional superhero created by writer-editor Stan Lee and writer-artist Steve Ditko. He first appeared in the anthology comic book Amazing Fantasy #15 (August 1962) in the Silver Age of Comic Books. ",
        imageLink: "https://insomniac.games/wp-content/uploads/2018/09/Spider-Man_PS4_Selfie_Photo_Mode_LEGAL.jpg"
    },{
        reviewer: "SEARCHING",
        description: "After his 16-year-old daughter goes missing, a desperate father breaks into her laptop to look for clues to find her.",
        imageLink: "http://genxgrownup.com/wp-content/uploads/2018/09/searching-main-1.jpeg"
    }],
    addPost({reviewer, description, imageLink}) {
        this.posts.push({reviewer, description, imageLink});
    },
    addReviewer(reviewer) {
        this.reviewers[reviewer] = reviewer;
    },
    deletePost(post) {
        for (let i = this.posts.length - 1; i >= 0; --i) {
            if (this.posts[i].reviewer == post.reviewer) {
                this.posts.splice(i, 1);
            }
        }
    },
    deleteReviewer(reviewer) {
        delete this.reviewers[reviewer];
    }
}

 module.exports = movie;