const qna = [];
async function getResponseFromLLM() {
  try {
    const inputRef = document.querySelector("input.userQuery");
    const query = inputRef.value;
    const container = document.querySelector(".llm");
    console.log(query);

    const apiBody = {
      contents: [
        {
          parts: [
            {
              text: `You are expert developer,who response only programming related queries and advices,also excuses to other query`,
            },
            {
              text: `User Query: ${query}`,
            },
          ],
        },
      ],
    };

    const res = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyBA2fV5XVpj2hNoflwN1V2kj4STlM9x8Es",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(apiBody),
      }
    );

    const data = await res.json();
    const responseText = data["candidates"][0].content["parts"][0].text;

    const newDiv = document.createElement("div");
    newDiv.innerHTML = `
    <p>${responseText}</p>
    `;
    container.appendChild(newDiv);

    // Pushing to QNA Array
    qna.push({
      Question: query,
      LLMResponse: responseText,
    });

    document.documentElement.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  } catch (err) {
    console.log(err);
    alert("Error while generating response");
  }
}
