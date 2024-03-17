import sendRequest from "~/shared/utils/send-request";

type Body = {
  email: string;
  password: string;
};

type Response = {
  error?: number;
  detail?: unknown[];
  timestamp?: number;
  access_token: string;
  refresh_token: string;
  token_expire: number;
  refresh_token_expire: number;
};

export default function login(body: Body) {
  return sendRequest<Response>({
    method: "POST",
    url: "login",
    body,
  });
}
