<script lang="ts" setup>
import { useLoginUser } from '../store/user';

const user = useLoginUser();
</script>

<template>
  <div>
    <p>ユーザーID: {{ user.id }}</p>
    <p>ユーザー名: {{ user.name }}</p>
    <p>メールアドレス: {{ user.mail }}</p>
    <button @click="user.setName('')">ユーザ名を削除</button>
    <button @click="user.setMail('')">メールアドレスを削除</button>
  </div>
</template>