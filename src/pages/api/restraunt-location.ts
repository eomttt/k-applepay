import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
  address: string;
  categories: string[];
  x: number;
  y: number;
};

// https://map.naver.com/v5/api/sites/summary/1086067689?lang=ko

export default async function asynchandler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const result = await fetch(`https://map.naver.com/v5/api/sites/summary/${req.query.id}?lang=ko`);
  try {
    const data = await result.json();
    res.status(200).json({
      ...data,
    });
  } catch (e) {
    res.status(500);
  }
}
