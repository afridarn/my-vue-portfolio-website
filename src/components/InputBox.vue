<script>
export default {
  name: 'InputBox',
  emits: ['update:modelValue'],
  props: {
    name: String,
    label: String,
    modelValue: String,
    type: {
      type: String,
      default: 'text',
    }
  }
}
</script>

<template>
  <div class="mb-3">
    <label :for="name" class="form-label text-light fw-semibold">{{ label }}
      <input class="form-control" :type="type" :placeholder="label" :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)" />
    </label>
  </div>
</template>

<style lang="scss" scoped></style>