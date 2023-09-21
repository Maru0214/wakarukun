export default defineNuxtRouteMiddleware(async () => {
  if (!process.server) {
    const { isAuthed, checkAuthState } = getAuth();
    await checkAuthState();

    if (!isAuthed.value) {
      window.location.href = "/login";
    }
  }
});
