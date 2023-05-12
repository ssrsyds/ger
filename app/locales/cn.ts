import { SubmitKey } from "../store/app";

const cn = {
  WIP: "该功能仍在开发中……",
  Error: {
    Unauthorized: "本程序基于ChatGPT-4开发的智能问答服务,首次使用需获取授权码激活设备方可使用，[点击前往获取](https://imgbed.link/file/22797)，【AI使用效果预览】[立即预览](http://v.yjie.fun/zs/)，安卓可下载软件试用[立即下载](http://dy.yjie.fun/app/)",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} 条对话`,
  },
  Chat: {
    SubTitle: (count: number) => `与 ChatGPT 的 ${count} 条对话`,
    Actions: {
      ChatList: "查看消息列表",
      CompressedHistory: "查看压缩后的历史 Prompt",
      Export: "导出聊天记录",
      Copy: "复制",
      Stop: "停止",
      Retry: "重试",
    },
    Rename: "重命名对话",
    Typing: "正在输入…",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey} 发送`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += "，Shift + Enter 换行";
      }
      return inputHints + "，/ 触发补全";
    },
    Send: "发送",
  },
  Export: {
    Title: "导出聊天记录为 Markdown",
    Copy: "全部复制",
    Download: "下载文件",
    MessageFromYou: "来自你的消息",
    MessageFromChatGPT: "来自 ChatGPT 的消息",
  },
  Memory: {
    Title: "历史记忆",
    EmptyContent: "尚未记忆",
    Send: "发送记忆",
    Copy: "复制记忆",
    Reset: "重置对话",
    ResetConfirm: "重置后将清空当前对话记录以及历史记忆，确认重置？",
  },
  Home: {
    NewChat: "新的聊天",
    DeleteChat: "确认删除选中的对话？",
    DeleteToast: "已删除会话",
    Revert: "撤销",
  },
  Settings: {
    Title: "设置",
    SubTitle: "设置选项",
    Actions: {
      ClearAll: "清除所有数据",
      ResetAll: "重置所有选项",
      Close: "关闭",
      ConfirmResetAll: {
        Confirm: "Are you sure you want to reset all configurations?",
      },
      ConfirmClearAll: {
        Confirm: "Are you sure you want to reset all chat?",
      },
    },
    Lang: {
      Name: "Language",
      Options: {
        cn: "简体中文",
        en: "English",
        tw: "繁體中文",
        es: "Español",
        it: "Italiano",
        tr: "Türkçe",
        jp: "日本語",
      },
    },
    Avatar: "头像",
    FontSize: {
      Title: "字体大小",
      SubTitle: "聊天内容的字体大小",
    },
    SendKey: "发送键",
    Theme: "主题",
    TightBorder: "无边框模式",
    SendPreviewBubble: "发送预览气泡",
    Prompt: {
      Disable: {
        Title: "禁用提示词自动补全",
        SubTitle: "输入框输入/可进行功能预设",
      },
      List: "自定义提示词列表",
      ListCount: (builtin: number, custom: number) =>
        `内置 ${builtin} 条，用户定义 ${custom} 条`,
      Edit: "编辑",
    },
    HistoryCount: {
      Title: "附带历史消息数",
      SubTitle: "每次请求携带的历史消息数",
    },
    CompressThreshold: {
      Title: "历史消息长度压缩阈值",
      SubTitle: "当未压缩的历史消息超过该值时，将进行压缩",
    },
    AccessCode: {
      Title: "设备秘钥",
      SubTitle: "需验证设备秘钥后继续使用",
      Placeholder: "请输入秘钥",
    },
    Model: "模型 (model)",
    Temperature: {
      Title: "随机性 (temperature)",
      SubTitle: "值越大，回复越随机，大于 1 的值可能会导致乱码",
    },
    MaxTokens: {
      Title: "单次回复限制 (max_tokens)",
      SubTitle: "单次交互所用的最大 Token 数",
    },
    PresencePenlty: {
      Title: "话题新鲜度 (presence_penalty)",
      SubTitle: "值越大，越有可能扩展到新话题",
    },
  },
  Store: {
    DefaultTopic: "New Chat",
    BotHello: "您好！尊贵的会员用户,有什么可以帮助你的吗？[立即访问](http://dy.yjie.fun/ai/)👈请务必收藏该临时发布页，供服务器满载不能正常使用时临时使用。",
    Error: "出错了，稍后重试吧",
    Prompt: {
      History: (content: string) =>
        "这是 ai 和用户的历史聊天总结作为前情提要：" + content,
      Topic:
        "使用四到五个字直接返回这句话的简要主题，不要解释、不要标点、不要语气词、不要多余文本，如果没有主题，请直接返回“闲聊”",
      Summarize:
        "简要总结一下你和用户的对话，用作后续的上下文提示 prompt，控制在 200 字以内",
    },
    ConfirmClearAll: "确认清除所有聊天、设置数据？",
  },
  Copy: {
    Success: "已写入剪切板",
    Failed: "复制失败，请赋予剪切板权限",
  },
  Context: {
    Toast: (x: any) => `已设置 ${x} 条前置上下文`,
    Edit: "前置上下文和历史记忆",
    Add: "新增一条",
  },
};

export type LocaleType = typeof cn;

export default cn;
