import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { TailwindElement } from "../../shared/tailwind.element";

import style from "../../shared/tailwind.global.css";

@customElement("newsroom-big")
export class NewsroomBig extends TailwindElement(style) {


    render() {
        return html`
        <div class="hidden md:block md:w-[90%] xl:w-4/5 max-w-[1400px] mx-auto">
            <div class="grid grid-rows-3 gap-4 my-20">
                <div class="grid grid-cols-3 xl:grid-cols-[1fr_40%_1fr] gap-4">
                    <div class="flex justify-center items-center relative h-[268px] xl:h-[328px] bg-primary">   <!-- DEFAULT NEWS BLOCK -->
                        <div class="absolute top-0 left-0 flex items-center rounded-br-3xl h-[12%] p-3 pr-5 bg-white font-unna-700-it text-base xl:text-xl text-primary-dark2">T&P Insights</div>
                        <div class="absolute bottom-0 left-0 p-3 leading-4">
                            <p class="font-jose-600 uppercase text-xs text-white text-left">Portugal</p>
                            <p class="font-jose-300 text-xs text-white text-left">March 18, 2022</p>
                        </div>
                        <h3 class="p-6 font-unna-700 text-[26px] text-white leading-7">What is the EU Global Gateway initiative?</h3>
                        <a href="newsroom-article.html" class="newsroom-btn-default">READ MORE</a>
                    </div>
                    <div class="col-start-2 col-end-4 xl:col-end-3 flex justify-center items-center relative h-[268px] xl:h-[328px] border border-primary text-primary-dark2">   <!-- WHITE NEWS BLOCK -->
                        <div class="absolute top-[-1px] left-[-1px] z-10 flex items-center rounded-br-3xl h-[12%] p-[13px] pr-5 bg-white font-unna-700-it text-base xl:text-xl text-primary-dark2">T&P Announcement</div>
                        <div class="absolute bottom-0 left-0 p-3 leading-4">
                            <p class="font-jose-600 uppercase text-xs text-left">Brussels</p>
                            <p class="font-jose-300 text-xs text-left">February 12, 2021</p>
                        </div>
                        <h3 class="p-6 font-unna-700 text-[26px] leading-7">Time&Place becomes official partner of the European Paralympic Committee.</h3>
                        <a href="newsroom-article.html" class="newsroom-btn-white">READ MORE</a>
                    </div>
                    <div class="hidden xl:flex justify-center items-center relative h-[268px] xl:h-[328px] bg-primary">   <!-- DEFAULT NEWS BLOCK -->
                        <div class="absolute top-0 left-0 flex items-center rounded-br-3xl h-[12%] p-3 pr-5 bg-white font-unna-700-it text-base xl:text-xl text-primary-dark2">T&P Insights</div>
                        <div class="absolute bottom-0 left-0 p-3 leading-4">
                            <p class="font-jose-600 uppercase text-xs text-white text-left">European Union</p>
                            <p class="font-jose-300 text-xs text-white text-left">March 18, 2022</p>
                        </div>
                        <h3 class="p-6 font-unna-700 text-[26px] text-white leading-7">What is the EU Global Gateway initiative?</h3>
                        <a href="newsroom-article.html" class="newsroom-btn-default">READ MORE</a>
                    </div>
                </div>
                <div class="grid grid-cols-3 xl:grid-cols-[40%_1fr_1fr] gap-4">
                    <div class="flex justify-center items-center relative h-[268px] xl:h-[328px] bg-primary">   <!-- DEFAULT NEWS BLOCK -->
                        <div class="absolute top-0 left-0 flex items-center rounded-br-3xl h-[12%] p-3 pr-5 bg-white font-unna-700-it text-base xl:text-xl text-primary-dark2">T&P Insights</div>
                        <div class="absolute bottom-0 left-0 p-3 leading-4">
                            <p class="font-jose-600 uppercase text-xs text-white text-left">Portugal</p>
                            <p class="font-jose-300 text-xs text-white text-left">March 18, 2022</p>
                        </div>
                        <h3 class="p-6 font-unna-700 text-[26px] text-white leading-7">What is the EU Global Gateway initiative?</h3>
                        <a href="newsroom-article.html" class="newsroom-btn-default">READ MORE</a>
                    </div>
                    <div class="flex justify-center items-center relative h-[268px] xl:h-[328px] ">   <!-- BACKGROUND PICTURE NEWS BLOCK -->
                        <img class="object-cover w-full h-full" src="../../images/newsroom/newsroom-india.png" alt="">
                        <div class="newsroom-block-photo-layer absolute top-0 bottom-0 right-0 left-0"></div>
                        <div class="absolute top-0 left-0 flex items-center rounded-br-3xl h-[12%] p-3 pr-5 bg-white font-unna-700-it text-base xl:text-xl text-primary-dark2">T&P Insights</div>
                        <div class="absolute bottom-0 left-0 p-3 leading-4">
                            <p class="font-jose-600 uppercase text-xs text-white text-left">India</p>
                            <p class="font-jose-300 text-xs text-white text-left">March 18, 2022</p>
                        </div>
                        <h3 class="absolute p-6 font-unna-700 text-[26px] z-10 text-white leading-7">EU-India Trade Relations: Now and an even brighter future</h3>
                        <a href="newsroom-article.html" class="newsroom-btn-pic">READ MORE</a>
                    </div>
                    <div class="flex justify-center items-center relative h-[268px] xl:h-[328px] bg-primary">   <!-- DEFAULT NEWS BLOCK -->
                        <div class="absolute top-0 left-0 flex items-center rounded-br-3xl h-[12%] p-3 pr-5 bg-white font-unna-700-it text-base xl:text-xl text-primary-dark2">T&P Insights</div>
                        <div class="absolute bottom-0 left-0 p-3 leading-4">
                            <p class="font-jose-600 uppercase text-xs text-white text-left">Portugal</p>
                            <p class="font-jose-300 text-xs text-white text-left">March 18, 2022</p>
                        </div>
                        <h3 class="p-6 font-unna-700 text-[26px] text-white leading-7">What is the EU Global Gateway initiative?</h3>
                        <a href="newsroom-article.html" class="newsroom-btn-default">READ MORE</a>
                    </div>
                </div>
                <div class="grid grid-cols-3 xl:grid-cols-[1fr_1fr_40%] gap-4">
                    <div class="flex justify-center items-center relative h-[268px] xl:h-[328px] border border-primary text-primary-dark2">   <!-- WHITE NEWS BLOCK -->
                        <div class="absolute top-[-1px] left-[-1px] z-10 flex items-center rounded-br-3xl h-[12%] p-[13px] pr-5 bg-white font-unna-700-it text-base xl:text-xl text-primary-dark2">T&P Announcement</div>
                        <div class="absolute bottom-0 left-0 p-3 leading-4">
                            <p class="font-jose-600 uppercase text-xs text-left">European Union</p>
                            <p class="font-jose-300 text-xs text-left">February 12, 2021</p>
                        </div>
                        <h3 class="p-6 font-unna-700 text-[26px] leading-7">Time&Place becomes official partner of the European Paralympic Committee.</h3>
                        <a href="newsroom-article.html" class="newsroom-btn-white">READ MORE</a>
                    </div>
                    <div class="flex justify-center items-center relative h-[268px] xl:h-[328px] ">   <!-- BACKGROUND PICTURE NEWS BLOCK -->
                        <img class="object-cover w-full h-full" src="../../images/newsroom/India-2-tablet.png" alt="">
                        <div class="newsroom-block-photo-layer absolute top-0 bottom-0 right-0 left-0"></div>
                        <div class="absolute top-0 left-0 flex items-center rounded-br-3xl h-[12%] p-3 pr-5 bg-white font-unna-700-it text-base xl:text-xl text-primary-dark2">T&P Happenings</div>
                        <div class="absolute bottom-0 left-0 p-3 leading-4">
                            <p class="font-jose-600 uppercase text-xs text-white text-left">India</p>
                            <p class="font-jose-300 text-xs text-white text-left">October 10, 2020</p>
                        </div>
                        <h3 class="absolute p-6 font-unna-700 text-[26px] z-10 text-white leading-7">T&P sets up EU-India trade and business development division with satellite office</h3>
                        <a href="newsroom-article.html" class="newsroom-btn-pic">READ MORE</a>
                    </div>
                    <div class="flex justify-center items-center relative h-[268px] xl:h-[328px] ">   <!-- BACKGROUND PICTURE NEWS BLOCK -->               
                        <img class="object-cover w-full h-full" src="../../images/newsroom/newsroom-glenn-tablet.png" alt="">
                        <div class="newsroom-block-photo-layer absolute top-0 bottom-0 right-0 left-0"></div>
                        <div class="absolute top-0 left-0 flex items-center rounded-br-3xl h-[12%] p-3 pr-5 bg-white font-unna-700-it text-base xl:text-xl text-primary-dark2">Event Alert</div>
                        <div class="absolute bottom-0 left-0 p-3 leading-4">
                            <p class="font-jose-600 uppercase text-xs text-white text-left">Brussels</p>
                            <p class="font-jose-300 text-xs text-white text-left">March 10, 2022</p>
                        </div>
                        <h3 class="absolute p-6 font-unna-700 text-[26px] z-10 text-white leading-7">Glenn Cezanne, Managing Director of T&P nominated top-200 in Best in Brussels</h3>
                        <a href="newsroom-article.html" class="newsroom-btn-pic">READ MORE</a>
                    </div>                       
                </div>
            </div>
            <div class="flex justify-center items-center pt-[2px] w-36 xl:w-40 h-10 xl:h-11 m-auto mb-28 border-2 border-primary-dark2 rounded-full font-jose-600 text-primary-dark2 text-sm xl:text-base cursor-pointer hover:text-white hover:bg-primary-dark2">LOAD MORE</div> 
        </div>      
        `;
    }

}