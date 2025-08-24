/* eslint-disable react/jsx-pascal-case */
import { CustomIcons } from "src/Assets/Icons/Icons";
import "../Common/css/stat_card.css";

interface StatCardProps {
    title: string;
    total: string;
    percentage: string;
    footerText: string;
    isTrendingUp: boolean;
}

export default function Stat_card({ title, total, percentage, footerText, isTrendingUp }: StatCardProps) {
    return (
        <div className="stat-outer">
            <div className="stat-header">
                <span className="stat-title">{title}</span>
            </div>
            <div className="stat-content">
                <span className="stat-total">{total}</span>
                {isTrendingUp ? <Percentage_card_up percentage={percentage} /> : <Percentage_card_down percentage={percentage} />}
            </div>
            <div className="space-bar"></div>
            <div className="stat-content">
                <span className="stat-footer">{footerText}</span>
            </div>
        </div>
    );
}

interface PercentageCardProps {
    percentage: string;
}

export function Percentage_card_up({ percentage }: PercentageCardProps) {
    return (
        <div className="p-card-outer">
            <span className="up-icon">{CustomIcons.TrendingUp}</span>
            <span className="percentage-text">{percentage}</span>
        </div>
    );
}

export function Percentage_card_down({ percentage }: PercentageCardProps) {
    return (
        <div className="p-card-outer down">
            <span className="down-icon">{CustomIcons.TrendingDown}</span>
            <span className="percentage-text down-text">{percentage}</span>
        </div>
    );
}
