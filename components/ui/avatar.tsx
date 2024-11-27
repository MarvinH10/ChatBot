export const Avatar = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return <div className={`avatar ${className}`}>{children}</div>;
};

export const AvatarImage = ({ src }: { src: string }) => {
    return <img src={src} alt="Avatar" className="avatar-image" />;
};

export const AvatarFallback = ({ children }: { children: React.ReactNode }) => {
    return <div className="avatar-fallback">{children}</div>;
};
