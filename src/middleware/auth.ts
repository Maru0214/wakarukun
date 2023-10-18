import { useAuth } from "~/hooks/useAuth";

export default defineNuxtRouteMiddleware(async (to, _) => {
  // この middleware が設定されている場合は要ログイン
  const { hasAuthorized } = useAuth();
  console.log("middleware `auth` is called");

  const loginTo = "/SignUpForm";

  if (!hasAuthorized.value && to.path !== loginTo) {
    console.warn("detected user is not authorized; Redirect to login page");
    return await navigateTo(loginTo);
  }

  return () => {};
});
