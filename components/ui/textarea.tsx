import React from "react";

export const Textarea = ({ placeholder, className, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => {
    return (
        <textarea
            placeholder={placeholder}
            className={`textarea ${className}`}
            {...props}
        />
    );
};
