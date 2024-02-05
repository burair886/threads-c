<template>
  <div id="indexPage" class="overflow-auto w-full">
    <div class="overflow-hidden max-w-[500px] mx-auto">
      <div id="posts" class="max-w-[600px] mx-auto px-4">
        <div
          v-if="isPosts"
          class="text-white"
          v-for="(post, index) in posts"
          :key="index"
        >
          <post :data="post" @isDeleted="posts = []" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "~/store/user";

definePageMeta({
  layout: "main",
});

// const user = useSupebaseUser();
const userStore = useUserStore();

const isPosts = ref(true);
const posts = ref([]);
const isLoading = ref(false);

onBeforeMount(() => {
  posts.value = [
    {
      name: "abc",
      img: "https://picsum.photos/100/100",
      text: "title",
      pic: "https://picsum.photos/500/500",
    },
  ];
});
</script>
