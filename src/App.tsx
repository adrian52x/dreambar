import { Instagram } from "lucide-react";
import { useState, useCallback } from "react";
import { Button } from "./components/ui/button";
import { TabContent } from "./components/TabContent";
import { openDreambarWhatsApp } from "./lib/whatsapp";
import { Barman, WhatsApp } from "./icons";
import { TransportationCostDialog } from "./components/TransportationCostDialog";


function App() {
    const [activeTab, setActiveTab] = useState<'bar' | 'photo' | 'both'>('bar');

    // Memoize tab handlers to prevent unnecessary re-renders
    const handleBarTabClick = useCallback(() => setActiveTab('bar'), []);
    const handlePhotoTabClick = useCallback(() => setActiveTab('photo'), []);
    const handleBothTabClick = useCallback(() => setActiveTab('both'), []);

    return (
        <div className="bg-neutral-900">
            <div className="relative min-h-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-10%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
                {/* Hero Content */}
                <div className="z-10 flex flex-col items-center py-4 pb-16">
                    <div className="max-w-3xl text-center">
                        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl text-white">
                            DREAM
                            <span className="text-sky-400">BAR</span>
                        </h1>
                        {/* <p className="mx-auto mb-2 max-w-2xl text-lg text-slate-300">
                            Demo text: Lore ipsum dolor sit amet, consectetur adipiscing elit.
                            Demo text: Lore ipsum dolor sit amet, consectetur adipiscing elit.
                        </p> */}

                    </div>

                    <div className="flex flex-col gap-2 w-[350px] md:w-[600px] md:flex-row md:gap-2">
                        <div className="flex gap-2 md:contents">
                            <Button 
                                variant={"secondary"} 
                                className={`h-24 w-[200px] flex flex-col items-center transition-colors ${
                                    activeTab === 'bar' 
                                        ? 'bg-sky-400 hover:bg-sky-500' 
                                        : 'hover:bg-neutral-300'
                                }`}
                                onClick={handleBarTabClick}
                            >
                                <Barman size={50} />
                                <div className="text-xl">Bar Mobil</div>
                            </Button>
                            <Button 
                                variant={"secondary"} 
                                className={`h-24 w-[200px] flex flex-col items-center transition-colors ${
                                    activeTab === 'photo' 
                                        ? 'bg-sky-400 hover:bg-sky-500' 
                                        : 'hover:bg-neutral-300'
                                }`}
                                onClick={handlePhotoTabClick}
                            >
                                <Instagram size={50} />
                                <div className="text-xl">Cabina Foto</div>
                            </Button>
                        </div>
                        <Button 
                            variant={"secondary"} 
                            className={`h-24 w-full md:w-[205px] flex flex-col items-center transition-colors ${
                                activeTab === 'both' 
                                    ? 'bg-sky-400 hover:bg-sky-500' 
                                    : 'hover:bg-neutral-300'
                            }`}
                            onClick={handleBothTabClick}
                        >
                            <div className="text-xl">Bar & Cabina Foto</div>
                            <div className="text-sm">OFERTE</div>
                        </Button>
                    </div>

                    <TransportationCostDialog />

                    {/* Tab Content */}
                    <TabContent activeTab={activeTab} />

                    {/* Floating WhatsApp Button */}
                    <button
                        onClick={openDreambarWhatsApp}
                        className="fixed bottom-6 right-6 z-50 sm:bg-green-500 sm:p-2 hover:bg-green-600 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-300"
                        aria-label="Contact us on WhatsApp"
                    >
                        <WhatsApp size={36} />
                    </button>
                </div>
            </div>
        </div>
    );
}
    
export default App;
