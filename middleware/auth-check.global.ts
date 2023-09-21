export default defineNuxtRouteMiddleware(async () => {
  if (!process.server) {
    const { checkAuthState } = useAuth();
    await checkAuthState();
  }
});