import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (e) => {
  const body = await readBody(e);

  const res = prisma.posts.create({
    data: {
      userId: body.userId,
      name: body.name,
      img: body.img,
      text: body.text,
      pic: body.pic,
    },
  });

  return res;
});
