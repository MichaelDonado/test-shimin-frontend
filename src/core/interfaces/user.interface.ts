export interface UserData {
  db: string,
  user: string,
  password: string
}

interface DataResponse {
  authentication: boolean,
  level: number,
  name?: string,
  restablecer_contrasena?: number
}

export interface SuccessResponse {
  data: DataResponse | null,
}

export interface UserApiContextResponse {
  login: (userData: UserData) => Promise<SuccessResponse | null>;
}

