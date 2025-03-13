# Chrome Extension with Side Panel

This Chrome extension includes a side panel that allows users to input the OpenAI API URL, token, and element description. The submit button sends a request to the OpenAI API to find an XPath locator.

## Features

- **Side Panel**:
  - OpenAI API URL input.
  - Token input.
  - Element description input.
  - Submit button to send a request to the OpenAI API.

## Installation

1. Clone the repository to your local machine.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" at the top right.
4. Click "Load unpacked" and select the directory where you cloned the repository.

## Usage

1. Once the extension is installed, click on the extension icon in the toolbar.
2. The side panel will appear with input fields for the OpenAI API URL, token, and element description.
3. Enter the required information. OpenAi Api url must be like http://localhost:5000/v1/chat/completions
4. Click the submit button to send a request to the OpenAI API.

## Important
Many websites need context length more than 150K
