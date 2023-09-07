import { computed, ref } from "vue";

import { addDoc, collection, getDocs, query, where } from "@firebase/firestore";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { useUser } from "./useUser";

import type { Auth, User, UserCredential } from "firebase/auth";
import type { Firestore } from "firebase/firestore";

export function useAuth() {
  const { auth, firestore } = useNuxtApp();
  const $auth = auth as Auth;
  const $firestore = firestore as Firestore;

  const user = ref<User | null>($auth.currentUser);
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
    const googleUser = await signInWithPopup($auth, provider);
    const user = await getUser(googleUser.user.uid);
    const { updateUser } = useUser();
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

  function currentUser() {
    return $auth.currentUser;
  }

  return { isAuthed, user, googleSignUp, currentUser };
}
