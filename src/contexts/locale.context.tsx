import * as React from 'react';

import { foottyContents } from '../assets/contents/footty.content';

interface LocaleProviderProps {
  hostLanguage: string | null;
  children: React.ReactNode;
}

const DEFAULT_HOST_LANGUAGE = foottyContents.en;
const LocaleContext = React.createContext(DEFAULT_HOST_LANGUAGE);

export const LocaleProvider = (props: LocaleProviderProps) => {
  const value =
    !!props.hostLanguage && !!foottyContents[props.hostLanguage]
      ? foottyContents[props.hostLanguage]
      : DEFAULT_HOST_LANGUAGE;

  return <LocaleContext.Provider value={value}>{props.children}</LocaleContext.Provider>;
};

export const withLocale = (Component: React.ComponentClass<any>) => (props: any) => {
  return (
    <LocaleContext.Consumer>{(value) => <Component {...props} localizedContents={value} />}</LocaleContext.Consumer>
  );
};
