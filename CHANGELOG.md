# Changelog

All notable public changes to CoHex are documented here.

## [0.9.0-beta] - Unreleased

### Added

- Native macOS menu bar controller mapping for a Nintendo Switch Pro Controller.
- Shortcut-first Codex navigation, approval, rejection, Plan Mode, dictation, and command routing.
- D-pad model × Reasoning and structured permission/question selectors.
- Recent 6 task-state monitor, live local token-rate projection, Weekly details, and task switching.
- Recent 6 now matches the Skill Wheel's semantic selection path: same-slot stick samples are free, selection is a light state-colored whole-sector fill, and the Task cursor/title Capsule are removed.
- Recent 6 freezes each slot UUID and label synchronously before presentation, so a concurrent catalog refresh cannot redirect a selected sector; status and unread evidence for the same Task remain live.
- Native Token Monitor drag sessions retain their originating Compact or Expanded panel even if L changes presentation mid-drag.
- ZL Skill wheel with configurable favorites.
- Single-click Y opens and closes the current Task's exact Plan side panel through one bounded, exact Accessibility action in each direction.
- Guarded Stop, Backspace, task navigation, latest-position navigation, and semantic fallbacks.
- Mapping import/export, task-state palette, HUD, and native haptic settings.
- Apple Silicon release pipeline for Developer ID signing, Hardened Runtime, notarized/stapled DMG packaging, Gatekeeper verification, and SHA-256 sidecars.
- Tag-triggered Draft Releases in a separate public binary repository, including
  post-upload download and repeat verification of the exact public assets.
- A source-safe public distribution repository exporter with public support,
  privacy, security, compatibility, license, and redacted bug-report templates.
- English and Simplified Chinese interface catalogs, with release-time checks
  that reject missing, empty, duplicated, or unbundled translations.

### Changed

- Increased the L short-tap/Recent-6 hold boundary from 80ms to 120ms, retaining
  immediate wheel presentation for explicit right-stick selection intent.
- Removed the experimental dictation draft-discard path. ZR retains its low-latency native dictation hold, while B is safely ignored until ZR is released.
- Replaced the default Y long-hold Stop gesture with the Plan-document toggle; imported custom Y-hold mappings remain compatible.

### Privacy and security

- Local-first processing with no developer analytics or remote backend.
- Read-only Codex local metadata/rollout integration.
- Stable production bundle identifier and designated-requirement checks for Accessibility continuity.
- Release cleanup preserves failing exit codes, and a published GitHub Release
  can never be silently overwritten by a workflow rerun.
- Shared-daemon direct control and physical Codex Micro lighting remain default-off experiments.

### Supported target

- Apple Silicon
- macOS 14 or newer
- Codex Desktop
- Genuine Nintendo Switch Pro Controller over USB or Bluetooth

### Known limitations

- This is a beta; Codex Accessibility semantics can change with Codex updates.
- Intel Macs and other controller families are not supported.
- macOS may not expose Nintendo Pro Controller haptics.
- Physical USB/Bluetooth latency, every button, optional Micro output, and experimental shared-daemon mutation require release-specific hardware smoke tests.
- Version 0.9 has no automatic updater. Updates are installed manually from GitHub Releases.
