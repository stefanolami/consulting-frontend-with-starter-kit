import { html } from "lit";
import { customElement} from "lit/decorators.js";
import { TailwindElement } from "../shared/tailwind.element";

import style from "../shared/tailwind.global.css";

@customElement("my-footer")
export class Footer extends TailwindElement(style) {

  render() {
    return html`
    <footer>
        <!-- footer needs body with position relative and min-height 100vh (relative min-h-screen)
        and main with padding-bottom equal to footer height (pb-[164px]) -->


        <!-- MOBILE FOOTER -->
        <div class="absolute bottom-0 left-0 flex md:hidden flex-col justify-evenly items-center w-full h-[200px] bg-primary text-white">
            <div class="flex flex-row items-center justify-evenly pt-2" id="mobile-footer-btns">
                <a class="mobile-footer-btns font-unna-700-it" href="#">Newsletter</a>
                <a class="mobile-footer-btns font-unna-700-it" href="./contact.html">Contact</a>
            </div>

            <div class="font-jose-400 text-[11px] text-center leading-3 mt-2">
                <p>©2023 Time&Place Funding. <br/>A pillar of Time&Place Consulting. <br/>All rights reserved</p>
            </div>

            <ul class="w-full px-9 flex flex-row justify-around font-jose-700 text-[11px]">
                <li><a href="./terms-conditions.html">Terms & Conditions</a></li>
                <li>-</li>
                <li><a href="./cookie-use.html">Cookie Use</a></li>
                <li>-</li>
                <li><a href="./privacy-policy.html">Privacy Policy</a></li>
            </ul>
            <div class="flex flex-row justify-center mx-auto my-3 gap-2">
                <a href="" target="blank" aria-label="Follow us on Facebook">
                    <img class="w-[22px]" src="../../images/icons/facebook-footer.svg" alt="Facebook icon">
                </a>
                <a href="" target="blank" aria-label="Follow us on Twitter">
                    <img class="w-[22px]" src="../../images/icons/twitter-footer.svg" alt="Twitter icon">
                </a>
                <a href="" target="blank" aria-label="Follow us on Youtube">
                    <img class="w-[22px]" src="../../images/icons/youtube-footer.svg" alt="Youtube icon">
                </a>
                <a href="" target="blank" aria-label="Follow us on LinkedIn">
                    <img class="w-[22px]" src="../../images/icons/linkedln-footer.svg" alt="LinkedIn icon">
                </a>
            </div>
        </div>
        

        <!-- END MOBILE FOOTER -->

        


        <!-- TABLET FOOTER -->
        <div  class="absolute bottom-0 left-0 hidden md:flex xl:hidden flex-col justify-evenly items-center w-full h-[426px] bg-primary text-white">
            <div class="flex flex-row justify-around w-full h-[50%]">
                <form class="flex items-center">
                    <fieldset class="flex flex-col justify-center items-center" id="newsletter-desktop-tablet">
                        <legend class="font-unna-400-it text-[28px] text-center">Subscribe to our Newsletter!</legend>
                        <div class="flex flex-row justify-between items-center h-10 w-[416px] my-3" action="" method="">
                            <input class="mt-o bg-white/[.62] font-jose-400-it text-base h-full w-[281px] rounded-l-full pl-8" type="email" name="email" placeholder="email@gmail.com">
                            <input class="font-unna-700-it bg-white text-primary-dark2 text-[19px] h-full w-[130px] rounded-r-full" type="submit" value="SIGN ME UP!">
                        </div>
                        <p class="font-jose-400-it text-center text-sm">Stay up to date with our monthly newsletter <br/>on our publications, announcements and projects. <br/>Read our EU GDPR compliant policy.</p>
                    </fieldset>
                </form>
                <div class="flex flex-col h-full">
                    <div class="w-[201px] h-10  mt-[77px]">
                        <a class="inline-block w-full h-full border-[1px] border-white rounded-full font-unna-700-it text-center text-[26px] hover:bg-white hover:text-primary" href="./contact.html">Contact</a>
                    </div>
                    <div class="flex flex-row justify-center mx-auto mt-7 gap-5">
                        <a href="" target="blank" aria-label="Follow us on Facebook">
                            <img class="w-[35px]" src="../../images/icons/facebook-footer.svg" alt="Facebook icon">
                        </a>
                        <a href="" target="blank" aria-label="Follow us on Twitter">
                            <img class="w-[35px]" src="../../images/icons/twitter-footer.svg" alt="Twitter icon">
                        </a>
                        <a href="" target="blank" aria-label="Follow us on Youtube">
                            <img class="w-[35px]" src="../../images/icons/youtube-footer.svg" alt="Youtube icon">
                        </a>
                        <a href="" target="blank" aria-label="Follow us on LinkedIn">
                            <img class="w-[35px]" src="../../images/icons/linkedln-footer.svg" alt="LinkedIn icon">
                        </a>
                    </div>
                </div>
            </div>
            <div id="tablet-footer-nav" class="flex flex-col justify-around w-[88%] h-[120px] px-2 py-1 border-y font-jose-400-it text-xl">
                <nav class="flex flex-row justify-around items-center ">
                    <a href="./newsroom.html">Newsroom</a>
                    <a href="./services.html">Services</a>
                    <a href="./publications.html">Publications</a>
                    <a href="./why-us.html">Why Us</a>
                    <a href="./who-we-are.html">Who We Are</a>
                </nav>
                <nav class="flex flex-row justify-around items-center ">
                    <a href="./terms-conditions.html">Terms & Conditions</a>
                    <a href="./cookie-use.html">Cookie Use</a>
                    <a href="./privacy-policy.html">Privacy Policy</a>
                </nav>
            </div>
            <div class="font-jose-200 text-xl text-center">
                <p>©2023 Time&Place Funding. All rights reserved. <br/>Time&Place Funding is a pillar of Time&Place Consulting.</p>
            </div>
        </div>
            
        

        <!-- END TABLET FOOTER -->



        <!-- DESKTOP FOOTER -->
        <div class="absolute bottom-0 left-0 hidden xl:flex flex-col w-full h-[360px] bg-primary text-white">
            <div class="flex flex-row justify-evenly items-center w-full h-4/5">
                <div class="grid grid-cols-3 w-[55%]">
                    <nav class="desktop-footer-navs">
                        <div class="desktop-footer-headings">Overview</div>
                        <a class="desktop-footer-items" href="./newsroom.html">Newsroom</a>
                        <a class="desktop-footer-items" href="./services.html">Services</a>
                        <a class="desktop-footer-items" href="./publications.html">Publications</a>
                        <a class="desktop-footer-items" href="./why-us.html">Why Us</a>
                        <a class="desktop-footer-items" href="./who-we-are.html">Who We Are</a>
                    </nav>
                    <ul class="desktop-footer-navs">
                        <li class="desktop-footer-headings">Contact us</li>
                        <li class="desktop-footer-items">info@fundingontap.com</li>
                        <li class="desktop-footer-items">+32 (0) 2 401 61 31</li>
                        <li class="desktop-footer-items">Sablon Tower, <br/>Rue Joseph Stevens 7 <br/>1000 Bruxelles <br/>Belgium</li>
                    </ul>
                    <nav class="desktop-footer-navs">
                        <div class="desktop-footer-headings">Privacy</div>
                        <a class="desktop-footer-items" href="./terms-conditions.html">Terms & Conditions</a>
                        <a class="desktop-footer-items" href="./cookie-use.html">Cookie Use</a>
                        <a class="desktop-footer-items" href="./privacy-policy.html">Privacy Policy</a>
                    </nav>
                </div>
                <div class="w-[45%]">
                    <div class="flex flex-row justify-around w-full h-[50%] pb-10 pl-9">
                        <form class="flex items-center">
                            <fieldset class="flex flex-col justify-center items-center" id="newsletter-desktop-tablet">
                                <legend class="font-unna-400-it text-[28px] text-center">Subscribe to our Newsletter!</legend>
                                <div class="flex flex-row justify-between items-center h-10 w-[416px] my-3" action="" method="">
                                    <input class="mt-o bg-white/[.62] font-jose-400-it text-base h-full w-[281px] rounded-l-full pl-8" type="email" name="email" placeholder="email@gmail.com">
                                    <input class="font-unna-700-it bg-white text-primary-dark2 text-[19px] h-full w-[130px] rounded-r-full" type="submit" value="SIGN ME UP!">
                                </div>
                                <p class="font-jose-400-it text-center text-sm">Stay up to date with our monthly newsletter <br/>on our publications, announcements and projects. <br/>Read our EU GDPR compliant policy.</p>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
            <div class="flex flex-row justify-center items-center gap-8">
                <p class="font-unna-400-it text-[27px]">Follow us on social media!</p>
                <div class="flex flex-row justify-center items-center gap-5">
                    <a href="" target="blank" aria-label="Follow us on Facebook">
                        <img class="w-[35px]" src="../../images/icons/facebook-footer.svg" alt="Facebook icon">
                    </a>
                    <a href="" target="blank" aria-label="Follow us on Twitter">
                        <img class="w-[35px]" src="../../images/icons/twitter-footer.svg" alt="Twitter icon">
                    </a>
                    <a href="" target="blank" aria-label="Follow us on Youtube">
                        <img class="w-[35px]" src="../../images/icons/youtube-footer.svg" alt="Youtube icon">
                    </a>
                    <a href="" target="blank" aria-label="Follow us on LinkedIn">
                        <img class="w-[35px]" src="../../images/icons/linkedln-footer.svg" alt="LinkedIn icon">
                    </a>
                </div>
            </div>
        </div>
        

        <!-- END DESKTOP FOOTER -->



    </footer>
    `;
  }
}