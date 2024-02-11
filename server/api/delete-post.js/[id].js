import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (e) => {
  const res = await prisma.posts.delete({
    where: { id: Number(e?.context?.params?.id) },
  });
  return res;
});
