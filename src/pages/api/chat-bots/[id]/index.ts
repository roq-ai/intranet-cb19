import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { chatBotValidationSchema } from 'validationSchema/chat-bots';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.chat_bot
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getChatBotById();
    case 'PUT':
      return updateChatBotById();
    case 'DELETE':
      return deleteChatBotById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getChatBotById() {
    const data = await prisma.chat_bot.findFirst(convertQueryToPrismaUtil(req.query, 'chat_bot'));
    return res.status(200).json(data);
  }

  async function updateChatBotById() {
    await chatBotValidationSchema.validate(req.body);
    const data = await prisma.chat_bot.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteChatBotById() {
    const data = await prisma.chat_bot.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
