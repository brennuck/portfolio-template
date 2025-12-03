import { useState, useEffect, useRef } from "react";
import { siteConfig } from "../../data";
import "./StatusIndicator.css";

type StatusType = "searching" | "open" | "closed";

const STATUS_CONFIG: Record<StatusType, { color: string; label: string }> = {
    searching: { color: "#22c55e", label: "Actively searching for next opportunity" },
    open: { color: "#eab308", label: "Open to offers" },
    closed: { color: "#ef4444", label: "Closed to offers" },
};

interface StatusIndicatorProps {
    showLabel?: boolean;
    size?: "small" | "default";
}

const StatusIndicator = ({ showLabel = false, size = "default" }: StatusIndicatorProps) => {
    const [isTooltipVisible, setIsTooltipVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent | TouchEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setIsTooltipVisible(false);
            }
        };

        if (isTooltipVisible) {
            document.addEventListener("mousedown", handleClickOutside);
            document.addEventListener("touchstart", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("touchstart", handleClickOutside);
        };
    }, [isTooltipVisible]);

    if (!siteConfig.availabilityStatus) return null;

    const status = (siteConfig.status as StatusType) || "open";
    const config = STATUS_CONFIG[status];
    const displayLabel = siteConfig.statusMessage || config.label;
    const shouldPulse = status === "searching";

    const handleTap = () => {
        setIsTooltipVisible((prev) => !prev);
    };

    return (
        <div
            ref={ref}
            className={`status-indicator status-indicator--${size} ${
                isTooltipVisible ? "status-indicator--active" : ""
            }`}
            onClick={handleTap}
        >
            <span
                className={`status-indicator__dot ${shouldPulse ? "status-indicator__dot--pulse" : ""}`}
                style={{ backgroundColor: config.color }}
            />
            {showLabel && <span className="status-indicator__label">{displayLabel}</span>}
            <span className="status-indicator__tooltip">{displayLabel}</span>
        </div>
    );
};

export default StatusIndicator;
