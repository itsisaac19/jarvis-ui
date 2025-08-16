import { ReactNode } from 'react';

interface GridItemProps {
    children: ReactNode;
    className?: string;
    area?: string; // Optional area prop for grid layout
}

export const GridItem = (props: GridItemProps) => {
    const { children, className } = props;

    return (
        <div className={`grid-item ${className || ''}`} style={{ gridArea: props.area }}>
            {children}
        </div>
    );
};