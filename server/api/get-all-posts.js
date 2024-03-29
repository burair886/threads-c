import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (e) => {
  const res = await prisma.posts.findMany({
    orderBy: { id: "desc" },
    include: { likes: true },
  });
  return res;
});
