import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  id: string
};

const metaTagRegex = /<meta\s+id="og:url"\s+property="og:url"\s+content="([^"]+)"/;
const idRegex = /\/(\d+)\/home$/;

export default async function asynchandler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const result = await fetch(req.query.url as string);
  try {
    const data = await result.text();

    const match = data.match(metaTagRegex);
    const restrauntUrl = match && match[1];

    if (!restrauntUrl) {
      res.status(404);
      return;
    }

    const idMatch = restrauntUrl.match(idRegex);
    const id = idMatch && idMatch[1];

    if (!id) {
      res.status(404);
      return;
    }
    res.status(200).json({
      id,
    });
  } catch (e) {
    res.status(500);
  }
}
