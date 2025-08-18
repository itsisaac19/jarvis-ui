import React from 'react';
import { type Article } from 'google-news-scraper';

interface NewsTileProps {
    article: Article;
    className?: string;
}

export const NewsTile = (props: NewsTileProps) => {
    const { article, className } = props;

    return (
        <div className={`news-tile ${className || ''}`}>
            <div>
                <div className='title'>{article.title}</div>
                <div className='meta'>{article.source} - {article.time}</div>
            </div>
        </div>
    );
}