<template>
  <div class="overflow-hidden w-full h-full fixed z-50 bottom-0"></div>
</template>

<script setup>
import { useUserStore } from "~/store/user";
import { v4 as uuidv4 } from "uuid";

const userStore = useUserStore();

// const client = useSupabaseClient();
// const user = useSupabaseUser();

const text = ref("");
const isLoading = ref(false);
const file = ref(null);
const fileDisplay = ref(null);
const fileData = ref(null);

const reset = () => {
  text.value = "";
  file.value = null;
  fileDisplay.value = null;
  fileData.value = null;
};
</script>
