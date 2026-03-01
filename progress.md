Original prompt: implement a memory game

- Added a new playable `memory-game` route at `/games/memory-game`.
- Implemented `MemoryGame` with shuffled pairs, flip/match logic, move counter, timer, win state, and restart.
- Added deterministic hooks:
  - `window.render_game_to_text()` returns concise board state + counters.
  - `window.advanceTime(ms)` advances timer and mismatch hide countdown.
- Added fullscreen toggle on `f` key for the memory board container.
- Added a `MemoryGameSVG` icon and registered the game in `GAME_LIST`.
- Updated `/games/[slug]` to support memory-game metadata and return 404 for unknown slugs.

TODO / next agent suggestions:
- Run an interactive browser validation for both `/games/word-game` and `/games/memory-game`.
- Run Playwright loop from the skill against `/games/memory-game` once local environment execution is available.
- Consider adding a quick "best score" (min moves) persisted in localStorage.

Validation log:
- `npm run lint` completed successfully on March 1, 2026.
- Existing warning remains in `src/components/games/word-game/WordGame.tsx` (`react-hooks/exhaustive-deps`, missing `loadGame` dependency).
