# Security

## Supported releases

The current release is **Cohex 1.0.0 (6)**. Security fixes target the newest
published release unless its notes say otherwise. Cohex 1.0 uses manual DMG
download-and-replace updates; in-app update controls remain unavailable.

## Reporting a vulnerability

Use GitHub's private [Report a vulnerability](https://github.com/rwang92/cohex/security/advisories/new)
form for the public distribution repository.

Do not publish credentials, conversation data, private task information, proof-of-concept code for an unpatched vulnerability, or sensitive system details in a public issue. A public issue may be used for ordinary, non-sensitive bugs.

Include:

- Cohex version and build;
- macOS version and Apple Silicon model;
- Codex Desktop version;
- whether Accessibility and global Force Touch were enabled;
- impact, reproduction steps, and a minimal redacted proof.

## Verify a release

Download [Cohex-1.0.0-arm64.dmg](https://github.com/rwang92/cohex/releases/download/v1.0.0/Cohex-1.0.0-arm64.dmg)
from the official GitHub Release. The DMG is the only public asset; no separate
checksum file is needed. GitHub displays an immutable SHA-256 digest beside every
release asset. From the download directory, calculate the DMG digest and
compare it with that displayed value:

```sh
shasum -a 256 'Cohex-1.0.0-arm64.dmg'
codesign --verify --strict --verbose=2 'Cohex-1.0.0-arm64.dmg'
spctl --assess --type open --context context:primary-signature --verbose=2 \
  'Cohex-1.0.0-arm64.dmg'
xcrun stapler validate 'Cohex-1.0.0-arm64.dmg'
```

After copying the app to `/Applications`:

```sh
codesign --verify --deep --strict --verbose=2 \
  '/Applications/Cohex.app'
spctl --assess --type execute --verbose=2 \
  '/Applications/Cohex.app'
codesign --display --requirements - \
  '/Applications/Cohex.app'
```

A production release must be signed by an Apple-issued `Developer ID Application` identity, use Hardened Runtime and a secure timestamp, and have a stapled Apple notarization ticket. Do not use `xattr` or disable Gatekeeper to launch a copy that fails these checks.

The 1.0.0 (6) release package passed these signature, notarization, stapling and
Gatekeeper checks. Package trust does not establish physical-device coverage;
see [COMPATIBILITY.md](COMPATIBILITY.md) for the validation scope.

The SHA-256 digest establishes that the downloaded bytes match the asset GitHub
received. It does not establish who built the app or whether macOS trusts it.
Developer ID signing identifies the publisher; Apple notarization, stapling,
and Gatekeeper establish the executable trust checks. Cohex therefore retains
an internal post-staple checksum and verifies downloaded release copies even
though a separate checksum file is not a public asset. See GitHub's
[release-asset digest announcement](https://github.blog/changelog/2025-06-03-releases-now-expose-digests-for-release-assets/).

## Security model

- The production app is an arm64-only, sandbox-free menu bar utility because PID-scoped key events, Accessibility, controller input, local Codex metadata, and optional local HID output are core functions.
- Accessibility is a broad macOS permission. Cohex limits its implementation to bounded searches in verified Codex windows and value/action semantics needed by mapped features, but users should grant it only to an authentic release.
- Documented shortcuts and deep links are preferred over Accessibility.
- Local Codex databases, global state, model catalog, shortcut configuration, and rollout metadata are opened read-only.
- The default path has no developer-operated remote service, analytics upload, login item, or user-provided command execution.
- Shared-daemon control and physical-Micro lighting are isolated, default-off experiments. Compatibility failure is fail-closed.
- Cohex does not modify Codex's ASAR or use private Electron IPC.
- SSH task display and Remote navigation are unavailable in 1.0, including when an old preference remains enabled.
- Retained compatibility code still scopes its runtime/PID, Host, Project and Task AX evidence and rejects stale or ambiguous authority. These safeguards do not enable Remote features in the released application.

## Release integrity

The bundle identifier and production signing identity must remain stable across releases. macOS Accessibility authorization is tied to the app's designated code requirement; an ad-hoc or unexpectedly re-signed build is both an authenticity concern and a new TCC identity.

The public distribution repository should contain public documentation and
release metadata only. Proprietary application source remains private. Release
assets are produced by a controlled Developer ID signing, Apple notarization,
stapling, Draft Release and re-download verification process.

## Update trust boundary

The 1.0 release policy keeps `CohexUpdaterEnabled=false` for development, CI and Developer ID distribution bundles. It strips the feed URL, public key and automatic-check defaults, and does not create a Sparkle driver or issue update checks. The pinned framework and helpers remain signed inside the app but do not install a persistent service. Existing update preferences are preserved and cannot enable the disabled feature. No update signing key or appcast is required or published for 1.0. Manual replacement still requires a verified Developer ID signed, notarized and stapled DMG. Future in-app updates require a separate approved release and end-to-end validation.
