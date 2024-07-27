<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps({
    error: Object as () => NuxtError,
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
    <ZSidebar />
    <div class="content">
        <ZHeader />
        <main>
            <div>
                <ZTitle>出错了</ZTitle>
                <ZField :label="error?.statusCode">
                    <div>
                        <p>{{ error?.message }}</p>
                        <br>
                        <ZButton @click="handleError">
                            返回主页
                        </ZButton>
                    </div>
                </ZField>
            </div>
        </main>
    </div>
</template>
