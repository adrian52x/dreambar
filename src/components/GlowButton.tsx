interface GlowButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    size?: "sm" | "md";
}

export function GlowButton({ children, onClick, className = "", size = "md" }: GlowButtonProps) {
    const base =
        "font-outfit rounded-full bg-neutral-900/80 border border-cyan-400/60 text-white font-light uppercase tracking-widest backdrop-blur-sm shadow-[0_0_18px_rgba(0,220,220,0.25)] transition-all duration-300 hover:border-cyan-300 hover:shadow-[0_0_36px_rgba(0,220,220,0.5)] hover:scale-105 active:scale-95";

    const sizes = {
        md: "px-[3vw] py-[1.2vh] text-[clamp(0.85rem,2vw,1.25rem)] tracking-[0.2em] shadow-[0_0_28px_rgba(0,220,220,0.35),inset_0_0_20px_rgba(0,0,0,0.5)]",
        sm: "w-full max-w-[280px] py-[1.1vh] text-[clamp(0.85rem,2vw,1.1rem)]",
    };

    return (
        <button onClick={onClick} className={`${base} ${sizes[size]} ${className}`}>
            {children}
        </button>
    );
}
