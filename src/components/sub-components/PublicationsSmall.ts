import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { TailwindElement } from "../../shared/tailwind.element";

import style from "../../shared/tailwind.global.css";

@customElement("publications-small")
export class PublicationsSmall extends TailwindElement(style) {


    render() {
        return html`
            <div class="">
                <!-- add hidden -->
                <div class="flex md:grid xl:hidden flex-col md:grid-cols-2 md:auto-cols-fr md:gap-4 mx-5 md:mx-10 lg:mx-20 my-4 md:my-10">
                    <div class="grid grid-rows-[1fr_2fr] relative my-[6px] h-[300px] md:h-[315px] md:my-0 text-primary-dark2">   <!-- PHOTO PUBLICATIONS BLOCK -->
                        <div class="absolute top-[-1px] left-[-1px] z-10 flex items-center rounded-br-3xl pl-2 pr-5 py-1 bg-white font-unna-700-it text-base text-primary-dark2">Funding Programmes</div>
                        <div class="h-[104px] w-full">
                            <img class="object-cover w-full h-full" src="../../images/publications/publications-agriculture-mobile.png" class="w-full" alt="Publication Image Preview">
                        </div>
                        <div class="relative flex flex-col justify-center p-6 h-full border border-t-0 border-primary ">
                            <div class="absolute top-0 right-0 p-2 leading-4">
                                <p class="font-unna-700 text-[13.5px] text-right">Alessandro Calissi</p>
                                <p class="font-jose-300 text-[13px] text-right">April 20, 2020</p>
                            </div>
                            <h3 class=" font-unna-700 text-[18px] text-black leading-6 ">The EU circular challenge(s)</h3>
                            <p class="my-3 font-jose-400 text-black text-[12px] leading-[15px] ">The Corona pandemic is affecting every and each field of policy-making, including the EU Green Deal and the circular economy agenda.</p>
                            <a href="publications-article.html" class="absolute bottom-2 right-2 w-[87px] md:w-[90px] h-8 md:h-[28px] flex items-center justify-center border border-primary-dark2 rounded-full font-jose-600 text-[10px] leading-[16px] hover:text-white hover:bg-primary-dark2">READ MORE</a>
                        </div>
                    </div>
                    <div class="flex flex-col relative my-[6px] h-[240px] md:h-[315px] md:my-0 border border-primary text-primary-dark2">   <!-- WHITE PUBLICATIONS BLOCK -->
                        <div class="absolute top-[-1px] left-[-1px] z-10 flex items-center rounded-br-3xl pl-2 pr-5 py-1 bg-white font-unna-700-it text-base text-primary-dark2">Funding Programmes</div>
                        <div class="relative flex flex-col justify-center p-6 h-full">
                            <div class="absolute top-0 right-0 p-2 leading-4">
                                <p class="font-unna-700 text-[13.5px] text-right">Alessandro Calissi</p>
                                <p class="font-jose-300 text-[13px] text-right">April 20, 2020</p>
                            </div>
                            <h3 class=" font-unna-700 text-[18px] text-black leading-6 mt-14">Is a Just Transition possible throughout (post-)Corona recovery?</h3>
                            <p class="my-3 font-jose-400 text-black text-[12px] leading-[15px] mb-14">Corona is driving the political agenda in Brussels and the Commission has pledged to put the EU Green Deal at the centre of the recovery plan currently under preparation.</p>
                            <a href="publications-article.html" class="absolute bottom-2 right-2 w-[87px] md:w-[90px] h-8 md:h-[28px] flex items-center justify-center border border-primary-dark2 rounded-full font-jose-600 text-[10px] leading-[16px] hover:text-white hover:bg-primary-dark2">READ MORE</a>
                        </div>
                    </div>
                    <div class="publications-blu-div flex flex-col relative my-[6px] h-[240px] md:h-[315px] md:my-0 border border-primary text-primary-dark2">   <!-- BLU PUBLICATIONS BLOCK -->
                        <div class="absolute top-[-1px] left-[-1px] z-10 flex items-center rounded-br-3xl pl-2 pr-5 py-1 bg-white font-unna-700-it text-base text-primary-dark2">Funding Policies</div>
                        <div class="relative flex flex-col justify-center p-6 h-full">
                            <div class="absolute top-0 right-0 p-2 leading-4">
                                <p class="font-unna-700 text-[13.5px] text-right">Joachim Marnitz</p>
                                <p class="font-jose-300 text-[13px] text-right">March 7, 2020</p>
                            </div>
                            <h3 class=" font-unna-700 text-[18px] text-white leading-6">Part III - The poor response of Western institutions</h3>
                            <p class="my-3 font-jose-400 text-white text-[12px] leading-[15px]">Joachim Marnitz talks about why he believes the German healthcare system is about to break down and why many institutions in the West are responding so poorly. </p>
                            <a href="publications-article.html" class="absolute bottom-2 right-2 w-[87px] md:w-[90px] h-8 md:h-[28px] flex items-center justify-center border border-primary-dark2 rounded-full font-jose-600 text-[10px] leading-[16px] hover:text-white hover:bg-primary-dark2">READ MORE</a>
                        </div>
                    </div>
                    <div class="grid grid-rows-[1fr_2fr] relative my-[6px] h-[300px] md:h-[315px] md:my-0 text-primary-dark2">   <!-- PHOTO PUBLICATIONS BLOCK -->
                        <div class="absolute top-[-1px] left-[-1px] z-10 flex items-center rounded-br-3xl pl-2 pr-5 py-1 bg-white font-unna-700-it text-base text-primary-dark2">Predicability in Politics</div>
                        <div class="h-[104px] w-full">
                            <img class="object-cover w-full h-full" src="../../images/publications/publications-germany-desktop.png" class="w-full" alt="Publication Image Preview">
                        </div>
                        <div class="relative flex flex-col justify-center p-6 h-full border border-t-0 border-primary ">
                            <div class="absolute top-0 right-0 p-2 leading-4">
                                <p class="font-unna-700 text-[13.5px] text-right">Alessandro Calissi</p>
                                <p class="font-jose-300 text-[13px] text-right">April 20, 2020</p>
                            </div>
                            <h3 class=" font-unna-700 text-[18px] text-black leading-6">Part II - Impeachment and what statistics still (don't) tell us</h3>
                            <p class="my-3 font-jose-400 text-black text-[12px] leading-[15px]">Trump’s impeachment saga has lasted for a few months now, and at this point it seems very clear to us that it will have no negative consequences</p>
                            <a href="publications-article.html" class="absolute bottom-2 right-2 w-[87px] md:w-[90px] h-8 md:h-[28px] flex items-center justify-center border border-primary-dark2 rounded-full font-jose-600 text-[10px] leading-[16px] hover:text-white hover:bg-primary-dark2">READ MORE</a>
                        </div>
                    </div>
                </div>
                <div class="flex xl:hidden justify-center items-center w-28 h-9 md:w-40 md:h-11 m-auto mt-12 mb-28 pt-[2px] border-2 border-primary-dark2 rounded-full font-jose-600 text-primary-dark2 text-xs md:text-base xl:text-base cursor-pointer hover:bg-primary-dark2 hover:text-white select-none">LOAD MORE</div>        
            </div>     
        `;
    }

}