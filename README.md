# Bike Mate · Phase 1

React 18, Vite, TypeScript and Tailwind frontend. All bicycle calculations run in the browser. No backend, database or user account.

## Run

- `npm install`
- `npm run dev`
- `npm run build`
- `npm test`

## Delivered workflows

Overview and shared local setup; searchable component catalog; cassette details and up to four-cassette comparison; conservative drivetrain checker with rule explanations and RD suggestions; gearing comparison ranked by development; cadence speeds; proportional wheel comparison and rolling power estimate; guided measurements, rough fit ranges and entered geometry comparison. Browser-local setup storage. Mobile navigation and responsive layouts.

## Data and accuracy

JSON lives in src/data, repository access in src/services, calculations in src/domain. CS-R7000 11–28 and 11–32 sequences checked against Shimano exploded view. Other records are explicitly unverified samples. Compatibility is incomplete and conservative; a matching system does not prove physical installation or safety. Frame sizing is a prototype heuristic, not a validated fitting model. Wheel height estimates nominal tire width; measured diameter can override.

## Remaining scope toward full specification

Complete independently verified catalog, full front derailleur/chainring/crank/BB rules, actual mounted-width data, freehub rules and unknown status coverage, full unit-aware measurement inputs, validation of optional proportions and geometry, anatomically detailed measurement illustrations including foot and knee, custom cassette inputs, component detail routes, comprehensive component and browser tests. No cloud or account features are included.

## Animated drivetrain lab

Open Gear comparison. Play/pause animates front chainring, chain and driven rear sprocket. Select exact rear cogs; edit front teeth, standard/custom BSD, tire width, rim internal width and measured outer diameter. Compare up to four named setups; setup 1 is the baseline. Match development automatically for proposed setups. Same-cadence and same-speed modes show why gearing changes cadence/leverage while road power depends on speed and resistance assumptions. Includes common wheel standards (700C/29 share 622 BSD), proportional wheel comparisons, cassette speed bars, crank torque/pedal-force metrics and formulas. Road coefficients are editable and all power values are estimates. `npm test` includes 13 domain checks.

GitHub Pages serves compiled root index.html and assets. Edit app/index.html and src, then run npm run build before committing source and root output. Navigation uses hash routes so Pages reloads do not require server rewrites.

### Right-side view and rider guidance

The drivetrain drawing places the rear wheel/cog on the left and chainring on the right. It uses a common physical millimeter scale: mounted tire diameter from BSD + tire width or measured override, sprocket pitch radius from 12.7 mm chain pitch, and crank/pedal orbit from each setup's crank length. Axles are level with fixed 420 mm center spacing; this schematic does not establish frame geometry, chain length, or ground clearance. Spoked, three-spoke and disc styles plus rim depth are visual only. Each setup has independent crank length; the comparison includes pedal circle, pedal path, pedal speed and gain ratio, and applies crank length to equivalent average tangential pedal force. Beginner, builder and racer guidance explains measurements, upgrade comparison, assumptions and checks that require specifications or physical verification. 14 domain tests pass.

## Multi-bike workspace · mobile update

- My bikes: device-local profiles with discipline, drivetrain lab setup, component markings and practical measurements; load into the lab, update an existing profile, or delete with confirmation.
- Lab: device-local comparison persistence and saved-profile loading; round/oval selection; custom major/minor axis ratio and crank-relative orientation; nominal tooth count preserves average chain advance. Oval chain wrap and rear-speed modulation are illustrative. No branded profile or performance benefit is implied.
- Upgrade checks: compare five user-entered interfaces; explicit pass/mismatch/unknown findings and component-specific evidence checklists for drivetrain, wheels, cranks and brakes. This does not replace a verified model-level compatibility engine. Checklists remain session-local.
- Bike toolkit: road, gravel, MTB, mini velo, TT/triathlon, folding, city/trekking, track/single-speed and e-bike guidance; working sag, pad-position delta, folded envelope, internal-hub single gear and conditional battery-range calculators. No event, fit, suspension target or legal certification is implied.
- Mobile: five-item navigation with a More sheet; single active setup with horizontal selector; sticky playback controls; compact before/after results; expandable reference/advanced panels; larger inputs and touch targets. Tablet/desktop retain sidebar and side-by-side layouts.
- Validation: 23 domain checks, production TypeScript/Vite build, and server-render smoke checks for the four new/expanded pages. Browser viewport interaction testing could not run because the environment has no installed browser binary; responsive visual and device QA remains outstanding.

All profiles/comparisons stay in this browser's localStorage. They are not synced or backed up; clearing site data removes them. The reference catalog remains representative sample data, not a complete worldwide verified catalog.

## Simplified navigation and lab flow

Home now presents three tasks: compare a setup, check an upgrade, or look up a specification, plus saved bikes. The lab separates Setup, Compare and Learn into explicit workspace tabs. One setup is edited at a time across all viewport sizes; fresh comparisons start with one current bike and Duplicate creates an option. Existing saved comparisons are preserved. Crank/oval controls, exact sequences, wheel dimensions, interpretation and saving are progressively disclosed. Comparison metrics and road assumptions stay in Compare; education stays in Learn. Only the visible active setup animates. Desktop navigation separates primary tasks from reference/tools. This update preserves calculations and browser-local data.

## Full bike, independent wheels and live ride

12-inch 203 BSD and 14-inch 254/288 BSD are included and labeled by exact bead seat diameter. Source: Schwalbe tube finder https://www.schwalbe.com/en/tube-search . Profiles migrate old single-wheel setups to matching front/rear wheels. Turn off Same front and rear wheels for independently configured BSD, tire width, measured diameter, rim width/depth and appearance. Gearing always uses rear wheel circumference. Front wheel rotation uses the same road speed and its own diameter.

The full-bike right-side schematic includes selectable illustrative frame/handlebar styles. Independent wheel sizes are proportional within each preview; the frame is a template, not measured geometry. Both wheel contacts follow the displayed road. Gradient is percent (angle = atan(grade/100)), tilts the complete scene, and changes gravity power. Mixed-wheel pitch is illustrative and not a clearance/handling/fit approval.

Steady demo uses selected cadence/speed; Start from rest integrates drive and resistance forces over total mass, using editable rider power and starting crank torque limit. Crank cadence follows speed and current rear cog; easier/harder controls preserve speed through a shift. Wheel/chain/crank animation follows the calculated engaged ratio, with full ride distance, time and delivered-power readouts. Average tooth ratio drives rotation for the illustrative oval profile. Road markings indicate distance movement.

Surface presets (paved, gravel, rough trail/jungle) are explicitly illustrative whole-bike rolling coefficients, not measured terrain facts. Ideal mode removes rolling, aerodynamic and drivetrain losses while retaining gravity on grades. No-slip traction is assumed. Braking, rotational inertia, coasting/freewheel disengagement, rider fatigue/cadence ceiling, shifting delay and bumps/suspension dynamics are excluded. Compare remains a steady-state comparison; live telemetry appears in Setup. Front/rear tire-specific rolling losses are not independently inferred. 38 domain tests and server render smoke checks pass; device/browser visual QA remains outstanding.

## Guided setup and blue theme

The lab now defaults to a four-stage beginner flow: identify the bike, choose drivetrain standards, identify wheels/tires, then review before simulating. Common chainring, cassette, crank, tire width, rim width, BSD and wheelset-weight values use dropdowns; manual inputs appear only after choosing Other. A labeled SVG explains tire, rim, wheel and bead seat diameter, including how to read an ETRTO marking. Advanced measurements, mixed wheels and oval settings remain available progressively.

Rim material and complete wheelset weight are stored per setup. Material is descriptive; actual entered mass drives the comparison explanation. For a proposed setup, the review reports mass change and the ideal gravitational energy difference for 100 m of climbing. It does not infer aero, stiffness, braking, durability or rotational-inertia gains from carbon. The interface uses a blue-and-white visual system with a persistent light/dark toggle. Legacy saved setups migrate to aluminum and 1800 g defaults. 39 domain tests and server-render smoke checks pass; device/browser visual QA remains outstanding.
