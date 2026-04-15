/**
 * Utility to handle form submissions to Make.com webhook
 */

const MAKE_WEBHOOK_URL = "https://hook.eu1.make.com/e1jd0u3pliei9vs88sh075loyyvj5hn2";

interface SubmissionData {
  name: string;
  phone: string;
  acceptPolicy: boolean;
  pageUrl: string;
  formId?: string;
}

export async function submitToMake(data: SubmissionData) {
  try {
    const response = await fetch(MAKE_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
        timestamp: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    return { success: true };
  } catch (error) {
    console.error("Form submission error:", error);
    return { success: false, error };
  }
}
