import OpenAI from "openai";

const openai = new OpenAI();

const messages = [
    {
      role: "user",
      content: `I want to travel to ${country}`,
    },
    {
      role: "bot",
      content: "Great! Could you tell me the dates of your trip? Please provide the start and end dates.",
    },
  ];
  
  const tools = [
    {
      type: "function",
      function: {
        name: "get_hotels_by_date_and_location",
        description: "Get a list of hotels sorted by offers, then price, for a given location and date range",
        parameters: {
          type: "object",
          properties: {
            location: {
              type: "string",
              description: "The city, e.g., Taipei, Taiwan",
            },
            startDate: {
              type: "string",
              description: "The start date of the trip, format: YYYY-MM-DD",
            },
            endDate: {
              type: "string",
              description: "The end date of the trip, format: YYYY-MM-DD",
            },
          },
          required: ["location", "startDate", "endDate"],
        },
      },
    },
  ];
  
  async function findHotels(messages) {
    const country = 
    const { startDate, endDate } =
  
    const hotelList = await tools[].function({
      location: country,
      startDate,
      endDate,
    });
  
    const sortedHotels = hotelList.sort().slice(0, 5);
 
    const hotelRecommendationsMsg = sortedHotels.map(hotel => ).join("\n");
  
    return hotelRecommendationsMsg;
  }
  
 
  async function main() {
    const userMessage = "I want to travel to Taiwan";
    const response = await findHotels(userMessage);
    console.log(response);
  }
  
  main();

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: messages,
    tools: tools,
    tool_choice: "auto",
  });

  console.log(response);

