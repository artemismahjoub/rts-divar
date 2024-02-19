import { TokensType } from "types/tokens";

const setCookie = (tokens: TokensType) => {
  document.cookie = `accessToken=${tokens.accessToken} max-age=${
    1 * 24 * 60 * 60
  }`;
  document.cookie = `refreshToken=${tokens.refreshToken} max-age=${
    30 * 24 * 60 * 60
  }`;
};

export { setCookie };
