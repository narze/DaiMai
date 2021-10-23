import "@testing-library/jest-dom"

import { render } from "@testing-library/svelte"

import Line from "./Line.svelte"

it("works", () => {
  const { component } = render(Line)
  expect(component).toBeDefined()
})