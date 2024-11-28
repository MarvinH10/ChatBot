import React from "react";

export const Textarea = ({
    placeholder,
    className,
    ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => {
    return (
        <textarea
            placeholder={placeholder}
            className={`textarea w-full rounded-lg border border-gray-300 focus:ring-1 focus:ring-[#0F172A] focus:outline-none px-4 py-2 text-sm text-[#0F172A] shadow-sm resize-none ${className}`}
            {...props}
        />
    );
};
