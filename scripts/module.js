import { renderVehicleEnhancements } from "./ui.js";

Hooks.on("renderActorSheet5e", (app, html) => {
  renderVehicleEnhancements(app, html);
});

Hooks.on("renderActorSheet", (app, html) => {
  renderVehicleEnhancements(app, html);
});

Hooks.on("renderVehicleActorSheet", (app, html) => {
  renderVehicleEnhancements(app, html);
});

Hooks.on("renderTidy5eSheet", (app, html) => {
  renderVehicleEnhancements(app, html);
});

Hooks.on("renderTidy5eVehicleSheet", (app, html) => {
  renderVehicleEnhancements(app, html);
});

Hooks.on("renderTidy5eVehicleSheetQuadrone", (app, html) => {
  renderVehicleEnhancements(app, html);
});
