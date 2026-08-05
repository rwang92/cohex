# Security

## Supported releases

CoHex is currently a `0.9` beta. Security fixes are provided only for the newest published beta unless a release note explicitly says otherwise. Version `0.9` has no automatic updater; users must install a newer DMG manually.

## Reporting a vulnerability

Use the private vulnerability-reporting channel linked from the public distribution repository. If GitHub Private Vulnerability Reporting is enabled there, use its **Report a vulnerability** form.

Do not publish credentials, conversation data, private task information, proof-of-concept code for an unpatched vulnerability, or sensitive system details in a public issue. A public issue may be used for ordinary, non-sensitive bugs.

Include:

- CoHex version and build;
- macOS version and Apple Silicon model;
- Codex Desktop version;
- whether Accessibility and any default-off experimental feature were enabled;
- impact, reproduction steps, and a minimal redacted proof.

## Verify a release

Download only the versioned DMG and its matching `.sha256` sidecar from the official GitHub Release. From the download directory:

```sh
shasum -a 256 -c 'CoHex-0.9.0-arm64.dmg.sha256'
codesign --verify --strict --verbose=2 'CoHex-0.9.0-arm64.dmg'
spctl --assess --type open --context context:primary-signature --verbose=2 \
  'CoHex-0.9.0-arm64.dmg'
xcrun stapler validate 'CoHex-0.9.0-arm64.dmg'
```

After copying the app to `/Applications`:

```sh
codesign --verify --deep --strict --verbose=2 \
  '/Applications/CoHex.app'
spctl --assess --type execute --verbose=2 \
  '/Applications/CoHex.app'
codesign --display --requirements - \
  '/Applications/CoHex.app'
```

A production release must be signed by an Apple-issued `Developer ID Application` identity, use Hardened Runtime and a secure timestamp, and have a stapled Apple notarization ticket. Do not use `xattr` or disable Gatekeeper to launch a copy that fails these checks.

## Security model

- The production app is an arm64-only, sandbox-free menu bar utility because PID-scoped key events, Accessibility, controller input, local Codex metadata, and optional local HID output are core functions.
- Accessibility is a broad macOS permission. CoHex limits its implementation to bounded searches in verified Codex windows and value/action semantics needed by mapped features, but users should grant it only to an authentic release.
- Documented shortcuts and deep links are preferred over Accessibility.
- Local Codex databases, global state, model catalog, shortcut configuration, and rollout metadata are opened read-only.
- The default path has no developer-operated remote service, analytics upload, automatic updater, privileged helper, login item, or user-provided command execution.
- Shared-daemon control and physical-Micro lighting are isolated, default-off experiments. Compatibility failure is fail-closed.
- CoHex does not modify Codex's ASAR or use private Electron IPC.

## Release integrity

The bundle identifier and production signing identity must remain stable across releases. macOS Accessibility authorization is tied to the app's designated code requirement; an ad-hoc or unexpectedly re-signed build is both an authenticity concern and a new TCC identity.

The public distribution repository should contain public documentation and
release metadata only. Proprietary application source remains private. Release
assets are produced by a controlled Developer ID signing, Apple notarization,
stapling, Draft Release and re-download verification process.
