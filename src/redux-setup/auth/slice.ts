import { createSlice } from '@reduxjs/toolkit';
import { Permissions, Roles } from 'shared/definitions/auth';

interface InitialStateAuth {
  isLogin: boolean;
  isEmployee: boolean;
  currentSub?: string;
  loading: boolean;
  user?: IUser;
  role?: Roles;
  permissions?: Array<Permissions>;
  companyName?: string;
}

const initialState: InitialStateAuth = {
  isLogin: false,
  isEmployee: false,
  loading: false,
  permissions: [],
  companyName: '',
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => initialState,
    loginSuccess: (state, action) => ({ ...state, ...action.payload }),
    loading: (state, action) => ({ ...state, loading: action.payload }),
    updateAgent: (state, action) => ({
      ...state,
      user: { ...state.user, agent_id: action.payload },
    }),
    updateCurrentUser: (state, action) => ({
      ...state,
      user: { ...state.user, ...action.payload },
    }),
  },
});

export const { actions, reducer } = slice;
