import { NextFunction, Request, Response } from "express";
import prisma from "../config/db.config";

export const sendMessage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id: reciverId } = req.params;
    const { message } = req.body;
    const senderId: string = req.userId as string;

    let conversation = await prisma.conversation.findFirst({
      where: {
        participantIds: {
          hasEvery: [senderId, reciverId],
        },
      },
    });
    if (!conversation) {
      conversation = await prisma.conversation.create({
        data: {
          participantIds: {
            set: [senderId, reciverId],
          },
        },
      });
    }
    const newMessage = await prisma.message.create({
      data: {
        body: message,
        senderId,
        converstaionId: conversation.id,
      },
    });

    if (newMessage) {
      await prisma.conversation.update({
        where: { id: conversation.id },
        data: {
          messages: {
            connect: {
              id: newMessage.id,
            },
          },
        },
      });
    }

    res
      .status(201)
      .json({ success: true, data: { message: newMessage }, error: null });
  } catch (error) {
    next(error);
  }
};

export const getMessages = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.userId as string;

    const conversation = await prisma.conversation.findFirst({
      where: {
        participantIds: {
          hasEvery: [userToChatId, senderId],
        },
      },
      include: {
        messages: {
          orderBy: {
            createdAt: "asc",
          },
        },
      },
    });
    if (!conversation) {
      res
        .status(404)
        .json({
          success: false,
          data: null,
          error: { message: "no message started yet" },
        });
      return;
    }
    res
      .status(200)
      .json({
        success: true,
        data: { messages: conversation.messages },
        error: null,
      });
  } catch (error) {
    next(error);
  }
};
