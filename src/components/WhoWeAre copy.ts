import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { TailwindElement } from "../shared/tailwind.element";

import style from "../shared/tailwind.global.css";

@customElement("who-we-are")
export class WhoWeAre extends TailwindElement(style) {

    render() {
        return html`
            <main>
                <h1 class="font-unna-700 text-xl md:text-[39px] md:leading-[45px] xl:text-[50px] xl:leading-[75px] text-center mb-4 md:mb-10 xl:mb-12">WHO WE ARE</h1>
                <p class="mb-6 md:mb-16 xl:mb-28 font-jose-400-it text-[14px] leading-[16px] md:text-[21px] md:leading-[26px] xl:text-[23px] xl:leading-[26px] text-center mx-auto">Your first points of contact!</p>
                <who-we-are-photo-section></who-we-are-photo-section>
                <h1 id="map_title" class="w-[90%] md:w-[640px] xl:w-[800px] mx-auto mb-4 md:mb-9 xl:mb-12 mt-16 font-unna-700 text-[20px] leading-[23px] md:text-[39px] md:leading-[45px] xl:text-[50px] xl:leading-[57px] text-center">OUR INTERNATIONAL PRESENCE WITH LOCAL ACCESS</h1>
                <p class="w-[85%] md:w-[600px] xl:w-[650px] mx-auto font-jose-400-it text-[14px] leading-[16px] md:text-[21px] md:leading-[26px] xl:text-[23px] xl:leading-[26px] text-center">In the countries listed we can assist you with national funding in your official language, as well as with EU funding</p>
                <div id="map-placeholder" class="hidden md:block h-[1205px] xl:h-[1020px] w-full"></div>
                <who-we-are-mobile></who-we-are-mobile>
            </main>           
        `;
    }
}