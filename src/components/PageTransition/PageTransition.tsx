import { ReactNode, Children, isValidElement, cloneElement } from "react";
import "./PageTransition.css";

interface PageTransitionProps {
    children: ReactNode;
    className?: string;
}

const PageTransition = ({ children, className = "" }: PageTransitionProps) => {
    // Clone children and add staggered animation delays
    const animatedChildren = Children.map(children, (child, index) => {
        if (isValidElement(child)) {
            return cloneElement(child, {
                ...child.props,
                className: `${child.props.className || ""} page-transition__item`,
                style: {
                    ...child.props.style,
                    "--stagger-delay": `${index * 0.08}s`,
                },
            } as React.HTMLAttributes<HTMLElement>);
        }
        return child;
    });

    return (
        <div className={`page-transition ${className}`}>
            {animatedChildren}
        </div>
    );
};

export default PageTransition;

