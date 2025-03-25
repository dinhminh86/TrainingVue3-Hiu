<script setup lang="ts">
import BaseField from "../components/ui/BaseField.vue";
import Button from "../components/ui/Button.vue";
import { useAuth } from "../components/hooks/useAuth";
import { ref } from "vue";
import { AuthRequest, IsAuthValid } from "../types/Auth";
import { useAuthStore } from "../store/authStore.ts";

const { handleAuth } = useAuth();

const auth = ref<AuthRequest>(AuthRequest());
const props = defineProps({
  isLogin: {
    type: Boolean,
    default: false,
  },
});

const IsValidInput = ref<{ field: string; message: string }[]>([]);
const checkIsValid = () => {
  IsAuthValid(auth.value).then((errors) => {
    IsValidInput.value = errors;
    console.log(errors);
  });
};

const log = () => console.log("prop.isLogin: ", IsValidInput);
</script>

<template>
  <h1 v-once>{{ props.isLogin ? "Login" : "Register" }}</h1>
  <BaseField
    :id="'userName'"
    v-model="auth.userName"
    :label="'User Name'"
    :placeHolder="'Enter User Name...'"
    :blurFunc="checkIsValid"
  />
  <p
    v-for="(error, index) in IsValidInput.filter(
      (err) => err.field === 'userName'
    )"
    :key="index"
  >
    {{ error.message }}
  </p>
  <BaseField
    :id="'userPass'"
    v-model="auth.password"
    :label="'Password'"
    :placeHolder="'Enter Password...'"
    :blurFunc="checkIsValid"
  />
  <p
    v-for="(error, index) in IsValidInput.filter(
      (err) => err.field === 'password'
    )"
    :key="index"
  >
    {{ error.message }}
  </p>
  <BaseField
    v-if="!props.isLogin"
    :id="'userPass'"
    v-model="auth.rePassword"
    :label="'Re-enter password'"
    :placeHolder="'Enter Password...'"
  />
  <Button
    class="button"
    :class="{ hidden: !IsValidInput }"
    :onClick="() => handleAuth(props.isLogin ? 'login' : 'register', auth)"
    :content="props.isLogin ? 'Login' : 'Register'"
  ></Button>
  <Button
    :class="{ hidden: useAuthStore().isAuthenticated }"
    class="button"
    :onClick="handleAuth"
    :content="'Logout'"
  ></Button>
  <button @click="log">DCM</button>
</template>

<style lang="sass" scoped>
.hidden
  background-color: #dedede
  pointer-events: none
  transition: none
  transform: none
</style>
