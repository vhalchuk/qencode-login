import sendRequest from "~/shared/utils/send-request";

type Body = {
  email: string;
  redirect_url: string;
};

type Response = {
  error?: number;
  detail?: unknown[];
  timestamp?: number;
};

export default function passwordReset(body: Body) {
  return sendRequest<Response>({
    method: "POST",
    url: "password-reset",
    body,
  });
}
