import { useEffect } from 'react';
import { useNewsStore } from '../stores/NewsStore';
import { GridContainer } from '../../../features/grid/components/grid-container';
import { NewsTile } from './news-tile';

export const NewsWidget = () => {
    const { data, fetchNews } = useNewsStore();

    useEffect(() => {
        fetchNews();
    }, [fetchNews]);

    if (!data) {
        return <></>;
    }

    // Rest of your component...
    return (
        <div className="news-widget">
            <GridContainer className="news-grid">
                {data.map((article, index) => (
                    <NewsTile key={index} article={article} className="news-tile-wrapper" /> 
                ))}
            </GridContainer>
        </div>
    );
}