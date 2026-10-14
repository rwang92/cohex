<p><img src="assets/CohexMark.png" width="80" height="72" alt="Cohex 标志"></p>

[English](SECURITY.md) · [简体中文](SECURITY.zh-CN.md)

# 安全

## 受支持的版本

当前版本为 **Cohex 1.0.0 (6)**。除非发布说明另有说明，安全修复面向最新的已发布版本。Cohex 1.0 通过手动下载 DMG 并替换应用来更新；应用内更新控件保持不可用。

## 报告漏洞

请使用公共分发仓库中 GitHub 的私密[报告漏洞表单](https://github.com/rwang92/cohex/security/advisories/new)。

不要在公开 issue 中发布凭据、对话数据、私人任务信息、尚未修复漏洞的概念验证代码或敏感系统细节。普通且不涉及敏感信息的 bug 可以通过公开 issue 报告。

请提供：

- Cohex 版本和构建号；
- macOS 版本和 Apple Silicon 机型；
- Codex Desktop 版本；
- 是否启用了辅助功能和全局 Force Touch；
- 影响、复现步骤及经过脱敏的最小验证证据。

## 验证发布版本

从官方 GitHub Release 下载 [Cohex-1.0.0-arm64.dmg](https://github.com/rwang92/cohex/releases/download/v1.0.0/Cohex-1.0.0-arm64.dmg)。DMG 是唯一的公开附件，无需单独的校验和文件。GitHub 在每个发布附件旁显示不可变的 SHA-256 摘要。在下载目录中计算 DMG 摘要，并与页面显示值比较：

```sh
shasum -a 256 'Cohex-1.0.0-arm64.dmg'
codesign --verify --strict --verbose=2 'Cohex-1.0.0-arm64.dmg'
spctl --assess --type open --context context:primary-signature --verbose=2 \
  'Cohex-1.0.0-arm64.dmg'
xcrun stapler validate 'Cohex-1.0.0-arm64.dmg'
```

将应用复制到 `/Applications` 后：

```sh
codesign --verify --deep --strict --verbose=2 \
  '/Applications/Cohex.app'
spctl --assess --type execute --verbose=2 \
  '/Applications/Cohex.app'
codesign --display --requirements - \
  '/Applications/Cohex.app'
```

生产版本必须使用 Apple 颁发的 `Developer ID Application` 身份签名，启用 Hardened Runtime 和安全时间戳，并装订 Apple 公证票据。不要使用 `xattr` 或关闭 Gatekeeper 来启动未通过这些检查的副本。

1.0.0 (6) 发布包已通过上述签名、公证、票据装订和 Gatekeeper 检查。发布包可信性并不证明已完成实体设备覆盖验证；验证范围请参阅[兼容性文档](COMPATIBILITY.zh-CN.md)。

SHA-256 摘要可确认下载字节与 GitHub 接收的附件一致；它不能证明应用由谁构建，也不能证明 macOS 信任该应用。Developer ID 签名标识发布者；Apple 公证、票据装订和 Gatekeeper 用于完成可执行文件的信任检查。因此，即使不公开单独的校验和文件，Cohex 仍会在内部保留票据装订后的校验和，并验证重新下载的发布副本。参阅 GitHub 的[发布附件摘要公告](https://github.blog/changelog/2025-06-03-releases-now-expose-digests-for-release-assets/)。

## 安全模型

- 生产应用是一款仅支持 arm64、未启用 App Sandbox 的菜单栏工具，因为限定目标 PID 的键盘事件、辅助功能、手柄输入、本地 Codex 元数据及可选的本地 HID 输出都是核心功能。
- 辅助功能是权限范围较广的 macOS 权限。Cohex 将实现限制在已验证 Codex 窗口内的有界搜索，以及映射功能所需的值与操作语义；用户仍应仅向真实可信的发布版本授予此权限。
- 优先使用已公开说明的快捷键和深链接，再使用辅助功能。
- 本地 Codex 数据库、全局状态、模型目录、快捷键配置和 rollout 元数据均以只读方式打开。
- 默认路径没有由开发者运营的远程服务、分析上传、登录项或执行用户自定义命令的能力。
- 共享守护进程控制和实体 Micro 灯光属于隔离的、默认关闭的实验功能。兼容性失败时会拒绝继续操作。
- Cohex 不修改 Codex 的 ASAR，也不使用私有 Electron IPC。
- 1.0 不提供 SSH 任务显示和 Remote 导航，即使旧偏好设置仍为启用状态也是如此。
- 保留的兼容代码仍会限定运行实例和 PID、Host、Project 及 Task 的 AX 证据范围，并拒绝过期或有歧义的授权依据。这些保护措施不会在发布应用中启用 Remote 功能。

## 发布完整性

Bundle identifier 和生产签名身份必须在各版本间保持稳定。macOS 辅助功能授权绑定于应用的 designated code requirement；临时签名（ad-hoc）或意外重新签名的构建既存在真实性问题，也会形成新的 TCC 身份。

公共分发仓库应仅包含公开文档和发布元数据。专有应用源码保持私有。发布附件通过受控的 Developer ID 签名、Apple 公证、票据装订、Draft Release 和重新下载验证流程生成。

## 更新信任边界

1.0 发布策略要求开发、CI 和 Developer ID 分发包均保持 `CohexUpdaterEnabled=false`。它移除更新源 URL、公钥及自动检查默认设置，不创建 Sparkle driver，也不发起更新检查。固定版本的框架及辅助程序仍在应用包内签名，但不会安装持久运行的服务。已有更新偏好设置会保留，且不能启用已禁用的功能。1.0 不需要也不发布更新签名密钥或 appcast。手动替换仍要求使用已验证、经过 Developer ID 签名、Apple 公证及票据装订的 DMG。未来的应用内更新需要单独批准的发布版本和端到端验证。
