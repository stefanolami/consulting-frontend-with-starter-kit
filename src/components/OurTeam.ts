import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { TailwindElement } from "../shared/tailwind.element";

import style from "../shared/tailwind.global.css";

@customElement("our-team")
export class OurTeam extends TailwindElement(style) {

    render() {
        return html`
            <h1 class="font-unna-700 text-xl md:text-[39px] md:leading-[45px] xl:text-[50px] xl:leading-[75px] text-center mb-6 md:mb-10 xl:mb-20">OUR TEAM</h1>
            


          

            <div class="flex flex-row flex-wrap justify-between gap-y-2 w-80 md:w-[752px] xl:w-[1116px] m-auto">
                <a href="./team-members" class="block relative w-[156px] h-[156px] md:w-[240px] md:h-[240px] xl:w-[360px] xl:h-[360px]">
                    <img src="../../images/who-we-are/glenn.png" alt="Team Member Photo" class="w-full">
                    <div class="tablet-desktop-whoweare-photo-div our-team-photo-layer">
                        <span class="z-20 font-unna-700 text-[13px] md:text-[19px] xl:text-[21px] text-white">GLENN CEZANNE</span>
                        <span class="font-jose-400-it text-[11px] md:text-[14px] xl:text-[15px] text-white">Managin Director</span>
                    </div>
                </a>
                <a href="./team-members" class="block relative w-[156px] h-[156px] md:w-[240px] md:h-[240px] xl:w-[360px] xl:h-[360px]">
                    <img src="../../images/who-we-are/glenn.png" alt="Team Member Photo" class="w-full">
                    <div class="tablet-desktop-whoweare-photo-div our-team-photo-layer">
                        <span class="z-20 font-unna-700 text-[13px] md:text-[19px] xl:text-[21px] text-white">GLENN CEZANNE</span>
                        <span class="font-jose-400-it text-[11px] md:text-[14px] xl:text-[15px] text-white">Managin Director</span>
                    </div>
                </a> 
                <a href="./team-members" class="block relative w-[156px] h-[156px] md:w-[240px] md:h-[240px] xl:w-[360px] xl:h-[360px]">
                    <img src="../../images/who-we-are/glenn.png" alt="Team Member Photo" class="w-full">
                    <div class="tablet-desktop-whoweare-photo-div our-team-photo-layer">
                        <span class="z-20 font-unna-700 text-[13px] md:text-[19px] xl:text-[21px] text-white">GLENN CEZANNE</span>
                        <span class="font-jose-400-it text-[11px] md:text-[14px] xl:text-[15px] text-white">Managin Director</span>
                    </div>
                </a> 
                <a href="./team-members" class="block relative w-[156px] h-[156px] md:w-[240px] md:h-[240px] xl:w-[360px] xl:h-[360px]">
                    <img src="../../images/who-we-are/glenn.png" alt="Team Member Photo" class="w-full">
                    <div class="tablet-desktop-whoweare-photo-div our-team-photo-layer">
                        <span class="z-20 font-unna-700 text-[13px] md:text-[19px] xl:text-[21px] text-white">GLENN CEZANNE</span>
                        <span class="font-jose-400-it text-[11px] md:text-[14px] xl:text-[15px] text-white">Managin Director</span>
                    </div>
                </a> 
                <a href="./team-members" class="block relative w-[156px] h-[156px] md:w-[240px] md:h-[240px] xl:w-[360px] xl:h-[360px]">
                    <img src="../../images/who-we-are/glenn.png" alt="Team Member Photo" class="w-full">
                    <div class="tablet-desktop-whoweare-photo-div our-team-photo-layer">
                        <span class="z-20 font-unna-700 text-[13px] md:text-[19px] xl:text-[21px] text-white">GLENN CEZANNE</span>
                        <span class="font-jose-400-it text-[11px] md:text-[14px] xl:text-[15px] text-white">Managin Director</span>
                    </div>
                </a> 
                <a href="./team-members" class="block relative w-[156px] h-[156px] md:w-[240px] md:h-[240px] xl:w-[360px] xl:h-[360px]">
                    <img src="../../images/who-we-are/glenn.png" alt="Team Member Photo" class="w-full">
                    <div class="tablet-desktop-whoweare-photo-div our-team-photo-layer">
                        <span class="z-20 font-unna-700 text-[13px] md:text-[19px] xl:text-[21px] text-white">GLENN CEZANNE</span>
                        <span class="font-jose-400-it text-[11px] md:text-[14px] xl:text-[15px] text-white">Managin Director</span>
                    </div>
                </a> 
                <a href="./team-members" class="block relative w-[156px] h-[156px] md:w-[240px] md:h-[240px] xl:w-[360px] xl:h-[360px]">
                    <img src="../../images/who-we-are/glenn.png" alt="Team Member Photo" class="w-full">
                    <div class="tablet-desktop-whoweare-photo-div our-team-photo-layer">
                        <span class="z-20 font-unna-700 text-[13px] md:text-[19px] xl:text-[21px] text-white">GLENN CEZANNE</span>
                        <span class="font-jose-400-it text-[11px] md:text-[14px] xl:text-[15px] text-white">Managin Director</span>
                    </div>
                </a> 
            </div>

            
            <!-- WHO-WE-ARE NEWSLETTER -->

            <div class="flex flex-col justify-evenly items-center h-[140px] md:h-[210px]" id="newsletter-desktop-tablet">
                <!-- change hidden with flex -->
                <h3 class="font-unna-400-it text-base md:text-[27px] md:leading-8 text-center">To find out more about upcoming positions,<br/> sign up to our newsletter!</h3>
                <form class="flex flex-row justify-between items-center h-10 md:h-[40px] w-[320px] md:w-[416px] my-3" action="" method="">
                    <input id="body-newsletter-input" class="mt-o bg-primary/[.6] font-jose-400-it text-xs md:text-base h-full w-[208px] md:w-[280px] rounded-l-full pl-6 md:pl-7" type="email" name="email" placeholder="email@gmail.com">
                    <input class="font-unna-700-it text-primary-dark2 text-sm md:text-[19px] h-full w-[108px] md:w-[130px] border-2 border-primary rounded-r-full" type="submit" value="SIGN ME UP!">
                </form>
            </div>

            <!-- END WHO-WE-ARE NEWSLETTER -->     
        `;
    }
}