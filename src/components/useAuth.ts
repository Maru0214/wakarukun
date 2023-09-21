import { computed, ref } from "vue";

import { addDoc, collection, getDocs, query, where } from "@firebase/firestore";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import type { User, UserCredential } from "firebase/auth";

export function useAuth() {
  const { $auth, $firestore } = useNuxtApp();
  const user = ref<User | null>($auth.currentUser as User); // 型アサーションを使用して型を指定
  const isAuthed = computed(() => !!user.value);
  const db = $firestore;

  $auth.onIdTokenChanged((authUser) => (user.value = authUser));

  // ユーザー情報取得
  const getUser = async (uid: string): Promise<any> => {
    const q = query(collection(db, "users"), where("uid", "==", uid));
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs[0];
  };

  // ユーザー作成
  const createUser = async (user: UserCredential) => {
    await addDoc(collection(db, "users"), {
      uid: user.user.uid,
      name: user.user.displayName,
      email: user.user.email,
      photo: user.user.photoURL,
    });
  };

  // Google新規登録
  async function googleSignUp() {
    const provider = new GoogleAuthProvider();
    const googleUser = await signInWithPopup($auth as Auth, provider); // 型アサーションを使用して型を指定
    const user = await getUser(googleUser.user.uid);

    const { updateUser } = await useUser();

    if (user) {
      alert("既にユーザー登録されています。");
      updateUser(user.data());
      navigateTo("/login", { replace: true });
    } else {
      alert("新規登録完了しました");
      await createUser(googleUser);
      const user = await getUser(googleUser.user.uid);
      updateUser(user.data());
      navigateTo("/mypage", { replace: true });
    }
  }

  async function currentUser() {
    return await $auth.currentUser;
  }

  return { isAuthed, user, checkAuthState, googleSignUp, currentUser };
}
