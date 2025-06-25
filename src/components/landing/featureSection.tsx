import React from 'react';

interface FeatureSectionProps {
    step: number;
    title: string;
    subtitle: string;
    description: string;
}

const FeatureSection = ({ step, title, subtitle, description } : FeatureSectionProps) => {
    return (
        <div className="mt-10">
            <h1 className="text-4xl">
                {step}. {title}
            </h1>
            <p className="text-xl mt-2 max-w-4xl">
                <span className="italic">{subtitle} </span>
                {description}
            </p>
        </div>
    );
};

export default FeatureSection;