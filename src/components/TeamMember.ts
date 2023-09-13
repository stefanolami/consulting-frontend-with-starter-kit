import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { TailwindElement } from "../shared/tailwind.element";

import style from "../shared/tailwind.global.css";

@customElement("team-member")
export class TeamMember extends TailwindElement(style) {

    render() {
        return html`
        <div class="md:mt-14 mb-20 xl:mb-28 w-[87%] mx-auto">
            <div class="relative mr-[106px] md:m-auto mb-10 xl:mb-32">
                <div class="flex flex-col justify-end m-auto text-right w-[160px] md:w-[360px] xl:w-[500px] pt-14 md:pt-28 md:pr-14 md:mb-10">
                    <h1 class="font-unna-700 text-xl md:text-[39px] xl:text-[50px]">GLENN CEZANNE</h1>
                    <h5 class="font-jose-400-it text-sm md:text-xl xl:text-[23px] md:mt-5 md:mb-11 xl:mt-10">Co-Founder and<br class="md:hidden"/> Strategic Advisor</h5>
                </div>
                <div class="absolute top-0 left-[100%] md:left-[73%] xl:left-[76%]">
                    <img src="../../images/who-we-are/glenn.png" alt="Glenn Cezanne" class="w-[104px] h-[104px] md:w-[209px] md:h-[209px] xl:w-[231px] xl:h-[231px]">
                    <div class="flex flex-row justify-between  w-[104px] h-5 md:w-[209px] md:h-[42px] xl:w-[231px] xl:h-12 pt-1">
                        <p class="font-jose-600-it text-[8px] md:text-[14px] xl:text-base text-primary-dark2 leading-[8px] md:leading-[17px]">Download my <br/>Digital Business Card</p>
                        <object data="../../images/icons/download.svg" class="w-4 h-4 md:w-[31px] md:h-[31px] xl:w-10 xl:h-10"></object>
                    </div>
                </div>
            </div>
            <div class="team-member-p-div">
                <p>
                    With a career focused on Public Affairs, Public Relations and Association Management on the international stage, 
                    Glenn understands the political decision-making landscape with the aim of creating effective communication strategies, 
                    whether it is to have an impact on a piece of legislation in the EU pipeline or to increase political attention on specific issues of interest to clients.
                </p>
            </div> 
            <p class="glenn-page-quotes">
                “Cooperating on Public Affairs with Glenn Cezanne bilaterally and on association platforms has been a seed for innovative ideas and effective implementation.”
            </p>
            <p class="glenn-page-quotes-author">
                Hannu Kareinen <br class="hidden md:block"/>Vice-President, <br class="md:hidden"/>Community Relations Veikkaus Oy
            </p>
            <div class="team-member-p-div">
                <h3 class="glenn-page-headings">Interest Rapresentation</h3>
            <p>
                Glenn first began his career in Brussels at the American Chamber of Commerce to the EU before becoming Account Executive at Hume Brophy.<br/><br/>
                His position there focused mostly on maximising outreach capabilities for client interests and their visibility vis-à-vis EU and national governmental and non-governmental organisations.<br/><br/>
                Thereafter, he became a representative in the Brussels office of the Lottomatica Group (now IGT) – globally the largest provider of state/national lottery services and gaming technology 
                solutions – where he was responsible for raising the company’s profile and establishing it as a key source of information for EU and national policy- and law-makers.
            </p>
            </div>
            <p class="glenn-page-quotes">
                “Glenn Cezanne’s ability to connect the various internal professional organs within a large organisation, makes him the ideal person to find a unified voice for an external audience.”
            </p>
            <p class="glenn-page-quotes-author">
                Tom Bijkerk <br class="hidden md:block"/>(former) EU Affairs Officer, <br class="md:hidden"/>Unie van Waterschappen
            </p>
            <div class="team-member-p-div">
                <h3 class="glenn-page-headings">Association Management</h3>
                <p>
                    His last position before deciding to build his own consultancy (Time&Place Consulting), was Executive Director for the European Casino Association.<br/><br/>
                    There he was responsible for establishing and sustaining the voice of the European casino industry on the wider international stage, as well as guaranteeing the smooth running of the association’s internal infrastructure.<br/><br/>
                    He is currently the Secretary General of the European Enterprise Alliance which he built ”from scratch” in 2019 and which represents the interests of small- and medium-sized enterprises from central and Eastern European countries on the European stage.
                </p>
                <h3 class="glenn-page-headings">Business development and trade</h3>
                <p>
                    In his roles outside of association management, he advised businesses on national and EU regulatory landscapes with a view of creating ideal market conditions, not only for market incumbents but also (potential) new entrants.<br/><br/>
                    Furthermore, he has provided market analyses helping businesses evaluate opportunities. He has also worked in analysing market circumstances, most recently in light of Mercosur-EU and Brexit negotiations helping companies make choices on, for example, production location and movement of labour.
                </p>
                <h3 class="glenn-page-headings">Publications & Training</h3>
                <p>
                    He regularly produces podcasts (onTaP) on current and predicted political, social and economic trends.<br/><br/>
                    Glenn is often invited to conferences and seminars to discuss how decision-making at EU level can be influenced, whilst also providing specialised training to various stakeholders such as sports executives to this end.<br/><br/>
                    He regularly writes thematic articles for online and paper press, and recently wrote the chapter titled ”Shaping Lobbying Impact: How Everything from Seating Arrangements to Natural Disasters Makes a Difference” in the book, Lobbying in the European Union (2019, Springer).
                </p>
                <h3 class="glenn-page-headings">Publications & Training</h3>
                <p>
                    At the Univeristy of Portsmouth (UK), he received a Bachelor’s with Honours for European Studies and International Relations.
                    Subsequently he received a Master’s in Diplomacy at the University of Reading (UK). Glenn is fluent in German, English, French, Romanian. He also speaks Italian and Dutch.
                </p>                    
            </div>
            <p class="glenn-page-quotes">
                “Glenn Cezanne has the people skills, language abilities and network to be an outstanding lobbyist. Indeed, he has the interpersonal skills and determination to succeed in any field.”
            </p>
            <p class="glenn-page-quotes-author">
                Anne Barker <br/>Journalist, ABC (Australia)
            </p>     
        </div>
        `;
    }
}