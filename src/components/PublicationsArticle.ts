import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { TailwindElement } from "../shared/tailwind.element";

import style from "../shared/tailwind.global.css";

@customElement("publications-article")
export class PublicationsArticle extends TailwindElement(style) {

    render() {
        return html`
            <div class="w-[88%] md:w-full mx-automb-16 md:mb-32">
                <div class="md:w-[88%] xl:w-[75%] mx-auto">
                    <p class="xl:hidden w-2/5 md:w-full md:pl-[82%] xl:pl-[88%] mx-auto text-center md:text-right font-jose-300-it md:font-semibold text-[13px] md:text-[15px] leading-[13px] md:leading-[15px]">April 9, 2020</p>
                    <div class="xl:flex flex-row justify-between items-end">
                        <h1 class="mx-auto xl:mx-0 font-unna-700 text-left text-[20px] md:text-[39px] xl:text-[50px] leading-[23px] md:leading-[45px] xl:leading-[57px]">THE FIRST 100 DAYS OF THE </br>"VON DER LEYEN COMMISSION"</h1>
                        <p class="hidden xl:block font-jose-400-it text-[15px] leading-[15px] text-right">April 9, 2020<br><span class="not-italic font-semibold leading-10">by Sébastien Blanchard</span></p>
                    </div>                   
                    <p class="xl:hidden mt-3 md:mt-7 xl:mt-16 font-jose-400-it md:font-semibold text-[14px] md:text-[15px] leading-4 md:leading-[15px]">by Sébastien Blanchard</p>
                    <p class="mt-6 xl:mt-16 font-jose-400-it text-[14px] md:text-[21px] xl:text-[23px] leading-[16px] md:leading-[26px]">Back in the summer of 2019, the soon-to-become EU Commission president Ursula von der Leyen pledged to deliver on a 
                        wide range of political initiatives within the first 100 days of her mandate, from the environmental and digital transitions to social 
                        rights and gender equality.
                    </p>
                </div>               
                <img class="xl:hidden w-full mt-12" src="../../images/publications/example-commission-tablet.png" alt="European Commission">
                <img class="hidden xl:block w-full mt-12" src="../../images/publications/example-commission-desktop.png" alt="European Commission">
                <p class="md:w-[88%] xl:w-[75%] md:mx-auto mt-3 font-jose-300-it text-[14px] md:text-[14px] leading-4 md:leading-[14px] text-left">Legend for this beautiful and very meaningful picture that perfectly illustrates our purpose.</p>
                <div class="md:w-[75%] xl:w-3/5 mx-auto">
                    <h2 class="publications-article-h2">Have such promises been fulfilled?</h2>
                    <p class="publications-article-h2-subtitle">T&P Senior Consultant and Founder of Egemone Consulting in Bordeaux, Sébastien Blanchard, has a look.</p>
                    <p class="mt-4 md:mt-12 publications-article-p">As soon as her name came out of the hat of the Heads of State and Government at the end of an intense European summit, Ursula von der Leyen laid her cards on the table. If she were to obtain the confirmation of her appointment and of her team of Commissioners, the first hundred days of her mandate would be critical in putting concrete flagship initiatives on the table.
                        </br></br>The message was clear: the European Commission has a duty to get down to work without delay in order to launch a new dynamic and move away from 
                        an "action by reaction" approach and, on the contrary, to make its mark on the upheavals in our economies, societies and environments.
                        </br></br>Thus, the political program presented by the presidential candidate and defended before MEPs on July 16, 2019, articulated six major priorities 
                        and announced a number of flagship proposals, conceptualized by Ursula von der Leyen as political promises of her “geopolitical” Commission (I). While 
                        it is of course far too early to know what the fate of each of these initiatives will be - going through the turmoil of the legislative process guarantees 
                        many surprises - it already seems interesting to take stock and identify the convergences and divergences between the promises made before the European executive 
                        took office on 1 December 2019 and the key elements of its proposals presented before March 9; the anniversary date of the first hundred days (II).
                    </p>
                    <h2 class="w-[90%] md:w-[55%] publications-article-h2">Political promises <br>for the first hundred days</h2>
                    <p class="publications-article-h2-subtitle">In her political guidelines, von der Leyen undertook to quickly present flagship initiatives on two main 
                        fronts, which should lead the European Union to achieve a «double transition»: the ecological transition and the digital transition.
                    </p>
                    <h4 class="publications-article-h4">The Green Deal for Europe</h4>
                    <p class="mt-4 md:mt-6 publications-article-p">Responding to the "green wave" at the ballot box (almost 10% of the seats in the European Parliament 
                        have been allocated to Green MEPs) and the growing upheavals brought by climate change, von der Leyen set as the centrepiece of her mandate and as her first 
                        political priority the establishment of a "Green Deal for Europe" under the leadership of Executive Vice-President Frans Timmermans.
                        </br></br>In particular, this Pact was to include “the first European Climate Law to enshrine the 2050 climate neutrality target into law”.
                    </p>
                </div>               
                <img class="md:hidden w-full mt-12" src="../../images/publications/example-start-mobile.png" alt="European Commission">
                <img class="hidden md:block w-full xl:w-4/5 mx-auto mt-12 xl:mt-20" src="../../images/publications/example-start-desktop.png" alt="European Commission">
                <p class="md:w-[88%] xl:w-[75%] md:mx-auto mt-3 font-jose-300-it text-[14px] md:text-[14px] leading-4 md:leading-[14px] text-left">Legend for this beautiful and very meaningful picture that perfectly illustrates our purpose.</p>
                <div class="md:w-[75%] xl:w-3/5 mx-auto">
                    <p class="mt-4 md:mt-16 publications-article-p">She also outlined a clear roadmap:
                        <br><br>With regard to the Emissions Trading Scheme, an extension to the maritime sector, road traffic and the construction sector should be proposed, 
                        as well as a reduction in "the free allowances allocated to airlines over time”<br><br>
                        <ul class="publications-article-p list-disc pl-5">
                            <li>With regard to taxation, the introduction of a Carbon Border Tax and the revision of Directive 2003/96/EC restructuring the Community 
                                framework for the taxation of energy products and electricity were announced. <br><br>
                            </li>
                            <li>Recognizing the need for "a fair transition for all", the establishment of a Just Transition Fund was foreseen to support 
                                those people and regions most affected by the environmental and ecological transition. <br><br>
                            </li>
                            <li>Similarly, in order to finance the investments necessary for this transition, a comprehensive investment plan was detailed in 
                                the political programme, which included several elements: a green finance strategy; an investment plan for a sustainable Europe, including 
                                the conversion of part of the European Investment Bank into a European Climate Bank. <br><br>
                            </li>
                            <li>Finally, von der Leyen called for "new standards for biodiversity cutting across trade, industry, agriculture and economic policy". 
                                Thus, several complementary strategies were announced: a biodiversity strategy for 2030; a “farm-to-fork” strategy for sustainable food; 
                                a strategy to protect human health against environmental degradation and pollution; and an action plan for the circular economy, 
                                covering in particular high-polluting sectors. <br><br>
                            </li>
                        </ul>
                    </p>
                    <h4 class="publications-article-h4">The Digital Age</h4>
                    <p class="mt-4 md:mt-6 publications-article-p">To meet the challenges of the exponential development of the digital economy and sector, 
                        "a legislative proposal for a coordinated European approach on the human and ethical implications of Artificial Intelligence" was announced 
                        during the first 100 days. As such, to translate into policy initiatives the work of the high-level group of experts on Artificial Intelligence 
                        set up in June 2018 by the European Commission. This proposal is to also "look at how we can use big data for innovations" for the benefit of 
                        European companies and businesses.
                        <br><br>The European approach advocated by the current President of the European Commission was therefore intended to be proactive, 
                        in order to establish a standard that could be disseminated worldwide, on the model of the General Data Protection Regulation.
                    </p>
                    <h4 class="publications-article-h4">Other political commitments</h4>
                    <p class="mt-4 md:mt-6 publications-article-p">Further building on the European Pillar of Social Rights launched by the former Juncker Commission, 
                        von der Leyen indicated that during the first hundred days of her mandate she would propose "a legal instrument to ensure that every worker in our Union 
                        has a fair minimum wage”, allowing “for a decent living wherever they work”.
                        <br><br>Also, in the social area, the candidate for the Presidency of the European Commission wished to table “measures to introduce binding pay 
                        transparency measures” to achieve real economic equality between men and women.
                    </p>
                    <h2 class="w-[90%] publications-article-h2">Proposals on the negotiating table <br>after one hundred days</h2>
                    <p class="publications-article-h2-subtitle">Having to deal with a European Parliament split between four major 
                        political forces and with divisions between the Member States within the Council of the European Union, which deepened with the episode of the rejection 
                        of the "Spitzenkandidat" system, President von der Leyen did not push her political agenda as far as she had announced. Nevertheless, as she expressed on 
                        the anniversary date, her first hundred days at the head of the executive did indeed "serve to initiate the double transition which Europe must tackle”.
                    </p>
                    <h4 class="publications-article-h4">The environmental transition</h4>
                    <p class="mt-4 md:mt-6 publications-article-p">First, the European Commission presented soon after taking office in December 2019, and within the 
                        framework of COP25 in Madrid, a global strategy for environmental transition. Something that can be read as an almost endless wish list including no less 
                        than 50 measures affecting all economic sectors.
                        <br><br>Building on this comprehensive strategy, a new industrial strategy presented on the 101st day of the mandate by French Commissioner Thierry 
                        Breton gave some details on the way ahead. Listing several major general measures without necessarily providing for legislative initiatives at this stage, 
                        it seeks to support European industry in its green transition: Decarbonisation of energy-intensive industries, establishment of a Clean Hydrogen Alliance 
                        and an Alliance on Low-Carbon Industries, guidelines for green public procurement, etc.
                        <br><br>In addition, as part of this EU industrial strategy, an action plan for a circular economy was published two days after the 100-day anniversary of 
                        the Commission's term of office, which builds on the work carried out in this area since 2015. This plan announces some major measures, including a 
                        legislative proposal on the sustainability of products, which will disrupt the design process for greater repairability and recycling. In addition, 
                        a new “right to repair” will be created so that consumers can play a more active role vis-à-vis manufacturers.
                        <br><br>It should be noted that the publication of the specific biodiversity strategy for 2030 has been postponed due to significant differences of 
                        opinion between the various Commission Directorates-General working on this issue (mainly DG Agriculture and DG Environment).
                    </p>
                </div>                
                <img class="w-full xl:w-4/5 mx-auto mt-12 xl:mt-20" src="../../images/publications/example-solar-desktop.png" alt="European Commission">
                <p class="md:w-[88%] xl:w-[75%] md:mx-auto mt-3 font-jose-300-it text-[14px] md:text-[14px] leading-4 md:leading-[14px] text-left">Legend for this beautiful and very meaningful picture that perfectly illustrates our purpose.</p>
                <div class="md:w-[75%] xl:w-3/5 mx-auto">
                    <p class="mt-8 md:mt-16 publications-article-p">Secondly, the Executive presented a proposal for a European regulation to enshrine the 2050 
                        climate-neutrality objective into EU law. The Commission therefore stood by its political commitment, although the challenge lies elsewhere: 
                        How to achieve this goal! The legislative proposal includes measures enabling the monitoring of progress being made, as well as a trajectory for the 
                        Union for the period 2030-2050 in terms of greenhouse gas reduction that guarantees a certain degree of predictability for all players. However, is the 
                        challenge lies in the practical modalities for the transition and the budget.
                        <br><br>Thirdly, the Commission presented a sustainable investment plan for Europe, which aims to raise one trillion euros over the next decade. 
                        Still a long way from the EUR 260 billion of additional investments per year that the Commission believes will be necessary in the next decade as a 
                        minimum to achieve the 2030 climate objectives. Furthermore, the only new budget line in this trillion euros is the one dedicated to the Just Transition 
                        Fund. As it stands, 7.5 billion EUR would be allocated from the European budget in the next multiannual financial framework - i.e. a very limited sum to 
                        smooth the effects of the ecological transition in a number of European regions.
                        <br><br>As was to be expected from July 2019 and Ursula von der Leyen's presentation of the outlines of the Green Deal for Europe, it is interesting to 
                        note that the cross-sectoral dimension of the proposals and their impact on all sectors of activity led companies and lobbyists to give priority to this 
                        file during the first hundred days of the new European executive's mandate.
                    </p>
                    <h4 class="publications-article-h4">The digital transition</h4>
                    <p class="mt-4 md:mt-6 publications-article-p">While the European Commission did not finally present legislative proposals, it sowed the seeds 
                        for its future initiatives: A strategy for data, a White Paper on artificial intelligence, as well as a position on risks related to the deployment of 
                        5G networks. Encompassing these key proposals, a general communication to "shape Europe’s digital future" details the Commission's vision on 
                        cross-cutting issues: modernisation of competition rules, regulation of digital platforms, reducing the sector's carbon footprint, etc.
                        <br><br>As regards data, the projects and actions listed live up to the promises, since the strategy encompasses many sectors and issues to build 
                        an internal market for non-personal data, and to use the untapped potential of data held by private economic actors. A legislative proposal in 2021 
                        to promote data sharing between companies and public actors (“Business to Government” or B2G), the construction of sectoral data spaces 
                        (in key sectors such as health, agriculture or energy), the promotion of European “clouds”… all these key actions should enable the Union to become 
                        the world leader in high added-value data feeding the AI sector.
                    </p>
                </div>               
                <img class="xl:hidden w-full mt-12" src="../../images/publications/example-weird-tablet.png" alt="European Commission">
                <img class="hidden xl:block w-4/5 mx-auto mt-20" src="../../images/publications/example-weird-desktop.png" alt="European Commission">
                <p class="md:w-[88%] xl:w-[75%] md:mx-auto mt-3 font-jose-300-it text-[14px] md:text-[14px] leading-4 md:leading-[14px] text-left">Legend for this beautiful and very meaningful picture that perfectly illustrates our purpose.</p>
                <div class="md:w-[75%] xl:w-3/5 mx-auto">
                    <p class="mt-8 md:mt-16 publications-article-p">On this last topic, the "legal weakness" of the initiative presented, compared to what had been 
                        announced by von der Leyen, can certainly be explained by the intense lobbying undergone by the European Executive on behalf of the digital technology 
                        sector, which fears that a quick regulation would irremediably handicap Europe in the global race to develop artificial intelligence applications. 
                        The Commission seems to have taken note of the fact that "high risk" AI applications with a potential to erode fundamental rights 
                        (e.g. facial recognition technology; or technologies in critical sectors, such as health, recruitment, transport or the judicial system) will be 
                        regulated in one way or another.
                        <br><br>At the present time, however, no one can say how the trade-offs will be made before the presentation of the future legislative act. 
                        The options opened up by the White Paper have for now been submitted for consultation with the stakeholders in the sector. A calm debate that is 
                        widely open to third parties seems the best way to effectively calibrate the regulations and we can only regret the haste in which the Commission 
                        President had locked herself in during the summer of 2019.
                    </p>
                    <h4 class="publications-article-h4">Other initiatives</h4>
                    <p class="mt-4 md:mt-6 publications-article-p">Regarding minimum wages, the European Commission did not present any legal instrument, contrary to 
                        the political commitment made. The initiative took the form of a simple consultation of the social partners initiated in mid-January. The high level of 
                        sensitivity around the dossier explains this caution, as the Commission wanted to clear the matter up with the economic players and the social partners 
                        before confronting the Member States, many of which are still reluctant to adopt joint initiatives on social matters.
                        <br><br>Regarding economic equality between men and women, the Commission stopped short of its commitments. As part of the presentation of the 
                        comprehensive strategy on gender equality, the Commission only launched a public consultation on the transparency on pay at the beginning of March. 
                        This consultation process could potentially lead to the presentation of a binding legislative proposal by the end of 2020. But nothing is less certain, 
                        especially considering that proposals presented in recent years in this area have been blocked by the Member States (for example, the proposal on quotas 
                        for women on the boards of large companies, presented in 2012).
                    </p>
                    <h2 class="w-[90%] publications-article-h2">Looking ahead</h2>
                    <p class="publications-article-h2-subtitle">In national politics the first hundred days are widely seen by 
                        politicians as a period during which they can ride the wave of their election. Ursula von der Leyen has voluntarily asked to be judged on her ability 
                        to deliver during this period on the four commitments clearly identified in her general policy speech and thus to breathe new life into the European 
                        integration.
                    </p>
                    <p class="mt-4 md:mt-12 publications-article-p">While the roadmap for the 100-days has broadly been respected, the crises that the EU has faced 
                        and is currently facing, in particular the COVID-19 epidemic, have already had a major impact on the legislative agenda for the coming months. It will 
                        therefore not be easy to continue along the path mapped out during these first 100 days and to put the EU on the road to the dual ecological and digital 
                        transition. Even more so considering that a budgetary compromise on the next financial framework for the next seven years will be extremely difficult to 
                        reach by the end of 2020, when a key element here is the structuring of an investment capacity tailored to achieve the objectives set.
                        <br><br>Achieving results on all these issues will, however, be highly necessary in order to strengthen European sovereignty, put an end to the 
                        doubts surrounding the Union's ability to overcome its divisions and prevent the von der Leyen’s European Commission from being subjected to an 
                        agenda imposed solely by crises, forcing it to play only the role of a fire-fighter instead of that of an architect.
                    </p>    
                    <p class="md:hidden mt-8 text-center md:text-right font-jose-300-it md:font-semibold text-[13px] md:text-[15px]">published on April 9, 2020</p>
                    <div class="mt-8 md:mt-20 mx-auto xl:pt-4 xl:border-t-2 xl:border-primary-dark2 max-w-[320px] md:max-w-[450px] xl:max-w-[750px] flex flex-row justify-center items-center">
                        <img class="xl:hidden w-1/3" src="../../images/publications/example-sebastian-tablet.png" alt="Sebastian">
                        <img class="hidden xl:block w-1/3" src="../../images/publications/example-sebastian-desktop.png" alt="Sebastian">
                        <div class="ml-2 text-[15px] leading-[15px]">
                            <p class="hidden md:block mb-12 xl:mb-16 text-center md:text-right font-jose-300-it md:font-semibold text-[13px] md:text-[15px]">published on April 9, 2020</p>
                            <p class="font-jose-600 mb-2">Sébastien Blanchard</p>
                            <p class="font-jose-300-it">Sébastien Blanchard is the founder of Egemone Consulting, a Bordeaux-based EU affairs consultancy which provides legal and 
                                consulting services for a whole range of private and public local stakeholders.
                            </p>
                        </div>
                    </div>
                </div>                
            </div>          
        `;
    }
}