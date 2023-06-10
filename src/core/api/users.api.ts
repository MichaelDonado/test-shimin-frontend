import CONSTANTS from '@core/app.constants';
import {
  SuccessResponse, UserData,
} from '@core/interfaces/user.interface';
import httpService from '@core/utils/http-service';

const { login } = CONSTANTS.users;

const USERS_API = {
  async login(userData: UserData) {
    const { data } = await httpService.post<SuccessResponse>(login(), userData);
    return data;
  },
  
};

export default USERS_API;
