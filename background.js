chrome.sidePanel
    .setPanelBehavior({ openPanelOnActionClick: true })
    .catch((error) => console.error(error));


chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "submitQuestion") {
        const apiUrl = request.apiUrl;
        const token = request.token;
        const description = request.question;
        const dom = request.dom;

        const prompt = `
        Extract the XPath of the '${description}' from the provided HTML
        \`\`\`HTML
        ${dom}
        \`\`\`
        IMPORTANT response only Xpath
        `
        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                model: "custom",
                messages: [{
                    role: "system",
                    content: "You are a helpful assistant."
                },
                {
                    role: "user",
                    content: prompt
                }]
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                sendResponse({ result: data.choices[0].message.content });
            })
            .catch(error => {
                sendResponse({ error: error.message });
            });

        return true; // Indicates that the response will be sent asynchronously
    }
});