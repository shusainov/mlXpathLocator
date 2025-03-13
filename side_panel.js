document.getElementById('submitButton').addEventListener('click', () => {
    const apiUrl = document.getElementById('apiUrl').value;
    const token = document.getElementById('token').value;
    const question = document.getElementById('question').value;


    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const activeTab = tabs[0];
        chrome.scripting.executeScript({
            target: { tabId: activeTab.id },
            func: () => {
                return encodeURI(document.body.innerHTML);
            }
        }, (json) => {
            const dom = decodeURI(json[0].result)

            chrome.runtime.sendMessage({
                action: "submitQuestion",
                apiUrl: apiUrl,
                token: token,
                question: question,
                dom:dom
            }, (response) => {
                if (response.error) {
                    document.getElementById('response').innerText = `Error: ${response.error}`;
                } else {
                    document.getElementById('response').innerText = `Response: ${response.result}`;
                }
            });

        });
    });
});