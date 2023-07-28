import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { TailwindElement } from "../../shared/tailwind.element";

import style from "../../shared/tailwind.global.css";

@customElement("publications-menu")
export class PublicationsMenu extends TailwindElement(style) {


    render() {
        return html`
            <div class="max-w-7xl mx-auto select-none">
                <h1 class="font-unna-700 text-[20px] md:text-[39px] xl:text-[50px] md:mb-12 xl:mb-20 text-center">PUBLICATIONS</h1>
                <div class="flex mx-5 my-5 flex-row flex-wrap justify-between md:justify-center md:mx-auto">                                    
                    <div class="publications-menu-divs">Analyses & Commentaries</div>
                    <div class="publications-menu-divs">The Covid of Things</div>
                    <div class="publications-menu-divs">Predictability in Politics</div>
                    <div class="w-[48%] md:w-[24%] relative group">
                        <div class="border-2 border-primary rounded-full md:rounded-none md:rounded-br-3xl w-full font-jose-600 md:font-light text-primary-dark2 md:text-white text-[9px] md:text-base leading-[9px] text-center  my-1 md:mx-[1.5px] xl:mx-[1px] py-[7px] md:bg-primary xl:group-hover:bg-[#1D2DAF]/90 cursor-pointer">Time & Place Newsletters</div>
                        <div class="absolute w-full top-[42px] left-0 hidden mt-2 xl:group-hover:block z-50">
                            <div class="text-primary text-[15px] leading-[15px] font-jose-300 text-center flex justify-center items-center py-2 px-4 mb-1 rounded-tl-3xl cursor-pointer bg-[#D8DCFF]">Time & Place Consulting Monthly Newsletter</div>
                            <div class="text-primary text-[15px] leading-[15px] font-jose-300 text-center flex justify-center items-center py-2 px-4 rounded-br-3xl cursor-pointer bg-[#D8DCFF]">Time & Place EU Funding & Projects Newsletter</div>
                        </div>
                    </div>
                </div>
            </div>     
        `;
    }

}