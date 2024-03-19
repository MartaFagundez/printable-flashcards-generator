![Printable Flashcards Generator screenshot](/public/assets/home-image.jpg)

# Printable Flashcards Generator

This is a React application designed to generate flashcards optimized for printing on both sides. Each flashcard contains a question on the front and its corresponding answer on the back.

## How Does It Work

### File Format

The data must be contained in a .json file with the following structure:

```json
[
    {
      "id": "string (optional, max length: 6)",
      "question": "string (required, max length: 120)",
      "answer": "string (required, max length: 250)",
      "category_name": "string (optional, max length: 25)",
      "qr_url": "string (optional, URL pointing to .jpg or .png image)"
    },
    ...
]
```

The file must contain at least 1 flashcard and can have a maximum of 120 flashcards.

#### Field definitions

- **id:** Optional. Unique identifier for the flashcard. Accepts string values with a maximum length of 6 characters.
- **question:** <mark>Required.</mark> The question for the flashcard. Accepts string values with a maximum length of 120 characters.
- **answer:** <mark>Required.</mark> The answer to the question. Accepts string values with a maximum length of 250 characters.
- **category_name:** Optional. Name of the category to which the flashcard belongs. Accepts string values with a maximum length of 25 characters.
- **qr_url:** Optional. URL pointing to a .jpg or .png image for a QR code.

### Print Settings

First you generate a pdf file and then print it.
In [this image](/public/assets/save_as_pdf_settings.png) you can see the configuration required to generate the pdf file correctly.

### Example Files

- [File to generate the flashcards](/public/assets/example.json) (.json)
- [File generated and ready to print](/public/assets/example.pdf) (.pdf)

## Development

### Setup

1. Clone this repository to your local machine.
2. Install dependencies by running:

   ```bash
   npm install
   ```

3. Start the development server by running:

   ```bash
   npm run dev
   ```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.
