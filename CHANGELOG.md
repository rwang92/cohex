# Changelog

All notable public changes to Cohex are documented here.

## [0.9.2] - 2026-08-10

### Added

- Added an optional beta pointer-hold gesture that opens Recent 6 near the
  pointer, then returns the compact monitor to its saved position after a Task
  selection or center dismissal. It is event-driven and disabled by default.
- Added a compact Token Clock choice between the current Task's estimated
  generation rate and the remaining Standard Weekly percentage.
- Added visual Switch Pro Controller mapping inspectors for General, Hold L,
  and Hold ZL settings while preserving the existing mapping behavior.

### Changed

- Recent 6 now reserves its bounded candidate pool for all reliably active
  Tasks before filling remaining slots by recency, without changing a frozen
  wheel session's Task identities.
- Token telemetry now shares one incremental rollout event hub, preserves a
  valid same-Task rate baseline across turns, and uses bounded historical
  calibration to improve the startup remaining-token and usable-hours
  estimates without adding steady-state polling.
- The runtime now quiesces input sessions, rollout work, Accessibility probes,
  animations, discovery, and device retries for system sleep, then restores one
  ordered generation after wake while retaining the last monitor snapshot.
- Accessibility and quota work use adaptive, single-flight scheduling so idle,
  background, low-power, and thermal-constrained operation performs less work
  without reducing active controller responsiveness.
- Native Codex question cards now own D-pad, A, and B through balanced native
  Arrow, Return, and Escape events; permission and approval surfaces continue
  to require exact bounded Accessibility actions.
- The public application, executable, module, bundle, resources, and release
  artifacts now consistently use the `Cohex` product identity.

### Fixed

- Fixed active generation sometimes remaining at `0.0 tok/s` after a turn or
  wake by reconnecting the live projection without replaying historical output
  or creating counter spikes.
- Fixed current active Tasks being omitted from Recent 6 when newer idle rows
  filled the local recency window.
- Fixed resolved question or permission surfaces leaking yellow Needs Input
  state across Task switches; structured request and approval lifecycles now
  remain bound to their originating Task and generation.
- Fixed viewed completed Tasks becoming unread again when stale local evidence
  arrived without a newer turn.
- Fixed transient Task-wheel placement, click capture, hover selection, edge
  geometry, and restoration paths that could otherwise require relaunching the
  app.

### Privacy and security

- Cohex remains local-first, with no developer analytics or remote backend.
- Token and activity readers consume bounded, read-only local metadata and do
  not persist Task identity, quota values, or estimates.
- The release pipeline requires Developer ID signing, Hardened Runtime, secure
  timestamps, notarization, stapling, Gatekeeper verification, and an internal
  post-staple SHA-256 check. GitHub exposes the immutable digest for the single
  public DMG asset.

### Supported target

- Apple Silicon
- macOS 14 or newer
- Codex Desktop
- Genuine Nintendo Switch Pro Controller over USB or Bluetooth

Focused X/Plan compatibility was verified with Codex Desktop builds
`26.803.61601` and `26.803.81509` after assigning a real **Toggle plan mode**
shortcut in Codex. See [COMPATIBILITY.md](COMPATIBILITY.md) for the scope and
limitations of that record.

### Known limitations

- This is a beta; Codex Accessibility semantics can change with Codex updates.
- The optional pointer-hold gesture may conflict with an underlying app's own
  Force Touch behavior and is intended for blank, non-conflicting areas.
- Intel Macs and other controller families are not supported.
- macOS may not expose Nintendo Pro Controller haptics.
- Physical USB/Bluetooth latency, every button, optional Micro output, and
  experimental shared-daemon mutation require release-specific hardware smoke
  tests.
- Version 0.9 has no automatic updater. Updates are installed manually from
  GitHub Releases.
