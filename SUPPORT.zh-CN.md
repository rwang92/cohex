<p><img src="assets/CohexMark.png" width="80" height="72" alt="Cohex 标志"></p>

[English](SUPPORT.md) · [简体中文](SUPPORT.zh-CN.md)

# 支持

本指南适用于 **Cohex 1.0.0 (6)**：在运行 macOS 14 或更新版本的 Apple Silicon Mac 上，
配合 Codex Desktop 使用。

## 使用要求

- Apple Silicon Mac
- macOS 14 或更新版本
- Codex Desktop
- 全局压力唤出需要 MacBook 内置 Force Touch 触控板
- 可选：通过 USB 或蓝牙连接的原装 Nintendo Switch Pro Controller

支持范围与实验性功能边界见 [COMPATIBILITY.zh-CN.md](COMPATIBILITY.zh-CN.md)。

## 安装

1. 从官方 GitHub Release 下载 [Cohex-1.0.0-arm64.dmg](https://github.com/rwang92/cohex/releases/download/v1.0.0/Cohex-1.0.0-arm64.dmg)。
2. 按照 [SECURITY.zh-CN.md](SECURITY.zh-CN.md) 检查 GitHub 资源摘要和 Apple 信任链。
3. 打开 DMG，将 **Cohex** 拖入 **Applications（应用程序）**。
4. 推出 DMG，然后启动 `/Applications/Cohex.app`。
5. 启动 Codex Desktop。
6. 打开 Cohex 菜单栏图标，在 macOS 提示时授予辅助功能权限。
7. 按使用指南操作。手柄为可选配件，按需连接即可。

Cohex 是菜单栏应用（`LSUIElement`），因此没有常规 Dock 图标或主窗口。
发布的 DMG 已通过 Developer ID 签名、公证并附加公证票据（staple）。

### 从旧版控制器应用迁移

Cohex 使用新的 macOS 应用标识（`com.ranwang.Cohex`）。启动 Cohex 前请退出旧版控制器应用；
安装程序不会停止或删除旧版应用。macOS 无法转移旧版的辅助功能授权，因此首次启动时需重新
为 Cohex 授权。当 Cohex 尚无更新的本地值时，受支持的映射配置、语言和 Monitor 位置偏好会导入一次。

## 练习 1.0 手势

使用指南包含五步：拖动六边形、重按六边形、重按空白处、认识数字和认识颜色。每项实际操作练习
都先提供演示。按压后请完全松手；练习成功后，结果会短暂停留，再继续下一步。示例不会切换真实任务。
输入不可用时可以跳过；以后可随时从 Cohex 菜单或设置 → 通用重新打开**使用指南**。

全局 Force Touch 需要单独选择启用。按需在指南或设置 → 触控板中开启。
全新安装默认使用 **Medium 155%**，也可选择 Light 110% 或 Firm 200%；兼容的已保存设置优先。
无需校准。请使用 MacBook 内置 Force Touch 触控板；不支持 Magic Trackpad 全局唤出。

日常使用时，可将紧凑监视器拖到舒适的位置。重按或右键单击即可展开。启用全局压力后，也可在指针旁
唤出轮盘。完全松手后，点击本地任务即可切换，点击中心即可关闭；仅松手不会选中任务。
Codex 侧边栏可以保持收起。设置 → 触控板 → **试试力度…** 提供安全的练习示例。

如果全局输入不可用，请按照指南显示的权限状态操作。已有的辅助功能授权可能已提供输入通道，
不一定需要另外授予输入监控权限。Cohex 无法自行授予权限。

## 连接可选手柄

### USB

请使用支持数据传输的 USB 线，不要使用仅充电线。可以在启动 Cohex 前后连接手柄。
GameController 识别到手柄后，菜单栏图标会变绿。

### 蓝牙

1. 打开系统设置 → 蓝牙。
2. 按住手柄的小型同步按钮，直到玩家指示灯开始动态闪烁。
3. 选择 **Pro Controller**。
4. 返回 Cohex，确认菜单栏状态显示已连接。

USB 和蓝牙均为发布版的支持目标，但 macOS 的手柄设备描述符和报告时序可能不同。
只有 `GCController.haptics` 暴露受支持的 locality 时，手柄触觉反馈才可用；
Cohex 未实现 Nintendo 的私有 HD Rumble 协议。

## 辅助功能

系统设置 → 隐私与安全性 → 辅助功能必须列出已安装的 `/Applications/Cohex.app`，且开关需开启。

如果菜单仍显示未授权：

1. 退出 Cohex。
2. 从辅助功能列表移除过期或重复的 Cohex 项目。
3. 确认官方应用已安装到 `/Applications`。
4. 从应用程序文件夹启动，并添加或启用这一份应用。

也可以选择完整重置此 bundle 的辅助功能授权：

```sh
tccutil reset Accessibility com.ranwang.Cohex
```

然后启动已安装的应用并重新授权。不要从终端直接运行应用包内的可执行文件来测试授权；
macOS 可能会将该操作归因于终端。

由于 bundle identifier 和 Developer ID designated requirement 保持稳定，官方更新之间通常会保留
辅助功能授权。如果替换的是旧的 ad-hoc 构建或使用不同签名的构建，则必须重新授权。

如有需要，也可以单独重置旧版的辅助功能标识：

```sh
tccutil reset Accessibility com.ranwang.CodexController
```

## 故障排查

### 找不到菜单栏图标

- 检查控制中心及菜单栏溢出区域。
- 重新启动 `/Applications/Cohex.app`。
- 在活动监视器中确认 `Cohex` 正在运行。
- 应用按设计不显示 Dock 图标。

### 手柄一直显示未连接

- 使用已确认支持数据传输的 USB 线测试，或移除蓝牙配对后重新配对。
- 退出可能独占设备或转换设备输入的其他手柄映射工具。
- 关闭并重新开启手柄，然后重新启动 Cohex。
- 第三方“Pro 兼容”手柄不属于支持目标。

### 能收到按键，但 Codex 操作没有反应

- 按 L3 将 Codex Desktop 切到前台。
- 检查菜单中的辅助功能权限状态。
- 在设置 → 手柄中确认映射及其执行路径。
- 基于辅助功能的操作失败时，基于快捷键的操作仍可能可用。
- Codex 更新后，Chromium 语义控件可能发生变化。报告问题时请包含准确的 Codex 版本。

### X 无法切换 Plan Mode

1. 在 Codex Desktop 中打开 **Settings → Keyboard Shortcuts**。
2. 找到 **Toggle plan mode**，为其设置一个实际的键盘快捷键。
3. 返回 Cohex，再按一次 X。

Cohex 会读取并发送 Codex 的实际按键绑定。它不会将 `Shift+Tab` 视为可靠的 Plan Mode 快捷键，
也不会替你写入 Codex 的快捷键文件。此路径曾在 Codex Desktop 构建 `26.803.61601` 和
`26.803.81509` 上完成专项测试；这些构建号是兼容性记录，并非硬编码的支持门槛。

### 方向键选项、模型、Stop、受保护删除或 Skill 插入失败

这些功能依赖准确且可见的 Codex 控件，界面存在歧义时会停止操作。关闭无关的 Codex 表单或弹出面板，
回到主任务后重试一次。如果应用报告变更结果无法确定，请勿反复批准或提交。

Cohex 会串行执行所有跨进程辅助功能操作。交互快照仅在运行时或导航激活、实时语义变化，或手柄
明确请求时刷新；空闲时不会轮询完整界面树。如果 Chromium 暂时无响应，有界探测会报告不可用，
不会猜测目标。请等待可见的 Codex 界面稳定后再重试一次。

### 已完成任务一直显示亮绿色

亮绿色是出厂默认的**完成 · 待查看**颜色；浅绿色表示**完成 · 已查看**。任务完成后打开它。
经验证的十秒查看会将其标为已查看，提前离开也可确认查看。如果任务完成时你已在查看该任务，
请离开任务以确认。可见性不明确时，会继续保留待查看提醒。这是 Cohex 的本地观测，并非账户范围的
未读状态。已有自定义颜色会保留；可在设置 → 通用中修改七种状态颜色。

侧边栏可以保持收起。如果任务意外地一直处于待查看状态，请从设置 → 反馈复制隐私安全的报告。
报告记录匿名的完成后查看结果，不需要任务标题。

### SSH 或更新控件显示灰色

这两项功能在 1.0 中均按设计不可用。旧版已启用的 SSH 偏好会保留，但无法启动连接、任务列表读取或
导航操作。更新检查、下载和安装均已停用。请手动使用 GitHub Releases；不要将这些灰色控件视为
连接失败，也不要据此判断当前版本是否最新。

### 听写无法启动

ZR 会按住 Codex Desktop 的听写快捷键。请确认 Codex 自身可通过键盘启动听写，并确认麦克风权限
已授予 Codex。Cohex 不请求麦克风访问权限。

### Token Monitor 显示数据不可用

- 打开 Codex Desktop 和一个本地任务。综合实时速率使用观测到的本地任务输出，包括 Recent 6
  以外的任务；保持综合速率可见不需要准确识别当前任务。
- `0.0` 表示已连接的本地遥测近期没有生成输出，包括正常的纯工具阶段。`—` 表示数据流已过期或不可用。
- Weekly 是官方七天额度余量。Weekly 数据缺失时，不会借用其他额度桶的数据。
  短暂读取失败时，可能保留先前数值并标为待更新。
- Output Token 已包含推理输出。Remaining Token 和工作时间依赖校准，可能分别变为可用。
  全新安装可能仍在采样，但已实际记录的总量仍可参考。
- 其他设备和云端活动可能未被涵盖。估计值不是官方 Token 配额，也不承诺预测准确率。

### 统计与悬浮速率不同

打开设置 → **统计**。默认范围为**自上次恢复（Since last recovery）**；其他选项包括最近 24 小时、
最近 7 天和历史周期。用指针或方向键选择柱状条，可在两张图表中查看同一个时间点。
选择某个点不会改变整个时间范围的总量。

悬浮速率是实时估计值。历史平均速度使用具有已确认工作时间覆盖的输出。并行任务的输出会相加，
但工作时间段的并集只计算一次。等待、阅读、空闲和睡眠时间不计入。历史数据补录可能增加记录总量，
却不增加具有计时覆盖的输出量或平均速度。观测缺口会保留显示。

历史记录保留在这台 Mac 上。**本地历史 · 账户未确认（Local history · Account unconfirmed）**
会将无法归属的数据单独保留；不要假定它属于当前登录账户。如果存储报告故障，请保留数据库并报告状态，
不要为了消除警告而删除或修改数据库。详见 [PRIVACY.zh-CN.md](PRIVACY.zh-CN.md)。

## 报告不含敏感信息的问题

请使用公开分发仓库的 Issues 页面，并提供：

- Cohex 版本和构建号；
- macOS 版本和 Mac 型号；
- Codex Desktop 版本；
- 使用 USB 还是蓝牙；
- 手柄状态与辅助功能权限状态；
- 简明的复现步骤、预期结果、实际结果，以及有助于说明问题的截图。

请勿附上对话文本、凭据、账户额度数值、完整的 `~/.codex` 文件、rollout 文件、任务 ID 或保密项目名称。
安全问题请使用 [SECURITY.zh-CN.md](SECURITY.zh-CN.md) 中的私密报告途径。

支持报告包含有界的匿名健康计数和可执行文件指纹，不含任务标题、标识符、对话文本、用量数值或账户数据。
报告仅在用户请求时复制，绝不会自动上传。

## 手动更新

1.0 中已停用应用内更新。安装本版本时，请退出 Cohex，下载并验证
[Cohex-1.0.0-arm64.dmg](https://github.com/rwang92/cohex/releases/download/v1.0.0/Cohex-1.0.0-arm64.dmg)，
然后替换 `/Applications` 中的应用并重新打开。设置、映射、颜色和本地统计历史会保留。
macOS 可能要求重新授予辅助功能权限，尤其是在替换开发版或不同签名的副本后。
后续版本请从官方 GitHub Releases 页面获取；更新控件显示灰色并不意味着你正在使用最新版本。

## 卸载

1. 从 Cohex 菜单栏菜单退出应用。
2. 删除 `/Applications/Cohex.app`。
3. 从系统设置 → 隐私与安全性 → 辅助功能中移除 Cohex。
4. 如有需要，删除其配置文件和偏好设置：

```sh
rm -rf "$HOME/Library/Application Support/Cohex"
defaults delete com.ranwang.Cohex
```

如果需要保留映射配置，请先导出。不要删除 `~/.codex`；它属于 Codex Desktop。
