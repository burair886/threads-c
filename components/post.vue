<template>
  <div class="h-full w-full z-50 bottom-0">
    <div class="w-full py-2">
      <div class="flex justify-between items-center">
        <div class="flex items-center text-white">
          <img :src="props?.data?.img" class="rounded-full h-[35px]" />
          <div class="text-lg font-semibold ml-2">{{ props?.data?.name }}</div>
        </div>
        <div class="relative" @click="isMenu = !isMenu">
          <button
            class="flex items-center text-white h-6 w-6 hover:bg-gray-800 p-1 rounded-full cursor-pointer"
            :class="isMenu ? 'bg-gray-800' : ''"
            :disabled="isDeleting"
          >
            <Icon
              v-if="isDeleting"
              name="bi:three-dots"
              color="#ffffff"
              size="18"
            />
            <Icon
              v-else
              name="eos-icons:three-dots-loading"
              color="#ffffff"
              size="18"
            />
          </button>
          <div
            v-if="isMenu"
            class="mt-1 rounded absolute border border-gray-600 right-0 z-50"
          >
            <button
              class="flex items-center gap-2 rounded text-red-500 justify-between bg-black pl-4 pr-3 w-full hover:bg-gray-900 py-1"
            >
              Delete
              <Icon size="20" name="bxs:trash-alt" />
            </button>
          </div>
        </div>
      </div>
      <div class="w-full flex items-center relative">
        <div class="w-11 mx-auto">
          <div class="h-full bg-gray-700 w-px absolute ml-4 mt-1 top-0" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "~/store/user";

const userStore = useUserStore();
const runTimeConfig = useRuntimeConfig();

const props = defineProps({
  data: Object,
});

const emit = defineEmits(["isDeleted"]);

// const client = useSupabaseClient();
// const user = useSupabaseUser();

const isMenu = ref(false);
const isLike = ref(false);
const isDeleting = ref(false);
</script>
