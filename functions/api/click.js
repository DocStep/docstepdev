export async function onRequest(context) {
  let count = await context.env.CLICKS.get("count");
  count = count ? parseInt(count) + 1 : 1;
  await context.env.CLICKS.put("count", count.toString());
  return new Response(JSON.stringify({ count }), { headers: {"Content-Type":"application/json"} });
}
