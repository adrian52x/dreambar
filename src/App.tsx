import { Instagram } from "lucide-react";
import { useState, useCallback, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "./components/ui/button";
import { TabContent } from "./components/TabContent";
import { openDreambarWhatsApp } from "./lib/whatsapp";
import { Barman, WhatsApp } from "./icons";
import { TransportationCostDialog } from "./components/TransportationCostDialog";


function App() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [activeTab, setActiveTab] = useState<'bar' | 'photo' | 'both'>('bar');

    // Initialize tab from URL on component mount
    useEffect(() => {
        const tabParam = searchParams.get('tab');
        if (tabParam === 'photo' || tabParam === 'both') {
            setActiveTab(tabParam);
        }
    }, [searchParams]);

    // Helper function to update both state and URL
    const updateActiveTab = useCallback((tab: 'bar' | 'photo' | 'both') => {
        setActiveTab(tab);
        setSearchParams(tab === 'bar' ? {} : { tab });
    }, [setSearchParams]);

    // Memoize tab handlers to prevent unnecessary re-renders
    const handleBarTabClick = useCallback(() => updateActiveTab('bar'), [updateActiveTab]);
    const handlePhotoTabClick = useCallback(() => updateActiveTab('photo'), [updateActiveTab]);
    const handleBothTabClick = useCallback(() => updateActiveTab('both'), [updateActiveTab]);
    //relative min-h-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-10%,rgba(120,119,198,0.3),rgba(255,255,255,0))]
    return (
        <div className="bg-neutral-950">
            <div>
                {/* Hero Content */}
                <div className="z-10 flex flex-col items-center py-4 pb-16">
                    <div className="max-w-3xl text-center">
                        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl text-white">
                            DREAM
                            <span className="text-sky-400">BAR</span>
                        </h1>
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
