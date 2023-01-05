<script lang="ts" setup>
import { useLoginUser } from '../store/user';

const user = useLoginUser();
</script>

<template>
  <div>
    <p>ユーザーID: {{ user.id }}</p>
    <p>ユーザー名: {{ user.name }}</p>
    <p>メールアドレス: {{ user.mail }}</p>
  </div>
</template>