# CoHex

CoHex is a free proprietary macOS menu-bar utility that maps a
genuine Nintendo Switch Pro Controller to Codex Desktop.

## Download — Coming soon

The first notarized public beta is coming soon. There is currently no official
downloadable build.

When a release is available, **GitHub Releases** in this repository will be the
only official binary source. Download both:

- `CoHex-<version>-arm64.dmg`
- `CoHex-<version>-arm64.dmg.sha256`

The supported target is:

- Apple Silicon Mac
- macOS 14 or newer
- Codex Desktop
- genuine Nintendo Switch Pro Controller over USB or Bluetooth

Official builds will be distributed outside the Mac App Store as Developer ID
signed, Apple-notarized and stapled DMGs. Follow [SECURITY.md](SECURITY.md) to
verify the checksum and Apple signature before installation.

## Install

1. Verify the downloaded DMG and checksum.
2. Open the DMG.
3. Drag **CoHex** to **Applications**.
4. Launch it from `/Applications`.
5. Grant Accessibility only to that installed copy when macOS requests it.

CoHex uses a new macOS identity (`com.ranwang.CoHex`). Users migrating from the
legacy Codex Controller app must grant Accessibility again. Quit the legacy app
before launching CoHex; the installer does not delete it automatically.

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
