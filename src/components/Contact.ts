import { html } from "lit";
import { customElement} from "lit/decorators.js";
import { TailwindElement } from "../shared/tailwind.element";

import style from "../shared/tailwind.global.css";

@customElement("my-contact")
export class Contact extends TailwindElement(style) {

  render() {
    return html`
        <section>
            <!-- MOBILE CONTACT PAGE -->

            <div class=" md:hidden">
                <h1 class="font-unna-700 text-[20px] text-center mb-6">CONTACT</h1>
                <div class="flex flex-row justify-between w-[80%] m-auto">
                    <a href="" target="_blank" aria-label="Follow us on Facebook">
                        <img src="../../images/icons/facebook.svg" />
                    </a>
                    <a href="" target="_blank" aria-label="Follow us on Twitter">
                        <img src="../../images/icons/twitter.svg" />
                    </a>
                    <a href="" target="_blank" aria-label="Follow us on Youtube">
                        <img src="../../images/icons/youtube.svg" />
                    </a>
                    <a href="" target="_blank" aria-label="Follow us on LinkedIn">
                        <img src="../../images/icons/linkedln.svg" />
                    </a>
                </div>
                <form class="flex flex-col flex-wrap items-center w-[88%] m-auto my-6 ">
                    <div class="flex flex-row w-full justify-between items-center">
                        <input type="email" class="contact-page-input w-[49%] h-[28px]" placeholder="Email">
                        <input type="text" class="contact-page-input w-[49%] h-[28px]" placeholder="Name">
                    </div>
                    <input type="text" class="contact-page-input w-full h-[28px]" placeholder="Subject">
                    <textarea class="contact-page-input w-full min-h-[112px] pt-2" placeholder="How can we be of service?"></textarea>
                    <input type="submit" class="w-[134px] h-8 m-auto my-4 border-[1px] bg-primary rounded-full font-unna-700-it text-center text-[17px] text-white pt-0.5 mx-3 cursor-pointer">
                </form>
                <div class="flex flex-col justify-around my-6 text-center">
                    <div class="flex flex-col justify-center items-center my-4">
                        <img class="w-10 h-10 my-1" src="../../images/icons/location.svg" type="" />
                        <h6 class="font-unna-700  text-[13px] my-1">BRUSSELS HEAD OFFICE</h6>
                        <p class="font-jose-400 text-[9px] my-[2px]">Sablon Tower, Rue Joseph Stevens 7 <br/>1000 Bruxelles Belgium</p>
                    </div>
                    <div class="flex flex-col justify-center items-center my-4">
                        <img class="w-10 h-10 my-1" src="../../images/icons/email.svg" type="" />
                        <h6 class="font-unna-700  text-[13px] my-1">EMAIL US</h6>
                        <p class="font-jose-400 text-[9px] my-[2px]">info@fundingontap.com</p>
                    </div>
                    <div class="flex flex-col justify-center items-center my-4">
                        <img class="w-10 h-10 my-1" src="../../images/icons/phone.svg" type="" />
                        <h6 class="font-unna-700  text-[13px] my-1">CALL US</h6>
                        <p class="font-jose-400 text-[9px] my-[2px]">+32 (0) 2 401 61 31</p>
                    </div>
                </div>
            </div>

            <!-- END MOBILE CONTACT PAGE -->




            <!-- DESKTOP CONTACT PAGE -->

            <div class="hidden md:block">
                <h1 class="font-unna-700 text-[39px] xl:text-[50px] text-center mb-6">CONTACT US</h1>
                <div class="flex flex-row w-[90%] xl:w-[70%] m-auto">
                    <form class="flex flex-col flex-wrap items-center w-2/3 m-auto my-6" aria-label="Contact Us Form">
                        <div class="flex flex-row w-full justify-between items-center">
                            <input type="email" class="contact-page-input w-[49%] h-[40px]" placeholder="Email">
                            <input type="text" class="contact-page-input w-[49%] h-[40px]" placeholder="Name">
                        </div>
                        <input type="text" class="contact-page-input w-full h-[40px]" placeholder="Subject">
                        <textarea class="contact-page-input w-full min-h-[300px] xl:min-h-[360px] pt-4" placeholder="How can we be of service?"></textarea>
                        <input type="submit" class="w-48 h-12 m-auto my-10 border-[1px] bg-primary rounded-full font-unna-700-it text-center text-2xl text-white pt-0.5 mx-3 cursor-pointer">
                    </form>
                    <div class="flex flex-col justify-between w-1/3 ml-10 mb-16 text-center">
                        <div class="flex flex-col justify-center items-center my-4">
                            <img class="w-[40px] xl:w-[60px] my-1" src="../../images/icons/location.svg" type="" />
                            <h6 class="font-unna-700 text-[18px] xl:text-[21px] my-1">BRUSSELS HEAD OFFICE</h6>
                            <p class="font-jose-400 text-[14px] leading-4 my-[2px]">Sablon Tower, Rue Joseph Stevens 7 <br/>1000 Bruxelles Belgium</p>
                        </div>
                        <div class="flex flex-col justify-center items-center my-4">
                            <img class="w-[40px] xl:w-[60px] my-1" src="../../images/icons/email.svg" type="" />
                            <h6 class="font-unna-700 text-[18px] xl:text-[21px] my-1">EMAIL US</h6>
                            <p class="font-jose-400 text-[14px] leading-4 my-[2px]">info@fundingontap.com</p>
                        </div>
                        <div class="flex flex-col justify-center items-center my-4">
                            <img class="w-[40px] xl:w-[60px] my-1" src="../../images/icons/phone.svg" type="" />
                            <h6 class="font-unna-700 text-[18px] xl:text-[21px] my-1">CALL US</h6>
                            <p class="font-jose-400 text-[14px] leading-4 my-[2px]">+32 (0) 2 401 61 31</p>
                        </div>
                    </div>
                </div>
                <h4 class="font-unna-700-it text-[30px] text-center my-14">Follow us on social media</h4>
                <div class="flex flex-row justify-between w-[70%] xl:w-[50%] m-auto mt-11 mb-20">
                    <a class="flex flex-col justify-center items-center" href="" target="_blank" aria-label="Follow us on Facebook">
                        <img class="w-[40px] xl:w-[60px]"  src="../../images/icons/facebook.svg" />
                        <p class="font-unna-700-it text-[23px] text-primary-dark2 my-3">Facebook</p>
                    </a>
                    <a class="flex flex-col justify-center items-center" href="" target="_blank" aria-label="Follow us on Twitter">
                        <img class="w-[40px] xl:w-[60px]" src="../../images/icons/twitter.svg" />
                        <p class="font-unna-700-it text-[23px] text-primary-dark2 my-3">Twitter</p>
                    </a>
                    <a class="flex flex-col justify-center items-center" href="" target="_blank" aria-label="Follow us on Youtube">
                        <img class="w-[40px] xl:w-[60px]"  src="../../images/icons/youtube.svg" />
                        <p class="font-unna-700-it text-[23px] text-primary-dark2 my-3">Youtube</p>
                    </a>
                    <a class="flex flex-col justify-center items-center" href="" target="_blank" aria-label="Follow us on LinkedIn">
                        <img class="w-[40px] xl:w-[60px]"  src="../../images/icons/linkedln.svg" />
                        <p class="font-unna-700-it text-[23px] text-primary-dark2 my-3">LinkedIn</p>
                    </a>
                    
                </div>
            </div>

            <!-- END DESKTOP CONTACT PAGE -->

            <div class="bg-[#2E44FF]/[0.11] w-full pt-11 md:pt-14 xl:pt-20 pb-6 md:pb-10 xl:pb-16">
                <h1 class="font-unna-700 md:w-[50%] mx-auto text-[20px] md:text-[39px] md:leading-[45px] xl:text-[50px] text-center mb-6 md:mb-12 xl:mb-20">SATELLITE AND PARTNER OFFICES</h1>
                <div class="grid grid-cols-2 md:grid-cols-3 auto-rows-fr w-[85%] xl:w-[60%] mx-auto">
                    <div class="flex flex-col mb-10">
                        <span class="font-unna-700 text-sm md:text-xl xl:text-2xl">Vienna, Austria</span>
                        <span class="font-jose-300-it text-xs md:text-base xl:text-lg">Herzfeld Consulting</span>
                    </div>
                    <div class="flex flex-col mb-10">
                        <span class="font-unna-700 text-sm md:text-xl xl:text-2xl">Bordeaux, France</span>
                        <span class="font-jose-300-it text-xs md:text-base xl:text-lg">Egemone Consulting</span>
                    </div>
                    <div class="flex flex-col mb-10">
                        <span class="font-unna-700 text-sm md:text-xl xl:text-2xl">Berlin, Germany</span>
                        <span class="font-jose-300-it text-xs md:text-base xl:text-lg">Reeckmann</span>
                    </div>
                    <div class="flex flex-col mb-10">
                        <span class="font-unna-700 text-sm md:text-xl xl:text-2xl">Berlin, Germany</span>
                        <span class="font-jose-300-it text-xs md:text-base xl:text-lg">mascontour</span>
                    </div>
                    <div class="flex flex-col mb-10">
                        <span class="font-unna-700 text-sm md:text-xl xl:text-2xl">Heidelberg, Germany</span>
                        <span class="font-jose-300-it text-xs md:text-base xl:text-lg"></span>
                    </div>
                    <div class="flex flex-col mb-10">
                        <span class="font-unna-700 text-sm md:text-xl xl:text-2xl">Stuttgart, Germany</span>
                        <span class="font-jose-300-it text-xs md:text-base xl:text-lg"></span>
                    </div>
                    <div class="flex flex-col mb-10">
                        <span class="font-unna-700 text-sm md:text-xl xl:text-2xl">Dublin, Ireland</span>
                        <span class="font-jose-300-it text-xs md:text-base xl:text-lg"></span>
                    </div>
                    <div class="flex flex-col mb-10">
                        <span class="font-unna-700 text-sm md:text-xl xl:text-2xl">Galway, Ireland</span>
                        <span class="font-jose-300-it text-xs md:text-base xl:text-lg"></span>
                    </div>
                    <div class="flex flex-col mb-10">
                        <span class="font-unna-700 text-sm md:text-xl xl:text-2xl">Milan, Italy</span>
                        <span class="font-jose-300-it text-xs md:text-base xl:text-lg"></span>
                    </div>
                    <div class="flex flex-col mb-10">
                        <span class="font-unna-700 text-sm md:text-xl xl:text-2xl">Turin, Italy</span>
                        <span class="font-jose-300-it text-xs md:text-base xl:text-lg">Next Energy Consumer</span>
                    </div>
                    <div class="flex flex-col mb-10">
                        <span class="font-unna-700 text-sm md:text-xl xl:text-2xl">Bucharest, Romania</span>
                        <span class="font-jose-300-it text-xs md:text-base xl:text-lg"></span>
                    </div>
                    <div class="flex flex-col mb-10">
                        <span class="font-unna-700 text-sm md:text-xl xl:text-2xl">Ploiesti, Romania</span>
                        <span class="font-jose-300-it text-xs md:text-base xl:text-lg">Zenchron Dynamics</span>
                    </div>
                    <div class="flex flex-col mb-10">
                        <span class="font-unna-700 text-sm md:text-xl xl:text-2xl">London, UK</span>
                        <span class="font-jose-300-it text-xs md:text-base xl:text-lg">TradePeers</span>
                    </div>
                    <div class="flex flex-col mb-10">
                        <span class="font-unna-700 text-sm md:text-xl xl:text-2xl">Jakarta, Indonesia</span>
                        <span class="font-jose-300-it text-xs md:text-base xl:text-lg">mascontour</span>
                    </div>
                    <div class="flex flex-col mb-10">
                        <span class="font-unna-700 text-sm md:text-xl xl:text-2xl">Managua, Nicaragua</span>
                        <span class="font-jose-300-it text-xs md:text-base xl:text-lg">mascontour</span>
                    </div>
                </div>
            </div>

        </section>
    `;
  }
}