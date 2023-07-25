import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { TailwindElement } from "../shared/tailwind.element";

import style from "../shared/tailwind.global.css";

@customElement("partners-portfolios")
export class PartnersPortfolios extends TailwindElement(style) {

    render() {
        return html`
            <div class=" w-80 max-w-[90%] md:w-[600px] xl:w-[862px] m-auto mb-24 md:mb-32 xl:mb-40">
                <nav class="w-full flex xl:hidden flex-row justify-between items-center mb-6 md:mb-10">
                    <a class="font-jose-600-it text-[9px] md:text-[12px] w-[32%] md:w-[30%] flex items-center justify-center h-7 md:h-9 pt-1 text-primary border-primary border-2 rounded-full" href="./client-codex.html">Client Codex</a>
                    <a class="font-jose-600-it text-[9px] md:text-[12px] w-[32%] md:w-[30%] flex items-center justify-center h-7 md:h-9 pt-1 text-primary border-primary border-2 rounded-full" href="./endorsements.html">Endorsements</a>
                    <a class="font-jose-600-it text-[9px] md:text-[12px] w-[32%] md:w-[30%] flex items-center justify-center h-7 md:h-9 pt-1 text-primary border-primary border-2 rounded-full" href="./partners-&-portfolios.html">Partners & Portfolios</a>
                </nav>
                <h1 class="font-unna-700 text-xl md:text-[39px] md:leading-[45px] xl:text-[50px] xl:leading-[75px] text-center mb-6 md:mb-16 xl:mb-24">PARTNERS & PORTFOLIOS</h1>
                <div class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4">
                    <img class="partners-img" src="/images/partners/PRsignal.png" alt="PR Signal logo" />
                    <img class="partners-img" src="/images/partners/MasContour.png" alt="Mas Contour logo" />
                    <img class="partners-img" src="/images/partners/Lively People.png" alt="Lively People logo" />
                    <img class="partners-img" src="/images/partners/Linkare.png" alt="Linkare logo" />
                    <img class="partners-img" src="/images/partners/Linkage.png" alt="Linkage logo" />
                    <img class="partners-img" src="/images/partners/iEthanol.png" alt="iEthanol logo" />
                    <img class="partners-img" src="/images/partners/Herzfeld Consulting.png" alt="Herzfeld Consulting logo" />
                    <img class="partners-img" src="/images/partners/Flughafenverband.png" alt="Flughafenverband logo" />
                    <img class="partners-img" src="/images/partners/Egemone Consulting.png" alt="Egemone Consulting logo" />
                    <img class="partners-img" src="/images/partners/Casino.png" alt="Casino logo" />
                    <img class="partners-img" src="/images/partners/Complok.png" alt="Complok logo" />
                    <img class="partners-img" src="/images/partners/Anchor 21.png" alt="Anchor 21 logo" />
                    <img class="partners-img md:col-span-3 xl:col-span-1" src="/images/partners/Charin.png" alt="CharIn logo" />
                    <div class="hidden xl:block w-full"></div>
                    <div class="hidden xl:flex flex-row items-center col-span-2 gap-3" aria-hidden="true">
                        <img class="ml-5 w-36" src="/images/partners/EU.jpg" alt="EU logo" />
                        <span class="font-unna-700-it text-[25px] leading-[29px]">Funded by the <br>European Commission</span>
                    </div>
                </div>
            </div>         
        `;
    }
}