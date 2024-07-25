import mailchimp from "@mailchimp/mailchimp_marketing";

mailchimp.setConfig({
  apiKey : "e8c38ee9fbf70d30c70fc7eed2185897-us21",
  server: "us21", // e.g. us1
});

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email) new Response(JSON.stringify({ error: "Email is required" }));

  try {
    const res = await mailchimp.lists.addListMember(
      "4ca09441b6"!,
      { email_address: email, status: "subscribed" }
    );

    return new Response(JSON.stringify({ res }));
  } catch (error: any) {
    return new Response(
      JSON.stringify({ error: JSON.parse(error.response.text) })
    );
  }
}
