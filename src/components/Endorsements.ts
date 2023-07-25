import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { TailwindElement } from "../shared/tailwind.element";

import style from "../shared/tailwind.global.css";

@customElement("my-endorsements")
export class Endorsements extends TailwindElement(style) {

    render() {
        return html`
            <div class=" w-80 max-w-[90%] md:w-[600px] xl:w-[862px] m-auto mb-24 md:mb-32 xl:mb-40">
                <nav class="w-full flex xl:hidden flex-row justify-between items-center mb-6 md:mb-10">
                    <a class="font-jose-600-it text-[9px] md:text-[12px] w-[32%] md:w-[30%] flex items-center justify-center h-7 md:h-9 pt-1 text-primary border-primary border-2 rounded-full" href="./client-codex.html">Client Codex</a>
                    <a class="font-jose-600-it text-[9px] md:text-[12px] w-[32%] md:w-[30%] flex items-center justify-center h-7 md:h-9 pt-1 text-primary border-primary border-2 rounded-full" href="./endorsements.html">Endorsements</a>
                    <a class="font-jose-600-it text-[9px] md:text-[12px] w-[32%] md:w-[30%] flex items-center justify-center h-7 md:h-9 pt-1 text-primary border-primary border-2 rounded-full" href="./partners-&-portfolios.html">Partners & Portfolios</a>
                </nav>
                <h1 class="font-unna-700 text-xl md:text-[39px] md:leading-[45px] xl:text-[50px] xl:leading-[75px] text-center mb-8 md:mb-10 xl:mb-20">ENDORSEMENTS</h1>
                <div class="flex flex-col text-center mb-20 md:mb-28 xl:mb-32">
                    <span class="font-unna-700 text-[15px] md:text-[19px] xl:text-[21px] leading-[18px] md:leading-[22px] xl:leading-[25px] mb-2">Alexander Mohr</span>
                    <span class="font-jose-300-it text-[12px] md:text-[15px] xl:text-[18px] leading-[15px] md:leading-[18px] xl:leading-[22px] mb-4">Executive Director <br>EFFA. European Flavour Association</span>
                    <img class="w-1/4 mx-auto md:hidden" src="/images/endorsements/EFFA.png" alt="logo" aria-hidden="true" />
                    <div class="relative my-8">
                        <img class="w-7 md:w-10 absolute -top-4 left-0 md:left-5 xl:left-10" src="/images/endorsements/left-arrow.svg" alt="left-arrow" aria-hidden="true" />
                        <p class="font-unna-700-it text-[14px] md:text-[18px] xl:text-[21px] leading-[17px] md:leading-[22px] xl:leading-[25px] w-3/4 mx-auto">
                            Time & Place Consulting can only be commended for its ability to understand and tailor its services to the specific client’s needs. <br><br>
                            This was especially the case when we looked for Brexit related information services  to get a sector specific overview and potential scenarios. 
                            The in-depth knowledge on procedures and potential economic consequences that Time & Place provided, was especially helpful in light of fact 
                            that nothing like Brexit has ever existed before.
                        </p>
                        <img class="w-7 md:w-10 absolute right-0 md:right-5 xl:right-10 -bottom-4" src="/images/endorsements/right-arrow.svg" alt="right-arrow" aria-hidden="true" />
                    </div>
                    <img class="w-1/4 max-w-[150px] mx-auto hidden md:block" src="/images/endorsements/EFFA.png" alt="logo" aria-hidden="true" />
                </div>
                <div class="flex flex-col text-center mb-20 md:mb-28 xl:mb-32">
                    <span class="font-unna-700 text-[15px] md:text-[19px] xl:text-[21px] leading-[18px] md:leading-[22px] xl:leading-[25px] mb-2">Jon Bruford</span>
                    <span class="font-jose-300-it text-[12px] md:text-[15px] xl:text-[18px] leading-[15px] md:leading-[18px] xl:leading-[22px] mb-4">Managing Editor <br>Casino International</span>
                    <img class="w-1/2 mx-auto md:hidden" src="/images/endorsements/Casino.png" alt="logo" aria-hidden="true" />
                    <div class="relative my-8">
                        <img class="w-7 md:w-10 absolute -top-4 left-0 md:left-5 xl:left-10" src="/images/endorsements/left-arrow.svg" alt="left-arrow" aria-hidden="true" />
                        <p class="font-unna-700-it text-[14px] md:text-[18px] xl:text-[21px] leading-[17px] md:leading-[22px] xl:leading-[25px] w-3/4 mx-auto">
                            Time & Place Consulting’s team of experienced professionals and its collective tacit knowledge of the EU Affairs eco-system always deliver 
                            cutting-edge analyses for the readers of our print and online publications. 
                            I particularly commend their ability to provide valuable information and impact assessments which allow business to easily understand 
                            political and regulatory landscapes.
                        </p>
                        <img class="w-7 md:w-10 absolute right-0 md:right-5 xl:right-10 -bottom-4" src="/images/endorsements/right-arrow.svg" alt="right-arrow" aria-hidden="true" />
                    </div>
                    <img class="w-1/2 max-w-[250px] mx-auto hidden md:block" src="/images/endorsements/Casino.png" alt="logo" aria-hidden="true" />
                </div>
                <div class="flex flex-col text-center mb-20 md:mb-28 xl:mb-32">
                    <span class="font-unna-700 text-[15px] md:text-[19px] xl:text-[21px] leading-[18px] md:leading-[22px] xl:leading-[25px] mb-2">Pieter Allers</span>
                    <span class="font-jose-300-it text-[12px] md:text-[15px] xl:text-[18px] leading-[15px] md:leading-[18px] xl:leading-[22px] mb-4">President <br>Linkage Western Europe</span>
                    <img class="w-1/2 mx-auto md:hidden" src="/images/endorsements/Linkage.png" alt="logo" aria-hidden="true" />
                    <div class="relative my-8">
                        <img class="w-7 md:w-10 absolute -top-4 left-0 md:left-5 xl:left-10" src="/images/endorsements/left-arrow.svg" alt="left-arrow" aria-hidden="true" />
                        <p class="font-unna-700-it text-[14px] md:text-[18px] xl:text-[21px] leading-[17px] md:leading-[22px] xl:leading-[25px] w-3/4 mx-auto">
                            Cutting through complexity and navigating ambiguity effectively, 
                            T&P Consulting is able to get to the core of issues and present a clear path 
                            towards positive outcomes.
                        </p>
                        <img class="w-7 md:w-10 absolute right-0 md:right-5 xl:right-10 -bottom-4" src="/images/endorsements/right-arrow.svg" alt="right-arrow" aria-hidden="true" />
                    </div>
                    <img class="w-1/2 max-w-[250px] mx-auto hidden md:block" src="/images/endorsements/Linkage.png" alt="logo" aria-hidden="true" />
                </div>
                <div class="flex flex-col text-center mb-20 md:mb-28 xl:mb-32">
                    <span class="font-unna-700 text-[15px] md:text-[19px] xl:text-[21px] leading-[18px] md:leading-[22px] xl:leading-[25px] mb-2">Wouter Lox</span>
                    <span class="font-jose-300-it text-[12px] md:text-[15px] xl:text-[18px] leading-[15px] md:leading-[18px] xl:leading-[22px] mb-4">Secretary General <br>European Fruit Juice Association</span>
                    <img class="w-1/3 mx-auto md:hidden" src="/images/endorsements/AIJN.png" alt="logo" aria-hidden="true" />
                    <div class="relative my-8">
                        <img class="w-7 md:w-10 absolute -top-4 left-0 md:left-5 xl:left-10" src="/images/endorsements/left-arrow.svg" alt="left-arrow" aria-hidden="true" />
                        <p class="font-unna-700-it text-[14px] md:text-[18px] xl:text-[21px] leading-[17px] md:leading-[22px] xl:leading-[25px] w-3/4 mx-auto">
                            I always look forward to an opportunity of working with Time & Place Consulting
                        </p>
                        <img class="w-7 md:w-10 absolute right-0 md:right-5 xl:right-10 -bottom-4" src="/images/endorsements/right-arrow.svg" alt="right-arrow" aria-hidden="true" />
                    </div>
                    <img class="w-1/3 max-w-[200px] mx-auto hidden md:block" src="/images/endorsements/AIJN.png" alt="logo" aria-hidden="true" />
                </div>
                <div class="flex flex-col text-center mb-20 md:mb-28 xl:mb-32">
                    <span class="font-unna-700 text-[15px] md:text-[19px] xl:text-[21px] leading-[18px] md:leading-[22px] xl:leading-[25px] mb-2">Andrea Monne</span>
                    <span class="font-jose-300-it text-[12px] md:text-[15px] xl:text-[18px] leading-[15px] md:leading-[18px] xl:leading-[22px] mb-4">Area Manager <br>Multiburo</span>
                    <img class="w-1/2 mx-auto md:hidden" src="/images/endorsements/multiburo.png" alt="logo" aria-hidden="true" />
                    <div class="relative my-8">
                        <img class="w-7 md:w-10 absolute -top-4 left-0 md:left-5 xl:left-10" src="/images/endorsements/left-arrow.svg" alt="left-arrow" aria-hidden="true" />
                        <p class="font-unna-700-it text-[14px] md:text-[18px] xl:text-[21px] leading-[17px] md:leading-[22px] xl:leading-[25px] w-3/4 mx-auto">
                            Having access to T&P’s network has translated into growth in business for us.
                        </p>
                        <img class="w-7 md:w-10 absolute right-0 md:right-5 xl:right-10 -bottom-4" src="/images/endorsements/right-arrow.svg" alt="right-arrow" aria-hidden="true" />
                    </div>
                    <img class="w-1/2 max-w-[250px] mx-auto hidden md:block" src="/images/endorsements/multiburo.png" alt="logo" aria-hidden="true" />
                </div>
                <div class="flex flex-col text-center mb-20 md:mb-28 xl:mb-32">
                    <span class="font-unna-700 text-[15px] md:text-[19px] xl:text-[21px] leading-[18px] md:leading-[22px] xl:leading-[25px] mb-2">Pedro Saramago</span>
                    <span class="font-jose-300-it text-[12px] md:text-[15px] xl:text-[18px] leading-[15px] md:leading-[18px] xl:leading-[22px] mb-4">(Former) Marketing & Sales Officer <br>Linkare</span>
                    <img class="w-1/2 mx-auto md:hidden" src="/images/endorsements/Linkare.png" alt="logo" aria-hidden="true" />
                    <div class="relative my-8">
                        <img class="w-7 md:w-10 absolute -top-4 left-0 md:left-5 xl:left-10" src="/images/endorsements/left-arrow.svg" alt="left-arrow" aria-hidden="true" />
                        <p class="font-unna-700-it text-[14px] md:text-[18px] xl:text-[21px] leading-[17px] md:leading-[22px] xl:leading-[25px] w-3/4 mx-auto">
                            T&P helped us navigate the complex bureaucratic landscape for SME EU funding opportunities
                        </p>
                        <img class="w-7 md:w-10 absolute right-0 md:right-5 xl:right-10 -bottom-4" src="/images/endorsements/right-arrow.svg" alt="right-arrow" aria-hidden="true" />
                    </div>
                    <img class="w-1/2 max-w-[220px] mx-auto hidden md:block" src="/images/endorsements/Linkare.png" alt="logo" aria-hidden="true" />
                </div>
                <div class="flex flex-col text-center mb-20 md:mb-28 xl:mb-32">
                    <span class="font-unna-700 text-[15px] md:text-[19px] xl:text-[21px] leading-[18px] md:leading-[22px] xl:leading-[25px] mb-2">Enrico Turrin</span>
                    <span class="font-jose-300-it text-[12px] md:text-[15px] xl:text-[18px] leading-[15px] md:leading-[18px] xl:leading-[22px] mb-4">Deputy Director <br>Federation of European Publishers</span>
                    <img class="w-1/2 mx-auto md:hidden" src="/images/endorsements/European Publishers.png" alt="logo" aria-hidden="true" />
                    <div class="relative my-8">
                        <img class="w-7 md:w-10 absolute -top-4 left-0 md:left-5 xl:left-10" src="/images/endorsements/left-arrow.svg" alt="left-arrow" aria-hidden="true" />
                        <p class="font-unna-700-it text-[14px] md:text-[18px] xl:text-[21px] leading-[17px] md:leading-[22px] xl:leading-[25px] w-3/4 mx-auto">
                            With Glenn Cezanne at the helm and its established network, 
                            T&P has all it takes to have the most effective communications impact in Brussels. 
                            They have proven it time and place again!
                        </p>
                        <img class="w-7 md:w-10 absolute right-0 md:right-5 xl:right-10 -bottom-4" src="/images/endorsements/right-arrow.svg" alt="right-arrow" aria-hidden="true" />
                    </div>
                    <img class="w-1/2 max-w-[220px] mx-auto hidden md:block" src="/images/endorsements/European Publishers.png" alt="logo" aria-hidden="true" />
                </div>
                <div class="flex flex-col text-center mb-20 md:mb-28 xl:mb-32">
                    <span class="font-unna-700 text-[15px] md:text-[19px] xl:text-[21px] leading-[18px] md:leading-[22px] xl:leading-[25px] mb-2">Hubert de Biolley</span>
                    <span class="font-jose-300-it text-[12px] md:text-[15px] xl:text-[18px] leading-[15px] md:leading-[18px] xl:leading-[22px] mb-4">Director <br>IEA / iEthanol (European Industrial <br>Ethanol Association)</span>
                    <img class="w-1/2 mx-auto md:hidden" src="/images/endorsements/iEthanol.png" alt="logo" aria-hidden="true" />
                    <div class="relative my-8">
                        <img class="w-7 md:w-10 absolute -top-4 left-0 md:left-5 xl:left-10" src="/images/endorsements/left-arrow.svg" alt="left-arrow" aria-hidden="true" />
                        <p class="font-unna-700-it text-[14px] md:text-[18px] xl:text-[21px] leading-[17px] md:leading-[22px] xl:leading-[25px] w-3/4 mx-auto">
                            T&P has helped us understand the new European Parliament (2019) 
                            for us to profile our new association image. 
                            We very much hope to continue working with them in the future.
                        </p>
                        <img class="w-7 md:w-10 absolute right-0 md:right-5 xl:right-10 -bottom-4" src="/images/endorsements/right-arrow.svg" alt="right-arrow" aria-hidden="true" />
                    </div>
                    <img class="w-1/2 max-w-[220px] mx-auto hidden md:block" src="/images/endorsements/iEthanol.png" alt="logo" aria-hidden="true" />
                </div>
            </div>         
        `;
    }
}