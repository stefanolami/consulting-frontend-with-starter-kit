import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { TailwindElement } from "../../shared/tailwind.element";

import style from "../../shared/tailwind.global.css";

@customElement("who-we-are-photo-section")
export class WhoWeArePhotoSection extends TailwindElement(style) {


    render() {
        return html`
            <!-- MOBILE WHO-WE-ARE PHOTO SECTION -->

            <div class="flex md:hidden flex-row flex-wrap justify-between gap-y-2 w-80 h-80 m-auto">
                <!-- change hidden to flex -->
                <style>
                    .photo-layer {
                        background: rgba(57, 154, 194, 0.6);
                    }
                </style>
                <div class="relative w-[156px] h-[156px]">
                    <img src="../../images/who-we-are/glenn.png" alt="" class="w-full">
                    <div class="flex flex-col justify-center items-center absolute top-[63%] z-10 w-full h-[37%] photo-layer">
                        <span class="z-20 font-unna-700 text-[13px] text-white">GLENN CEZANNE</span>
                        <span class="font-jose-400-it text-[11px] text-white">Managin Director</span>
                    </div>
                </div>
                <div class="relative w-[156px] h-[156px]">
                    <img src="../../images/who-we-are/kjeld.png" alt="" class="w-full">
                    <div class="flex flex-col justify-center items-center absolute top-[63%] z-10 w-full h-[37%] photo-layer">
                        <span class="font-unna-700 text-center text-[13px] text-white">KJELD OLESEN</span>
                        <span class="font-jose-400-it text-[11px] text-white">Senior Associate</span>
                    </div>
                </div>
                <div class="relative w-[156px] h-[156px]">
                    <img src="../../images/who-we-are/elisabetta.png" alt="" class="w-full">
                    <div class="flex flex-col justify-center items-center absolute top-[63%] z-10 w-full h-[37%] photo-layer">
                        <span class="font-unna-700 text-center text-[13px] text-white">ELISABETTA SAVINO</span>
                        <span class="font-jose-400-it text-[11px] text-white">Associate Director</span>
                    </div>
                </div>
                <div class="relative w-[156px] h-[156px]">
                    <img src="../../images/who-we-are/stella.png" alt="" class="w-full"> 
                    <div class="flex flex-col justify-center items-center absolute top-[63%] z-10 w-full h-[37%] photo-layer">
                        <span class="font-unna-700 text-center text-[13px] text-white">STELLA HOXHA</span>
                        <span class="font-jose-400-it text-[11px] text-white">Junior Consultant</span>
                    </div>
                </div>
            </div>

            <!-- END MOBILE WHO-WE-ARE PHOTO SECTION -->




            <!-- TABLET / DESKTOP WHO-WE-ARE PHOTO SECTION -->

            <!-- in the desktop version of the design the pictures are too big and the resolution looks bad. I made them 360x360 instead of 420 -->

            <div class="hidden md:flex flex-row justify-between w-[752px] xl:w-[1116px] m-auto">
                <!-- add md:flex -->
                <style>
                    .photo-layer {
                        background: rgba(57, 154, 194, 0.6);
                    }
                </style>
                <div class="relative w-[240px] h-[240px] xl:w-[360px] xl:h-[360px]">
                    <img src="../../images/who-we-are/kjeld.png" alt="" class="w-full h-full">
                    <div class="tablet-desktop-whoweare-photo-div photo-layer">
                        <span class="font-unna-700 text-center text-[19px] xl:text-[21px] text-white">KJELD OLESEN</span>
                        <span class="font-jose-400-it text-[14px] xl:text-[15px] text-white">CEO & Co-Founder</span>
                    </div>
                </div>
                <div class="relative w-[240px] h-[240px] xl:w-[360px] xl:h-[360px]">
                    <img src="../../images/who-we-are/glenn.png" alt="" class="w-full">
                    <div class="tablet-desktop-whoweare-photo-div photo-layer">
                        <span class="z-20 font-unna-700 text-[19px] xl:text-[21px] text-white">GLENN CEZANNE</span>
                        <span class="font-jose-400-it text-[14px] xl:text-[15px] text-white">Co-Founder & Strategic Advisor</span>
                    </div>
                </div>
                <div class="relative w-[240px] h-[240px] xl:w-[360px] xl:h-[360px]">
                    <img src="../../images/who-we-are/arianna.png" alt="" class="w-full">
                    <div class="tablet-desktop-whoweare-photo-div photo-layer">
                        <span class="font-unna-700 text-center text-[19px] xl:text-[21px] text-white">ARIANNA ANTONIONI</span>
                        <span class="font-jose-400-it text-[14px] xl:text-[15px] text-white">Operations Manager</span>
                    </div>
                </div>
            </div>

            <!-- END TABLET / DESKTOP WHO-WE-ARE PHOTO SECTION -->


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