import { NextResponse } from "next/server";
import ReactPDF from "@react-pdf/renderer";
import { DevisPDF } from "@/components/DevisPDF";
import React from "react";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const stream = await ReactPDF.renderToStream(
      React.createElement(DevisPDF, { data }) as any
    );

    const chunks: Buffer[] = [];
    for await (const chunk of stream as AsyncIterable<Buffer>) {
      chunks.push(Buffer.from(chunk));
    }
    const pdfBuffer = Buffer.concat(chunks);

    return new NextResponse(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="devis-${data.numero || "breizhapp"}.pdf"`,
      },
    });
  } catch (error) {
    console.error("Erreur génération PDF:", error);
    return NextResponse.json({ error: "Erreur génération PDF" }, { status: 500 });
  }
}
