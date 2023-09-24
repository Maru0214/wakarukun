/* eslint-disable no-console */

import { addDoc, collection, getDocs, query, where } from "@firebase/firestore";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { ref } from "vue";

import type { User, UserCredential } from "firebase/auth";

export function useAuth() {
  const { $auth, $db } = useNuxtApp();

  // 現在のユーザー
  const currentUser = ref<User | null>($auth.currentUser);

  // 認証済みかどうか
  const hasAuthorized = computed(() => currentUser.value != null);

  // ユーザーの変更を監視
  onAuthStateChanged($auth, (newUser) => {
    currentUser.value = newUser;
  });

  /**
   * UUID からユーザーを取得
   * @param uuid UUID
   * @returns User | null
   */
  async function getUserFromUuid(uuid: string): Promise<User | null> {
    const users = await getDocs(
      query(collection($db, "users"), where("uid", "==", uuid))
    );

    return users.empty ? null : (users.docs[0].data() as User);
  }

  /**
   * 新しくユーザーを作成
   *
   * @param userCredential ユーザー情報
   */
  async function createUser(userCredential: UserCredential) {
    const { uid, displayName, photoURL, email } = userCredential.user;
    await addDoc(collection($db, "users"), {
      uid,
      displayName,
      photoURL,
      email,
    });
  }

  /**
   * Google アカウントでログイン
   */
  async function googleSignUp(): Promise<void> {
    const provider = new GoogleAuthProvider();
    let userCredential: UserCredential;

    try {
      userCredential = await signInWithPopup($auth, provider);
    } catch (error) {
      console.error(error);
      throw new Error("Google アカウントでのログインに失敗しました");
    }

    const user = await getUserFromUuid(userCredential.user.uid);

    if (user != null) {
      console.log("新規ユーザーを作成");
      await createUser(userCredential);
    } else {
      console.log("既存ユーザー");
    }

    currentUser.value = userCredential.user;
  }

  return {
    currentUser,
    hasAuthorized,
    getUserFromUuid,
    createUser,
    googleSignUp,
  };
}
