import { createContext } from "react";

export interface ILanguageContext {
  language: boolean;
  setLanguage: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LanguageContext = createContext<ILanguageContext | undefined>(undefined);