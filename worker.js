export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/click") {
      let count = await env.CLICKS.get("count");
      count = count ? parseInt(count) + 1 : 1;
      await env.CLICKS.put("count", count.toString());
      return new Response(JSON.stringify({ count }), { headers: { "Content-Type": "application/json" } });
    }

    return new Response("Not found", { status: 404 });
  }
};
