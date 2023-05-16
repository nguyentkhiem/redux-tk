import * as slice from './slice';
import saga from './saga';

export const { logout, loginSuccess, loading: loginLoading, updateAgent, updateCurrentUser } = slice.actions;
export { saga };
export default slice.reducer;
