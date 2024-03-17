import sendRequest from "~/shared/utils/send-request";

type Body = {
  token: string;
  secret: string;
  password: string;
  password_confirm: string;
};

type Response = {
  error?: number;
  detail?: unknown[];
  timestamp?: number;
};

export default function passwordSet(body: Body) {
  return sendRequest<Response>({
    method: "POST",
    url: "password-reset",
    body,
  });
}
