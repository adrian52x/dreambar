export type ServiceId = "cabina-foto" | "platforma-360" | "bar-mobil" | "tort-shoturi" | "turnul-sampanie";

export const services: { id: ServiceId; label: string }[] = [
    { id: "cabina-foto",      label: "Cabina foto" },
    { id: "platforma-360",    label: "Platforma 360°" },
    { id: "bar-mobil",        label: "Bar mobil" },
    { id: "tort-shoturi",     label: "Tort din shoturi" },
    { id: "turnul-sampanie",  label: "Turnul din șampanie" },
];

interface Props {
    active: ServiceId;
    onChange: (id: ServiceId) => void;
}

export function ServiceSelector({ active, onChange }: Props) {
    return (
        <div className="flex flex-wrap gap-2 justify-center w-full">
            {services.map(({ id, label }) => {
                const isActive = active === id;
                return (
                    <button
                        key={id}
                        onClick={() => onChange(id)}
                        className={`font-outfit px-4 py-2 rounded-full text-xs tracking-widest uppercase transition-all duration-200 border whitespace-nowrap
                            ${isActive
                                ? "bg-cyan-400/10 text-cyan-300 border-cyan-400/50 shadow-[0_0_12px_rgba(0,220,220,0.2)]"
                                : "text-white/80 border-white/20 hover:border-cyan-400/50 bg-neutral-950/50"
                            }`}
                    >
                        {label}
                    </button>
                );
            })}
        </div>
    );
}
