export const { NEXT_PUBLIC_USER_SERVICE } = process.env;

const CONSTANTS = {
  users: {
    login: () => `${NEXT_PUBLIC_USER_SERVICE}/login`,
  },
};

export default CONSTANTS;
