import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { TailwindElement } from "../../shared/tailwind.element";

import style from "../../shared/tailwind.global.css";

@customElement("newsroom-mobile")
export class NewsroomMobile extends TailwindElement(style) {


    render() {
        return html`
            <div class=" md:hidden mt-4 mb-4">
                <h1 class="font-unna-700 text-xl text-center">NEWSROOM</h1>
                <div class="flex flex-col mx-5 mt-4">
                    <div class="flex justify-center items-center relative h-[200px] my-[6px] bg-primary">   <!-- DEFAULT NEWS BLOCK -->
                        <div class="absolute top-0 left-0 flex items-center rounded-br-3xl h-[15%] p-3 pr-5 bg-white font-unna-700-it text-base text-primary-dark2">T&P Insights</div>
                        <div class="absolute top-0 right-0 p-2 leading-4">
                            <p class="font-jose-600 text-[10px] uppercase text-white text-right">Portugal</p>
                            <p class="font-jose-300 text-[13px] text-white text-right">March 18, 2022</p>
                        </div>
                        <h3 class="p-6 font-unna-700 text-[21px] text-white leading-6">What is the EU Global Gateway initiative?</h3>
                        <a href="newsroom-article.html" class="newsroom-btn-default">READ MORE</a>
                    </div>
                    <div class=" flex justify-center items-center relative h-[200px] my-[6px] ">   <!-- BACKGROUND PICTURE NEWS BLOCK -->
                        <img class="object-cover h-full w-full" src="../../images/newsroom/newsroom-india.png" alt="">
                        <div class="newsroom-block-photo-layer absolute top-0 bottom-0 right-0 left-0"></div>
                        <div class="absolute top-0 left-0 flex items-center rounded-br-3xl h-[15%] p-3 pr-5 bg-white font-unna-700-it text-base text-primary-dark2">T&P Insights</div>
                        <div class="absolute top-0 right-0 p-2 leading-4">
                            <p class="font-jose-600 text-[10px] uppercase text-white text-right">India</p>
                            <p class="font-jose-300 text-[13px] text-white text-right">March 18, 2022</p>
                        </div>
                        <h3 class="absolute p-6 font-unna-700 text-[21px] z-10 text-white leading-6">EU-India Trade Relations: Now and an even brighter future</h3>
                        <a href="newsroom-article.html" class="newsroom-btn-pic">READ MORE</a>
                    </div>
                    <div class="flex justify-center items-center relative h-[200px] my-[6px] border border-primary text-primary-dark2">   <!-- WHITE NEWS BLOCK -->
                        <div class="absolute top-[-1px] left-[-1px] z-10 flex items-center rounded-br-3xl h-[15%] p-[13px] pr-5 bg-white font-unna-700-it text-base text-primary-dark2">T&P Announcement</div>
                        <div class="absolute top-0 right-0 p-2 leading-4">
                            <p class="font-jose-600 text-[10px] uppercase text-right">Brussels</p>
                            <p class="font-jose-300 text-[13px] text-right">February 12, 2021</p>
                        </div>
                        <h3 class="p-6 font-unna-700 text-[21px] leading-6">Time&Place becomes official partner of the European Paralympic Committee.</h3>
                        <a href="newsroom-article.html" class="newsroom-btn-white">READ MORE</a>
                    </div>
                </div>
                <div class="flex justify-center items-center pt-[2px] w-28 h-9 m-auto mt-6 mb-16 border-2 border-primary-dark2 rounded-full font-jose-600 text-primary-dark2 text-[10px] md:text-base cursor-pointer hover:text-white hover:bg-primary hover:border-primary">LOAD MORE</div> 
            </div>      
        `;
    }

}