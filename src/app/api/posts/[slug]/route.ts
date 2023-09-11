import prisma from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (req: Request, { params }) => {
  const { slug } = params;
  try {
    const post = await prisma.post.update({
      where: { slug },
      data: {
        views: { increment: 1 },
      },
      include: { user: true },
    });

    return NextResponse.json(post);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
};
