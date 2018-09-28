import React from 'react';

const Post = ({location, match}) => {
    // console.log('Post', match);
    return (
        <p>
            포스터 #{match.params.id}
        </p>
    );
};

export default Post;