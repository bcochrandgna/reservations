// @flow
import React, { PureComponent } from 'react';
import { ApolloProvider } from 'react-apollo';
import RNLanguages from 'react-native-languages';
import AppNavigator from './AppNavigator';
import i18n from '../helpers/i18n';
import { client } from '../../config';

type Props = {};
type LocaleArguments = {
  language: string,
};

class App extends PureComponent<Props> {
  componentDidMount() {
    RNLanguages.addEventListener('change', this.handleLanguageChange);
  }

  componentWillUnmount() {
    RNLanguages.removeEventListener('change', this.handleLanguageChange);
  }

  handleLanguageChange = ({ language }: LocaleArguments) => {
    i18n.locale = language;
  };

  render() {
    return (
      <ApolloProvider client={client}>
        <AppNavigator />
      </ApolloProvider>
    );
  }
}

export default App;
