import { addDoc, collection, getDocs, query, where } from "@firebase/firestore";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { computed, ref } from "vue";

import type { User, UserCredential } from "firebase/auth";
import { useUser } from "./useUser";

export function useAuth() {
  const { $auth, $db } = useNuxtApp();
  const user = ref<User | null>($auth.currentUser);
  const isAuthed = computed(() => !!user.value);

  $auth.onIdTokenChanged((authUser) => (user.value = authUser));

  // ユーザー情報取得
  const getUser = async (uid: string): Promise<any> => {
    const q = query(collection($db, "users"), where("uid", "==", uid));
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs[0];
  };

  // ユーザー作成
  const createUser = async (_user: UserCredential) => {
    await addDoc(collection($db, "users"), {
      uid: _user.user.uid,
      name: _user.user.displayName,
      email: _user.user.email,
      photo: _user.user.photoURL,
    });
  };

  // Google新規登録
  async function googleSignUp() {
    const provider = new GoogleAuthProvider();
    const googleUser = await signInWithPopup($auth, provider); // 型アサーションを使用して型を指定
    const user = await getUser(googleUser.user.uid);

    const { updateUser } = useUser();

    if (user) {
      alert("既にユーザー登録されています。");
      updateUser(user.data());
      await navigateTo("../pages/index", { replace: true });
    } else {
      alert("新規登録完了しました");
      await createUser(googleUser);
      const newUser = await getUser(googleUser.user.uid);
      updateUser(newUser.data());
      await navigateTo("../pages/index", { replace: true });
    }
  }

  async function currentUser() {
    return $auth.currentUser;
  }

  return { isAuthed, user, googleSignUp, currentUser };
}
