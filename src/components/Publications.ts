import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { TailwindElement } from "../shared/tailwind.element";

import style from "../shared/tailwind.global.css";

@customElement("my-publications")
export class Publications extends TailwindElement(style) {

    render() {
        return html`
            <publications-menu></publications-menu>
            <publications-small></publications-small>
            <publications-desktop></publications-desktop>          
        `;
    }
}