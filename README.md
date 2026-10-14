<p><img src="assets/CohexMark.png" width="80" height="72" alt="Cohex logo"></p>

[English](README.md) · [简体中文](README.zh-CN.md)

# Cohex

Your Codex tasks, one press away.

## 🆕 New release

**Cohex 1.0.0 (6)** · Apple Silicon · macOS 14+

Released **October 13, 2026** · Last updated **October 13, 2026** (Pacific time)

[Download Cohex 1.0](https://github.com/rwang92/cohex/releases/download/v1.0.0/Cohex-1.0.0-arm64.dmg)
· [Product website](https://rwang92.github.io/cohex/)
· [Release notes](https://github.com/rwang92/cohex/releases/tag/v1.0.0)
· [Installation & help](SUPPORT.md)

Cohex is a free, proprietary native macOS companion for Codex Desktop. Deep-press
your trackpad to open a local task wheel, see what needs attention, and follow
generation speed and usage history. A controller is optional.

## What's new

- **Force Touch, close at hand.** Deep-press the floating hexagon or right-click
  to open Recent 6. Opt into global pressure to summon it at the pointer with a
  MacBook built-in trackpad. Global pressure is off by default. Fully release,
  then click a task to switch or the center to close; releasing alone does not select.
- **A guide you can practice.** One bilingual guide demonstrates dragging,
  pressing the hexagon, pressing blank space, readings and task colors. Reopen
  Usage Guide from the menu or Settings → General. Example tasks never navigate
  real work. Language, permission status and tutorial completion stay separate.
- **Local Recent 6, with readable colors.** Keep Codex's sidebar closed while
  switching among the six most recently updated local tasks. Blue means active,
  yellow needs input, bright green is complete
  unread, and pale green is complete viewed. White is idle, pink is error, and
  gray is unknown. Customize all seven defaults; saved colors are preserved.
- **Useful readings, clearly labeled.** Live `tok/s` combines observed local
  tasks, including work outside the six slots. Output already includes reasoning.
  Weekly is the official seven-day balance; remaining Token and working time are
  local estimates, with sampling or missing evidence shown honestly.
- **Local Statistics.** Review recorded output, average generation speed,
  working time, the Weekly curve and estimated full-quota yield by recent range
  or quota cycle. Concurrent Token counts add together; overlapping work time
  counts once. History stays on this Mac and does not cover all account activity.
- **Optional Switch Pro control.** Connect a genuine Nintendo Switch Pro
  Controller over USB or Bluetooth. Hold L, choose with the right stick, and
  release to switch; mapped buttons keep familiar Codex actions close.

**SSH tasks and in-app updates are unavailable in 1.0.** Their controls stay gray.
Use GitHub Releases for manual updates. There is no automatic update check,
download or installation in this release.

## Get started

1. Download [Cohex-1.0.0-arm64.dmg](https://github.com/rwang92/cohex/releases/download/v1.0.0/Cohex-1.0.0-arm64.dmg)
   from **GitHub Releases**, the only official binary source. The DMG is Developer
   ID signed, notarized and stapled. See [SECURITY.md](SECURITY.md) for verification.
   Future versioned downloads follow the name `Cohex-<version>-arm64.dmg`.
2. Open the DMG, drag **Cohex** to **Applications**, eject the DMG, then launch
   `/Applications/Cohex.app` and Codex Desktop.
3. Follow the Usage Guide, choose English or 简体中文, and grant Accessibility
   through macOS when needed. Cohex lives in the menu bar, without a regular Dock window.
4. Try dragging and deep-pressing the example hexagon. Enable global pressure
   only if desired. Fresh installations use **Medium 155%**, with no calibration
   required; adjust strength in Settings → Trackpad.
5. Optionally connect a genuine Nintendo Switch Pro Controller over USB or
   Bluetooth. Hold L, choose a task with the right stick, and release to switch.

The supported target is **Apple Silicon, macOS 14+, Codex Desktop**. Global Force
Touch requires a **MacBook built-in trackpad**; Magic Trackpad global activation
is not supported. Intel Macs and other controllers are outside the supported target.
See [COMPATIBILITY.md](COMPATIBILITY.md) for evidence and limits.

To upgrade, quit Cohex and replace the app in Applications. Your settings and
local Statistics history are kept. macOS may ask you to grant Accessibility
again, especially when replacing a development or differently signed copy.
Cohex keeps the bundle identity `com.ranwang.Cohex`. Migrating from the legacy
Codex Controller app requires a fresh Accessibility grant; quit the legacy app
first. Installation does not delete it automatically.

## Validation scope

The 1.0.0 (6) package passed Developer ID signature, Apple notarization, stapling
and Gatekeeper checks. The automated suite recorded 2,617 tests with zero failures
and one live-host probe skipped. Final-package fresh-user checks, repeated
physical-pressure trials and a complete device matrix are not recorded. Native
accessibility, controller and long-running estimate coverage remain limited;
see [COMPATIBILITY.md](COMPATIBILITY.md). No measured prediction accuracy is claimed.

## Project information

[Compatibility](COMPATIBILITY.md) · [Changelog](CHANGELOG.md) · [Privacy](PRIVACY.md)
· [Security](SECURITY.md) · [Support](SUPPORT.md) · [License](LICENSE.txt)

This public repository contains the product website, public documentation,
Issues and release assets only. The proprietary application source is maintained
separately. Cohex is an independent project, not affiliated with or endorsed by
OpenAI, Apple or Nintendo.
