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
