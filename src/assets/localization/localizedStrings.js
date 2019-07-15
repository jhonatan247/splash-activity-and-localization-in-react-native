import LocalizedStrings from 'react-native-localization';
import english from './en';
import englishUnitedStates from './en-US';
import spanish from './es';

let strings = new LocalizedStrings({
  en: english,
  'en-US': englishUnitedStates,
  es: spanish
});

export default strings;
