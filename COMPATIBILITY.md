# Compatibility

## Supported target

| Component | Supported target |
|---|---|
| Mac | Apple Silicon (`arm64`) only |
| macOS | macOS 14 or newer |
| Codex | Codex Desktop |
| Controller | Genuine Nintendo Switch Pro Controller |
| Connection | USB or Bluetooth |
| Distribution | Developer ID signed, notarized, stapled DMG |

The app is a beta. A supported target means the implementation and release process are designed for that combination; it does not replace the release smoke-test matrix. Published release notes must say which macOS versions and USB/Bluetooth paths were physically tested.

## Not supported

- Intel Macs
- Windows, Linux, iOS, iPadOS, or visionOS
- Joy-Con, Nintendo Switch 2 Pro Controller, Xbox, PlayStation, generic HID, or third-party “Pro-compatible” controllers
- Mac App Store installation
- unattended or managed-enterprise deployment

Those devices or environments may expose similar inputs, but they are not part of version 0.9's support contract.

## Codex version sensitivity

Cohex routes actions in descending stability:

1. the user's actual Codex keyboard binding, including an explicit disabled (`null`) binding;
2. documented Codex keyboard defaults and stable Desktop defaults, used across Codex builds;
3. documented `codex://` deep links;
4. commands marked configured-only, available only when the user has assigned a real binding;
5. bounded Accessibility semantics for actions without a reliable public command.

Codex's Chromium Accessibility tree can change between releases. Shortcut-backed navigation and simple Return/Escape dispatch are generally less sensitive than model/Reasoning verification, structured choices, the Plan-document open action, manually mapped Stop, user-message navigation, R3 latest-position navigation, guarded Backspace, Usage discovery, and Skill insertion.

Cohex does not re-gate documented or stable Desktop shortcut defaults after a Codex version change. It still fails closed when a configured-only command lacks a binding or when a destructive/context-sensitive Accessibility result cannot be uniquely verified. A new Codex build can therefore make a semantic Accessibility feature temporarily unavailable without disabling stable shortcut-backed features.

## Permission matrix

| Feature | Accessibility required |
|---|---|
| Controller connection and local overlays | No |
| Token Monitor rendering, dragging, and radial selection | No |
| Documented shortcut dispatch and native previous/next task | No |
| Command Menu keyboard navigation | No |
| A/B native Return/Escape | No |
| L sidebar shortcut and L3 app activation | No |
| Recent 6 UUID deep-link request | No |
| Model/Reasoning result verification | Yes |
| Structured permission/question selection, Plan-document open, and manually mapped Stop | Yes |
| User-message and R3 latest-position navigation | Yes |
| Skill insertion at the caret | Yes |
| Guarded composer Backspace | Yes |
| Manually mapped Usage discovery | Yes |

Cohex does not request microphone permission. Codex Desktop owns dictation and microphone access. Cohex suppresses B while ZR owns a dictation session; it does not capture or restore composer text.

## USB, Bluetooth, and haptics

USB and Bluetooth are both product targets. Report timing, optional stick-click exposure, and haptic availability are controlled partly by macOS and the controller firmware.

GameController is the primary input path. If a genuine Nintendo Pro Controller omits L3/R3 from both GameController button surfaces, Cohex uses a narrow, non-seizing HID fallback for the standard stick-button usages only. Haptics are used only when macOS exposes `GCController.haptics`; the app does not send Nintendo's private HD Rumble protocol.

Automated tests cannot prove physical latency, Bluetooth ordering, haptic feel, or every button on every Mac. These remain release smoke-test requirements.

## Experimental compatibility

The following features are disabled by default and are not part of the base support contract:

- shared local App Server attachment for fuller background task status and experimental direct model control;
- physical Codex Micro lighting output over a community-observed Vendor HID protocol.

The app does not emulate a Codex Micro, use a private OpenAI renderer protocol, patch Codex, or modify its ASAR. A successful unit test, socket connection, model count, or HID write is not proof of end-to-end behavior on a user's device.

## Accessibility and appearance

The app supports Light/Dark appearance, Increase Contrast, Reduce Transparency, Reduce Motion, and VoiceOver semantics. Native Liquid Glass is used when available; macOS 14–25 use system material fallbacks.
