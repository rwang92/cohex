# Cohex

Cohex is a free proprietary macOS menu-bar utility that maps a
genuine Nintendo Switch Pro Controller to Codex Desktop.

## Latest release

### Cohex 0.9.2 Beta

- Release date: **2026-08-10**
- Version/build: **0.9.2 (2)**
- [Download the latest Cohex release](https://github.com/rwang92/cohex/releases/latest)

**GitHub Releases** is the only official binary source. Ordinary users need
only the versioned `Cohex-<version>-arm64.dmg`. GitHub displays an immutable
SHA-256 digest beside the release asset; the project also retains its own
post-staple checksum as private release evidence.

This release adds the optional pointer-position Recent 6 gesture and Token
Clock mode, improves visual controller mappings, prioritizes running Tasks in
Recent 6, and includes sleep/wake, energy, Token telemetry, Needs Input, and
Task-wheel reliability fixes. See [CHANGELOG.md](CHANGELOG.md) for the complete
Added / Changed / Fixed record.

The supported target is:

- Apple Silicon Mac
- macOS 14 or newer
- Codex Desktop
- genuine Nintendo Switch Pro Controller over USB or Bluetooth

Official builds will be distributed outside the Mac App Store as Developer ID
signed, Apple-notarized and stapled DMGs. Follow [SECURITY.md](SECURITY.md) to
check the GitHub asset digest and Apple trust chain before installation.

X/Plan routing was tested with Codex Desktop builds `26.803.61601` and
`26.803.81509` after assigning a real **Toggle plan mode** keyboard shortcut in
Codex. These are tested builds, not a hard-coded support range or a complete
hardware matrix. See [COMPATIBILITY.md](COMPATIBILITY.md).

## Install

1. Download the versioned DMG from the latest GitHub Release.
2. Open the DMG.
3. Drag **Cohex** to **Applications**.
4. Launch it from `/Applications`.
5. Grant Accessibility only to that installed copy when macOS requests it.

Cohex uses a new macOS identity (`com.ranwang.Cohex`). Users migrating from the
legacy Codex Controller app must grant Accessibility again. Quit the legacy app
before launching Cohex; the installer does not delete it automatically.

See [SUPPORT.md](SUPPORT.md) for setup and troubleshooting.

## Project information

- [Compatibility](COMPATIBILITY.md)
- [Changelog](CHANGELOG.md)
- [Privacy](PRIVACY.md)
- [Security](SECURITY.md)
- [Support](SUPPORT.md)
- [License](LICENSE.txt)

This public repository contains the product website, public documentation,
Issues and release assets only. The proprietary application source is
maintained separately.
