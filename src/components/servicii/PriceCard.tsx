interface PriceCardProps {
    label: string;
    sublabel?: string;
    price: number;
    currency?: string;
}

//hover:border-cyan-400/40 hover:bg-white/[0.05] transition-all duration-200

export function PriceCard({ label, sublabel, price, currency = "€" }: PriceCardProps) {
    return (
        <div className="items-center rounded-2xl border border-cyan-400/20 bg-neutral-950/70 px-5 py-4 flex flex-col gap-1 ">
            <span className="font-outfit text-white/90  font-semibold">{label}</span>
            {sublabel && (
                <span className="font-outfit text-white/50 ">{sublabel}</span>
            )}
            <span className="font-rubik text-cyan-300 text-xl font-bold mt-1">
                {price} {currency}
            </span>
        </div>
    );
}
