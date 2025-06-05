import languages from "../models/language.models.js"

const languageController = {
  getAllLanguages: (req, res) => {
    res.json(languages);
  },

  createLanguage: (req, res) => {
    const lang = req.body;
    languages.push(lang);
    res.json(languages);
  },

  getLanguageById: (req, res) => {
    const languageId = req.params.id;
    const lang = languages.find((l) => l.id == languageId);
    res.json(lang);
  },

  updateLanguageById: (req, res) => {
    languages.forEach((lang, idx) => {
      if (lang.id == req.params.id) {
        lang = { ...lang, ...req.body };
        languages[idx] = lang;
      }
    });
    const updatedLang = languages.find((l) => l.id == req.params.id);
    res.json(updatedLang);
  },

  deleteLanguageById: (req, res) => {
    const languageId = req.params.id;
    const index = languages.findIndex(
      (oneLanguage) => oneLanguage.id == languageId
    );
    languages.splice(index, 1);
    res.json(languages);
  },
};

export default languageController