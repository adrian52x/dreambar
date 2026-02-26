import { useState } from "react";
import { PageLayout } from "../components/PageLayout";
import { ServiceSelector, type ServiceId } from "../components/servicii/ServiceSelector";
import { CabinaFotoPanel } from "../components/servicii/CabinaFotoPanel";
import { BarMobilPanel } from "../components/servicii/BarMobilPanel";
import { TortShoturiPanel } from "../components/servicii/TortShoturiPanel";
import { ChampagneTowerPanel } from "../components/servicii/ChampagneTowerPanel";
import { Platforma360 } from "../components/servicii/Platforma360";

export function ServiciiPage() {
    const [active, setActive] = useState<ServiceId>("cabina-foto");

    return (
        <PageLayout>
            <div className="max-w-2xl w-full flex flex-col gap-8 px-2">

                {/* Tab selector */}
                <ServiceSelector active={active} onChange={setActive} />


                {/* Panel */}
                {active === "cabina-foto"     && <CabinaFotoPanel />}
                {active === "platforma-360"   && <Platforma360 />}
                {active === "bar-mobil"       && <BarMobilPanel />}
                {active === "tort-shoturi"    && <TortShoturiPanel />}
                {active === "turnul-sampanie" && <ChampagneTowerPanel />}

            </div>
        </PageLayout>
    );
}
