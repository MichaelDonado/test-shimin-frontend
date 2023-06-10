import { createContext } from 'react';
import { UserApiContextResponse } from '@core/interfaces/user.interface';

const initialState = {} as UserApiContextResponse
const UserApiContext = createContext(initialState);

export default UserApiContext;