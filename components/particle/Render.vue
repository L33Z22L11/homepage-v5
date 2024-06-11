<script setup lang="ts">
import { ZLIcon, ZLIconOld } from "#components";

const props = defineProps<{ content: string }>();
const render = () => {
    const { content } = props;
    return h({
        template: content,
        components: { ZLIcon, ZLIconOld }
    });
};
</script>

<template>
    <div>
        <render />
    </div>
</template>
