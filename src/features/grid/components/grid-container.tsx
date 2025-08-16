import { ReactNode } from 'react';

interface GridContainerProps {
    children: ReactNode;
    className?: string;
}

export const GridContainer = (props: GridContainerProps) => {
    const { children, className } = props;

    return (
        <div className={`grid-container ${className || ''}`}>
            {children}
        </div>
    );
};