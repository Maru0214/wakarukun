export default defineNuxtRouteMiddleware(async () => {
  if (!process.server) {
    const { checkAuthState } = getAuth();
    await checkAuthState();
  }
});
