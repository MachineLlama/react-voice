module.exports.config = {
  port: 3000,
  express: {
    port: 3002
  },
  listenOnStartup: false,
  defaultLanguage: {
    locale: 'en-US',
    language: 'English'
  },
  languages: [
    {
      locale: 'en-US',
      language: 'English'
    },
    {
      locale: 'es-US',
      language: 'Spanish'
    },
    {
      locale: 'ja-JP',
      language: 'Japanese'
    },
    {
      locale: 'zh-CN',
      language: 'Mandarin'
    }
  ],
  robotjs: {
    // command to paste text from command
    // where you mouse currently is
    paste: {
      first: 'v',
      second: 'control'
    },
    // optional command after paste
    // shift + alt auto-formats in VS Code on Windows
    cleanup: {
      first: 'f',
      second: ['shift', 'alt']
    }
  }
}
