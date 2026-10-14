(function () {
  "use strict";

  /* Public product and distribution repository. */
  var SiteConfig = Object.freeze({
    githubURL: "https://github.com/rwang92/cohex/releases/latest"
  });

  /* Mirrors the production Swift constants. scripts/tests/site_policy_test.sh
     intentionally fails when either side changes without the other. */
  var CohexNativeVisualSpec = {
    monitor: {
      compact: {
        diameter: 108,
        outerRadius: 53,
        innerRadius: 22,
        contentDiameter: 44,
        bandThickness: 8
      },
      expanded: {
        diameter: 500,
        outerRadius: 246,
        innerRadius: 102,
        contentDiameter: 204,
        bandThickness: 9
      },
      transitionDurationMS: 80,
      selectionDurationMS: 60
    },
    breathing: {
      durationMS: 3000,
      minimumOpacity: 0.20,
      maximumOpacity: 1,
      lowColorFraction: 0.24,
      highColorFraction: 0.94
    },
    skill: {
      diameter: 500,
      outerRadius: 246,
      innerRadius: 95,
      selectedFillOpacity: 0.16,
      selectedStrokeWidth: 3,
      selectionDurationMS: 60
    },
    model: {
      combinedCardWidth: 208,
      combinedCardHeight: 58,
      marqueeDurationMS: 270
    }
  };

  var copy = {
    "zh-CN": {
      navUsage: "用量",
      notesTitle: "说明",
      pausePlayback: "暂停",
      resumePlayback: "继续循环",
      staticPlayback: "静态预览",
      deviceSliding: "滑动接触",
      devicePressing: "持续重按",
      deviceReleased: "完全松开",
      deviceClick: "独立点击",
      deviceLHeld: "L 按住",
      deviceStick: "L 按住 · 摇杆选择",
      deviceLReleased: "L 已松开",
      controllerDemoHold: "按住 L → 展开轮盘",
      controllerDemoChoose: "L 保持按住 · 右摇杆选择「完善首页」",
      controllerDemoRelease: "松开 L → 请求切换「完善首页」",
      controllerDemoRest: "L 与摇杆已回位",
      pointerDemoClickReady: "移动到任务 · 点击选择",
      pointerDemoClose: "点击中心 · 收起轮盘",
      pointerDemoTravelling: "保持收起 · 移动到光标位置",
      pointerDemoAnother: "换一个位置 · 再召唤一次",
      compatTrackpadFeature: "Force Touch 全局唤出",
      compatAccessibilityFeature: "原生系统辅助功能",
      noteLink1: "查看说明 1",
      noteBack1: "返回说明 1 的来源",
      noteLink2: "查看说明 2",
      noteBack2: "返回说明 2 的来源",
      noteLink3: "查看说明 3",
      noteBack3: "返回说明 3 的来源",
      noteLink4: "查看说明 4",
      noteBack4: "返回说明 4 的来源",
      noteLink5: "查看说明 5",
      noteBack5: "返回说明 5 的来源",
      noteLink6: "查看说明 6",
      noteBack6: "返回说明 6 的来源",
      noteLink7: "查看说明 7",
      noteBack7: "返回说明 7 的来源",
      noteLink8: "查看说明 8",
      noteBack8: "返回说明 8 的来源",
      noteLink9: "查看说明 9",
      noteBack9: "返回说明 9 的来源",
      noteLink10: "查看说明 10",
      noteBack10: "返回说明 10 的来源",
      noteLink11: "查看说明 11",
      noteBack11: "返回说明 11 的来源",
      noteLink12: "查看说明 12",
      noteBack12: "返回说明 12 的来源",
      documentTitle: "Cohex — 六个 Task，一眼掌握。",
      documentDescription: "Cohex 1.0：用 Force Touch 掌握 Codex Desktop 的本地任务、生成速率与用量统计。适用于 Apple Silicon Mac，手柄可选。",
      skipToContent: "跳到主要内容",
      navLabel: "主导航",
      navSections: "页面章节",
      brandHome: "Cohex 首页",
      navTasks: "Recent 6",
      navControls: "操作",
      navMoreControls: "快捷操作",
      navCompatibility: "兼容性",
      githubLabel: "下载 v1.0.0",
      releaseDate: "发布于 2026 年 10 月 13 日",
      releaseDateShort: "2026-10-13 发布",
      heroEyebrow: "为 Codex Desktop 准备的原生 macOS 助手。",
      heroTitleLine1: "六个 Task，",
      heroTitleLine2: "一眼掌握。",
      heroBody: "任务状态、Token 用量与切换操作，集成于一个悬浮六边形。用触控板掌握 Codex Desktop，也可以选择 Switch Pro 手柄。",
      exploreFeatures: "了解核心功能",
      hold: "按住",
      choose: "选择",
      heroMonitorCaption: "聚合速率 · 24.6 tok/s",
      heroVisualDescription: "动画展示正确布局的 Nintendo Switch Pro Controller：按住 L，用右摇杆选择六边形 Monitor 上的 Task，状态边同时显示活跃、等待输入、完成与错误。",
      recentEyebrow: "Recent 6 · Token Monitor",
      recentTitleLine1: "状态在边上，",
      recentTitleLine2: "注意力留在任务上。",
      recentBody: "六条边对应最近更新的六个本地任务。展开后查看名称，选择时位置保持稳定。蓝色表示活跃，黄色提示需要输入，绿色区分完成后是否已查看。",
      tokenDisclosure: "默认颜色可在设置 → 通用自定义。图标、名称和选中标记也传达状态；不会覆盖你保存的配色。",
      demoTaskBuild: "修复构建",
      demoTaskLanding: "完善首页",
      demoTaskInstall: "验证安装",
      demoTaskDocs: "整理文档",
      demoTaskSync: "排查同步",
      demoTaskResearch: "研究方案",
      demoEstimateTokens: "≈ Token · 1.24M",
      demoEstimateTime: "≈ 工作时长 · 42.50h",
      stepHold: "按住 L",
      stepChoose: "右摇杆选择",
      stepRelease: "松开请求切换",
      recentDemoDescription: "示例从显示聚合速率 24.6 的小六边形展开；中央显示 Weekly 官方余额示例、Token 和工作时长估算、重置日期与任务数。",
      stateLegendLabel: "Task 状态图例",
      stateCycleDescription: "状态会自动循环。选择任一状态可暂停循环，并突出轮盘中对应的边。",
      stateActive: "活跃",
      stateUnread: "完成未读",
      stateViewed: "完成已读",
      stateNeeds: "等待输入",
      stateError: "错误",
      controllerEyebrow: "Controller & Pointer",
      controllerTitleLine1: "一个六边形，",
      controllerTitleLine2: "两种自然的控制方式。",
      controllerBody: "重按悬浮六边形或右键展开。启用全局重按后，还能在指针位置召出轮盘。松开压力后点击任务，或点击中央收起；也可选用手柄完成切换。",
      controlModeLabel: "操作方式",
      controllerMethodTitle: "可选 Switch Pro 手柄",
      flowHoldTitle: "按住 L",
      flowHoldBody: "从 Compact Monitor 展开 Recent 6。",
      flowChooseTitle: "推动右摇杆",
      flowChooseBody: "颜色与 Task 名称同步高亮。",
      flowReleaseTitle: "松开 L",
      flowReleaseBody: "向选中的本地任务发送切换请求；B 随时取消。",
      pointerFlowMoveTitle: "拖动位置",
      pointerFlowMoveBody: "把小六边形拖到顺手处。",
      pointerFlowExpandTitle: "局部重按",
      pointerFlowExpandBody: "在六边形上重按，展开后完全松开。",
      pointerFlowChooseTitle: "点击选择",
      pointerFlowChooseBody: "先完全松开压力，再点击任务。",
      controllerDemoLabel: "Switch Pro 操作流",
      calloutHold: "按住展开",
      calloutSelect: "360° 选择",
      controllerResult: "切换到「完善首页」",
      pointerResult: "Recent 6 已展开",
      controllerDemoDescription: "默认依次演示各项操作；选择一个选项后，只重复播放该操作。减少动态效果时显示静态状态。",
      mappingLabel: "其他常用操作",
      mappingSkills: "Skill Wheel",
      mappingSkillsNote: "收藏 Skill",
      mappingDpad: "模型与问题",
      mappingDpadNote: "Model · Reasoning · Native question",
      mappingDictation: "听写",
      mappingDictationNote: "按住说话",
      mappingConfirm: "确认与返回",
      mappingConfirmNote: "原生上下文",
      mappingPlan: "Plan 文档",
      mappingPlanNote: "打开或关闭",
      shortcutsEyebrow: "More controls",
      shortcutsTitle: "常用操作，都在熟悉的位置。",
      shortcutsBody: "可选 Nintendo Switch Pro Controller 支持 USB 与 Bluetooth。按住 L、右摇杆选择、松开切换本地任务；还可使用 Skill、模型与问题、听写、确认和 Plan 文档。",
      shortcutsDemoLabel: "五项核心操作",
      shortcutsDemoDescription: "演示会自动循环 ZL、D-pad、ZR、A 与 B、Y。选择任一操作后，将只重复演示该操作。",
      dictationStatus: "正在听写",
      dictationRelease: "松开 ZR 完成",
      permissionTitle: "权限请求",
      permissionSource: "Terminal",
      permissionQuestion: "是否允许执行一次无文件改动的权限测试，并打开 macOS Calculator？",
      permissionActionsLabel: "B 拒绝，A 允许一次",
      permissionBack: "拒绝",
      permissionGrant: "允许一次",
      permissionDemoNote: "体验演示 · 不会执行命令或请求系统权限",
      planModeLabel: "Plan mode",
      planPromptLabel: "当前 Task",
      planPrompt: "为控制器演示制定一份 Plan",
      planOpenAction: "在侧边面板中打开 Plan",
      planDocumentEyebrow: "PLAN",
      planDocumentTitle: "Implementation plan",
      planStepOne: "确认当前交互",
      planStepTwo: "实现控制映射",
      planStepThree: "验证状态反馈",
      pointerEyebrow: "Mouse & Trackpad",
      pointerTitle: "触控板",
      pointerBody: "全局重按需要主动启用，默认使用 Medium 155%。可在设置 → 触控板调整力度并练习。只支持 MacBook 内置触控板的全局唤出。",
      pointerBoundary: "网页只是循环演示，不监听你的触控板。Magic Trackpad 全局唤出不在 1.0 支持范围内。",
      pointerDemoLabel: "拖动、展开与切换",
      pointerDrag: "拖动",
      pointerExpand: "Force Touch / 右键",
      pointerSwitch: "点击 Task",
      pointerDemoDescription: "自动展示拖动、远距离重按召唤和点击选择。选择选项后重复播放该操作；示例不监听真实压力。",
      compatibilityEyebrow: "Compatibility",
      compatAppleSiliconTitle: "Apple Silicon",
      compatAppleSilicon: "arm64 原生构建",
      compatMacOSTitle: "macOS 14+",
      compatMacOS: "支持浅色、深色与辅助功能设置",
      compatCodexTitle: "Codex Desktop",
      compatCodex: "面向当前桌面 Task 工作流",
      compatControllerTitle: "手柄可选",
      compatController: "Nintendo Switch Pro · USB / Bluetooth",
      compatAccessibilityTitle: "Accessibility",
      compatAccessibility: "按需授予辅助功能；指南中查看输入权限",
      compatLocalTitle: "本地优先",
      compatLocal: "无开发者后端或分析 SDK",
      brandStoryEyebrow: "为什么叫 Cohex",
      brandStoryTitle: "从 Codex，到六边形。",
      brandStoryBody1: "Cohex 由 Codex 与 Hex 融合而来。Co 保留它与 Codex 的连接，Hex 指向产品的六边形界面，也对应 Recent 6 的六个 Task。",
      brandStoryBody2: "标记以苯环的六边结构为灵感：六条边承载任务状态，中央圆代表当前聚焦的 Task。名字、图标与交互，因此共享同一种几何语言。",
      footerTagline: "六个 Task，一眼掌握。",
      independenceDisclosure: "Cohex 是独立项目，与 OpenAI、Apple、Nintendo 或 Work Louder 无隶属、赞助或背书关系。所有产品名称与商标归其各自所有者。",
      privacyDisclosure: "所有动画和统计使用固定匿名示例，不读取本机任务、Token 或个人数据。",
      footerNavLabel: "文档链接",
      releaseNotice: "Cohex v1.0.0 适用于 Apple Silicon、macOS 14 及以上版本。安装包通过 GitHub Releases 提供，已完成 Developer ID 签名和 Apple 公证。",
      supportLink: "安装与常见问题",
      privacyLink: "隐私",
      changelogLink: "版本变化",
      paletteNote: "鲜绿：完成未读 · 浅绿：完成已读 · 白：空闲 · 灰：状态未知。这里展示出厂默认色。",
      readNote: "完成后进入任务，持续查看约 10 秒并确认仍可见，或更早离开时，Cohex 会标为已读。若任务在你查看时完成，会等到离开后标记；这不是账号全局未读状态。",
      usageEyebrow: "Token Monitor · Statistics",
      usageTitle: "此刻的节奏，和积累的用量。",
      usageIntro: "悬浮速率汇总这台 Mac 观测到的本地任务，包括轮盘外的任务。设置 → 统计把实际记录与估算放在同一张时间轴上。",
      usageRateTitle: "聚合生成速率",
      usageRateBody: "tok/s 统计输出 Token，已包含 reasoning，不会重复相加。它与历史平均速率是不同读数。",
      usageQuotaTitle: "读数与估算分清",
      usageQuotaBody: "Weekly 是官方七日额度余额。≈ Token、剩余工作时长与满额产出由本地观测校准。",
      usageHistoryTitle: "历史留在本机",
      usageHistoryBody: "查看最近 24 小时、7 天或额度周期。并行任务的 Token 累加，工作时间按重叠区间只计一次，排除等待、阅读、空闲与睡眠。",
      statsDemoTitle: "统计示例 · 点击时间柱查看",
      statsDemoDisclosure: "固定演示数据，不读取本机或账号。统计覆盖本机观测，不代表其他设备或云端的全部活动，也不承诺预测准确度。",
      statsOutput: "已记录输出",
      statsAverage: "平均生成速率",
      statsWork: "工作时间",
      statsQuota: "满额产出估算",
      statsMetricLabel: "图表指标",
      statsTokens: "输出 Token",
      statsSpeed: "平均 tok/s",
      statsMinutes: "工作分钟",
      statsWeekly: "Weekly 官方余额 · 示例",
      statsSelection: "已选时间",
      statsSelectionHint: "点击时间柱，或使用左右方向键。两张图保持同一选择，总计不随选择改变。",
      compatTrackpadTitle: "MacBook 内置触控板",
      compatTrackpad: "Force Touch 全局唤出；Magic Trackpad 暂不支持",
      deferredTitle: "1.0 的明确边界",
      deferredBody: "SSH 任务和自动更新保持灰色、不可用。更新通过 GitHub Releases 手动下载安装。部分 Codex 语义操作随桌面版本变化；设备验收范围随正式发布说明公布。",
      monitorReset: "10月20日重置 · 7天",
      monitorTasks: "3 个活跃任务",
      pointerFlowGlobalTitle: "重按召唤",
      pointerFlowGlobalBody: "启用后，在空白处重按，轮盘来到指针位置。",
      pointerDemoDrag: "演示：按住并拖动小六边形",
      pointerDemoPlaced: "已放好：这是六边形的保存位置",
      pointerDemoLocal: "在六边形上重按 → 局部展开",
      pointerDemoLocalReleased: "完全松开；轮盘保持展开",
      pointerDemoGlobalReady: "移到空白处 · 演示全局重按已启用",
      pointerDemoGlobal: "在空白处重按 → 轮盘来到指针旁",
      pointerDemoRelease: "已完全松开 · 现在才可以点击任务",
      pointerDemoSelected: "示例已选择「完善首页」· 不操作真实任务"
    },
    en: {
      navUsage: "Usage",
      notesTitle: "Notes",
      pausePlayback: "Pause",
      resumePlayback: "Resume loop",
      staticPlayback: "Static preview",
      deviceSliding: "Sliding contact",
      devicePressing: "Deep press held",
      deviceReleased: "Fully released",
      deviceClick: "Separate click",
      deviceLHeld: "L held",
      deviceStick: "L held · Stick selects",
      deviceLReleased: "L released",
      controllerDemoHold: "Hold L → open the wheel",
      controllerDemoChoose: "Keep L held · Right stick selects “Polish landing”",
      controllerDemoRelease: "Release L → request “Polish landing”",
      controllerDemoRest: "L and stick are released",
      pointerDemoClickReady: "Move to a task · Click to choose",
      pointerDemoClose: "Click the center · Close the wheel",
      pointerDemoTravelling: "Stay compact · Move to the pointer",
      pointerDemoAnother: "Move elsewhere · Summon again",
      compatTrackpadFeature: "Global Force Touch summon",
      compatAccessibilityFeature: "Native system accessibility",
      noteLink1: "Read note 1",
      noteBack1: "Return to note 1 reference",
      noteLink2: "Read note 2",
      noteBack2: "Return to note 2 reference",
      noteLink3: "Read note 3",
      noteBack3: "Return to note 3 reference",
      noteLink4: "Read note 4",
      noteBack4: "Return to note 4 reference",
      noteLink5: "Read note 5",
      noteBack5: "Return to note 5 reference",
      noteLink6: "Read note 6",
      noteBack6: "Return to note 6 reference",
      noteLink7: "Read note 7",
      noteBack7: "Return to note 7 reference",
      noteLink8: "Read note 8",
      noteBack8: "Return to note 8 reference",
      noteLink9: "Read note 9",
      noteBack9: "Return to note 9 reference",
      noteLink10: "Read note 10",
      noteBack10: "Return to note 10 reference",
      noteLink11: "Read note 11",
      noteBack11: "Return to note 11 reference",
      noteLink12: "Read note 12",
      noteBack12: "Return to note 12 reference",
      documentTitle: "Cohex — Six tasks. One glance.",
      documentDescription: "Cohex 1.0: Force Touch control, local tasks, generation rate and usage statistics for Codex Desktop. For Apple Silicon Macs, with optional controller support.",
      skipToContent: "Skip to main content",
      navLabel: "Primary navigation",
      navSections: "Page sections",
      brandHome: "Cohex home",
      navTasks: "Recent 6",
      navControls: "Controls",
      navMoreControls: "Shortcuts",
      navCompatibility: "Compatibility",
      githubLabel: "Download v1.0.0",
      releaseDate: "Released Oct 13, 2026",
      releaseDateShort: "Oct 13, 2026",
      heroEyebrow: "A native macOS companion for Codex Desktop.",
      heroTitleLine1: "Six tasks.",
      heroTitleLine2: "One glance.",
      heroBody: "Task status, token usage, and switching come together in one floating hexagon for Codex Desktop. Use a trackpad, with an optional Switch Pro controller.",
      exploreFeatures: "Explore the core features",
      hold: "Hold",
      choose: "Choose",
      heroMonitorCaption: "Combined rate · 24.6 tok/s",
      heroVisualDescription: "An animation shows a correctly arranged Nintendo Switch Pro Controller. Hold L and use the right stick to choose a task while the Monitor edges show active, needs input, complete, and error states.",
      recentEyebrow: "Recent 6 · Token Monitor",
      recentTitleLine1: "Status on the edge.",
      recentTitleLine2: "Focus on the task.",
      recentBody: "Six edges represent the six most recently updated local tasks. Expand to see names; positions stay stable while you choose. Blue means active, yellow needs input, and two greens distinguish completed work awaiting a view from work already viewed.",
      tokenDisclosure: "Customize the default colors in Settings → General. Icons, names and selection marks also convey state. Your saved palette is preserved.",
      demoTaskBuild: "Fix build",
      demoTaskLanding: "Polish landing",
      demoTaskInstall: "Verify install",
      demoTaskDocs: "Organize docs",
      demoTaskSync: "Debug sync",
      demoTaskResearch: "Research approach",
      demoEstimateTokens: "≈ Tokens · 1.24M",
      demoEstimateTime: "≈ Work time · 42.50h",
      stepHold: "Hold L",
      stepChoose: "Choose with right stick",
      stepRelease: "Release to request switch",
      recentDemoDescription: "The example expands from the compact aggregate rate of 24.6 to the task wheel, with sample official Weekly balance, estimated tokens and working hours, reset date and active-task count.",
      stateLegendLabel: "Task status legend",
      stateCycleDescription: "Statuses cycle automatically. Choose one to pause the cycle and emphasize its matching edge on the wheel.",
      stateActive: "Active",
      stateUnread: "Complete unread",
      stateViewed: "Complete viewed",
      stateNeeds: "Needs input",
      stateError: "Error",
      controllerEyebrow: "Controller & Pointer",
      controllerTitleLine1: "One hexagon.",
      controllerTitleLine2: "Two natural ways to control it.",
      controllerBody: "Deep-press the floating hexagon or right-click to expand. With global pressure enabled, summon the wheel at the pointer too. Release, then click a task or the center to close. A controller is another option.",
      controlModeLabel: "Control method",
      controllerMethodTitle: "Optional Switch Pro",
      flowHoldTitle: "Hold L",
      flowHoldBody: "Expand Recent 6 from the Compact Monitor.",
      flowChooseTitle: "Move the right stick",
      flowChooseBody: "Task color and title highlight together.",
      flowReleaseTitle: "Release L",
      flowReleaseBody: "Request a switch to the selected local task. Press B to cancel.",
      pointerFlowMoveTitle: "Move the monitor",
      pointerFlowMoveBody: "Move the compact hexagon within reach.",
      pointerFlowExpandTitle: "Local deep press",
      pointerFlowExpandBody: "Deep-press it, then fully release after it opens.",
      pointerFlowChooseTitle: "Click to choose",
      pointerFlowChooseBody: "Fully release pressure before clicking a task.",
      controllerDemoLabel: "Switch Pro control flow",
      calloutHold: "Hold to expand",
      calloutSelect: "360° selection",
      controllerResult: "Switched to “Polish landing”",
      pointerResult: "Recent 6 expanded",
      controllerDemoDescription: "Operations play automatically. Choose an option to repeat only that operation. Reduced Motion shows static states.",
      mappingLabel: "Other common controls",
      mappingSkills: "Skill Wheel",
      mappingSkillsNote: "Favorite skills",
      mappingDpad: "Models & questions",
      mappingDpadNote: "Model · Reasoning · Native question",
      mappingDictation: "Dictation",
      mappingDictationNote: "Hold to speak",
      mappingConfirm: "Confirm & back",
      mappingConfirmNote: "Native context",
      mappingPlan: "Plan document",
      mappingPlanNote: "Open or close",
      shortcutsEyebrow: "More controls",
      shortcutsTitle: "Common actions, right where you expect them.",
      shortcutsBody: "An optional Nintendo Switch Pro Controller works over USB or Bluetooth. Hold L, choose with the right stick, and release to switch local tasks. Skills, models, questions, dictation, confirmation and Plan documents are close at hand.",
      shortcutsDemoLabel: "Five core controls",
      shortcutsDemoDescription: "The demo cycles automatically through ZL, the D-pad, ZR, A and B, and Y. Choose one to repeat only that operation.",
      dictationStatus: "Dictating",
      dictationRelease: "Release ZR to Finish",
      permissionTitle: "Permission Request",
      permissionSource: "Terminal",
      permissionQuestion: "Allow a one-time permission test with no file changes and open macOS Calculator?",
      permissionActionsLabel: "B to deny, A to allow once",
      permissionBack: "Deny",
      permissionGrant: "Allow once",
      permissionDemoNote: "Experience demo · No command or system permission request is made",
      planModeLabel: "Plan mode",
      planPromptLabel: "Current task",
      planPrompt: "Create a Plan for the controller demo",
      planOpenAction: "Open Plan in side panel",
      planDocumentEyebrow: "PLAN",
      planDocumentTitle: "Implementation plan",
      planStepOne: "Confirm current interactions",
      planStepTwo: "Implement control mappings",
      planStepThree: "Verify status feedback",
      pointerEyebrow: "Mouse & Trackpad",
      pointerTitle: "Trackpad",
      pointerBody: "Global pressure is opt-in, with Medium 155% for fresh installs. Adjust strength and practice in Settings → Trackpad. Global activation supports MacBook built-in trackpads only.",
      pointerBoundary: "This page plays a demonstration; it does not listen to your trackpad. Magic Trackpad global activation is outside the 1.0 supported target.",
      pointerDemoLabel: "Drag, expand, and switch",
      pointerDrag: "Drag",
      pointerExpand: "Force Touch / right-click",
      pointerSwitch: "Click task",
      pointerDemoDescription: "Moving, distant global summons and click selection play automatically. Choose an option to repeat it. The demo never listens to real pressure.",
      compatibilityEyebrow: "Compatibility",
      compatAppleSiliconTitle: "Apple Silicon",
      compatAppleSilicon: "Native arm64 build",
      compatMacOSTitle: "macOS 14+",
      compatMacOS: "Light, dark, and accessibility appearances",
      compatCodexTitle: "Codex Desktop",
      compatCodex: "Built around the current desktop task workflow",
      compatControllerTitle: "Controller optional",
      compatController: "Nintendo Switch Pro · USB / Bluetooth",
      compatAccessibilityTitle: "Accessibility",
      compatAccessibility: "Grant Accessibility as needed; inspect input access in the guide",
      compatLocalTitle: "Local by design",
      compatLocal: "No developer backend or analytics SDK",
      brandStoryEyebrow: "Why Cohex",
      brandStoryTitle: "From Codex to the hexagon.",
      brandStoryBody1: "Cohex blends Codex and hex. “Co” preserves its connection to Codex; “Hex” names the product’s six-sided interface and the six tasks in Recent 6.",
      brandStoryBody2: "The mark draws on the hexagonal structure of a benzene ring: six edges carry task state, while the center circle represents the task in focus. Name, icon, and interaction share one geometric language.",
      footerTagline: "Six tasks. One glance.",
      independenceDisclosure: "Cohex is an independent project and is not affiliated with, sponsored by, or endorsed by OpenAI, Apple, Nintendo, or Work Louder. All product names and trademarks belong to their respective owners.",
      privacyDisclosure: "All animations and statistics use fixed anonymous examples and never read local tasks, tokens or personal data.",
      footerNavLabel: "Documentation",
      releaseNotice: "Cohex v1.0.0 requires Apple Silicon and macOS 14 or later. Download the Developer ID signed, Apple-notarized installer from GitHub Releases.",
      supportLink: "Installation & help",
      privacyLink: "Privacy",
      changelogLink: "What changed",
      paletteNote: "Bright green: complete unread · Pale green: complete viewed · White: idle · Gray: unknown. These are factory defaults.",
      readNote: "After completion, entering a task marks it viewed after about 10 seconds with fresh visibility, or sooner when you leave. Work completed during your visit waits for departure. This is Cohex’s observation, not account-wide unread state.",
      usageEyebrow: "Token Monitor · Statistics",
      usageTitle: "Your pace now. Your usage over time.",
      usageIntro: "The floating rate combines local tasks observed by this Mac, including tasks outside the wheel. Settings → Statistics puts recorded usage and estimates on one timeline.",
      usageRateTitle: "Combined generation rate",
      usageRateBody: "tok/s counts output tokens, which already include reasoning. It does not add reasoning twice, and it differs from the historical average rate.",
      usageQuotaTitle: "Readings and estimates",
      usageQuotaBody: "Weekly is the official seven-day balance. Approximate tokens, remaining work time and full-quota yield use local calibration.",
      usageHistoryTitle: "History stays on this Mac",
      usageHistoryBody: "Explore the last 24 hours, seven days or quota cycles. Concurrent tokens add together; overlapping working time counts once, excluding waiting, reading, idle and sleep.",
      statsDemoTitle: "Statistics example · Select a time bin",
      statsDemoDisclosure: "Fixed example data; no local or account access. Statistics cover this Mac’s observations, not all activity on other devices or in the cloud. No prediction accuracy is promised.",
      statsOutput: "Recorded output",
      statsAverage: "Average generation rate",
      statsWork: "Working time",
      statsQuota: "Estimated full-quota yield",
      statsMetricLabel: "Chart metric",
      statsTokens: "Output tokens",
      statsSpeed: "Average tok/s",
      statsMinutes: "Working minutes",
      statsWeekly: "Official Weekly balance · Example",
      statsSelection: "Selected time",
      statsSelectionHint: "Click a time bar or use the left and right arrow keys. Both charts share the selection; overall totals stay fixed.",
      compatTrackpadTitle: "Built-in MacBook trackpad",
      compatTrackpad: "Global Force Touch; Magic Trackpad not supported",
      deferredTitle: "Clear boundaries for 1.0",
      deferredBody: "SSH tasks and automatic updates remain gray and unavailable. Download updates manually from GitHub Releases. Some semantic controls depend on the Codex version; the published release notes will identify physical-device acceptance.",
      monitorReset: "Resets Oct 20 · 7d",
      monitorTasks: "3 active tasks",
      pointerFlowGlobalTitle: "Deep-press to summon",
      pointerFlowGlobalBody: "When enabled, deep-press blank space to bring the wheel there.",
      pointerDemoDrag: "Demo: hold and drag the compact hexagon",
      pointerDemoPlaced: "Placed: the hexagon’s saved position",
      pointerDemoLocal: "Deep-press the hexagon → open locally",
      pointerDemoLocalReleased: "Fully released; the wheel stays open",
      pointerDemoGlobalReady: "Move to blank space · Global pressure enabled in this demo",
      pointerDemoGlobal: "Deep-press blank space → summon at the pointer",
      pointerDemoRelease: "Fully released · Now click a task",
      pointerDemoSelected: "Example selects “Polish landing” · No real task action"
    }
  };

  var storageKey = "product-site-language";
  var activeLanguage = "en";
  var languageToggle = document.getElementById("languageToggle");
  var metadataDescription = document.querySelector('meta[name="description"]');
  var metadataTitle = document.querySelector('meta[property="og:title"]');
  var metadataSocialDescription = document.querySelector('meta[property="og:description"]');
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  // Fixed, anonymous examples. No filesystem, account or network access.
  var statisticsExample = {
    metric: "tokens",
    selected: 0,
    bins: [
      { time: "09:00", tokens: 7200, seconds: 240, weekly: 98 },
      { time: "10:00", tokens: 5400, seconds: 180, weekly: 96 },
      { time: "11:00", tokens: 10800, seconds: 300, weekly: 93 },
      { time: "12:00", tokens: 3600, seconds: 120, weekly: 90 },
      { time: "13:00", tokens: 9000, seconds: 300, weekly: 87 },
      { time: "14:00", tokens: 6000, seconds: 240, weekly: 84 }
    ]
  };

  function statisticsValue(bin) {
    if (statisticsExample.metric === "speed") return bin.tokens / bin.seconds;
    if (statisticsExample.metric === "minutes") return bin.seconds / 60;
    return bin.tokens;
  }

  function renderStatisticsExample() {
    var mount = document.getElementById("statisticsBars");
    if (!mount) return;
    var strings = copy[activeLanguage];
    var buttons = mount.querySelectorAll("[data-stats-bin]");
    var maximum = Math.max.apply(null, statisticsExample.bins.map(statisticsValue));
    buttons.forEach(function (button, index) {
      var bin = statisticsExample.bins[index];
      var value = statisticsValue(bin);
      var display = statisticsExample.metric === "tokens" ? (value / 1000).toFixed(1) + "k" : value.toFixed(0);
      var metricLabel = statisticsExample.metric === "tokens" ? strings.statsTokens : statisticsExample.metric === "speed" ? strings.statsSpeed : strings.statsMinutes;
      button.style.setProperty("--bar-height", (value / maximum * 100) + "%");
      button.querySelector(".bar-value").textContent = display;
      button.setAttribute("aria-label", bin.time + " · " + metricLabel + " " + display + " · Weekly " + bin.weekly + "%");
      button.setAttribute("aria-pressed", String(index === statisticsExample.selected));
      button.tabIndex = index === statisticsExample.selected ? 0 : -1;
    });
    document.querySelectorAll("[data-stats-metric]").forEach(function (button) {
      button.setAttribute("aria-pressed", String(button.dataset.statsMetric === statisticsExample.metric));
    });
    var selected = statisticsExample.bins[statisticsExample.selected];
    document.getElementById("quotaSelection").setAttribute("d", "M" + (86 + statisticsExample.selected * 100) + " 12V132");
    document.getElementById("statisticsSelection").textContent = selected.time + " · " + strings.statsTokens + " " + (selected.tokens / 1000).toFixed(1) + "k · " + (selected.tokens / selected.seconds).toFixed(1) + " tok/s · " + selected.seconds / 60 + " min · Weekly " + selected.weekly + "%";
  }

  function initializeStatisticsExample() {
    var mount = document.getElementById("statisticsBars");
    statisticsExample.bins.forEach(function (bin, index) {
      var button = document.createElement("button");
      button.type = "button";
      button.dataset.statsBin = String(index);
      button.innerHTML = '<span class="bar-value"></span><span class="bar-track" aria-hidden="true"><span class="bar-fill"></span></span><span class="bar-time"></span>';
      button.querySelector(".bar-time").textContent = bin.time;
      button.addEventListener("click", function () {
        statisticsExample.selected = index;
        renderStatisticsExample();
      });
      button.addEventListener("keydown", function (event) {
        var next = index;
        if (event.key === "ArrowRight") next = (index + 1) % statisticsExample.bins.length;
        else if (event.key === "ArrowLeft") next = (index + statisticsExample.bins.length - 1) % statisticsExample.bins.length;
        else if (event.key === "Home") next = 0;
        else if (event.key === "End") next = statisticsExample.bins.length - 1;
        else return;
        event.preventDefault();
        statisticsExample.selected = next;
        renderStatisticsExample();
        mount.querySelector('[data-stats-bin="' + next + '"]').focus();
      });
      mount.appendChild(button);
    });
    document.querySelectorAll("[data-stats-metric]").forEach(function (button) {
      button.addEventListener("click", function () {
        statisticsExample.metric = button.dataset.statsMetric;
        renderStatisticsExample();
      });
    });
  }

  function readSavedLanguage() {
    try {
      return window.localStorage.getItem(storageKey);
    } catch (_error) {
      return null;
    }
  }

  function saveLanguage(language) {
    try {
      window.localStorage.setItem(storageKey, language);
    } catch (_error) {
      /* Language selection still works for this page view. */
    }
  }

  function preferredLanguage() {
    var saved = readSavedLanguage();
    if (saved === "zh-CN" || saved === "en") {
      return saved;
    }
    return /^zh(?:-|$)/i.test(window.navigator.language || "") ? "zh-CN" : "en";
  }

  function applyLanguage(language, persist) {
    activeLanguage = copy[language] ? language : "en";
    var strings = copy[activeLanguage];

    document.documentElement.lang = activeLanguage;
    document.title = strings.documentTitle;
    metadataDescription.setAttribute("content", strings.documentDescription);
    metadataTitle.setAttribute("content", strings.documentTitle);
    metadataSocialDescription.setAttribute("content", strings.documentDescription);

    document.querySelectorAll("[data-i18n]").forEach(function (element) {
      var key = element.getAttribute("data-i18n");
      if (Object.prototype.hasOwnProperty.call(strings, key)) {
        element.textContent = strings[key];
      }
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach(function (element) {
      var key = element.getAttribute("data-i18n-aria-label");
      if (Object.prototype.hasOwnProperty.call(strings, key)) {
        element.setAttribute("aria-label", strings[key]);
      }
    });

    var nextLanguageIsEnglish = activeLanguage === "zh-CN";
    languageToggle.textContent = nextLanguageIsEnglish ? "EN" : "中文";
    languageToggle.setAttribute("aria-label", nextLanguageIsEnglish ? "Switch to English" : "切换到中文");
    languageToggle.setAttribute("lang", nextLanguageIsEnglish ? "en" : "zh-CN");
    languageToggle.dataset.currentLanguage = activeLanguage;

    monitorInstances.forEach(function (monitor) { monitor.setLanguage(); });
    setModelPickerLanguage();
    renderStatisticsExample();

    if (persist) {
      saveLanguage(activeLanguage);
    }
  }

  function configureGithubButtons() {
    var url = SiteConfig.githubURL.trim();
    document.querySelectorAll("#githubButton, #heroGithubButton").forEach(function (button) {
      button.href = url;
      button.target = "_blank";
      button.rel = "noopener noreferrer";
    });
  }

  function initializeControllerScenes() {
    var template = document.getElementById("switchProControllerTemplate");
    if (!template || !template.content) {
      return;
    }

    document.querySelectorAll("[data-controller-scene]").forEach(function (scene) {
      var mount = scene.querySelector("[data-controller-mount]");
      if (!mount || mount.dataset.controllerInitialized === "true") {
        return;
      }

      var fragment = template.content.cloneNode(true);
      var controller = fragment.querySelector(".controller-product");
      if (!controller) {
        return;
      }

      controller.dataset.controllerInstance = scene.getAttribute("data-controller-scene") || "controller";
      mount.replaceChildren(fragment);
      mount.dataset.controllerInitialized = "true";
    });
  }

  var svgNamespace = "http://www.w3.org/2000/svg";
  var monitorInstances = [];
  var stageSequences = new Map();

  function createSVGElement(name, attributes) {
    var element = document.createElementNS(svgNamespace, name);
    Object.keys(attributes || {}).forEach(function (key) {
      element.setAttribute(key, String(attributes[key]));
    });
    return element;
  }

  function clampUnit(value) {
    return Math.min(1, Math.max(0, value));
  }

  function interpolate(from, to, progress) {
    return from + (to - from) * progress;
  }

  function easeOut(progress) {
    var inverse = 1 - clampUnit(progress);
    return 1 - inverse * inverse;
  }

  function pointAt(center, radius, angle) {
    return {
      x: center + Math.sin(angle) * radius,
      y: center - Math.cos(angle) * radius
    };
  }

  function regularPolygonVertices(diameter, radius, count) {
    var center = diameter / 2;
    var halfSlotAngle = Math.PI / count;
    return Array.from({ length: count }, function (_unused, index) {
      var angle = -halfSlotAngle + (Math.PI * 2 * index) / count;
      return pointAt(center, radius, angle);
    });
  }

  function statusBandVertices(diameter, outerRadius, thickness, index, count) {
    var center = diameter / 2;
    var halfSlotAngle = Math.PI / count;
    var innerRadius = Math.max(0, outerRadius - thickness / Math.cos(halfSlotAngle));
    var outerVertices = regularPolygonVertices(diameter, outerRadius, count);
    var innerVertices = regularPolygonVertices(diameter, innerRadius, count);
    var outerStart = outerVertices[index];
    var outerEnd = outerVertices[(index + 1) % count];
    var innerEnd = innerVertices[(index + 1) % count];
    var innerStart = innerVertices[index];
    return { outerStart: outerStart, outerEnd: outerEnd, innerEnd: innerEnd, innerStart: innerStart };
  }

  function pointsAttribute(points) {
    return points.map(function (point) {
      return point.x.toFixed(3) + "," + point.y.toFixed(3);
    }).join(" ");
  }

  function normalizedAngularDistance(lhs, rhs) {
    var fullTurn = Math.PI * 2;
    var delta = (lhs - rhs) % fullTurn;
    if (delta > Math.PI) delta -= fullTurn;
    if (delta < -Math.PI) delta += fullTurn;
    return delta;
  }

  function polygonBoundaryRadius(angle, outerRadius, count) {
    var width = (Math.PI * 2) / count;
    var nearestSide = Math.round(angle / width) * width;
    var delta = normalizedAngularDistance(angle, nearestSide);
    return outerRadius * Math.cos(Math.PI / count) / Math.max(0.0001, Math.cos(delta));
  }

  function annularSectorPath(diameter, outerRadius, innerRadius, index, count, gapDegrees) {
    var center = diameter / 2;
    var width = (Math.PI * 2) / count;
    var gap = Math.min(Math.max((gapDegrees || 0) * Math.PI / 180, 0), width * 0.8);
    var centerAngle = index * width;
    var startAngle = centerAngle - width / 2 + gap / 2;
    var endAngle = centerAngle + width / 2 - gap / 2;
    var outerStart = pointAt(center, polygonBoundaryRadius(startAngle, outerRadius, count), startAngle);
    var outerEnd = pointAt(center, polygonBoundaryRadius(endAngle, outerRadius, count), endAngle);
    var innerEnd = pointAt(center, innerRadius, endAngle);
    var path = [
      "M" + outerStart.x.toFixed(3) + " " + outerStart.y.toFixed(3),
      "L" + outerEnd.x.toFixed(3) + " " + outerEnd.y.toFixed(3),
      "L" + innerEnd.x.toFixed(3) + " " + innerEnd.y.toFixed(3)
    ];
    var steps = Math.max(12, Math.ceil((endAngle - startAngle) / (Math.PI / 72)));
    for (var step = 1; step <= steps; step += 1) {
      var progress = step / steps;
      var point = pointAt(center, innerRadius, endAngle - (endAngle - startAngle) * progress);
      path.push("L" + point.x.toFixed(3) + " " + point.y.toFixed(3));
    }
    path.push("Z");
    return path.join(" ");
  }

  function monitorMetrics(progress) {
    var compact = CohexNativeVisualSpec.monitor.compact;
    var expanded = CohexNativeVisualSpec.monitor.expanded;
    return {
      diameter: 500,
      outerRadius: interpolate(compact.outerRadius, expanded.outerRadius, progress),
      innerRadius: interpolate(compact.innerRadius, expanded.innerRadius, progress),
      contentDiameter: interpolate(compact.contentDiameter, expanded.contentDiameter, progress),
      bandThickness: interpolate(compact.bandThickness, expanded.bandThickness, progress)
    };
  }

  function monitorTaskExamples() {
    if (activeLanguage === "en") {
      return [
        ["Fix build", "Cohex"],
        ["Polish landing", "landing-site"],
        ["Verify install", "Cohex"],
        ["Organize docs", "docs"],
        ["Debug sync", "controller-core"],
        ["Research approach", "prototypes"]
      ];
    }
    return [
      ["修复构建", "Cohex"],
      ["完善首页", "landing-site"],
      ["验证安装", "Cohex"],
      ["整理文档", "docs"],
      ["排查同步", "controller-core"],
      ["研究方案", "prototypes"]
    ];
  }

  function NativeMonitor(mount, role) {
    this.mount = mount;
    this.role = role;
    this.progress = 0;
    this.targetProgress = 0;
    this.frameRequest = null;
    this.selectedIndex = null;
    this.states = ["active", "needs", "unread", "viewed", "error", "viewed"];
    this.bandElements = [];
    this.labelElements = [];
    this.build();
  }

  NativeMonitor.prototype.build = function () {
    var figure = document.createElement("div");
    figure.className = "native-monitor is-compact";
    figure.dataset.monitorRole = this.role;
    var svg = createSVGElement("svg", { viewBox: "0 0 500 500", focusable: "false" });
    svg.classList.add("native-monitor-svg");
    var surface = createSVGElement("polygon", { class: "monitor-surface-polygon" });
    var selection = createSVGElement("path", { class: "monitor-selection-sector" });
    var bandGroup = createSVGElement("g", { class: "monitor-status-bands" });
    for (var index = 0; index < 6; index += 1) {
      var band = createSVGElement("polygon", {
        class: "status-band status-" + this.states[index],
        "data-status": this.states[index]
      });
      bandGroup.appendChild(band);
      this.bandElements.push(band);
    }
    var core = createSVGElement("circle", { class: "monitor-center-surface", cx: 250, cy: 250 });
    svg.append(surface, selection, bandGroup, core);

    var labels = document.createElement("div");
    labels.className = "monitor-task-labels";
    for (var labelIndex = 0; labelIndex < 6; labelIndex += 1) {
      var label = document.createElement("div");
      label.className = "monitor-task-label monitor-task-" + labelIndex;
      label.dataset.taskIndex = String(labelIndex);
      label.innerHTML = "<strong></strong><small></small>";
      labels.appendChild(label);
      this.labelElements.push(label);
    }

    var centerCopy = document.createElement("div");
    centerCopy.className = "monitor-center-copy";
    centerCopy.innerHTML = "<strong class=\"monitor-compact-percent\">24.6</strong>"
      + "<div class=\"monitor-rate\">24.6 <small>tok/s</small></div>"
      + "<strong class=\"monitor-weekly\">Weekly 68%</strong>"
      + "<span class=\"monitor-estimate\">≈ Token · 1.24M</span>"
      + "<span class=\"monitor-hours\">≈ 42.50h</span>"
      + "<span class=\"monitor-reset\"></span><span class=\"monitor-tasks\"></span>";

    figure.append(svg, labels, centerCopy);
    this.mount.replaceChildren(figure);
    this.figure = figure;
    this.svg = svg;
    this.surface = surface;
    this.selection = selection;
    this.core = core;
    this.centerCopy = centerCopy;
    this.setLanguage();
    this.render(0);
  };

  NativeMonitor.prototype.setLanguage = function () {
    var examples = monitorTaskExamples();
    this.labelElements.forEach(function (label, index) {
      label.querySelector("strong").textContent = examples[index][0];
      label.querySelector("small").textContent = examples[index][1];
    });
    var estimate = this.centerCopy.querySelector(".monitor-estimate");
    var hours = this.centerCopy.querySelector(".monitor-hours");
    estimate.textContent = copy[activeLanguage].demoEstimateTokens;
    hours.textContent = copy[activeLanguage].demoEstimateTime;
    this.centerCopy.querySelector(".monitor-reset").textContent = copy[activeLanguage].monitorReset;
    this.centerCopy.querySelector(".monitor-tasks").textContent = copy[activeLanguage].monitorTasks;
  };

  NativeMonitor.prototype.render = function (progress) {
    this.progress = clampUnit(progress);
    var metrics = monitorMetrics(this.progress);
    this.surface.setAttribute("points", pointsAttribute(regularPolygonVertices(500, metrics.outerRadius, 6)));
    this.bandElements.forEach(function (band, index) {
      var vertices = statusBandVertices(500, metrics.outerRadius, metrics.bandThickness, index, 6);
      band.setAttribute("points", pointsAttribute([
        vertices.outerStart,
        vertices.outerEnd,
        vertices.innerEnd,
        vertices.innerStart
      ]));
    });
    this.core.setAttribute("r", (metrics.contentDiameter / 2).toFixed(3));
    var labelsOpacity = clampUnit((this.progress - 0.48) / 0.34);
    this.figure.style.setProperty("--monitor-expansion", this.progress.toFixed(4));
    this.figure.style.setProperty("--task-label-opacity", labelsOpacity.toFixed(3));
    this.figure.classList.toggle("is-expanded", this.progress > 0.5);
    this.figure.classList.toggle("is-compact", this.progress <= 0.5);
    this.renderSelection();
  };

  NativeMonitor.prototype.renderSelection = function () {
    if (this.selectedIndex === null || this.progress < 0.66) {
      this.selection.removeAttribute("d");
      this.selection.classList.remove("is-visible");
      this.labelElements.forEach(function (label) { label.classList.remove("is-selected"); });
      return;
    }
    var metrics = monitorMetrics(this.progress);
    this.selection.setAttribute("d", annularSectorPath(500, metrics.outerRadius, metrics.innerRadius, this.selectedIndex, 6, 2));
    this.selection.classList.add("is-visible", "status-" + this.states[this.selectedIndex]);
    this.labelElements.forEach(function (label, index) {
      label.classList.toggle("is-selected", index === this.selectedIndex);
    }, this);
  };

  NativeMonitor.prototype.select = function (index) {
    this.selection.className.baseVal = "monitor-selection-sector";
    this.selectedIndex = Number.isInteger(index) ? Math.min(5, Math.max(0, index)) : null;
    this.renderSelection();
  };

  NativeMonitor.prototype.setDemoBand = function (index, animated) {
    this.bandElements.forEach(function (band, bandIndex) {
      var isCurrent = bandIndex === index;
      band.classList.toggle("is-demo-breathing", isCurrent && animated && !reduceMotion.matches);
    });
  };

  NativeMonitor.prototype.animateTo = function (target, duration) {
    var instance = this;
    var destination = clampUnit(target);
    var start = this.progress;
    var animationDuration = reduceMotion.matches ? 0 : (duration || CohexNativeVisualSpec.monitor.transitionDurationMS);
    if (this.frameRequest !== null) window.cancelAnimationFrame(this.frameRequest);
    if (animationDuration === 0) {
      this.render(destination);
      return;
    }
    var startTime = performance.now();
    function frame(timestamp) {
      if (document.visibilityState !== "visible") {
        instance.frameRequest = null;
        return;
      }
      var elapsed = Math.min(1, (timestamp - startTime) / animationDuration);
      instance.render(interpolate(start, destination, easeOut(elapsed)));
      if (elapsed < 1) instance.frameRequest = window.requestAnimationFrame(frame);
      else instance.frameRequest = null;
    }
    this.frameRequest = window.requestAnimationFrame(frame);
  };

  function initializeNativeMonitors() {
    document.querySelectorAll("[data-monitor-mount]").forEach(function (mount) {
      if (mount.dataset.nativeMonitorInitialized === "true") return;
      var role = mount.getAttribute("data-monitor-mount") || "monitor";
      var monitor = new NativeMonitor(mount, role);
      mount.dataset.nativeMonitorInitialized = "true";
      monitorInstances.push(monitor);
    });
  }

  function monitorForRole(role) {
    return monitorInstances.find(function (monitor) { return monitor.role === role; });
  }

  function buildSkillWheel(mount) {
    if (!mount || mount.dataset.nativeSkillInitialized === "true") return;
    var spec = CohexNativeVisualSpec.skill;
    var svg = createSVGElement("svg", { class: "native-skill-wheel", viewBox: "0 0 500 500" });
    var surface = createSVGElement("polygon", {
      class: "skill-surface",
      points: pointsAttribute(regularPolygonVertices(spec.diameter, spec.outerRadius, 6))
    });
    svg.appendChild(surface);
    var skillNames = ["Design", "Docs", "Image", "Computer", "Wiki", "GitHub"];
    for (var index = 0; index < 6; index += 1) {
      var sector = createSVGElement("path", {
        class: "skill-sector" + (index === 0 ? " is-selected" : ""),
        d: annularSectorPath(spec.diameter, spec.outerRadius, spec.innerRadius, index, 6, 0),
        "data-skill-index": index
      });
      var angle = (Math.PI * 2 * index) / 6;
      var labelPoint = pointAt(250, 174, angle);
      var label = createSVGElement("text", {
        class: "skill-label",
        x: labelPoint.x.toFixed(2),
        y: (labelPoint.y + 5).toFixed(2),
        "text-anchor": "middle"
      });
      label.textContent = skillNames[index];
      svg.append(sector, label);
    }
    var center = createSVGElement("circle", { class: "skill-center", cx: 250, cy: 250, r: spec.innerRadius });
    var centerLabel = createSVGElement("text", { class: "skill-center-label", x: 250, y: 256, "text-anchor": "middle" });
    centerLabel.textContent = "Design";
    var cursorPoint = pointAt(250, 215, 0);
    var cursor = createSVGElement("g", { class: "skill-plus-cursor", transform: "translate(" + cursorPoint.x + " " + cursorPoint.y + ")" });
    cursor.append(
      createSVGElement("circle", { cx: 0, cy: 0, r: 17 }),
      createSVGElement("path", { d: "M-7 0H7M0-7V7" })
    );
    svg.append(center, centerLabel, cursor);
    mount.replaceChildren(svg);
    mount.dataset.nativeSkillInitialized = "true";
  }

  function buildModelPicker(mount) {
    if (!mount || mount.dataset.nativeModelInitialized === "true") return;
    var picker = document.createElement("div");
    picker.className = "model-picker-demo";
    picker.innerHTML = ""
      + "<div class=\"model-axis-card model-up\">GPT-5.4-Mini</div>"
      + "<div class=\"model-axis-card model-up-near\">GPT-5.3-Codex-Spark</div>"
      + "<div class=\"model-axis-card model-down-near\">GPT-5.6-Terra</div>"
      + "<div class=\"model-axis-card model-down\">GPT-5.6-Luna</div>"
      + "<div class=\"model-axis-card reasoning-far-left\">Extra High</div>"
      + "<div class=\"model-axis-card reasoning-near-left\">Max</div>"
      + "<div class=\"model-axis-card reasoning-near-right\">Light</div>"
      + "<div class=\"model-axis-card reasoning-far-right\">Medium</div>"
      + "<div class=\"model-combined-card\"><span class=\"model-selection-row\"><small data-model-picker-label=\"model\">模型</small><strong>GPT-5.6-Sol</strong></span><i></i><span class=\"model-selection-row\"><small data-model-picker-label=\"reasoning\">强度</small><strong>Ultra</strong></span><b class=\"marquee-border\"></b></div>"
      + "<p class=\"native-question-note\">D-pad · Model / Reasoning / Native question</p>";
    mount.replaceChildren(picker);
    mount.dataset.nativeModelInitialized = "true";
    setModelPickerLanguage();
    renderStatisticsExample();
  }

  function setModelPickerLanguage() {
    document.querySelectorAll('[data-model-picker-label="model"]').forEach(function (label) {
      label.textContent = activeLanguage === "en" ? "Model" : "模型";
    });
    document.querySelectorAll('[data-model-picker-label="reasoning"]').forEach(function (label) {
      label.textContent = activeLanguage === "en" ? "Reasoning" : "强度";
    });
  }

  function initializeNativeEffects() {
    document.querySelectorAll("[data-skill-mount]").forEach(buildSkillWheel);
    document.querySelectorAll("[data-model-mount]").forEach(buildModelPicker);
  }

  function setControllerHighlight(scene, step) {
    if (!scene) return;
    scene.dataset.controllerStep = step;
    scene.querySelectorAll("[data-control-highlight]").forEach(function (control) {
      var identifier = control.getAttribute("data-control-highlight");
      var isActive = identifier === step
        || (step === "ab" && (identifier === "a" || identifier === "b"));
      control.classList.toggle("is-highlighted", isActive);
    });
  }

  function setRightStickDirection(scene, taskIndex) {
    if (!scene) return;
    var normalizedIndex = Number.isInteger(taskIndex) ? Math.min(5, Math.max(0, taskIndex)) : 0;
    var angle = normalizedIndex * 60 - 90;
    scene.querySelectorAll("[data-stick-direction]").forEach(function (cue) {
      cue.setAttribute("transform", "rotate(" + angle + " 985 590)");
    });
  }

  function setControlEffect(stage, identifier) {
    stage.querySelectorAll("[data-control-tab]").forEach(function (tab) {
      var isActive = tab.getAttribute("data-control-tab") === identifier;
      tab.classList.toggle("is-active", isActive);
      tab.setAttribute("aria-selected", String(isActive));
      tab.setAttribute("tabindex", isActive ? "0" : "-1");
    });
    stage.querySelectorAll("[data-control-effect]").forEach(function (effect) {
      var isActive = effect.getAttribute("data-control-effect") === identifier;
      effect.classList.toggle("is-active", isActive);
      effect.setAttribute("aria-hidden", String(!isActive));
      if (isActive) effect.removeAttribute("inert");
      else effect.setAttribute("inert", "");
    });
    setControllerHighlight(stage, identifier);
  }

  function setTaskInputMode(stage, mode) {
    if (!stage) return;
    stage.dataset.inputMode = mode;
    var section = stage.closest(".controls-section");
    if (!section) return;
    section.querySelectorAll("[data-control-mode]").forEach(function (label) {
      var isActive = label.getAttribute("data-control-mode") === mode;
      label.classList.toggle("is-active", isActive);
      label.setAttribute("aria-pressed", String(isActive));
    });
  }

  function StageSequence(stage, timeline, repeats, reducedAction) {
    this.stage = stage;
    this.timeline = timeline;
    this.repeats = Boolean(repeats);
    this.timeout = null;
    this.index = 0;
    this.running = false;
    this.reducedAction = typeof reducedAction === "function" ? reducedAction : null;
  }

  StageSequence.prototype.stop = function () {
    this.running = false;
    if (this.timeout !== null) {
      window.clearTimeout(this.timeout);
      this.timeout = null;
    }
  };

  StageSequence.prototype.play = function () {
    this.stop();
    if (reduceMotion.matches || document.visibilityState !== "visible") {
      if (reduceMotion.matches && this.reducedAction) this.reducedAction();
      return;
    }
    this.running = true;
    this.index = 0;
    this.advance();
  };

  StageSequence.prototype.advance = function () {
    var sequence = this;
    this.timeout = null;
    if (!this.running) return;
    if (reduceMotion.matches || document.visibilityState !== "visible") { this.stop(); return; }
    if (this.index >= this.timeline.length) {
      if (!this.repeats) {
        this.running = false;
        return;
      }
      this.index = 0;
    }
    var item = this.timeline[this.index];
    item.action();
    this.index += 1;
    this.timeout = window.setTimeout(function () { sequence.advance(); }, item.holdMS);
  };

  function RecentStatusDemo(stage, monitor) {
    var demo = this;
    this.stage = stage;
    this.monitor = monitor;
    this.buttons = Array.prototype.slice.call(document.querySelectorAll("[data-demo-status]"));
    this.activeIndex = 0;
    this.loopTimeout = null;
    this.userPaused = false;
    this.hasExpanded = false;
    this.intro = new StageSequence(stage, [
      { holdMS: 720, action: function () {
        demo.monitor.select(null);
        demo.monitor.animateTo(0);
        demo.renderStatus(0, false);
      } },
      { holdMS: 360, action: function () { demo.monitor.animateTo(1); } },
      { holdMS: 0, action: function () {
        demo.hasExpanded = true;
        demo.startLoop(false);
      } }
    ], false);

    this.buttons.forEach(function (button, index) {
      button.addEventListener("click", function () { demo.pauseAt(index); });
    });

    var legend = this.buttons[0] ? this.buttons[0].closest(".state-legend") : null;
    if (legend) {
      legend.addEventListener("focusin", function (event) {
        if (event.target.closest("[data-demo-status]")) demo.pauseAt(demo.activeIndex);
      });
    }
    this.renderStatus(0, false);
  }

  RecentStatusDemo.prototype.clearLoop = function () {
    if (this.loopTimeout !== null) {
      window.clearTimeout(this.loopTimeout);
      this.loopTimeout = null;
    }
  };

  RecentStatusDemo.prototype.renderStatus = function (index, animated) {
    var normalizedIndex = Math.min(this.buttons.length - 1, Math.max(0, index));
    this.activeIndex = normalizedIndex;
    this.buttons.forEach(function (button, buttonIndex) {
      button.setAttribute("aria-pressed", String(buttonIndex === normalizedIndex));
    });
    var selectedButton = this.buttons[normalizedIndex];
    var bandIndex = selectedButton ? Number(selectedButton.getAttribute("data-demo-band-index")) : 0;
    this.monitor.select(bandIndex);
    this.monitor.setDemoBand(bandIndex, animated);
  };

  RecentStatusDemo.prototype.scheduleNext = function () {
    var demo = this;
    this.clearLoop();
    if (this.userPaused || reduceMotion.matches || document.visibilityState !== "visible" || !this.stage.classList.contains("is-in-view")) return;
    this.loopTimeout = window.setTimeout(function () {
      demo.renderStatus((demo.activeIndex + 1) % demo.buttons.length, true);
      demo.scheduleNext();
    }, CohexNativeVisualSpec.breathing.durationMS);
  };

  RecentStatusDemo.prototype.startLoop = function (reset) {
    if (reset) this.activeIndex = 0;
    this.renderStatus(this.activeIndex, true);
    this.scheduleNext();
  };

  RecentStatusDemo.prototype.playAuto = function () {
    if (reduceMotion.matches) {
      this.stop();
      this.hasExpanded = true;
      this.monitor.animateTo(1);
      this.renderStatus(this.activeIndex, false);
      return;
    }
    if (!this.hasExpanded) {
      this.intro.play();
      return;
    }
    if (this.userPaused) this.renderStatus(this.activeIndex, true);
    else this.startLoop(false);
  };

  RecentStatusDemo.prototype.pauseAt = function (index) {
    this.userPaused = true;
    this.intro.stop();
    this.clearLoop();
    this.hasExpanded = true;
    this.monitor.animateTo(1);
    this.renderStatus(index, !reduceMotion.matches);
  };

  RecentStatusDemo.prototype.stop = function () {
    this.intro.stop();
    this.clearLoop();
    var selectedButton = this.buttons[this.activeIndex];
    var bandIndex = selectedButton ? Number(selectedButton.getAttribute("data-demo-band-index")) : 0;
    this.monitor.setDemoBand(bandIndex, false);
  };

  RecentStatusDemo.prototype.handleMotionChange = function () {
    this.stop();
    if (!this.stage.classList.contains("is-in-view")) return;
    if (reduceMotion.matches) {
      this.hasExpanded = true;
      this.monitor.animateTo(1);
      this.renderStatus(this.activeIndex, false);
    } else if (this.userPaused) {
      this.renderStatus(this.activeIndex, true);
    } else {
      this.startLoop(false);
    }
  };

  var PointerDemoFrames = [
    {"phase": "drag", "state": "drag-start", "holdMS": 1600, "expansion": 0, "monitorX": -10, "monitorY": 0, "pointerX": -10, "pointerY": 0, "padX": 40, "padY": 50, "contact": "sliding", "pressureHeld": false, "selection": null, "copyKey": "pointerDemoDrag"},
    {"phase": "drag", "state": "dragged", "holdMS": 2200, "expansion": 0, "monitorX": -26, "monitorY": 0, "pointerX": -26, "pointerY": 0, "padX": 24, "padY": 50, "contact": "sliding", "pressureHeld": false, "selection": null, "copyKey": "pointerDemoPlaced"},
    {"phase": "drag", "state": "drag-released", "holdMS": 1600, "expansion": 0, "monitorX": -26, "monitorY": 0, "pointerX": -26, "pointerY": 0, "padX": 24, "padY": 50, "contact": "released", "pressureHeld": false, "selection": null, "copyKey": "pointerDemoPlaced"},
    {"phase": "global", "state": "global-position", "holdMS": 2200, "expansion": 0, "monitorX": -26, "monitorY": 0, "pointerX": 26, "pointerY": 0, "padX": 76, "padY": 50, "contact": "sliding", "pressureHeld": false, "selection": null, "copyKey": "pointerDemoGlobalReady"},
    {"phase": "global", "state": "global-press", "holdMS": 1700, "expansion": 0, "monitorX": -26, "monitorY": 0, "pointerX": 26, "pointerY": 0, "padX": 76, "padY": 50, "contact": "pressing", "pressureHeld": true, "selection": null, "copyKey": "pointerDemoGlobal"},
    {"phase": "global", "state": "global-arrive", "holdMS": 1600, "expansion": 0, "monitorX": 26, "monitorY": 0, "pointerX": 26, "pointerY": 0, "padX": 76, "padY": 50, "contact": "pressing", "pressureHeld": true, "selection": null, "copyKey": "pointerDemoTravelling"},
    {"phase": "global", "state": "global-open", "holdMS": 2400, "expansion": 1, "monitorX": 26, "monitorY": 0, "pointerX": 26, "pointerY": 0, "padX": 76, "padY": 50, "contact": "pressing", "pressureHeld": true, "selection": null, "copyKey": "pointerDemoGlobal"},
    {"phase": "global", "state": "global-released", "holdMS": 1800, "expansion": 1, "monitorX": 26, "monitorY": 0, "pointerX": 26, "pointerY": 0, "padX": 76, "padY": 50, "contact": "released", "pressureHeld": false, "selection": null, "copyKey": "pointerDemoLocalReleased"},
    {"phase": "global", "state": "global-close", "holdMS": 1600, "expansion": 0, "monitorX": 26, "monitorY": 0, "pointerX": 26, "pointerY": 0, "padX": 76, "padY": 50, "contact": "click", "pressureHeld": false, "selection": null, "copyKey": "pointerDemoClose"},
    {"phase": "global", "state": "second-position", "holdMS": 2400, "expansion": 0, "monitorX": 26, "monitorY": 0, "pointerX": -26, "pointerY": 0, "padX": 24, "padY": 50, "contact": "sliding", "pressureHeld": false, "selection": null, "copyKey": "pointerDemoAnother"},
    {"phase": "global", "state": "second-press", "holdMS": 1700, "expansion": 0, "monitorX": 26, "monitorY": 0, "pointerX": -26, "pointerY": 0, "padX": 24, "padY": 50, "contact": "pressing", "pressureHeld": true, "selection": null, "copyKey": "pointerDemoGlobal"},
    {"phase": "global", "state": "second-arrive", "holdMS": 1600, "expansion": 0, "monitorX": -26, "monitorY": 0, "pointerX": -26, "pointerY": 0, "padX": 24, "padY": 50, "contact": "pressing", "pressureHeld": true, "selection": null, "copyKey": "pointerDemoTravelling"},
    {"phase": "global", "state": "second-open", "holdMS": 2400, "expansion": 1, "monitorX": -26, "monitorY": 0, "pointerX": -26, "pointerY": 0, "padX": 24, "padY": 50, "contact": "pressing", "pressureHeld": true, "selection": null, "copyKey": "pointerDemoGlobal"},
    {"phase": "global", "state": "second-released", "holdMS": 1800, "expansion": 1, "monitorX": -26, "monitorY": 0, "pointerX": -26, "pointerY": 0, "padX": 24, "padY": 50, "contact": "released", "pressureHeld": false, "selection": null, "copyKey": "pointerDemoLocalReleased"},
    {"phase": "global", "state": "second-close", "holdMS": 1600, "expansion": 0, "monitorX": -26, "monitorY": 0, "pointerX": -26, "pointerY": 0, "padX": 24, "padY": 50, "contact": "click", "pressureHeld": false, "selection": null, "copyKey": "pointerDemoClose"},
    {"phase": "click", "state": "released", "holdMS": 1800, "expansion": 1, "monitorX": -26, "monitorY": 0, "pointerX": -26, "pointerY": 0, "padX": 24, "padY": 50, "contact": "released", "pressureHeld": false, "selection": null, "copyKey": "pointerDemoRelease"},
    {"phase": "click", "state": "click-ready", "holdMS": 2200, "expansion": 1, "monitorX": -26, "monitorY": 0, "pointerX": -14, "pointerY": -14, "padX": 36, "padY": 36, "contact": "sliding", "pressureHeld": false, "selection": null, "copyKey": "pointerDemoClickReady"},
    {"phase": "click", "state": "selected", "holdMS": 2600, "expansion": 1, "monitorX": -26, "monitorY": 0, "pointerX": -14, "pointerY": -14, "padX": 36, "padY": 36, "contact": "click", "pressureHeld": false, "selection": 1, "copyKey": "pointerDemoSelected"},
    {"phase": "click", "state": "click-released", "holdMS": 1700, "expansion": 1, "monitorX": -26, "monitorY": 0, "pointerX": -14, "pointerY": -14, "padX": 36, "padY": 36, "contact": "released", "pressureHeld": false, "selection": 1, "copyKey": "pointerDemoSelected"}
  ];

  var ControllerDemoFrames = [
    { phase: "hold", state: "l-held", holdMS: 1190, expansion: 0, selection: null, lHeld: true, stickX: 0, stickY: 0, copyKey: "controllerDemoHold" },
    { phase: "hold", state: "opened", holdMS: 1700, expansion: 1, selection: null, lHeld: true, stickX: 0, stickY: 0, copyKey: "controllerDemoHold" },
    { phase: "choose", state: "stick-ready", holdMS: 1800, expansion: 1, selection: null, lHeld: true, stickX: 0, stickY: 0, copyKey: "controllerDemoHold" },
    { phase: "choose", state: "stick-select", holdMS: 2550, expansion: 1, selection: 1, lHeld: true, stickX: 30, stickY: -18, copyKey: "controllerDemoChoose" },
    { phase: "release", state: "release-ready", holdMS: 1800, expansion: 1, selection: 1, lHeld: true, stickX: 30, stickY: -18, copyKey: "controllerDemoChoose" },
    { phase: "release", state: "l-released", holdMS: 1870, expansion: 0, selection: null, lHeld: false, stickX: 0, stickY: 0, copyKey: "controllerDemoRelease" },
    { phase: "release", state: "rest", holdMS: 1190, expansion: 0, selection: null, lHeld: false, stickX: 0, stickY: 0, copyKey: "controllerDemoRest" }
  ];

  function TaskModeDemo(stage, monitor) {
    var demo = this;
    this.stage = stage;
    this.monitor = monitor;
    this.mode = "pointer";
    this.pointerPhase = "drag";
    this.controllerPhase = "hold";
    this.sequence = null;
    this.selectedPhases = { pointer: null, controller: null };
    this.buttons = Array.prototype.slice.call(stage.querySelectorAll("[data-control-mode]"));
    this.phaseButtons = Array.prototype.slice.call(stage.querySelectorAll("[data-pointer-phase]"));
    this.controllerPhaseButtons = Array.prototype.slice.call(stage.querySelectorAll("[data-controller-phase]"));
    this.phaseButtons.concat(this.controllerPhaseButtons).forEach(function (button) {
      button.addEventListener("click", function () {
        var mode = button.dataset.pointerPhase ? "pointer" : "controller";
        demo.selectPhase(mode, button.dataset.pointerPhase || button.dataset.controllerPhase);
      });
    });
    this.buttons.forEach(function (button, index) {
      button.addEventListener("click", function () { demo.activate(button.getAttribute("data-control-mode")); });
      button.addEventListener("keydown", function (event) {
        var nextIndex = null;
        if (event.key === "ArrowRight" || event.key === "ArrowDown") nextIndex = (index + 1) % demo.buttons.length;
        if (event.key === "ArrowLeft" || event.key === "ArrowUp") nextIndex = (index - 1 + demo.buttons.length) % demo.buttons.length;
        if (event.key === "Home") nextIndex = 0;
        if (event.key === "End") nextIndex = demo.buttons.length - 1;
        if (nextIndex === null) return;
        event.preventDefault();
        demo.buttons[nextIndex].focus();
        demo.activate(demo.buttons[nextIndex].getAttribute("data-control-mode"));
      });
    });
    this.renderStatic();
  }

  TaskModeDemo.prototype.setCaption = function (selector, key) {
    var caption = this.stage.querySelector(selector);
    caption.dataset.i18n = key;
    caption.textContent = copy[activeLanguage][key];
  };

  TaskModeDemo.prototype.renderPointerFrame = function (frame, animated) {
    this.pointerPhase = frame.phase;
    this.stage.dataset.pointerState = frame.state;
    this.stage.dataset.pressureHeld = String(frame.pressureHeld);
    this.stage.dataset.deviceContact = frame.contact;
    this.stage.style.setProperty("--demo-monitor-x", frame.monitorX + "%");
    this.stage.style.setProperty("--demo-monitor-y", frame.monitorY + "%");
    this.stage.style.setProperty("--demo-pointer-x", frame.pointerX + "%");
    this.stage.style.setProperty("--demo-pointer-y", frame.pointerY + "%");
    this.stage.style.setProperty("--pad-contact-x", frame.padX + "%");
    this.stage.style.setProperty("--pad-contact-y", frame.padY + "%");
    this.stage.classList.toggle("pointer-static", !animated || reduceMotion.matches);
    this.phaseButtons.forEach(function (button) { button.setAttribute("aria-pressed", String(button.dataset.pointerPhase === frame.phase)); });
    this.setCaption(".pointer-result-copy", frame.copyKey);
    this.setCaption("[data-device-status]", { sliding: "deviceSliding", pressing: "devicePressing", released: "deviceReleased", click: "deviceClick" }[frame.contact]);
    setControllerHighlight(this.stage, frame.pressureHeld ? "force-touch" : "");
    // Selection is deliberately absent for every held-pressure frame.
    this.monitor.select(frame.pressureHeld ? null : frame.selection);
    if (animated && !reduceMotion.matches) this.monitor.animateTo(frame.expansion);
    else this.monitor.render(frame.expansion);
  };

  TaskModeDemo.prototype.renderPointerPhase = function () {
    var phase = this.pointerPhase;
    var state = { drag: "dragged", global: "second-open", click: "selected" }[this.selectedPhases.pointer || phase];
    this.renderPointerFrame(PointerDemoFrames.find(function (frame) { return frame.state === state; }), false);
  };

  TaskModeDemo.prototype.renderControllerFrame = function (frame, animated) {
    this.controllerPhase = frame.phase;
    this.stage.dataset.controllerState = frame.state;
    this.stage.dataset.lHeld = String(frame.lHeld);
    this.stage.dataset.stickActive = String(frame.stickX !== 0 || frame.stickY !== 0);
    this.stage.dataset.deviceContact = "released";
    this.stage.dataset.pressureHeld = "false";
    this.stage.style.setProperty("--demo-monitor-x", "0%");
    this.stage.style.setProperty("--demo-monitor-y", "0%");
    this.stage.style.setProperty("--controller-stick-x", frame.stickX + "px");
    this.stage.style.setProperty("--controller-stick-y", frame.stickY + "px");
    this.stage.classList.toggle("pointer-static", !animated || reduceMotion.matches);
    setRightStickDirection(this.stage, 1);
    setControllerHighlight(this.stage, frame.stickX ? "right-stick" : (frame.lHeld ? "l" : ""));
    this.stage.querySelector('[data-control-highlight="l"]').classList.toggle("is-highlighted", frame.lHeld);
    this.controllerPhaseButtons.forEach(function (button) { button.setAttribute("aria-pressed", String(button.dataset.controllerPhase === frame.phase)); });
    this.setCaption(".controller-result-copy", frame.copyKey);
    this.setCaption("[data-device-status]", frame.stickX ? "deviceStick" : (frame.lHeld ? "deviceLHeld" : "deviceLReleased"));
    this.monitor.select(frame.selection);
    if (animated && !reduceMotion.matches) this.monitor.animateTo(frame.expansion);
    else this.monitor.render(frame.expansion);
  };

  TaskModeDemo.prototype.updatePlayback = function () {
    this.stage.dataset.loopState = reduceMotion.matches ? "reduced-motion" : (this.sequence && this.sequence.running ? "running" : "suspended");
    this.stage.dataset.selectedPhase = this.selectedPhases[this.mode] || "auto";
  };

  TaskModeDemo.prototype.selectPhase = function (mode, phase) {
    this.selectedPhases[mode] = phase;
    this.playMode(mode);
  };

  TaskModeDemo.prototype.stopSequence = function () {
    if (this.sequence) this.sequence.stop();
    this.sequence = null;
    if (this.monitor.frameRequest !== null) {
      window.cancelAnimationFrame(this.monitor.frameRequest);
      this.monitor.frameRequest = null;
    }
    this.stage.classList.add("pointer-static");
  };

  TaskModeDemo.prototype.stop = function () {
    this.stopSequence();
    this.updatePlayback();
  };

  TaskModeDemo.prototype.renderStatic = function () {
    this.stopSequence();
    setTaskInputMode(this.stage, this.mode);
    if (this.mode === "pointer") this.renderPointerPhase();
    else {
      var state = { hold: "opened", choose: "stick-select", release: "l-released" }[this.selectedPhases.controller || this.controllerPhase];
      this.renderControllerFrame(ControllerDemoFrames.find(function (frame) { return frame.state === state; }), false);
    }
    this.updatePlayback();
  };

  TaskModeDemo.prototype.playMode = function (mode) {
    var demo = this;
    this.stopSequence();
    this.mode = mode === "controller" ? "controller" : "pointer";
    setTaskInputMode(this.stage, this.mode);
    if (reduceMotion.matches || document.visibilityState !== "visible" || !this.stage.classList.contains("is-in-view")) {
      this.renderStatic();
      return;
    }
    var frames = this.mode === "pointer" ? PointerDemoFrames : ControllerDemoFrames;
    var selected = this.selectedPhases[this.mode];
    if (selected) frames = frames.filter(function (frame) { return frame.phase === selected; });
    var timeline = frames.map(function (frame) {
      return { holdMS: frame.holdMS, action: function () {
        if (demo.mode === "pointer") demo.renderPointerFrame(frame, true);
        else demo.renderControllerFrame(frame, true);
      } };
    });
    this.sequence = new StageSequence(this.stage, timeline, true);
    this.sequence.play();
    this.updatePlayback();
  };

  TaskModeDemo.prototype.playAuto = function () {
    if (this.sequence && this.sequence.running) return;
    this.playMode(this.mode);
  };

  TaskModeDemo.prototype.activate = function (mode) {
    this.playMode(mode);
  };

  TaskModeDemo.prototype.handleMotionChange = function () {
    this.playMode(this.mode);
  };

  function ShortcutDemo(stage) {
    var demo = this;
    this.stage = stage;
    this.identifiers = ["zl", "dpad", "zr", "ab", "y"];
    this.buttons = this.identifiers.map(function (identifier) {
      return stage.querySelector('[data-control-tab="' + identifier + '"]');
    }).filter(Boolean);
    this.activeIndex = 0;
    this.loopTimeout = null;
    this.userSelected = false;

    this.buttons.forEach(function (button, index) {
      button.addEventListener("click", function () {
        demo.select(index, true, false);
      });
      button.addEventListener("keydown", function (event) {
        var nextIndex = null;
        if (event.key === "ArrowRight" || event.key === "ArrowDown") nextIndex = (index + 1) % demo.buttons.length;
        if (event.key === "ArrowLeft" || event.key === "ArrowUp") nextIndex = (index - 1 + demo.buttons.length) % demo.buttons.length;
        if (event.key === "Home") nextIndex = 0;
        if (event.key === "End") nextIndex = demo.buttons.length - 1;
        if (nextIndex === null) return;
        event.preventDefault();
        demo.select(nextIndex, true, true);
      });
    });

    var tablist = stage.querySelector('[role="tablist"]');
    if (tablist) {
      tablist.addEventListener("focusin", function () {
        demo.userSelected = true;
        demo.scheduleNext();
      });
    }

    this.render(0, false);
  }

  ShortcutDemo.prototype.clearLoop = function () {
    if (this.loopTimeout !== null) {
      window.clearTimeout(this.loopTimeout);
      this.loopTimeout = null;
    }
  };

  ShortcutDemo.prototype.render = function (index, shouldFocus, animate) {
    if (!this.buttons.length) return;
    var normalizedIndex = (index + this.buttons.length) % this.buttons.length;
    this.activeIndex = normalizedIndex;
    var button = this.buttons[normalizedIndex];
    setControlEffect(this.stage, button.getAttribute("data-control-tab"));
    this.stage.querySelectorAll("[data-control-effect]").forEach(function (effect) {
      effect.classList.remove("is-playing");
      if (animate && effect.classList.contains("is-active")) {
        // Commit the neutral state so the same operation starts a fresh animation.
        void effect.offsetWidth;
        effect.classList.add("is-playing");
      }
    });
    if (shouldFocus) button.focus();
  };

  ShortcutDemo.prototype.canPlay = function () {
    return !reduceMotion.matches && document.visibilityState === "visible" && this.stage.classList.contains("is-in-view");
  };

  ShortcutDemo.prototype.scheduleNext = function () {
    var demo = this;
    this.clearLoop();
    if (!this.canPlay()) return;
    this.loopTimeout = window.setTimeout(function () {
      if (!demo.canPlay()) return;
      demo.render(demo.activeIndex + (demo.userSelected ? 0 : 1), false, true);
      demo.scheduleNext();
    }, 3200);
  };

  ShortcutDemo.prototype.playAuto = function () {
    this.clearLoop();
    this.render(this.activeIndex, false, this.canPlay());
    this.scheduleNext();
  };

  ShortcutDemo.prototype.select = function (index, userInitiated, shouldFocus) {
    if (userInitiated) this.userSelected = true;
    this.clearLoop();
    this.render(index, shouldFocus, this.canPlay());
    this.scheduleNext();
  };

  ShortcutDemo.prototype.stop = function () {
    this.clearLoop();
    this.render(this.activeIndex, false);
  };

  ShortcutDemo.prototype.handleMotionChange = function () {
    this.playAuto();
  };

  function createStageSequences() {
    var monitorStage = document.getElementById("monitorDemo");
    var recentMonitor = monitorForRole("recent");
    if (monitorStage && recentMonitor) {
      stageSequences.set(monitorStage, new RecentStatusDemo(monitorStage, recentMonitor));
    }

    var taskStage = document.getElementById("taskSwitchDemo");
    var taskMonitor = monitorForRole("task-switch");
    if (taskStage && taskMonitor) {
      stageSequences.set(taskStage, new TaskModeDemo(taskStage, taskMonitor));
    }

    var shortcutStage = document.getElementById("shortcutDemo");
    if (shortcutStage) {
      stageSequences.set(shortcutStage, new ShortcutDemo(shortcutStage));
    }
  }

  function playSceneForStage(stage) {
    var scene = stageSequences.get(stage);
    if (!scene) return;
    if (typeof scene.playAuto === "function") scene.playAuto();
    else scene.play();
  }

  function stopSceneForStage(stage) {
    var scene = stageSequences.get(stage);
    if (scene) scene.stop();
  }

  function HeroBrandMorphController(options) {
    var settings = options || {};
    this.root = settings.root || document.documentElement;
    this.hero = settings.hero || document.querySelector(".brand-hero");
    this.target = settings.target || document.querySelector(".hero-brand-target");
    this.motionPreference = settings.motionPreference || reduceMotion;
    this.frameRequest = null;
    this.needsMeasurement = true;
    this.startOffset = 0;
    this.endOffset = 1;
    this.lastProgress = -1;
    this.isRunning = false;

    this.handleViewportInput = this.handleViewportInput.bind(this);
    this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
    this.handleMotionPreference = this.handleMotionPreference.bind(this);
    this.render = this.render.bind(this);
  }

  HeroBrandMorphController.prototype.start = function () {
    if (!this.hero || this.isRunning) {
      return;
    }

    this.isRunning = true;
    window.addEventListener("scroll", this.handleViewportInput, { passive: true });
    window.addEventListener("resize", this.handleViewportInput, { passive: true });
    document.addEventListener("visibilitychange", this.handleVisibilityChange);

    if (typeof this.motionPreference.addEventListener === "function") {
      this.motionPreference.addEventListener("change", this.handleMotionPreference);
    } else if (typeof this.motionPreference.addListener === "function") {
      this.motionPreference.addListener(this.handleMotionPreference);
    }

    this.schedule(true);
  };

  HeroBrandMorphController.prototype.measure = function () {
    var scrollOffset = window.scrollY || window.pageYOffset || 0;
    var heroRect = this.hero.getBoundingClientRect();
    var targetRect = this.target ? this.target.getBoundingClientRect() : null;
    var heroTop = scrollOffset + heroRect.top;
    var targetTop = targetRect ? scrollOffset + targetRect.top : heroTop + heroRect.height;
    var minimumTravel = Math.max(1, window.innerHeight * 0.42);

    this.startOffset = heroTop;
    this.endOffset = Math.max(heroTop + minimumTravel, targetTop - window.innerHeight * 0.18);
    this.needsMeasurement = false;
  };

  HeroBrandMorphController.prototype.progressForScroll = function () {
    var scrollOffset = window.scrollY || window.pageYOffset || 0;
    var travel = Math.max(1, this.endOffset - this.startOffset);
    var progress = Math.min(1, Math.max(0, (scrollOffset - this.startOffset) / travel));

    if (this.motionPreference.matches) {
      return progress >= 0.5 ? 1 : 0;
    }
    return progress;
  };

  HeroBrandMorphController.prototype.render = function () {
    this.frameRequest = null;
    if (!this.isRunning || document.visibilityState !== "visible") {
      return;
    }

    if (this.needsMeasurement) {
      this.measure();
    }

    var progress = this.progressForScroll();
    if (Math.abs(progress - this.lastProgress) > 0.0005) {
      var clampUnit = function (value) {
        return Math.min(1, Math.max(0, value));
      };
      var inverseProgress = 1 - progress;
      var brandHandoffProgress = clampUnit((progress - 0.9) / 0.1);

      this.root.style.setProperty("--brand-collapse-progress", progress.toFixed(4));
      this.root.style.setProperty("--nav-border-mix", (22 + progress * 78).toFixed(2) + "%");
      this.root.style.setProperty("--nav-background-mix", (12 + progress * 88).toFixed(2) + "%");
      this.root.style.setProperty("--nav-shadow-alpha", (progress * 0.1).toFixed(3));
      this.root.style.setProperty("--nav-blur", (6 + progress * 18).toFixed(2) + "px");
      this.root.style.setProperty("--nav-brand-opacity", brandHandoffProgress.toFixed(3));
      this.root.style.setProperty("--nav-brand-shift", (-5 * inverseProgress).toFixed(2) + "px");
      this.root.style.setProperty("--nav-links-opacity", clampUnit((progress - 0.52) * 2.4).toFixed(3));
      this.root.style.setProperty("--nav-links-shift", (-4 * inverseProgress).toFixed(2) + "px");
      this.root.style.setProperty("--hero-ambient-opacity", (0.42 * inverseProgress).toFixed(3));
      this.root.style.setProperty("--hero-wordmark-scale", (1 - progress * 0.68).toFixed(4));
      this.root.style.setProperty("--hero-wordmark-opacity", (1 - brandHandoffProgress).toFixed(3));
      this.lastProgress = progress;
    }
  };

  HeroBrandMorphController.prototype.schedule = function (needsMeasurement) {
    if (!this.isRunning || document.visibilityState !== "visible") {
      return;
    }
    this.needsMeasurement = this.needsMeasurement || Boolean(needsMeasurement);
    if (this.frameRequest === null) {
      this.frameRequest = window.requestAnimationFrame(this.render);
    }
  };

  HeroBrandMorphController.prototype.handleViewportInput = function (event) {
    this.schedule(event && event.type === "resize");
  };

  HeroBrandMorphController.prototype.handleVisibilityChange = function () {
    if (document.visibilityState !== "visible") {
      if (this.frameRequest !== null) {
        window.cancelAnimationFrame(this.frameRequest);
        this.frameRequest = null;
      }
      return;
    }
    this.schedule(true);
  };

  HeroBrandMorphController.prototype.handleMotionPreference = function () {
    this.lastProgress = -1;
    this.schedule(false);
  };

  languageToggle.addEventListener("click", function () {
    var nextLanguage = languageToggle.dataset.currentLanguage === "zh-CN" ? "en" : "zh-CN";
    applyLanguage(nextLanguage, true);
  });

  document.querySelectorAll("[data-note-link]").forEach(function (link) {
    link.addEventListener("click", function () {
      var target = document.getElementById(link.getAttribute("href").slice(1));
      if (target) target.focus({ preventScroll: true });
    });
  });

  initializeStatisticsExample();
  applyLanguage(preferredLanguage(), false);
  initializeControllerScenes();
  initializeNativeMonitors();
  initializeNativeEffects();
  createStageSequences();

  var heroBrandMorph = new HeroBrandMorphController();
  heroBrandMorph.start();

  var heroVisual = document.querySelector("[data-animation='hero']") || document.querySelector(".brand-hero");
  var passiveStages = Array.prototype.slice.call(document.querySelectorAll("[data-once-animation]"));

  if ("IntersectionObserver" in window) {
    var heroObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        heroVisual.classList.toggle("is-in-view", entry.isIntersecting && entry.intersectionRatio > 0.12);
      });
    }, { threshold: [0, 0.12, 0.35] });

    var featureObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var stage = entry.target;
        var isVisible = entry.isIntersecting && entry.intersectionRatio > 0.18;
        stage.classList.toggle("is-in-view", isVisible);
        if (isVisible) {
          stage.classList.add("is-played");
          playSceneForStage(stage);
        } else {
          stopSceneForStage(stage);
        }
      });
    }, { threshold: [0, 0.18, 0.4] });

    if (heroVisual) {
      heroObserver.observe(heroVisual);
    }
    passiveStages.forEach(function (stage) {
      featureObserver.observe(stage);
    });
  } else {
    if (heroVisual) {
      heroVisual.classList.add("is-in-view");
    }
    passiveStages.forEach(function (stage) {
      stage.classList.add("is-in-view", "is-played");
      playSceneForStage(stage);
    });
  }

  function updatePageVisibility() {
    var isPaused = document.visibilityState !== "visible";
    document.documentElement.dataset.pagePaused = String(isPaused);
    passiveStages.forEach(function (stage) {
      if (isPaused) stopSceneForStage(stage);
      else if (stage.classList.contains("is-in-view")) playSceneForStage(stage);
    });
  }

  document.addEventListener("visibilitychange", updatePageVisibility);

  function updateMotionPreference() {
    document.documentElement.dataset.reducedMotion = String(reduceMotion.matches);
    passiveStages.forEach(function (stage) {
      var scene = stageSequences.get(stage);
      if (!scene) return;
      if (typeof scene.handleMotionChange === "function") scene.handleMotionChange();
      else {
        scene.stop();
        if (stage.classList.contains("is-in-view")) scene.play();
      }
    });
  }

  if (typeof reduceMotion.addEventListener === "function") {
    reduceMotion.addEventListener("change", updateMotionPreference);
  } else if (typeof reduceMotion.addListener === "function") {
    reduceMotion.addListener(updateMotionPreference);
  }

  configureGithubButtons();
  updatePageVisibility();
  updateMotionPreference();
}());
