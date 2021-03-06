export const useGetRedirectLanguage = () => {
        if (typeof navigator === `undefined`) {
            return "en";
          }
        
          const lang = navigator && navigator.language && navigator.language.split("-")[0];
          
          if (!lang) return "en";
        
          switch (lang) {
            case "ja":
              return "ja";
            default:
              return "en";
          }
};

