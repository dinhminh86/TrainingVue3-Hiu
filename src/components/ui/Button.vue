<script lang="ts" setup>
import { useNavigation } from "../hooks/useNavigation";

const props = defineProps({
  content: {
    type: String,
    default: null,
  },
  type: {
    type: String,
    default: "primary",
  },
  disable: {
    type: Boolean,
    default: false,
  },
  to: {
    type: String,
    default: null,
  },
  href: {
    type: String,
    default: null,
  },
  target: {
    type: String,
    default: "_self",
  },
  onClick: Function,
});

const navigate = useNavigation();

const handleClick = () => {
  if (props.onClick) {
    props.onClick();
  } else {
    navigate(props.to, props.href, props.target);
  }
};
</script>

<template>
  <button
    @click.="handleClick"
    :formtarget="props.target"
    :disabled="props.disable"
    :class="props.type"
    class="button"
  >
    {{ content }}
  </button>
</template>

<style lang="sass" scoped>
$primary-color: #4CAF50
$default-color: #000000
$hover-color: darken($primary-color, 10%)
$active-color: lighten($primary-color, 10%)
$border-radius: 8px
$transition-speed: 0.3s

.button
  display: inline-block
  padding: 12px 24px
  font-size: 16px
  font-weight: bold
  color: white
  background: $default-color
  border: none
  border-radius: $border-radius
  cursor: pointer
  transition: background $transition-speed, transform 0.2s
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2)

  &.primaty
    background: $primary-color

  &:hover
    background: $hover-color
    transform: translateY(-2px)
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3)

  &.primary:hover
    color: blue

  &:active
    background: $active-color
    transform: scale(0.98)
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2)
</style>
