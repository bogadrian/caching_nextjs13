import { NextRequest, NextResponse } from 'next/server.js';

const names = [
  'John',
  'Jane',
  'Jack',
  'Jill',
  'Kevin',
  'Kate',
  'Karl',
  'Smith',
  'Sandy',
  'Sally'
];

export async function GET(request: Request) {
  const name = names[Math.floor(Math.random() * names.length)];

  return NextResponse.json(name);
}
