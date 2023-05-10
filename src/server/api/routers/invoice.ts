import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const invoiceRouter = createTRPCRouter({
  createInvoice: protectedProcedure
    .input(
      z.object({
        clientName: z.string(),
        clientEmail: z.string(),
        clientStreet: z.string(),
        clientCity: z.string(),
        clientCountry: z.string(),
        description: z.string(),
        clientPostCode: z.string(),
        senderStreet: z.string(),
        senderCity: z.string(),
        senderCountry: z.string(),
        senderPostCode: z.string(),
        status: z.enum(["PAID", "PENDING", "DRAFT"]),
        paymentTerms: z.number(),
        paymentDue: z.string(),
        item: z.array(
          z.object({
            name: z.string(),
            quantity: z.number(),
            price: z.number(),
            total: z.number(),
          })
        ),
      })
    )
    .query(({ input, ctx }) => {
      const userId = ctx.auth.userId;
      if (!userId) {
        throw new Error("Not authenticated");
      }

      const {
        clientName,
        clientEmail,
        clientStreet,
        clientCity,
        clientCountry,
        description,
        clientPostCode,
        senderStreet,
        senderCity,
        senderCountry,
        senderPostCode,
        status,
        paymentTerms,
        paymentDue,
        item,
      } = input;

      try {
        const invoice = ctx.prisma.invoice.create({
          data: {
            clientName,
            clientEmail,
            clientStreet,
            clientCity,
            clientCountry,
            description,
            clientPostCode,
            senderStreet,
            senderCity,
            senderCountry,
            senderPostCode,
            status,
            paymentTerms,
            paymentDue,
            item: {
              create: item,
            },
            userId: userId,
          },
        });

        return invoice;
      } catch (error) {
        console.log(error);
        throw new Error("Something went wrong");
      }
    }),
  getInvoice: protectedProcedure
    .input(
      z.object({
        invoiceId: z.string(),
      })
    )
    .query(({ ctx, input }) => {
      const { invoiceId } = input;

      try {
        const invoice = ctx.prisma.invoice.findUnique({
          where: {
            id: invoiceId,
          },
        });

        return invoice;
      } catch (error) {
        console.log(error);
        throw new Error("Something went wrong");
      }
    }),
});
