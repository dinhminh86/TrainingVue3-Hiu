<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps({
  id: String,
  modelValue: [String, Number, Boolean],
  label: String,
  type: {
    type: String,
    default: "text",
  },
  options: {
    type: Array as () => {
      value: String | number;
      label: String;
    }[],
    default: () => [],
  },
  placeHolder: {
    type: String,
    default: "",
  },
  blurFunc: Function,
});

const emit = defineEmits(["update:modelValue"]);
const isCheckbox = computed(() => props.type === "checkbox");
const isSelect = computed(() => props.type === "select");
</script>

<template>
  <div class="container">
    <input
      type="checkbox"
      v-if="isSelect"
      :id="id"
      :checked="Boolean(modelValue)"
      @change="
        emit('update:modelValue', ($event.target as HTMLInputElement).checked)
      "
    />
    <label v-if="label" class="label" :for="id">{{ label }}</label>
    <input
      v-if="!isCheckbox && !isSelect"
      :id="id"
      :type="type"
      class="input"
      :value="modelValue"
      :placeholder="placeHolder"
      @blur="blurFunc"
      @input="
        emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
    />
    <select v-if="isSelect" :name="label" :id="id">
      <option
        v-for="option in options"
        :key="String(option.value)"
        :selected="option.value === modelValue"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<style lang="sass" scoped>
// Định nghĩa biến màu sắc
$primary-color: #007bff
$border-color: #ccc
$hover-border-color: #0056b3
$text-color: #333
$font-size: 14px
$border-radius: 6px

.container
  display: flex
  flex-direction: column
  gap: 8px
  position: relative

  .label
    font-size: $font-size
    font-weight: 500
    color: $text-color
    cursor: pointer
    transition: color 0.3s ease-in-out

    &:hover
      color: $primary-color

  .input,
  select
    width: 100%
    padding: 10px
    font-size: $font-size
    border: 2px solid $border-color
    border-radius: $border-radius
    transition: all 0.3s ease-in-out
    outline: none

    &:focus
      border-color: $primary-color
      box-shadow: 0 0 6px rgba(0, 123, 255, 0.5)

  select
    cursor: pointer
    background-color: white
    appearance: none

    &:hover
      border-color: $hover-border-color

    &:focus
      border-color: $primary-color

  // Custom Checkbox
  input[type="checkbox"]
    width: 18px
    height: 18px
    cursor: pointer
    appearance: none
    border: 2px solid $border-color
    border-radius: 4px
    transition: all 0.2s ease-in-out
    position: relative

    &:checked
      background-color: $primary-color
      border-color: $primary-color

      &::before
        content: "✔"
        position: absolute
        left: 50%
        top: 50%
        transform: translate(-50%, -50%)
        font-size: 14px
        color: white
        font-weight: bold
</style>
