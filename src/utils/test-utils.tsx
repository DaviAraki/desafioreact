import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { getStoreWithState, RootState } from '../store';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as StyledTheme } from 'styled-components';
import { lightTheme } from '../styles/themes/light';
import { EmailState } from '../store/slices/emailSlice';
import { TaskState } from '../store/slices/taskSlice';
import { UserState } from '../store/slices/userSlice';
import { ThemeState } from '../store/slices/themeSlice';
import i18next from 'i18next';

export function renderWithContext(
  element: React.ReactElement,
  state?: RootState
) {
  const store = getStoreWithState(state);
  const utils = render(
    <ThemeProvider theme={lightTheme}>
      <StyledTheme theme={lightTheme}>
        <Provider store={store}>
          <Router>{element}</Router>
        </Provider>
      </StyledTheme>
    </ThemeProvider>
  );
  return { store, ...utils };
}

export function getStateWithItems(
  emails: EmailState,
  tasks: TaskState,
  user: UserState,
  theme: ThemeState
): RootState {
  const state: RootState = {
    emails: emails,
    tasks: tasks,
    user: user,
    theme: theme,
    featuresApi: {
      queries: {},
      mutations: {},
      provided: {},
      subscriptions: {},
      config: {
        focused: false,
        keepUnusedDataFor: 0,
        middlewareRegistered: false,
        online: true,
        reducerPath: 'featuresApi',
        refetchOnFocus: false,
        refetchOnMountOrArgChange: false,
        refetchOnReconnect: false,
      },
    },
    emailsApi: {
      queries: {},
      mutations: {},
      provided: {},
      subscriptions: {},
      config: {
        focused: false,
        keepUnusedDataFor: 0,
        middlewareRegistered: false,
        online: true,
        reducerPath: 'emailsApi',
        refetchOnFocus: false,
        refetchOnMountOrArgChange: false,
        refetchOnReconnect: false,
      },
    },
  };
  return state;
}

export function mockedi18n() {
  Object.defineProperty(i18next, 'useTranslation', {
    value: jest.fn().mockImplementation(() => {
      return {
        t: (key: string) => key,
      };
    }),
  });
}
