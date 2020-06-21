import React from 'react';

const CommentDetail = function(Props) {
    return (
        <div className="comment">
        <a href="/" className="avatar">
            <img alt="avatar" src={Props.avatar} />
        </a>
        <div className="content">
            <a href="/" className="author">
                {Props.author}
            </a>
            <div className="metadata">
                <span className="date">{Props.timeAgo}</span>
            </div>
            <div className="text">{Props.content}</div>
        </div>

    </div>

    );
};

export default CommentDetail;