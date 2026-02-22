const TEMP_HP_SELECTOR = ".vtmph-temp-hp-group";

export function renderVehicleEnhancements(app, html) {
  const actor = app?.actor ?? app?.object ?? app?.document;
  if (!actor || actor.type !== "vehicle") return;

  const root = resolveRootElement(app, html);
  if (!root) return;

  root.querySelectorAll(TEMP_HP_SELECTOR).forEach((el) => el.remove());

  const tempHp = Math.max(0, Number(foundry.utils.getProperty(actor, "system.attributes.hp.temp")) || 0);
  const tempGroup = buildTempHpGroup(tempHp);

  placeTempHpGroup(root, tempGroup);
  bindTempHpEvents(tempGroup, actor);
}

function resolveRootElement(app, html) {
  if (html?.jquery && html[0] instanceof HTMLElement) return html[0];
  if (html instanceof HTMLElement) return html;
  if (Array.isArray(html) && html[0] instanceof HTMLElement) return html[0];

  const appElement = app?.element;
  if (appElement?.jquery && appElement[0] instanceof HTMLElement) return appElement[0];
  if (appElement instanceof HTMLElement) return appElement;
  if (Array.isArray(appElement) && appElement[0] instanceof HTMLElement) return appElement[0];

  return null;
}

function placeTempHpGroup(root, group) {
  const hpGroup = findPillsGroupByLabel(root, game.i18n.localize("DND5E.HitPoints"));
  if (hpGroup) {
    const hpPills = hpGroup.querySelector("ul.pills");
    if (hpPills) hpPills.insertAdjacentElement("beforebegin", group);
    else hpGroup.appendChild(group);
    return;
  }

  const sidebar = root.querySelector("aside.sheet-sidebar") ?? root.querySelector(".sheet-sidebar");
  if (sidebar) {
    sidebar.prepend(group);
    return;
  }

  root.appendChild(group);
}

function findPillsGroupByLabel(root, labelText) {
  const headers = Array.from(root.querySelectorAll(".pills-group > h3 .roboto-upper"));
  return headers.find((el) => normalizeText(el.textContent) === normalizeText(labelText))?.closest(".pills-group") ?? null;
}

function normalizeText(value) {
  return String(value || "").replace(/\s+/g, " ").trim().toLowerCase();
}

function bindTempHpEvents(section, actor) {
  const input = section.querySelector(".vtmph-temp-hp-input");
  if (!input) return;

  input.addEventListener("change", async (event) => {
    const rawValue = Number(event.currentTarget.value);
    const value = Number.isFinite(rawValue) ? Math.max(0, Math.floor(rawValue)) : 0;
    await actor.update({ "system.attributes.hp.temp": value });
  });
}

function buildTempHpGroup(tempHp) {
  const wrapper = document.createElement("div");
  wrapper.className = "vtmph-temp-hp-group";
  wrapper.innerHTML = `
    <h3 class="icon">
      <span class="roboto-upper">${game.i18n.localize("VEHICLE_TEMP_HP_5E.TempHp")}</span>
      <input class="vtmph-temp-hp-input" type="text" inputmode="numeric" pattern="^[+=\\-]?\\d*"
             value="${tempHp || ""}" placeholder="—">
    </h3>
  `;
  return wrapper;
}
