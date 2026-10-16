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
