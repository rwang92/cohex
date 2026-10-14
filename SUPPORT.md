<p><img src="assets/CohexMark.png" width="80" height="72" alt="Cohex logo"></p>

[English](SUPPORT.md) · [简体中文](SUPPORT.zh-CN.md)

# Support

This guide describes **Cohex 1.0.0 (6)** for Apple Silicon Macs running macOS 14
or newer, with Codex Desktop.

## Requirements

- Apple Silicon Mac
- macOS 14 or newer
- Codex Desktop
- MacBook built-in Force Touch trackpad for global pressure activation
- Optional genuine Nintendo Switch Pro Controller over USB or Bluetooth

See [COMPATIBILITY.md](COMPATIBILITY.md) for the supported and experimental boundaries.

## Install

1. Download [Cohex-1.0.0-arm64.dmg](https://github.com/rwang92/cohex/releases/download/v1.0.0/Cohex-1.0.0-arm64.dmg) from the official GitHub Release.
2. Check the GitHub asset digest and Apple trust chain as described in [SECURITY.md](SECURITY.md).
3. Open the DMG and drag **Cohex** to **Applications**.
4. Eject the DMG and launch `/Applications/Cohex.app`.
5. Launch Codex Desktop.
6. Open the Cohex menu bar icon and grant Accessibility when macOS asks.
7. Follow the Usage Guide. A controller is optional; connect one only if desired.

Cohex is a menu bar app (`LSUIElement`), so it does not show a normal Dock icon or main window.
The release DMG is Developer ID signed, notarized and stapled.

### Migrating from Codex Controller

Cohex is a new macOS identity (`com.ranwang.Cohex`). Quit the legacy Codex
Controller before launching Cohex; the installer does not stop or delete the
legacy app. macOS cannot transfer the old Accessibility grant, so grant Cohex
again during first launch. Supported profile, language, and Monitor-position
preferences are imported once when Cohex has no newer local value.

## Practice the 1.0 gestures

The Usage Guide has five steps: drag the hexagon, deep-press the hexagon,
deep-press blank space, read the numbers, and learn the colors. Each physical
practice begins with a demonstration. Fully release after pressing; a successful
practice keeps its result briefly before continuing. Examples never switch real
tasks. Skip if input is unavailable, and reopen **Usage Guide** from the Cohex
menu or Settings → General anytime.

Global Force Touch is a separate opt-in. Enable it in the guide or Settings →
Trackpad only if desired. Fresh installations use **Medium 155%**, with Light
110% and Firm 200% available; compatible saved settings take precedence. No
calibration is required. Use a MacBook built-in Force Touch trackpad; Magic
Trackpad global activation is not supported.

For normal use, drag the compact monitor to a comfortable position. Deep-press
it or right-click to expand. With global pressure enabled, summon the wheel at
the pointer too. Fully release, then click a local task to switch or the center
to close; releasing alone does not select. Codex's sidebar can stay closed.
Settings → Trackpad → **Try pressure…** provides a safe example.

If global input is unavailable, follow the guide's permission status. An existing
Accessibility grant may already provide the input channel; a separate Input
Monitoring grant is not always needed. Cohex cannot grant permissions itself.

## Connect an optional controller

### USB

Use a USB data cable, not a charge-only cable. Connect the controller before or after launching Cohex. The menu bar icon turns green when GameController recognizes it.

### Bluetooth

1. Open System Settings → Bluetooth.
2. Hold the controller's small sync button until its player LEDs animate.
3. Select **Pro Controller**.
4. Return to Cohex and confirm that the menu bar status is connected.

USB and Bluetooth are release targets, but macOS controller descriptors and report timing can vary. Controller haptics work only when `GCController.haptics` exposes a supported locality; Cohex does not implement Nintendo's private HD Rumble protocol.

## Accessibility

System Settings → Privacy & Security → Accessibility must list the installed `/Applications/Cohex.app` and its switch must be on.

If the menu still reports no authorization:

1. Quit Cohex.
2. Remove stale or duplicate Cohex entries from Accessibility.
3. Confirm that the official app is installed in `/Applications`.
4. Launch it from Applications and add/enable that exact copy.

An optional full reset for this bundle is:

```sh
tccutil reset Accessibility com.ranwang.Cohex
```

Then launch the installed app and grant permission again. Do not run the executable inside the app bundle from Terminal as an authorization test; macOS may attribute the operation to Terminal.

Accessibility normally persists between official updates because the bundle identifier and Developer ID designated requirement remain stable. It must be granted again after replacing an old ad-hoc or differently signed build.

The legacy Accessibility identity can be reset separately if desired:

```sh
tccutil reset Accessibility com.ranwang.CodexController
```

## Troubleshooting

### The menu bar icon is missing

- Check Control Center/menu bar overflow.
- Launch `/Applications/Cohex.app` again.
- Confirm in Activity Monitor that `Cohex` is running.
- The app intentionally has no Dock icon.

### The controller stays disconnected

- Test a known data-capable USB cable or remove and pair Bluetooth again.
- Quit other controller-mapping utilities that may seize or transform the device.
- Power-cycle the controller and relaunch Cohex.
- Third-party “Pro-compatible” controllers are not in the supported target.

### Buttons are received but a Codex action does nothing

- Bring Codex Desktop to the foreground with L3.
- Check Accessibility status in the menu.
- Confirm the mapping and its route in Settings → Controller.
- Shortcut-backed operations may still work when Accessibility-backed operations fail.
- After a Codex update, a Chromium semantic control may have changed. Include the exact Codex version in the report.

### X does not toggle Plan Mode

1. In Codex Desktop, open **Settings → Keyboard Shortcuts**.
2. Find **Toggle plan mode** and assign a real keyboard shortcut.
3. Return to Cohex and press X again.

Cohex reads and sends Codex's actual binding. It does not treat `Shift+Tab` as
a reliable Plan Mode shortcut, and it does not write Codex's shortcut file for
you. This route was focused-tested with Codex Desktop builds `26.803.61601` and
`26.803.81509`; those builds are compatibility records, not a hard-coded
support gate.

### D-pad choices, models, Stop, guarded deletion, or Skill insertion fail

These features depend on exact, visible Codex controls and fail closed when the UI is ambiguous. Close unrelated Codex sheets or popovers, return to the main task, and retry once. Do not repeatedly approve or submit when the app reports an indeterminate mutation.

Cohex serializes all cross-process Accessibility work. Interaction snapshots
are refreshed only at runtime/navigation activation, live semantic transitions,
or explicit controller demand; there is no idle full-tree poll. If Chromium is
temporarily unresponsive, the bounded probe reports unavailable rather than
guessing. Wait for the visible Codex surface to settle, then retry once.

### A completed task stays bright green

Bright green is the factory **Complete unread** color; pale green is **Complete
viewed**. Open a task after it completes. A verified ten-second visit marks it
viewed, or leaving earlier confirms viewing. If it completed while you were
already viewing it, leave the task to acknowledge it. Ambiguous visibility keeps
attention pending. This is Cohex's local observation, not account-wide unread
state. Existing custom colors are preserved; edit the seven roles in Settings → General.

The sidebar can remain collapsed. If the state stays pending unexpectedly, copy
the privacy-safe report from Settings → Feedback. The report records anonymous
completion-read outcomes; task titles are unnecessary.

### SSH or update controls are gray

Both are intentionally unavailable in 1.0. An older enabled SSH preference is
retained but cannot start a connection, catalog or navigation operation. Update
checks, downloads and installation are disabled. Use GitHub Releases manually;
do not troubleshoot these controls as a failed connection or current-version verdict.

### Dictation does not start

ZR holds Codex Desktop's dictation shortcut. Confirm that Codex itself can dictate from the keyboard and that Codex—not Cohex—has microphone permission. Cohex does not request microphone access.

### Token Monitor shows unavailable data

- Open Codex Desktop and a local task. The combined live rate uses observed
  output across local tasks, including tasks beyond Recent 6; exact current-task
  identity is not required to keep the aggregate visible.
- `0.0` means connected local telemetry has no recent generated output, including
  a legitimate tool-only phase. `—` means the stream is stale or unavailable.
- Weekly is the official seven-day balance. Missing Weekly data is not borrowed
  from another quota bucket. A transient read failure can retain the previous
  values as pending update.
- Output Token already includes reasoning output. Remaining Token and work time
  use calibration and may become available separately. A fresh installation can
  still be sampling while actual recorded totals are already useful.
- Other devices and cloud activity may be absent. Estimates are not an official
  Token allowance and have no promised prediction accuracy.

### Statistics differs from the floating rate

Open Settings → **Statistics**. The default is **Since last recovery**; other
choices include Last 24 Hours, Last 7 Days and cycle history. Select a bar with
the pointer or arrow keys to inspect a shared point on both charts. Selection
does not change the totals for the whole range.

The floating rate is a live estimate. Historical average speed uses output with
confirmed work-time coverage. Concurrent task output adds together, but the
union of working intervals counts once. Waiting, reading, idle and sleep are
excluded. Historical catch-up can increase recorded totals without increasing
timed output or average speed. Missing observation stays visible.

History remains on this Mac. **Local history · Account unconfirmed** keeps
unassignable data separate; do not assume it belongs to the signed-in account.
If storage reports a failure, preserve the database and report the status. Do
not delete or modify it to make the warning disappear. See [PRIVACY.md](PRIVACY.md).

## Report a non-sensitive bug

Use the Issues page in the public distribution repository and include:

- Cohex version/build;
- macOS version and Mac model;
- Codex Desktop version;
- USB or Bluetooth;
- controller status and Accessibility status;
- concise reproduction steps, expected result, actual result, and a screenshot when useful.

Do not attach conversation text, credentials, account quota values, complete `~/.codex` files, rollout files, task IDs, or confidential project names. Use the private route in [SECURITY.md](SECURITY.md) for a security issue.

The support report contains bounded, anonymous health counters and an executable
fingerprint, not task titles, identifiers, conversation text, usage values or
account data. It is copied only on request and is never uploaded automatically.

## Update manually

In-app updating is disabled in 1.0. To install this release, quit Cohex, download
and verify [Cohex-1.0.0-arm64.dmg](https://github.com/rwang92/cohex/releases/download/v1.0.0/Cohex-1.0.0-arm64.dmg),
then replace the app in `/Applications` and reopen it. Your settings, mappings,
colors and local Statistics history remain in place. macOS may ask you to grant
Accessibility again, especially after replacing a development or differently
signed copy. For future releases, use the official GitHub Releases page; a gray
update control does not mean your version is current.

## Uninstall

1. Quit Cohex from its menu bar menu.
2. Delete `/Applications/Cohex.app`.
3. Remove Cohex from System Settings → Privacy & Security → Accessibility.
4. Optionally remove its profile and preferences:

```sh
rm -rf "$HOME/Library/Application Support/Cohex"
defaults delete com.ranwang.Cohex
```

Export a mapping profile first if it should be preserved. Do not delete `~/.codex`; it belongs to Codex Desktop.
