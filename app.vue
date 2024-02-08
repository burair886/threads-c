<template>
  <div class="w-[calc(100%+1px)] fixed bg-black h-full">
    <NuxtLayout>
      <NuxtPage />
      <PostCreate
        :class="[
          {
            'max-h-[100vh] transition-all duration-200 ease-in visible':
              userStore.isMenuOverlay,
          },
          {
            'max-h-0 transition-all duration-200 ease-out invisible':
              !userStore.isMenuOverlay,
          },
        ]"
      />
    </NuxtLayout>
  </div>
</template>
<script setup>
import { useUserStore } from "@/store/user";
const userStore = useUserStore();
</script>
