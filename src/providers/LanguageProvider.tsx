import { LanguageContext } from "@/context/LanguageContext";
import { useState } from "react";

interface Props {
  children: React.ReactNode;
}

export const LanguageContextProvider = ({ children }: Props) => {
  const [language, setLanguage] = useState<boolean>(true);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
