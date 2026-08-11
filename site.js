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
      documentTitle: "Cohex — 六个 Task，一眼掌握。",
      documentDescription: "Cohex 将任务状态、Token 用量与切换操作集成于一个悬浮六边形，让手柄与鼠标自然掌握 Codex Desktop 的 Recent 6。",
      skipToContent: "跳到主要内容",
      navLabel: "主导航",
      navSections: "页面章节",
      brandHome: "Cohex 首页",
      navTasks: "Recent 6",
      navControls: "操作",
      navMoreControls: "快捷操作",
      navCompatibility: "兼容性",
      githubLabel: "下载 Cohex",
      heroEyebrow: "Cohex：为 Codex Desktop 而生的原生 macOS 控制器。",
      heroTitleLine1: "六个 Task，",
      heroTitleLine2: "一眼掌握。",
      heroBody: "任务状态、Token 用量与切换操作，集成于一个悬浮六边形。用手柄保持工作节奏，也可以直接用鼠标查看与切换。",
      exploreFeatures: "了解核心功能",
      hold: "按住",
      choose: "选择",
      heroMonitorCaption: "Weekly 剩余 · 68%",
      heroVisualDescription: "动画展示正确布局的 Nintendo Switch Pro Controller：按住 L，用右摇杆选择六边形 Monitor 上的 Task，状态边同时显示活跃、等待输入、完成与错误。",
      recentEyebrow: "Recent 6 · Token Monitor",
      recentTitleLine1: "状态在边上，",
      recentTitleLine2: "注意力留在任务上。",
      recentBody: "六条边对应最近六个 Task。颜色先告诉你哪里正在运行、哪里需要回应；中央只呈现当前可见 Task 的生成节奏与额度概览。",
      tokenDisclosure: "tok/s 仅统计当前可见 Task 的 output 与 reasoning output。Weekly、剩余 Token 与可用时长为本机校准估算，并非 OpenAI 提供的精确额度。",
      recentDemoLabel: "从 Compact 到完整状态",
      replay: "重播",
      demoTaskBuild: "修复构建",
      demoTaskLanding: "完善首页",
      demoTaskInstall: "验证安装",
      demoTaskDocs: "整理文档",
      demoTaskSync: "排查同步",
      demoTaskResearch: "研究方案",
      demoEstimateTokens: "估算 Token · 1.24M",
      demoEstimateTime: "可用 · 42.50h",
      stepHold: "按住 L",
      stepChoose: "右摇杆选择",
      stepRelease: "松开切换",
      recentDemoDescription: "Compact Monitor 默认仅显示 Weekly 剩余比例 68%。展开为 Recent 6 后，五种状态依次突出；中央显示 24.6 tok/s、Weekly 68% 与本机估算。",
      stateLegendLabel: "Task 状态图例",
      stateCycleDescription: "状态会自动循环。选择任一状态可暂停循环，并突出轮盘中对应的边。",
      recentReplayLabel: "重播状态演示",
      stateActive: "活跃",
      stateUnread: "完成未读",
      stateViewed: "完成已读",
      stateNeeds: "等待输入",
      stateError: "错误",
      controllerEyebrow: "Controller & Pointer",
      controllerTitleLine1: "一个六边形，",
      controllerTitleLine2: "两种自然的控制方式。",
      controllerBody: "按住 L，用右摇杆选中 Task，松开立即切换。手离开手柄时，也可以拖动 Monitor、展开 Recent 6 并直接点击任务。",
      controlModeLabel: "操作方式",
      controlsReplayLabel: "重播操作方式演示",
      controllerMethodTitle: "用手柄保持工作节奏",
      flowHoldTitle: "按住 L",
      flowHoldBody: "从 Compact Monitor 展开 Recent 6。",
      flowChooseTitle: "推动右摇杆",
      flowChooseBody: "颜色与 Task 名称同步高亮。",
      flowReleaseTitle: "松开 L",
      flowReleaseBody: "精确切换到对应 Task；B 随时取消。",
      pointerFlowMoveTitle: "拖动",
      pointerFlowMoveBody: "把 Compact Monitor 放在顺手的位置。",
      pointerFlowExpandTitle: "展开",
      pointerFlowExpandBody: "Force Touch 或右键打开 Recent 6。",
      pointerFlowChooseTitle: "点击 Task",
      pointerFlowChooseBody: "切换任务；点击中央即可收起。",
      controllerDemoLabel: "Switch Pro 操作流",
      calloutHold: "按住展开",
      calloutSelect: "360° 选择",
      controllerResult: "切换到「完善首页」",
      pointerResult: "Recent 6 已展开",
      controllerDemoDescription: "手柄模式依次展示按住 L、展开 Recent 6、右摇杆选择与松开切换；触控板模式展示 Force Touch 后保持 Recent 6 展开。",
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
      shortcutsBody: "同一只 Switch Pro Controller 继续处理 Skill、模型与问题、听写、确认和 Plan 文档。每一步都有清晰、单一的物理入口。",
      shortcutsDemoLabel: "五项核心操作",
      shortcutsDemoDescription: "演示会自动循环 ZL、D-pad、ZR、A 与 B、Y。选择任一操作可暂停并保持对应画面。",
      shortcutsReplayLabel: "重播快捷操作演示",
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
      pointerTitle: "手离开手柄，也一样自然。",
      pointerBody: "Cohex 的悬浮 Monitor 不抢走 Codex 输入焦点。拖动它改变位置；Force Touch 或右键展开；点击 Task 切换，点击中央收起。",
      pointerBoundary: "鼠标只直接操作 Token Monitor 与 Recent 6。Cohex 不会把手柄摇杆伪装成 macOS 系统光标。",
      pointerDemoLabel: "拖动、展开与切换",
      pointerDrag: "拖动",
      pointerExpand: "Force Touch / 右键",
      pointerSwitch: "点击 Task",
      pointerDemoDescription: "一次播放的动画：鼠标拖动 Compact Monitor，Force Touch 展开 Recent 6，光标点击等待输入的 Task，再点击中心收起。",
      compatibilityEyebrow: "Compatibility",
      compatAppleSiliconTitle: "Apple Silicon",
      compatAppleSilicon: "arm64 原生构建",
      compatMacOSTitle: "macOS 14+",
      compatMacOS: "支持浅色、深色与辅助功能设置",
      compatCodexTitle: "Codex Desktop",
      compatCodex: "面向当前桌面 Task 工作流",
      compatControllerTitle: "Nintendo Switch Pro",
      compatController: "USB 与 Bluetooth",
      compatAccessibilityTitle: "Accessibility",
      compatAccessibility: "部分语义操作需要 macOS 授权",
      compatLocalTitle: "Local by design",
      compatLocal: "无开发者运营的后端或分析 SDK",
      brandStoryEyebrow: "为什么叫 Cohex",
      brandStoryTitle: "从 Codex，到六边形。",
      brandStoryBody1: "Cohex 由 Codex 与 Hex 融合而来。Co 保留它与 Codex 的连接，Hex 指向产品的六边形界面，也对应 Recent 6 的六个 Task。",
      brandStoryBody2: "标记以苯环的六边结构为灵感：六条边承载任务状态，中央圆代表当前聚焦的 Task。名字、图标与交互，因此共享同一种几何语言。",
      footerTagline: "六个 Task，一眼掌握。",
      independenceDisclosure: "Cohex 是独立项目，与 OpenAI、Apple、Nintendo 或 Work Louder 无隶属、赞助或背书关系。所有产品名称与商标归其各自所有者。",
      privacyDisclosure: "页面动画使用匿名固定示例，不读取本机 Task、Token 或任何个人数据。"
    },
    en: {
      documentTitle: "Cohex — Six tasks. One glance.",
      documentDescription: "Cohex brings task status, token usage, and switching together in one floating hexagon for Codex Desktop, controlled naturally by game controller or mouse.",
      skipToContent: "Skip to main content",
      navLabel: "Primary navigation",
      navSections: "Page sections",
      brandHome: "Cohex home",
      navTasks: "Recent 6",
      navControls: "Controls",
      navMoreControls: "Shortcuts",
      navCompatibility: "Compatibility",
      githubLabel: "Download Cohex",
      heroEyebrow: "Cohex: A native macOS controller for Codex Desktop.",
      heroTitleLine1: "Six tasks.",
      heroTitleLine2: "One glance.",
      heroBody: "Task status, token usage, and switching come together in one floating hexagon. Stay in flow with a controller, or use the mouse to inspect and switch directly.",
      exploreFeatures: "Explore the core features",
      hold: "Hold",
      choose: "Choose",
      heroMonitorCaption: "Weekly remaining · 68%",
      heroVisualDescription: "An animation shows a correctly arranged Nintendo Switch Pro Controller. Hold L and use the right stick to choose a task while the Monitor edges show active, needs input, complete, and error states.",
      recentEyebrow: "Recent 6 · Token Monitor",
      recentTitleLine1: "Status on the edge.",
      recentTitleLine2: "Focus on the task.",
      recentBody: "Each edge represents one of your six most recent tasks. Color tells you what is running and what needs you; the center keeps the visible task’s generation rhythm and usage overview in focus.",
      tokenDisclosure: "tok/s counts output and reasoning output for the currently visible task. Weekly, remaining tokens, and available time are locally calibrated estimates—not an exact quota supplied by OpenAI.",
      recentDemoLabel: "From Compact to the full picture",
      replay: "Replay",
      demoTaskBuild: "Fix build",
      demoTaskLanding: "Polish landing",
      demoTaskInstall: "Verify install",
      demoTaskDocs: "Organize docs",
      demoTaskSync: "Debug sync",
      demoTaskResearch: "Research approach",
      demoEstimateTokens: "Est. tokens · 1.24M",
      demoEstimateTime: "Available · 42.50h",
      stepHold: "Hold L",
      stepChoose: "Choose with right stick",
      stepRelease: "Release to switch",
      recentDemoDescription: "The Compact Monitor shows only the 68% Weekly remaining estimate. After it expands into Recent 6, five task states are emphasized in turn; the center shows 24.6 tok/s, Weekly 68%, and local estimates.",
      stateLegendLabel: "Task status legend",
      stateCycleDescription: "Statuses cycle automatically. Choose one to pause the cycle and emphasize its matching edge on the wheel.",
      recentReplayLabel: "Replay status demonstration",
      stateActive: "Active",
      stateUnread: "Complete unread",
      stateViewed: "Complete viewed",
      stateNeeds: "Needs input",
      stateError: "Error",
      controllerEyebrow: "Controller & Pointer",
      controllerTitleLine1: "One hexagon.",
      controllerTitleLine2: "Two natural ways to control it.",
      controllerBody: "Hold L, choose a task with the right stick, and release to switch. When your hand leaves the controller, drag the Monitor, expand Recent 6, and click a task directly.",
      controlModeLabel: "Control method",
      controlsReplayLabel: "Replay control method demonstration",
      controllerMethodTitle: "Stay in flow with the controller",
      flowHoldTitle: "Hold L",
      flowHoldBody: "Expand Recent 6 from the Compact Monitor.",
      flowChooseTitle: "Move the right stick",
      flowChooseBody: "Task color and title highlight together.",
      flowReleaseTitle: "Release L",
      flowReleaseBody: "Switch to the exact task; press B to cancel.",
      pointerFlowMoveTitle: "Drag",
      pointerFlowMoveBody: "Place the Compact Monitor where it stays within reach.",
      pointerFlowExpandTitle: "Expand",
      pointerFlowExpandBody: "Open Recent 6 with Force Touch or right-click.",
      pointerFlowChooseTitle: "Click a task",
      pointerFlowChooseBody: "Switch tasks; click the center to collapse.",
      controllerDemoLabel: "Switch Pro control flow",
      calloutHold: "Hold to expand",
      calloutSelect: "360° selection",
      controllerResult: "Switched to “Polish landing”",
      pointerResult: "Recent 6 expanded",
      controllerDemoDescription: "Controller mode shows holding L, expanding Recent 6, choosing with the right stick, and releasing to switch. Trackpad mode shows a Force Touch and leaves Recent 6 expanded.",
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
      shortcutsBody: "The same Switch Pro Controller handles skills, models and questions, dictation, confirmation, and Plan documents. Each action has one clear physical entry point.",
      shortcutsDemoLabel: "Five core controls",
      shortcutsDemoDescription: "The demo cycles automatically through ZL, the D-pad, ZR, A and B, and Y. Choose one to pause and hold its view.",
      shortcutsReplayLabel: "Replay shortcut demonstration",
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
      pointerTitle: "Just as natural when you leave the controller.",
      pointerBody: "The floating Cohex Monitor never steals focus from Codex. Drag to reposition it, Force Touch or right-click to expand, click a task to switch, and click the center to collapse.",
      pointerBoundary: "The mouse directly controls only Token Monitor and Recent 6. Cohex never impersonates the macOS system pointer with a controller stick.",
      pointerDemoLabel: "Drag, expand, and switch",
      pointerDrag: "Drag",
      pointerExpand: "Force Touch / right-click",
      pointerSwitch: "Click task",
      pointerDemoDescription: "A one-shot animation drags the Compact Monitor, expands Recent 6 with Force Touch, clicks a task that needs input, and clicks the center to collapse.",
      compatibilityEyebrow: "Compatibility",
      compatAppleSiliconTitle: "Apple Silicon",
      compatAppleSilicon: "Native arm64 build",
      compatMacOSTitle: "macOS 14+",
      compatMacOS: "Light, dark, and accessibility appearances",
      compatCodexTitle: "Codex Desktop",
      compatCodex: "Built around the current desktop task workflow",
      compatControllerTitle: "Nintendo Switch Pro",
      compatController: "USB and Bluetooth",
      compatAccessibilityTitle: "Accessibility",
      compatAccessibility: "Some semantic actions require macOS permission",
      compatLocalTitle: "Local by design",
      compatLocal: "No developer-operated backend or analytics SDK",
      brandStoryEyebrow: "Why Cohex",
      brandStoryTitle: "From Codex to the hexagon.",
      brandStoryBody1: "Cohex blends Codex and hex. “Co” preserves its connection to Codex; “Hex” names the product’s six-sided interface and the six tasks in Recent 6.",
      brandStoryBody2: "The mark draws on the hexagonal structure of a benzene ring: six edges carry task state, while the center circle represents the task in focus. Name, icon, and interaction share one geometric language.",
      footerTagline: "Six tasks. One glance.",
      independenceDisclosure: "Cohex is an independent project and is not affiliated with, sponsored by, or endorsed by OpenAI, Apple, Nintendo, or Work Louder. All product names and trademarks belong to their respective owners.",
      privacyDisclosure: "The animations use fixed anonymous examples and never read local tasks, tokens, or personal data."
    }
  };

  var storageKey = "product-site-language";
  var activeLanguage = "en";
  var languageToggle = document.getElementById("languageToggle");
  var metadataDescription = document.querySelector('meta[name="description"]');
  var metadataTitle = document.querySelector('meta[property="og:title"]');
  var metadataSocialDescription = document.querySelector('meta[property="og:description"]');
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

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
    centerCopy.innerHTML = "<strong class=\"monitor-compact-percent\">68%</strong>"
      + "<div class=\"monitor-rate\">24.6 <small>tok/s</small></div>"
      + "<strong class=\"monitor-weekly\">Weekly 68%</strong>"
      + "<span class=\"monitor-estimate\">Est. Token · 1.24M</span>"
      + "<span class=\"monitor-hours\">Available · 42.50h</span>";

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
    estimate.textContent = activeLanguage === "en" ? "Est. Token · 1.24M" : "估算 Token · 1.24M";
    hours.textContent = activeLanguage === "en" ? "Available · 42.50h" : "可用 · 42.50h";
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
    if (reduceMotion.matches) {
      if (this.reducedAction) this.reducedAction();
      return;
    }
    this.running = true;
    this.index = 0;
    this.advance();
  };

  StageSequence.prototype.advance = function () {
    var sequence = this;
    if (!this.running || document.visibilityState !== "visible") return;
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

  RecentStatusDemo.prototype.replay = function () {
    this.stop();
    this.userPaused = false;
    this.hasExpanded = false;
    this.activeIndex = 0;
    this.playAuto();
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

  function TaskModeDemo(stage, monitor) {
    var demo = this;
    this.stage = stage;
    this.monitor = monitor;
    this.mode = "controller";
    this.sequence = null;
    this.initialAutoPlayed = false;
    this.buttons = Array.prototype.slice.call(stage.closest(".controls-section").querySelectorAll("[data-control-mode]"));
    setRightStickDirection(stage, 1);
    setTaskInputMode(stage, this.mode);

    this.buttons.forEach(function (button, index) {
      button.addEventListener("click", function () {
        demo.activate(button.getAttribute("data-control-mode"));
      });
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
  }

  TaskModeDemo.prototype.stopSequence = function () {
    if (this.sequence) this.sequence.stop();
    this.sequence = null;
  };

  TaskModeDemo.prototype.renderFinal = function () {
    setTaskInputMode(this.stage, this.mode);
    setControllerHighlight(this.stage, "");
    this.monitor.select(null);
    this.monitor.animateTo(this.mode === "pointer" ? 1 : 0);
  };

  TaskModeDemo.prototype.stop = function () {
    this.stopSequence();
    this.renderFinal();
  };

  TaskModeDemo.prototype.renderStatic = function () {
    this.stopSequence();
    setTaskInputMode(this.stage, this.mode);
    this.monitor.animateTo(1);
    if (this.mode === "controller") {
      setRightStickDirection(this.stage, 1);
      setControllerHighlight(this.stage, "right-stick");
      this.monitor.select(1);
    } else {
      setControllerHighlight(this.stage, "force-touch");
      this.monitor.select(null);
    }
  };

  TaskModeDemo.prototype.playMode = function (mode) {
    var demo = this;
    this.stopSequence();
    this.mode = mode === "pointer" ? "pointer" : "controller";
    setTaskInputMode(this.stage, this.mode);
    if (reduceMotion.matches) {
      this.renderStatic();
      return;
    }

    var timeline;
    if (this.mode === "pointer") {
      timeline = [
        { holdMS: 420, action: function () {
          setTaskInputMode(demo.stage, "pointer");
          setControllerHighlight(demo.stage, "");
          demo.monitor.select(null);
          demo.monitor.animateTo(0);
        } },
        { holdMS: 900, action: function () { setControllerHighlight(demo.stage, "force-touch"); } },
        { holdMS: 1000, action: function () {
          setControllerHighlight(demo.stage, "");
          demo.monitor.animateTo(1);
          demo.monitor.select(null);
        } }
      ];
    } else {
      timeline = [
        { holdMS: 420, action: function () {
          setTaskInputMode(demo.stage, "controller");
          setRightStickDirection(demo.stage, 1);
          setControllerHighlight(demo.stage, "l");
          demo.monitor.select(null);
          demo.monitor.animateTo(0);
        } },
        { holdMS: 420, action: function () { demo.monitor.animateTo(1); } },
        { holdMS: 720, action: function () {
          setControllerHighlight(demo.stage, "right-stick");
          demo.monitor.select(1);
        } },
        { holdMS: 1100, action: function () {
          setControllerHighlight(demo.stage, "");
          demo.monitor.select(null);
          demo.monitor.animateTo(0);
        } }
      ];
    }
    this.sequence = new StageSequence(this.stage, timeline, false);
    this.sequence.play();
  };

  TaskModeDemo.prototype.playAuto = function () {
    if (this.initialAutoPlayed) return;
    this.initialAutoPlayed = true;
    this.playMode("controller");
  };

  TaskModeDemo.prototype.activate = function (mode) {
    this.initialAutoPlayed = true;
    this.playMode(mode);
  };

  TaskModeDemo.prototype.replay = function () {
    this.playMode(this.mode);
  };

  TaskModeDemo.prototype.handleMotionChange = function () {
    this.stopSequence();
    if (this.stage.classList.contains("is-in-view")) this.renderStatic();
    else this.renderFinal();
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
    this.userPaused = false;

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
        demo.userPaused = true;
        demo.clearLoop();
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

  ShortcutDemo.prototype.render = function (index, shouldFocus) {
    if (!this.buttons.length) return;
    var normalizedIndex = (index + this.buttons.length) % this.buttons.length;
    this.activeIndex = normalizedIndex;
    var button = this.buttons[normalizedIndex];
    setControlEffect(this.stage, button.getAttribute("data-control-tab"));
    if (shouldFocus) button.focus();
  };

  ShortcutDemo.prototype.scheduleNext = function () {
    var demo = this;
    this.clearLoop();
    if (this.userPaused || reduceMotion.matches || document.visibilityState !== "visible" || !this.stage.classList.contains("is-in-view")) return;
    this.loopTimeout = window.setTimeout(function () {
      demo.render(demo.activeIndex + 1, false);
      demo.scheduleNext();
    }, 2000);
  };

  ShortcutDemo.prototype.playAuto = function () {
    this.clearLoop();
    this.render(this.activeIndex, false);
    if (!this.userPaused && !reduceMotion.matches) this.scheduleNext();
  };

  ShortcutDemo.prototype.select = function (index, userInitiated, shouldFocus) {
    if (userInitiated) this.userPaused = true;
    this.clearLoop();
    this.render(index, shouldFocus);
  };

  ShortcutDemo.prototype.stop = function () {
    this.clearLoop();
    this.render(this.activeIndex, false);
  };

  ShortcutDemo.prototype.replay = function () {
    this.userPaused = false;
    this.activeIndex = 0;
    this.playAuto();
  };

  ShortcutDemo.prototype.handleMotionChange = function () {
    this.clearLoop();
    this.render(this.activeIndex, false);
    if (this.stage.classList.contains("is-in-view") && !this.userPaused && !reduceMotion.matches) this.scheduleNext();
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

  function restartAnimation(stage) {
    stopSceneForStage(stage);
    stage.classList.remove("is-played");
    void stage.offsetWidth;
    stage.classList.add("is-played");
    stage.classList.add("is-in-view");
    var scene = stageSequences.get(stage);
    if (scene && typeof scene.replay === "function") scene.replay();
    else playSceneForStage(stage);
  }

  languageToggle.addEventListener("click", function () {
    var nextLanguage = languageToggle.dataset.currentLanguage === "zh-CN" ? "en" : "zh-CN";
    applyLanguage(nextLanguage, true);
  });

  document.querySelectorAll("[data-replay]").forEach(function (button) {
    button.addEventListener("click", function () {
      var stage = document.getElementById(button.getAttribute("data-replay"));
      if (stage) {
        restartAnimation(stage);
      }
    });
  });

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
