import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { TailwindElement } from "../shared/tailwind.element";

import style from "../shared/tailwind.global.css";

@customElement("test-component")
export class TestComponent extends TailwindElement(style) {
  @property()
  name?: string = "World";

  render() {
    return html`
      <p class="bg-green-200">
        Hello,
        <b>${this.name}</b>
        !
      </p>
      <button class="bg-red-500 text-yellow-200 p-2 rounded-full text-2xl">Hello world!</button>
    `;
  }
}
