<template>
    <!-- class="flex-1/3 flex items-center" -->
    <span :class="props.ui.root">
        <UAvatar :icon="props.icon" size="md" :ui="props.ui.avatar" />
        <div :class="props.ui.text">
            <slot>
                {{ props.text }}
            </slot>
        </div>
    </span>
</template>
<script setup lang="ts">
import type { AvatarProps } from '@nuxt/ui';

const props = withDefaults(defineProps<{
    icon: string,
    text?: string,
    ui?: { avatar?: AvatarProps["ui"], text?: string, root?: string }
}>(), {
    ui: (x) => {
        return {
            avatar: {
                icon: 'text-(--ui-primary)',
                root: "mr-2",
                ...x.ui?.avatar
            },
            text: `font-bold`,
            root: "flex items-center",
            ...x.ui
        }
    }
})
</script>