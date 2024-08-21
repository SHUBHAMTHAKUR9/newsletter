// Import the Mailchimp Marketing API client package
import mailchimp from "@mailchimp/mailchimp_marketing";

// Set up the Mailchimp configuration with the API key and server prefix
mailchimp.setConfig({
  apiKey: "e8c38ee9fbf70d30c70fc7eed2185897-us21", 
  server: "us21", 
});

// Define an async function to handle POST requests
export async function POST(request: Request) {
  // Extract the email from the request body
  const { email } = await request.json();

  // If the email is not provided, return an error response
  if (!email) new Response(JSON.stringify({ error: "Email is required" }));

  try {
    // Attempt to add the email to a specific Mailchimp audience (list)
    const res = await mailchimp.lists.addListMember(
      "4ca09441b6", // The ID of the Mailchimp list (audience) you want to add the email to
      { email_address: email, status: "subscribed" } // The email and subscription status
    );

    return new Response(JSON.stringify({ res }));
  } catch (error: any) {
    return new Response(
      JSON.stringify({ error: JSON.parse(error.response.text) })
    );
  }
}
