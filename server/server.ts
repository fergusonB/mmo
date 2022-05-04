//@ts-ignore
import { serve } from "https://deno.land/std@0.137.0/http/server.ts";

const port = 8080;


let character = {
  name:"sneaky",
  health: 30,
  mana: 30,
  status: "alive",
  woodcutting:1,
  fishing:1,
}

const handler = (request: Request): Response => {
  
  if (request.url.includes('/character')) {
    return new Response(JSON.stringify(character),{status:200, headers: {'Access-Control-Allow-Origin': '*'}}); //TODO, access control
  }
  else{
    const body = `Your user-agent is:\n\n${
      request.headers.get("user-agent") ?? "Unknown"
    }`;
    return new Response(body, { status: 200 });
  }



};



console.log(`HTTP webserver running. Access it at: http://localhost:8080/`);
await serve(handler, { port });