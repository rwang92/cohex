<p><img src="assets/CohexMark.png" width="80" height="72" alt="Cohex logo"></p>

[English](COMPATIBILITY.md) · [简体中文](COMPATIBILITY.zh-CN.md)

# Compatibility

This document describes **Cohex 1.0.0 (6)**. Product targets, completed package
checks and hardware-validation limits are identified separately below.

## Supported target for 1.0

| Component | Target |
|---|---|
| Mac | Apple Silicon (`arm64`) |
| macOS | macOS 14 or newer |
| Host | Codex Desktop |
| Pointer controls | Drag the monitor, right-click to expand, click tasks or center |
| Global Force Touch | MacBook built-in Force Touch trackpad; explicit opt-in |
| Controller, optional | Genuine Nintendo Switch Pro Controller over USB or Bluetooth |
| Task wheel | Six most recently updated local tasks |
| SSH tasks | Unavailable; gray release-gated control |
| Automatic / in-app updates | Unavailable; manual GitHub Releases download |
| Official distribution | Developer ID signed, notarized and stapled DMG |

A supported target describes the intended combination. It does not establish
that every Mac model, permission flow, USB/Bluetooth path or physical button
has been tested. The validation scope below records the available evidence.

## Force Touch and pointer input

The compact hexagon can be dragged and opened with a local deep press or
right-click. Global activation is a separate opt-in in the Usage Guide or
Settings → Trackpad. Fresh installations start with global pressure off and
Medium 155%; compatible saved pressure preferences take precedence.

Global activation supports one uniquely identified MacBook built-in trackpad.
Magic Trackpad global activation is not supported. The factory profile is a
starting setting, not a claim of calibration for every device. A demo or a
passing synthetic test does not prove physical pressure timing. Release fully,
then click a task or the center; practice examples never navigate real tasks.

## Local tasks, colors and readings

Local task selection dispatches the exact selected task link. The sidebar does
not need to remain open. Slots stay stable during selection; later catalog
updates apply after the interaction. Tasks outside the six displayed slots can
still contribute to aggregate generation rate and Statistics.

Default colors are Active blue `#9CB6F6`, Complete unread green `#34D66B`,
Complete viewed pale green `#B5E3BA`, Needs Input yellow `#F6E19D`, Error pink
`#F0A2BB`, Idle white `#FAFAFA` and Unknown gray `#A8A8AD`. All seven are
customizable. Status also uses names, symbols and selection cues; saved colors
are preserved.

Completion reading is Cohex's in-memory observation, not Codex account-wide
unread state. A verified visit after completion acknowledges viewing after ten
seconds and a fresh visibility check, or earlier on departure. Completion
during an existing visit waits for departure. Ambiguous visibility remains
pending; startup history does not manufacture unread attention.

Live `tok/s` aggregates output from local tasks observed by this Mac. Output
already includes reasoning output. Statistics average speed uses output with
confirmed working-time coverage, so it can differ from the floating live rate.
Concurrent Token counts add together; overlapping work time counts once.
Waiting, reading, idle and sleep do not count as work.

Weekly is an official seven-day balance. Remaining Token, remaining work time
and full-quota yield are estimates from local calibration. Evidence may be
insufficient, stale or incomplete. Other devices and cloud activity may be
absent. No account-wide token allowance or measured prediction accuracy is claimed.

## Codex version sensitivity

Cohex first uses the user's real Codex keyboard binding, including an explicit
disabled binding; it then uses supported shortcut defaults or exact task links.
A changed Codex build does not by itself disable stable shortcuts. Semantic
Accessibility actions remain sensitive to Codex's visible UI, including models,
structured choices, Stop, guarded deletion, Skill insertion and Plan documents.
Ambiguous controls fail closed rather than guessing.

X / Plan Mode needs a real **Toggle plan mode** binding in Codex. `Shift+Tab`
is not treated as a reliable substitute. Y opens or closes the Plan document;
it does not toggle Plan Mode. Dictation remains owned by Codex Desktop.

## Permissions

| Capability | Permission boundary |
|---|---|
| Controller-generated keyboard and semantic actions | macOS Accessibility for the installed Cohex copy |
| Trackpad global pressure | Input channel availability shown in the guide; Accessibility may already provide access |
| Input Monitoring | Grant only if the guide reports it is needed for the selected input path |
| Dictation microphone | Owned by Codex Desktop; Cohex does not request microphone permission |
| Controller | Normal GameController access; capability varies by macOS device descriptor |

An application cannot grant its own Accessibility permission. Install the
official copy in `/Applications` and grant permission through macOS. Running
the executable from Terminal is not a valid independent permission test.

Controller haptics require support exposed by `GCController.haptics`. Cohex does
not promise Nintendo HD Rumble compatibility or universal controller support.
The Controller pane remains browsable, but read-only while disconnected.

## Appearance and accessibility

The app supports English and Simplified Chinese, light/dark appearance,
Increase Contrast, Reduce Transparency, Reduce Motion and VoiceOver semantics.
Native Glass is used when available; macOS 14–25 use system material fallbacks.
Offscreen rendering is not proof of native Glass, spoken VoiceOver output or
physical-device acceptance.

## 1.0 validation scope

The 1.0.0 (6) arm64 package passed Developer ID signature, hardened runtime,
notarization, stapling, mounted-app verification and Gatekeeper checks. The full
automated suite recorded 2,617 tests with zero failures and one explicit
live-host probe skipped.

The final package has no recorded fresh-user permission acceptance, the planned
20 deep presses and 50 ordinary clicks/holds/drags, or complete physical device
matrix. Input focus/Space changes, sleep/wake cleanup, native energy use,
controller USB/Bluetooth paths and haptics, and spoken VoiceOver still need
release-specific physical coverage. Multiple real Weekly cycles and estimate
prediction accuracy remain unmeasured. Automated tests and website demos do not
establish those results.

## Historical focused checks

| Published Cohex | Date | Codex Desktop build | Verified scope |
|---|---|---|---|
| 0.9.2 (2) | 2026-08-10 | 26.803.61601 | X/Plan with a real Toggle plan mode binding |
| 0.9.2 (2) | 2026-08-10 | 26.803.81509 | X/Plan with a real Toggle plan mode binding |

These records are not a hard-coded support range or a complete hardware matrix.
They do not extend the 1.0 validation scope above.

## Unavailable in 1.0

Intel Macs, other operating systems, third-party controllers and Magic Trackpad
global activation are outside the supported target. SSH connections, remote
catalogs and remote navigation are release-gated off even if an old preference
was enabled. In-app update checks, downloads and installations remain disabled.
Dormant compatibility code is not an available product feature.
