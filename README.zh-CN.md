<p><img src="assets/CohexMark.png" width="80" height="72" alt="Cohex 标志"></p>

[English](README.md) · [简体中文](README.zh-CN.md)

# Cohex

重按一下，掌握你的 Codex 任务。

## 🆕 最新发布

**Cohex 1.0.0 (6)** · Apple Silicon · macOS 14+

发布于 **2026 年 10 月 13 日** · 最后更新 **2026 年 10 月 13 日**（太平洋时间）

[下载 Cohex 1.0](https://github.com/rwang92/cohex/releases/download/v1.0.0/Cohex-1.0.0-arm64.dmg)
· [产品主页](https://rwang92.github.io/cohex/)
· [发布说明](https://github.com/rwang92/cohex/releases/tag/v1.0.0#user-content-简体中文)
· [安装与帮助](SUPPORT.zh-CN.md)

Cohex 是为 Codex Desktop 准备的免费专有原生 macOS 助手。重按触控板，
展开本地任务轮盘，了解哪些任务需要关注，并查看生成速率与用量历史。手柄为可选设备。

## 新功能

- **触手可及的 Force Touch。** 重按浮动六边形或右键，即可展开 Recent 6。
  使用 MacBook 内置触控板时，还可主动开启全局重按，在指针处召唤轮盘。
  全局重按默认关闭。完全松开后，再点击任务切换或点击中心关闭；松开本身不会选择任务。
- **Local Recent 6 与清晰的状态颜色。** 关闭 Codex 侧栏，也能切换最近更新的
  六个本地任务。蓝色表示活跃、黄色表示需要输入、鲜绿色表示完成待查看、浅绿色表示
  完成已查看；白色为空闲、粉色为错误、灰色为未知。七种默认色均可修改，已有配色保留。
- **实时数据监控。** 实时 `tok/s` 汇总本机观测到的所有本地任务，包括六个槽位之外的
  任务。输出 Token 已包含思考 Token。Weekly 显示官方七天额度余额，剩余 Token、
  可用工作时间与满额产出为本地估算。按时间范围或额度周期查看已记录的输出、平均
  生成速度、工作时长和 Weekly 曲线；并发任务的 Token 累加，重叠工作时间只计一次。
  历史保存在这台 Mac 上，不代表账户全部活动。
- **可选的 Switch Pro 控制。** 通过 USB 或蓝牙连接正版 Nintendo Switch Pro
  Controller。按住 L，用右摇杆选择，再松开切换；映射按钮让常用 Codex 操作触手可及。

## 开始使用

1. 从 **GitHub Releases** 下载
   [Cohex-1.0.0-arm64.dmg](https://github.com/rwang92/cohex/releases/download/v1.0.0/Cohex-1.0.0-arm64.dmg)。
   这是唯一的官方二进制来源。DMG 已完成 Developer ID 签名、Apple 公证和装订；
   验证方法见[安全说明](SECURITY.zh-CN.md)。后续安装包使用 `Cohex-<version>-arm64.dmg` 命名。
2. 打开 DMG，将 **Cohex** 拖入 **Applications**，推出 DMG，再启动
   `/Applications/Cohex.app` 与 Codex Desktop。
3. 跟随使用指南选择 English 或简体中文，并按需通过 macOS 授予辅助功能权限。
   Cohex 位于菜单栏，没有普通的 Dock 主窗口。
4. 试着拖动并重按示例六边形。需要时再开启全局重按。新安装默认使用 **Medium 155%**，
   无需校准；可在设置 → 触控板调整触发力度。
5. 如需手柄控制，通过 USB 或蓝牙连接正版 Nintendo Switch Pro Controller，
   按住 L，用右摇杆选择任务，再松开切换。

支持目标为 **Apple Silicon、macOS 14 及以上版本、Codex Desktop**。
全局 Force Touch 需要 **MacBook 内置触控板**；不支持 Magic Trackpad 全局唤出。
Intel Mac 与其他手柄不在支持目标内。验证依据与限制见[兼容性说明](COMPATIBILITY.zh-CN.md)。

升级时，先退出 Cohex，再替换 Applications 中的应用。设置与本地统计历史会保留。
macOS 可能要求重新授予辅助功能权限，尤其是替换开发版或不同签名的副本时。
Cohex 保留 `com.ranwang.Cohex` 这一 Bundle ID。从旧版控制器应用迁移时，先退出旧应用，
再为 Cohex 单独授权；安装过程不会自动删除旧应用。

## 验证范围

1.0.0 (6) 安装包已通过 Developer ID 签名、Apple 公证、装订与 Gatekeeper 检查。
自动测试记录为 2,617 项、零失败，其中 1 项真实宿主探测跳过。最终安装包的新用户检查、
重复物理按压测试与完整设备矩阵尚无记录。原生无障碍、手柄及长期估算的验证范围仍有限，
详见[兼容性说明](COMPATIBILITY.zh-CN.md)。本项目不声称具有已测量的固定预测准确率。

## 项目信息

[兼容性](COMPATIBILITY.zh-CN.md) · [更新日志](CHANGELOG.zh-CN.md) · [隐私](PRIVACY.zh-CN.md)
· [安全](SECURITY.zh-CN.md) · [支持](SUPPORT.zh-CN.md) · [许可](LICENSE.txt)

本公开仓库仅包含产品网站、公开文档、Issues 与发布资产。专有应用源码单独维护。
Cohex 为独立项目，与 OpenAI、Apple 或 Nintendo 没有关联，也未获得其认可。
