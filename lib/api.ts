type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export const sendContactForm = async (data: ContactFormData) => {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to send message.");
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw new Error("Failed to send message.");
  }
};

