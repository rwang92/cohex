# Support

## Requirements

- Apple Silicon Mac
- macOS 14 or newer
- Codex Desktop
- Genuine Nintendo Switch Pro Controller over USB or Bluetooth

See [COMPATIBILITY.md](COMPATIBILITY.md) for the supported and experimental boundaries.

## Install

1. Download the versioned DMG and matching `.sha256` from the official GitHub Release.
2. Verify the checksum and Apple signature as described in [SECURITY.md](SECURITY.md).
3. Open the DMG and drag **Cohex** to **Applications**.
4. Eject the DMG and launch `/Applications/Cohex.app`.
5. Launch Codex Desktop.
6. Open the Cohex menu bar icon and grant Accessibility when macOS asks.
7. Connect the Nintendo Switch Pro Controller.

Cohex is a menu bar app (`LSUIElement`), so it does not show a normal Dock icon or main window.

### Migrating from Codex Controller

Cohex is a new macOS identity (`com.ranwang.Cohex`). Quit the legacy Codex
Controller before launching Cohex; the installer does not stop or delete the
legacy app. macOS cannot transfer the old Accessibility grant, so grant Cohex
again during first launch. Supported profile, language, and Monitor-position
preferences are imported once when Cohex has no newer local value.

## Connect the controller

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
- Confirm the mapping and its route in Settings → Mappings.
- Shortcut-backed operations may still work when Accessibility-backed operations fail.
- After a Codex update, a Chromium semantic control may have changed. Include the exact Codex version in the report.

### D-pad choices, models, Stop, guarded deletion, or Skill insertion fail

These features depend on exact, visible Codex controls and fail closed when the UI is ambiguous. Close unrelated Codex sheets or popovers, return to the main task, and retry once. Do not repeatedly approve or submit when the app reports an indeterminate mutation.

### Dictation does not start

ZR holds Codex Desktop's dictation shortcut. Confirm that Codex itself can dictate from the keyboard and that Codex—not Cohex—has microphone permission. Cohex does not request microphone access.

### Token Monitor shows unavailable data

- Start Codex Desktop and open a task.
- Local rollout telemetry and the official Weekly read run without an optional background connection.
- `0.0` means the current task is known but has no measurable output; `—` means the local telemetry/task context is unavailable.
- Weekly and token-equivalent estimates may be unavailable until Codex exposes a fresh rate-limit window or the local estimator has enough metadata.

## Report a non-sensitive bug

Use the Issues page in the public distribution repository and include:

- Cohex version/build;
- macOS version and Mac model;
- Codex Desktop version;
- USB or Bluetooth;
- controller status and Accessibility status;
- concise reproduction steps, expected result, actual result, and a screenshot when useful.

Do not attach conversation text, credentials, account quota values, complete `~/.codex` files, rollout files, task IDs, or confidential project names. Use the private route in [SECURITY.md](SECURITY.md) for a security issue.

## Update

Version 0.9 has no automatic updater. Quit Cohex, download and verify the newer DMG, then replace the app in `/Applications`. An official release with the same production signing identity should retain Accessibility authorization.

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
