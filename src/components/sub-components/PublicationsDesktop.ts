import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { TailwindElement } from "../../shared/tailwind.element";

import style from "../../shared/tailwind.global.css";

@customElement("publications-desktop")
export class PublicationsDesktop extends TailwindElement(style) {


    render() {
        return html`
            <div class="hidden xl:block">
                <div class="grid gap-6 mx-44 my-20 max-w-6xl min-[1500px]:mx-auto">
                    <div class="grid grid-cols-[38%_1fr] gap-6">
                        <div class="grid grid-rows-2 relative h-[460px] text-primary-dark2">
                            <div class="absolute top-[-1px] left-[-1px] z-10 flex items-center rounded-br-3xl pl-2 pr-5 py-1 bg-white font-unna-700-it text-xl text-primary-dark2">Funding Programmes</div>
                            <div class="ì w-full">
                                <img class="object-cover w-full h-full" src="../../images/publications/publications-agriculture-desktop.png" class="w-full" alt="Publication Image Preview">
                            </div>
                            <div class="relative flex flex-col justify-start p-6 h-full border border-t-0 border-primary ">
                                <div class="absolute bottom-0 left-0 p-4 leading-4">
                                    <p class="font-unna-700 text-[13.5px] text-left">Alessandro Calissi</p>
                                    <p class="font-jose-300 text-[13px] text-left">April 20, 2020</p>
                                </div>
                                <h3 class=" font-unna-700 text-[26px] text-black leading-7 ">The EU circular challenge(s)</h3>
                                <p class="my-3 font-jose-400 text-black text-base leading-[18px]">The Corona pandemic is affecting every and each field of policy-making, including the EU Green Deal and the circular economy agenda. T&P’s Alessandro had a look at where the EU stands in its circular endeavour and what to expect from EU policy-making.</p>
                                <a href="publications-article.html" class="absolute bottom-3 right-3 w-28 h-8 px-3 py-2 border border-primary-dark2 rounded-full font-jose-600 text-center text-xs hover:text-white hover:bg-primary-dark2">READ MORE</a>
                            </div>
                        </div>
                        <div class="grid grid-cols-2 relative h-[460px] text-primary-dark2">
                            <div class="absolute top-[-1px] left-[-1px] z-10 flex items-center rounded-br-3xl pl-2 pr-5 py-1 bg-white font-unna-700-it text-xl text-primary-dark2">Funding Programmes</div>
                            <div class="w-full">
                                <img class="object-cover w-full h-full" src="../../images/publications/corona-desktop.png" class="w-full" alt="Publication Image Preview">
                            </div>
                            <div class="relative flex flex-col justify-start p-6 h-full border border-l-0 border-primary">
                                <div class="absolute bottom-0 left-0 p-4 leading-4">
                                    <p class="font-unna-700 text-[13.5px] text-left">Alessandro Calissi</p>
                                    <p class="font-jose-300 text-[13px] text-left">April 20, 2020</p>
                                </div>
                                <h3 class=" font-unna-700 text-[26px] text-black leading-7 ">Is a Just Transition possible throughout (post-)Corona recovery?</h3>
                                <p class="my-3 font-jose-400 text-black text-base leading-[18px]">Corona is driving the political agenda in Brussels and the Commission has pledged to put the EU Green Deal at the centre of the recovery plan currently under preparation. With a new EU long-term budget also in the making, is there a new opportunity to re-launch the Just Transition objective?</p>
                                <a href="publications-article.html" class="absolute bottom-3 right-3 w-28 h-8 px-3 py-2 border border-primary-dark2 rounded-full font-jose-600 text-center text-xs hover:text-white hover:bg-primary-dark2">READ MORE</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="grid grid-cols-[1fr_40%] relative h-[380px] text-primary-dark2">
                            <div class="absolute top-[-1px] left-[-1px] z-10 flex items-center rounded-br-3xl pl-2 pr-5 py-1 bg-white font-unna-700-it text-xl text-primary-dark2">The Covid of Things</div>
                            <div class="h-full">
                                <img class="object-cover w-full h-full" src="../../images/publications/publications-china-desktop.png" class="w-full" alt="Publication Image Preview">
                            </div>
                            <div class="relative flex flex-col justify-start p-6 h-full border border-l-0 border-primary ">
                                <div class="absolute bottom-0 left-0 p-4 leading-4">
                                    <p class="font-unna-700 text-[13.5px] text-left">Alessandro Calissi</p>
                                    <p class="font-jose-300 text-[13px] text-left">March 7, 2020</p>
                                </div>
                                <h3 class=" font-unna-700 text-[26px] text-black leading-7 ">Part III - The poor response of Western institutions</h3>
                                <p class="my-3 font-jose-400 text-black text-base leading-[18px]">In the third COVID-Files entry Joachim Marnitz goes solo and talks about why he believes the German healthcare system is about to break down and why many institutions in the West are responding so poorly. An interesting benchmarking exercise looking at the efficiency of Seoul and Italy. And, some suggestions about what you can do. Please note that he has not gone solo because we have abandoned him due to his self-quarantine. We are constantly “in touch” and wish him all the best.  </p>
                                <a href="publications-article.html" class="absolute bottom-3 right-3 w-28 h-8 px-3 py-2 border border-primary-dark2 rounded-full font-jose-600 text-center text-xs hover:text-white hover:bg-primary-dark2">READ MORE</a>
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-6">
                        <div class="grid grid-rows-2 relative h-[460px] text-primary-dark2">
                            <div class="absolute top-[-1px] left-[-1px] z-10 flex items-center rounded-br-3xl pl-2 pr-5 py-1 bg-white font-unna-700-it text-xl text-primary-dark2">Predicability in Politics</div>
                            <div class="ì w-full">
                                <img class="object-cover w-full h-full" src="../../images/publications/publications-germany-desktop.png" class="w-full" alt="Publication Image Preview">
                            </div>
                            <div class="relative flex flex-col justify-start p-6 h-full border border-t-0 border-primary">
                                <div class="absolute bottom-0 left-0 p-4 leading-4">
                                    <p class="font-unna-700 text-[13.5px] text-left">Alessandro Calissi</p>
                                    <p class="font-jose-300 text-[13px] text-left">April 20, 2020</p>
                                </div>
                                <h3 class=" font-unna-700 text-[26px] text-black leading-7 ">Part II - Impeachment and what statistics still (don't) tell us</h3>
                                <p class="my-3 font-jose-400 text-black text-base leading-[18px]">Trump’s impeachment saga has lasted for a few months now, and at this point it seems very clear to us that it will have no negative consequences for his re-election chances - in fact it is very possible that the whole process ends up helping him.</p>
                                <a href="publications-article.html" class="absolute bottom-3 right-3 w-28 h-8 px-3 py-2 border border-primary-dark2 rounded-full font-jose-600 text-center text-xs hover:text-white hover:bg-primary-dark2">READ MORE</a>
                            </div>
                        </div>
                        <div class="grid grid-rows-2 relative h-[460px] text-primary-dark2">
                            <div class="absolute top-[-1px] left-[-1px] z-10 flex items-center rounded-br-3xl pl-2 pr-5 py-1 bg-white font-unna-700-it text-xl text-primary-dark2">Funding Programmes</div>
                            <div class="ì w-full">
                                <img class="object-cover w-full h-full" src="../../images/publications/publications-commission-desktop.png" class="w-full" alt="Publication Image Preview">
                            </div>
                            <div class="relative flex flex-col justify-start p-6 h-full border border-t-0 border-primary">
                                <div class="absolute bottom-0 left-0 p-4 leading-4">
                                    <p class="font-unna-700 text-[13.5px] text-left">Alessandro Calissi</p>
                                    <p class="font-jose-300 text-[13px] text-left">April 20, 2020</p>
                                </div>
                                <h3 class=" font-unna-700 text-[26px] text-black leading-7 ">The first 100 days of the “von der Leyen Commission</h3>
                                <p class="my-3 font-jose-400 text-black text-base leading-[18px]">Back in the summer of 2019, the soon-to-become EU Commission president Ursula von der Leyen pledged to deliver on a wide range of political initiatives within the first 100 days of her mandate. Have such promises been fulfilled?</p>
                                <a href="publications-article.html" class="absolute bottom-3 right-3 w-28 h-8 px-3 py-2 border border-primary-dark2 rounded-full font-jose-600 text-center text-xs hover:text-white hover:bg-primary-dark2">READ MORE</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex justify-center items-center pt-[2px] w-40 h-11 m-auto mb-28 border-2 border-primary-dark2 rounded-full font-jose-600 text-primary-dark2 text-base cursor-pointer hover:bg-primary-dark2 hover:text-white">LOAD MORE</div>     
            </div>      
        `;
    }

}