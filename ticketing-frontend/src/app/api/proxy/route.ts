// app/api/proxy/route.ts
export async function GET() {
    const res = await fetch('https://ticketing.bujdi.xyz/api/boards');
    const data = await res.json();
  
    return Response.json(data);
}