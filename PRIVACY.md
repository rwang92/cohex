# Privacy

Last updated: July 27, 2026

CoHex is a local macOS utility. It does not include developer analytics, advertising, a crash-reporting upload service, or a developer-operated remote backend.

## Data processed locally

CoHex processes only the information needed to translate controller input and render its local status surfaces:

- Nintendo Switch Pro Controller button, trigger, and stick events received through Apple's `GameController` framework. A narrow, non-seizing HID fallback listens only for Nintendo Pro Controller L3/R3 button usages when macOS omits those optional objects.
- Codex Desktop shortcut and application state needed to direct documented keyboard events and `codex://` links to the running Codex process.
- Bounded Accessibility semantics from verified Codex windows, such as control role, enabled/visible state, labels needed to identify an action, current model/Reasoning labels, task identity, composer caret/value for guarded text operations, and geometric control information.
- Read-only Codex metadata under `~/.codex`, including the local task index, global UI state, model catalog, keyboard-shortcut configuration, bounded rollout lifecycle/token metadata, opaque request call identifiers, and the `sandbox_permissions` enum needed to match an escalated-permission request with its completion in memory.

Accessibility discovery can encounter short visible text while identifying an actionable control. CoHex does not intentionally retain conversation bodies, copy composer text through the clipboard, or persist message content. Dictation remains owned by Codex Desktop; Controller does not capture a composer draft or attempt to restore transcribed text. The Plan-document bridge reads only bounded control metadata such as role, identifier, title, description, enabled state, and frame so it can identify one exact open action or verify the right-side Plan panel. It does not read or retain the Plan body. The rollout readers parse lifecycle, model, token, rate-limit, and task metadata rather than message bodies. For native question and escalated-permission state, the activity reader decodes only the structural response-item timestamp, type, function name, opaque call ID, and the `sandbox_permissions` enum needed to distinguish `require_escalated`; it deliberately omits command text, justification, general arguments, question text, options, answers, output values, and content. Call IDs and the resulting pending-request ledgers remain in memory, are cleared at generation/runtime/file boundaries, and are not logged or persisted.

## Data stored by CoHex

The active controller profile is stored at:

```text
~/Library/Application Support/CoHex/profile.json
```

On first launch, CoHex may read the legacy local preference domain
`com.ranwang.CodexController` and
`~/Library/Application Support/CodexController/profile.json` to import only a
validated mapping profile, language choice, and Monitor position. It does not
delete or overwrite the legacy files, and it does not import live task state,
token data, or experimental connection state.

It contains mappings, Skill favorites, feedback preferences, and the task-state color palette. Standard macOS preferences store small UI settings, including the Token Monitor's display-relative position.

Live token rates, rate-limit snapshots, task activity, task titles, and the six-slot status projection are held in memory and are not written to a CoHex analytics database. Exported mapping profiles are written only to a location the user chooses.

## Network behavior

CoHex does not send data to a developer service. Its normal shortcuts, Accessibility integration, local database reads, rollout reads, and Token Monitor are local.

## Permissions

CoHex requests macOS Accessibility permission because some Codex actions do not have a documented shortcut or deep link. macOS presents and controls this permission; the app cannot approve itself.

The app does not request microphone permission. ZR holds Codex Desktop's dictation shortcut, and Codex Desktop owns any microphone permission and audio processing. While ZR owns an active or asynchronously starting dictation session, Controller consumes B as a no-op so Escape cannot interrupt the native recording. After ZR is released, B returns to its ordinary Escape behavior. Controller does not record audio, retain a composer draft, or restore dictation text.

Game controller access normally does not present a separate privacy prompt. The Nintendo stick-click fallback is a local HID input operation.

CoHex does not patch Codex, modify its ASAR, use private Electron IPC, emulate Work Louder hardware, or execute user-supplied shell commands.

## Removing local data

Quit CoHex, remove the app from `/Applications`, and optionally delete:

```text
~/Library/Application Support/CoHex
~/Library/Preferences/com.ranwang.CoHex.plist
```

Remove CoHex from System Settings → Privacy & Security → Accessibility to revoke the system permission. Do not delete `~/.codex`; that directory belongs to Codex Desktop and contains the user's Codex data.

## Support disclosures

When reporting a problem, do not upload conversations, credentials, complete `~/.codex` files, task identifiers, account quota values, or other private work. See [SUPPORT.md](SUPPORT.md) for the minimal diagnostic information that is useful.
