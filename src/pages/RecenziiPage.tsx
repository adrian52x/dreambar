import { useState } from "react";
import { PageLayout } from "../components/PageLayout";

const reviews = Array.from({ length: 9 }, (_, i) => `/images/reviews/review${i + 1}.jpeg`);

// Chaotic rotations per card — alternating directions with varied angles
const rotations = [-4, 3, -6, 5, -2, 7, -5, 2, -3];

// Split into 3 columns for masonry
const columns = [
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
];

export function RecenziiPage() {
    const [lightbox, setLightbox] = useState<string | null>(null);

    return (
        <PageLayout>
            {/* Lightbox */}
            {lightbox && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
                    onClick={() => setLightbox(null)}
                >
                    <div className="relative max-w-lg w-full" onClick={(e) => e.stopPropagation()}>
                        <img src={lightbox} alt="Recenzie" className="w-full h-auto rounded-2xl shadow-2xl" />
                        <button
                            onClick={() => setLightbox(null)}
                            className="absolute top-3 right-3 bg-black/60 hover:bg-black/90 text-white rounded-full w-8 h-8 flex items-center justify-center transition-colors text-sm"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}

            <div className="max-w-2xl w-full flex flex-col gap-8 px-2">

                {/* Header */}
                <div className="flex flex-col gap-2 text-center">
                    <p className="font-outfit text-white/80 text-xl">
                        Ce spun clienții noștri 🤍
                    </p>
                </div>

                {/* Masonry grid */}
                <div className="grid grid-cols-3 gap-4 sm:gap-6 items-start">
                    {columns.map((col, ci) => (
                        <div
                            key={ci}
                            className="flex flex-col gap-4 sm:gap-6"
                            style={{ marginTop: ci === 1 ? "2.5rem" : ci === 2 ? "1.2rem" : "0" }}
                        >
                            {col.map((idx) => (
                                <div
                                    key={idx}
                                    onClick={() => setLightbox(reviews[idx])}
                                    className="relative overflow-hidden rounded-xl border border-white/10 shadow-lg cursor-pointer transition-all duration-300 hover:border-cyan-400/40 hover:shadow-cyan-400/10 hover:shadow-xl hover:z-10"
                                    style={{
                                        transform: `rotate(${rotations[idx]}deg)`,
                                        transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
                                    }}
                                    onMouseEnter={(e) => (e.currentTarget.style.transform = "rotate(0deg) scale(1.03)")}
                                    onMouseLeave={(e) => (e.currentTarget.style.transform = `rotate(${rotations[idx]}deg)`)}
                                >
                                    <img
                                        src={reviews[idx]}
                                        alt={`Recenzie ${idx + 1}`}
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

            </div>
        </PageLayout>
    );
}


