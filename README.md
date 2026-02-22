# Vehicle Temp HP 5e (Foundry v13)

This Foundry module exposes the built-in `dnd5e` vehicle temporary HP field on vehicle sheets.

It uses the system-native value:

- `system.attributes.hp.temp`

It does **not** add custom temporary HP storage and does **not** modify dnd5e damage logic.

## Module Location

This module is built in:

`/Users/nicholasmcdowell/Documents/Codex Projects/Vehicle Temp HP 5e`

Main files:

- `/Users/nicholasmcdowell/Documents/Codex Projects/Vehicle Temp HP 5e/module.json`
- `/Users/nicholasmcdowell/Documents/Codex Projects/Vehicle Temp HP 5e/scripts/module.js`
- `/Users/nicholasmcdowell/Documents/Codex Projects/Vehicle Temp HP 5e/scripts/ui.js`
- `/Users/nicholasmcdowell/Documents/Codex Projects/Vehicle Temp HP 5e/styles/vehicle-temp-hp-5e.css`
- `/Users/nicholasmcdowell/Documents/Codex Projects/Vehicle Temp HP 5e/lang/en.json`

## How to Install Locally (Step by Step)

1. Open Foundry VTT data folder.
2. Go to the `Data/modules` folder.
3. Copy this module folder into `Data/modules`.
4. Restart Foundry VTT (or use Setup > Add-on Modules > Refresh).
5. In your world, enable **Vehicle Temp HP 5e** in Manage Modules.

## How to Use

1. Open a vehicle actor sheet.
2. Find the new **Temporary HP** input under the HP section.
3. Editing this field updates `system.attributes.hp.temp` on the vehicle actor.

## Compatibility

- Foundry VTT: v13
- System: `dnd5e`
- Dependencies: none
