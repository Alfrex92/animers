// Only one item MUST have the "default: true" key

module.exports = {
  en: {
    default: true,
    path: `en`,
    locale: `en-US`,
    dateFormat: `DD/MM/YYYY`,
    siteLanguage: `en`,
    ogLanguage: `en_US`,
    defaultTitle: `Using i18n with Gatsby`,
    defaultDescription: `Gatsby example site using MDX and dependency-free i18n`,
  },
  ja: {
    path: `ja`,
    locale: `ja-JP`,
    dateFormat: `DD.MM.YYYY`,
    siteLanguage: `ja`,
    ogLanguage: `ja_JP`,
    defaultTitle: `日本語`,
    defaultDescription: `日本語`,
  },
}
