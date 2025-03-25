<script lang="ts" setup>
import Button from '../ui/Button.vue';
</script>

<template>
    <Button class="button" :content="'Home'" :to="`/`"></Button>
    <Button class="button" :content="'Contact'" :to="`/contact`"></Button>
    <Button class="button" :content="'Authorization'" :to="`/auth?isLogin=true`"></Button>
    <Button class="button" :content="'Facebook'" :href="`https://www.facebook.com/hieu.133835/`" :target="'_blank'"></Button>
</template>

<style lang="sass" scoped>
.button
    margin: 5px 10px
</style>